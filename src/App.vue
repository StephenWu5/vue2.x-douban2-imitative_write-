<template>
    <div>
      <vue-header></vue-header>
      <router-view></router-view>
    </div>
</template>

<script>
    import vueHeader from './components/vueHeader'
    import vueBody from './components/movie_index'

    export default {
        name: "app",
        components:{
          vueHeader,
          vueBody
        },
        data:function () {
          return{

          }
        },
        methods: {

        },

    }
</script>

<style scoped>

</style>
