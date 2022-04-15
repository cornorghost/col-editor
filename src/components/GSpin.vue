<template>
  <n-modal
    :mask-closable="true"
    :show="this.$store.state.readyState != 1"
    :close-on-esc="true"
  >
    <n-spin size="large">
      <template #description> <h1>正在连接</h1></template>
    </n-spin>
  </n-modal>
</template>

<script>
export default {};
</script>
