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

    <!--//定义全局的加载条-->
    <n-config-provider :theme="darkTheme">
      <n-message-provider
        ><n-dialog-provider><spinCol ref="gspin"></spinCol> </n-dialog-provider>
      </n-message-provider>
    </n-config-provider>

    <!--//定义全局的消息框-->
    <webSocket ref="websock"></webSocket>

    <!--//全局配置栏-->
    <div id="header">
      <div class="selectOpt">
        <span style="width: 20%; color: rgba(255, 255, 255, 0.8)">主 题</span>
        <n-select
          :options="themeOptions"
          :placeholder="opts.theme"
          size="small"
          style="width: 80%"
          @update:value="changeTheme"
        />
      </div>

      <div class="selectOpt">
        <div style="width: 20%; color: rgba(255, 255, 255, 0.8)">语 言</div>
        <n-select
          :options="languageOptions"
          :placeholder="opts.language"
          size="small"
          style="width: 80%"
          @update:value="changeLanguage"
        />
      </div>
    </div>

    <!--//编辑器部分-->
    <div id="monaco-out-container">
      <monaco ref="monaco" :opts="opts"></monaco>
    </div>

    <!-- <n-button @click="test">ceshi</n-button>> -->
    <!--//底部显示共同编辑人员-->
    <avatarList ref="avatars" id="avatarList"></avatarList>
  </div>
</template>

<script>
import webSocket from "./components/WebSocket";
import monaco from "./components/MonacoEdictor";
import dialogCol from "./components/GDialog";
import spinCol from "./components/GSpin";
import avatarList from "./components/AvatarList";
import { darkTheme } from "naive-ui";

export default {
  components: { monaco, dialogCol, avatarList, webSocket, spinCol },

  mounted() {
    this.init();
    // this.$refs.gdialog.handleSuccess(); //打开成功消息提示
    this.$refs.monaco.bind();
    this.$refs.websock.bind();
    this.$refs.websock.beginPing();
  },
  created() {},
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
      darkTheme, //暗黑猪头
      monaocoIns: {}, //编辑器对象
      // ws: {}, //websocket对象
    };
  },

  methods: {
    //一些初始化工作
    init() {
      this.monaocoIns = this.$refs.monaco.monacoEditor;
      // this.ws=this.$refs.monaco.monacoEditor;
    },
    //改变主题
    changeTheme(val) {
      this.$refs.monaco.setTheme(val);
    },
    //改变主题
    changeLanguage(val) {
      this.$refs.monaco.setLanguage(val);
    },
    //新用户上线添加显示
    addNewCoder() {
      this.$refs.avatars.add();
    },
    test() {
      this.$refs.websock.reConnect();
    },
  },
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(44, 44, 50, 1);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

#header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 0.5%;
  margin-bottom: 1%;
  min-height: 2%;
}

.selectOpt {
  width: 20%;
  display: flex;
  flex-direction: row;
  margin: 0px 5% 0.5% 5%;
  text-align: left;
}

#monaco-editor {
  text-align: left;
  width: 100%;
  height: 100%;
}
#monaco-out-container {
  width: 100%;
  height: 100%;
  min-height: 50%;
  max-height: 100%;
}

#avatarList {
  display: flex;
  margin-top: 1%;
  margin-bottom: 0.5%;
  min-height: 4%;
}
</style>
