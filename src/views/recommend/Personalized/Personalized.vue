<template>
  <div class="Personalized">
    <div class="title"></div>
  </div>
</template>

<script>
export default {
  name: 'Personalized',
  props: {
    title: {
      type: String,
      default: () => '',
      required: true
    },
    list: {
      type: Array,
      default: () => [],
      required: true
    }
  }
}
</script>

<style scoped>

</style>
