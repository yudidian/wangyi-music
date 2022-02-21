<template>
  <div id="app">
    <Header></Header>
    <Taber></Taber>
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view></router-view>
    </keep-alive>
    <router-view v-else></router-view>
  </div>
</template>

<script>
import Header from './components/header'
import Taber from '@/components/Taber/Taber'

export default {
  name: 'App',
  components: {
    Header,
    Taber
  },
  methods: {}
}
</script>
<style lang="scss">

</style>
