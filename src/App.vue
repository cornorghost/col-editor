/* eslint-disable prettier/prettier */
<template>
  <div id="app">
    <!--//定义全局的消息框-->
    <n-config-provider :theme="darkTheme">
      <n-message-provider
        ><n-dialog-provider
          ><dialogCol ref="gdialog"></dialogCol>
        </n-dialog-provider>
      </n-message-provider>
    </n-config-provider>
    <!--//配置修改-->
    <div class="header">
      <div class="selectOpt">
        <span style="width: 20%">主 题</span>
        <n-select
          :options="themeOptions"
          :placeholder="opts.theme"
          size="small"
          style="width: 80%"
        />
      </div>

      <div class="selectOpt">
        <div style="width: 20%">语 言</div>
        <n-select
          :options="languageOptions"
          :placeholder="opts.language"
          size="small"
          style="width: 80%"
        />
      </div>
    </div>
    <!--//编辑器部分-->
    <monaco ref="monaco" :opts="opts" :height="'600'"></monaco>
  </div>
</template>

<script>
import monaco from "./components/MonacoEdictor";
import dialogCol from "./components/GDialog";
import { darkTheme } from "naive-ui";

export default {
  components: { monaco, dialogCol },

  mounted() {
    // this.ifShowOpenDialog=true;
    this.$refs.gdialog.handleSuccess(); //打开成功消息提示
  },
  created() {
    // this.ifShowOpenDialog=true;
  },
  data() {
    return {
      themeOptions: [
        {
          label: "vs",
          value: "vs",
        },
        {
          label: "vs-dark",
          value: "vs-dark",
        },
        {
          label: "hc-black",
          value: "hc-black",
        },
      ],
      languageOptions: [
        {
          label: "apex",
          value: "apex",
        },
        {
          label: "azcli",
          value: "azcli",
        },
        {
          label: "bat",
          value: "bat",
        },
        {
          label: "c",
          value: "c",
        },
        {
          label: "clojure",
          value: "clojure",
        },
        {
          label: "coffeescript",
          value: "coffeescript",
        },
        {
          label: "cpp",
          value: "cpp",
        },
        {
          label: "csharp",
          value: "csharp",
        },
        {
          label: "csp",
          value: "csp",
        },
        {
          label: "css",
          value: "css",
        },
        {
          label: "dockerfile",
          value: "dockerfile",
        },
        {
          label: "fsharp",
          value: "fsharp",
        },
        {
          label: "go",
          value: "go",
        },
        {
          label: "graphql",
          value: "graphql",
        },
        {
          label: "handlebars",
          value: "handlebars",
        },
        {
          label: "html",
          value: "html",
        },
        {
          label: "ini",
          value: "ini",
        },
        {
          label: "java",
          value: "java",
        },
        {
          label: "javascript",
          value: "javascript",
        },
        {
          label: "json",
          value: "json",
        },
        {
          label: "kotlin",
          value: "kotlin",
        },
        {
          label: "less",
          value: "less",
        },
        {
          label: "lua",
          value: "lua",
        },
        {
          label: "markdown",
          value: "markdown",
        },
        {
          label: "msdax",
          value: "msdax",
        },
        {
          label: "mysql",
          value: "mysql",
        },
        {
          label: "objective-c",
          value: "objective-c",
        },
        {
          label: "pascal",
          value: "pascal",
        },
        {
          label: "perl",
          value: "perl",
        },
        {
          label: "pgsql",
          value: "pgsql",
        },
        {
          label: "php",
          value: "php",
        },
        {
          label: "plaintext",
          value: "plaintext",
        },
        {
          label: "postiats",
          value: "postiats",
        },
        {
          label: "powerquery",
          value: "powerquery",
        },
        {
          label: "powershell",
          value: "powershell",
        },
        {
          label: "pug",
          value: "pug",
        },
        {
          label: "python",
          value: "python",
        },
        {
          label: "r",
          value: "r",
        },
        {
          label: "razor",
          value: "razor",
        },
        {
          label: "redis",
          value: "redis",
        },
        {
          label: "redshift",
          value: "redshift",
        },
        {
          label: "ruby",
          value: "ruby",
        },
        {
          label: "rust",
          value: "rust",
        },
        {
          label: "sb",
          value: "sb",
        },
        {
          label: "scheme",
          value: "scheme",
        },
        {
          label: "scss",
          value: "scss",
        },
        {
          label: "shell",
          value: "shell",
        },
        {
          label: "sol",
          value: "sol",
        },
        {
          label: "st",
          value: "st",
        },
        {
          label: "swift",
          value: "swift",
        },
        {
          label: "tcl",
          value: "tcl",
        },
        {
          label: "vb",
          value: "vb",
        },
        {
          label: "xml",
          value: "xml",
        },
        {
          label: "yaml",
          value: "ysml",
        },
      ],

      opts: {
        value: "",
        readOnly: false, // 是否可编辑
        language: "cpp", // 语言类型
        theme: "vs-dark", // 编辑器主题
      },
      darkTheme,
    };
  },

  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 0.5%;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.selectOpt {
  width: 20%;
  display: flex;
  flex-direction: row;
  margin: 0px 5% 0.5% 5%;
}

.monaco-editor {
  text-align: left;
}
</style>
