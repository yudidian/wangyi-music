<template>
  <div class="container">
    <Banner :banners="banners"></Banner>
  </div>
</template>

<script>
import { getBanner } from '@/axios/api'
import Banner from '@/components/Banner/Banner'

export default {
  name: 'Recommend',
  data () {
    return {
      banners: []
    }
  },
  components: {
    Banner
  },
  created () {
    this.getBanners()
  },
  methods: {
    async getBanners () {
      const req = await getBanner()
      this.banners = req.banners
      console.log(req)
    }
  }
}
</script>

<style scoped>

</style>
