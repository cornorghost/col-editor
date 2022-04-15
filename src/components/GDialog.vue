<template>
  <div></div>
</template>

<script>
import { useDialog, useMessage } from "naive-ui";

export default {
  created() {
    // this.ifShowOpenDialog=true;
  },
  mounted() {
    // console.log("ok!!!!!!!!!!");
    this.init();
  },
  data() {
    return {
      dialog: {},
      message: {},
    };
  },

  methods: {
    init() {
      this.dialog = useDialog();
      this.message = useMessage();
      this.$store.commit("setGlobalDialog", this); //定义成全局变量
    },
    handleConfirm() {
      this.dialog.warning({
        title: "警告",
        content: "你确定？",
        positiveText: "确定",
        negativeText: "不确定",
        onPositiveClick: () => {
          this.message.success("确定");
        },
        onNegativeClick: () => {
          this.message.error("不确定");
        },
      });
    },
    handleSuccess() {
      this.dialog.success({
        title: "成功",
        content: "厉害",
        positiveText: "哇",
        onPositiveClick: () => {
          this.message.success("耶！");
        },
      });
    },
    handleError() {
      this.dialog.error({
        title: "错误",
        content: "错了",
        positiveText: "啊",
        onPositiveClick: () => {
          this.message.success("我就知道");
        },
      });
    },
  },
};
</script>
