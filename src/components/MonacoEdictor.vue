<template>
  <div ref="container" id="monaco-editor"></div>
</template>

<script>
import * as monaco from "monaco-editor";
import { Base64 } from "js-base64";
import { toRaw } from "vue";
import { ref } from "vue";

export default {
  props: {
    opts: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  created() {},
  mounted() {
    this.init();
  },
  data() {
    return {
      // 主要配置
      defaultOpts: {
        value: "", // 编辑器的值
        theme: "vs-dark", // 编辑器主题：vs, hc-black, or vs-dark，更多选择详见官网
        roundedSelection: true, // 右侧不显示编辑器预览框
        autoIndent: true, // 自动缩进
        automaticLayout: true, //自适应layout
        minimap: {
          enable: true,
        },
      },

      monacoEditor: {}, // 编辑器对象

      compositonState: ref("end"), //这是在中文输入法下解决没打完字就触发change事件
    };
  },

  methods: {
    init() {
      // 初始化container的内容，销毁之前生成的编辑器
      this.$refs.container.innerHTML = "";
      // 生成编辑器配置
      let editorOptions = Object.assign(this.defaultOpts, this.opts);
      // 初始化编辑器实例
      this.monacoEditor = monaco.editor.create(
        this.$refs.container,
        editorOptions
      );
      this.$store.commit("setGlobalMonaco", this.monacoEditor); //定义成全局变量
    },
    //改变主题
    setTheme(val) {
      // monaco.editor.setTheme(val);
      toRaw(this.monacoEditor).updateOptions({
        theme: val,
      });
    },
    //改变语言
    setLanguage(val) {
      monaco.editor.setModelLanguage(this.monacoEditor.getModel(), val);
    },
    //定义绑定某些方法
    bind() {
      this.monacoEditor.getModel().onDidChangeContent((event) => {
        if (this.compositonState == "sta") return;
        var changes = event.changes[0];
        //添加新的键值
        console.log(this.$store.state.g_ws.global_id);
        changes["uid"] = this.$store.state.g_ws.global_id;
        changes["mes_type"] = 1;
        changes["body"] = [];
        for (var i = 1; i <= this.monacoEditor.getModel().getLineCount(); i++) {
          changes["body"].push(
            Base64.encode(toRaw(this.monacoEditor).getModel().getLineContent(i))
          );
        }
        // console.log(toRaw(this.monacoEditor).getValue());
        console.log(this.$store.state.modify);
        if (this.$store.state.modify) {
          // console.log(JSON.stringify(changes));
          this.$store.state.g_ws.ws.send(JSON.stringify(changes));
        }
      });

      //***************************
      //以下三个方法是为了解决中文输入法打字时也会触发change事件，为了避免无效发送，通过composition事件监听中文输入法，
      //这里keyDown存在的意义是onDidCompositionEnd在change事件之后，导致change事件无效，而keyDown在change之前，所以监听空格
      //***************************

      //中文输入法开始
      this.monacoEditor.onDidCompositionStart((event) => {
        // console.log("comstart");
        this.compositonState = "sta";
      });
      //中文输入法结束
      this.monacoEditor.onDidCompositionEnd((event) => {
        // console.log("comend");
        this.compositonState = "end";
      });
      //中文输入法下等待空格
      this.monacoEditor.onKeyDown((event) => {
        // console.log(event);
        if (this.compositonState == "sta" && event.code == "Space") {
          console.log("触发");
          this.compositonState = "end";
        }
      });
    },
  },
};
</script>
