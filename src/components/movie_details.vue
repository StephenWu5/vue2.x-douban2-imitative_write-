<template>
  <div>
      <div class="container">
        <div class="titleStyle">
          {{movieDetails.title}}
        </div>
        <img :src="movieDetails.images.small" alt="">
      </div>
  </div>
</template>

<style scoped>

</style>

<script>
    import {fecthMovieDetailsByUrl} from '../store/api'

    export default {
      name: "movie_details",
      data(){
          return{
            urlData:"",
            movieDetails:{

            }
          }
      },
      methods:{
        getUrlData(){
          console.log(this.$route, "1111router");
          this.urlData = this.$route.query.plan;

        }
      },
      created(){
        this.getUrlData();
        this.urlData = this.urlData.slice(this.urlData.indexOf('subject/'));
        this.urlData = this.urlData.substr(0, this.urlData.length - 1);
        fecthMovieDetailsByUrl(this.urlData).then(response=>{
          this.movieDetails = response;
          console.log(this.movieDetails, "1111");
        });


      }
    }
</script>


