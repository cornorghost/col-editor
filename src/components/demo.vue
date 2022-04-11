/* eslint-disable prettier/prettier */
<template>
  <n-button>naive-ui</n-button>

  <n-select
    v-model:value="value"
    :options="options"
    size="small"
    style="width: 20%"
  />
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      value: ref(null),
      options: [
        {
          label: "Everybody's Got Something to Hide Except Me and My Monkey",
          value: "song0",
          disabled: true,
        },
        {
          label: "Drive My Car",
          value: "song1",
        },
        {
          label: "Norwegian Wood",
          value: "song2",
        },
        {
          label: "You Won't See",
          value: "song3",
          disabled: true,
        },
        {
          label: "Nowhere Man",
          value: "song4",
        },
        {
          label: "Think For Yourself",
          value: "song5",
        },
        {
          label: "The Word",
          value: "song6",
        },
        {
          label: "Michelle",
          value: "song7",
          disabled: true,
        },
        {
          label: "What goes on",
          value: "song8",
        },
        {
          label: "Girl",
          value: "song9",
        },
        {
          label: "I'm looking through you",
          value: "song10",
        },
        {
          label: "In My Life",
          value: "song11",
        },
        {
          label: "Wait",
          value: "song12",
        },
      ],
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
    };
  },
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
}
</style>
