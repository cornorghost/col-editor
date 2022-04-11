<template>
  <div
    ref="container"
    class="monaco-editor"
    :style="`height: ${height}px`"
  ></div>
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
    height: {
      type: String,
      default: "100%",
    },
    isDiff: {
      type: Boolean,
      default: false,
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
  },
};
</script>
