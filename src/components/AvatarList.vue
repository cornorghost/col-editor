<template>
  <n-avatar-group :options="options" :size="40" :max="100" />
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          name: "张三",
          src: "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",
          size: "small",
          color: "#63E2B7FF",
        },
        {
          name: "李四",
          src: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
          size: "small",
          color: "#63E2B7FF",
        },
        {
          name: "王五",
          src: "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",
          size: "small",
          color: "#63E2B7FF",
        },
        {
          name: "赵六",
          src: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
          size: "small",
          color: "#63E2B7FF",
        },
        {
          name: "七仔",
          src: "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",
          size: "small",
          color: "#63E2B7FF",
        },
      ],
    };
  },

  methods: {
    add() {
      let newop = [
        {
          name: "张1三",
          src: "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",
          size: "small",
          color: "#63E2B7FF",
        },
        {
          name: "李2四",
          src: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
          size: "small",
          color: "#63E2B7FF",
        },
        {
          name: "王3五",
          src: "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",
          size: "small",
          color: "#63E2B7FF",
        },
        {
          name: "赵4六",
          src: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
          size: "small",
          color: "#63E2B7FF",
        },
        {
          name: "七5仔",
          src: "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",
          size: "small",
          color: "#63E2B7FF",
        },
      ];
      this.options = this.options.concat(newop);
      console.log(this.options);
    },
  },
};
</script>
