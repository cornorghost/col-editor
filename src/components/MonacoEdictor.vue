<template>
  <div ref="container" id="monaco-editor"></div>
</template>

<script>
import * as monaco from "monaco-editor";

export default {
  props: {
    opts: {
      type: Object,
      default() {
        return {};
      },
    },
  },
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
      // 编辑器对象
      monacoEditor: {},
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
    },
    //改变主题
    setTheme(val) {
      monaco.editor.setTheme(val);
    },
    //改变语言
    setLanguage(val) {
      monaco.editor.setModelLanguage(this.monacoEditor.getModel(), val);
    },
  },
};
</script>
