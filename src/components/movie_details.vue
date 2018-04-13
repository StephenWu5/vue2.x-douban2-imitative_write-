<template>
  <div>
      <div class="container">
        <div class="titleStyle">
          {{movieDetails.title}}
        </div>
        <img :src="movieDetails.images.medium" alt="">

        <div class="actorStyle">
            <section>
              {{actorData}}
            </section>
        </div>

        <div class="statisticsStyle">
            <div class="wish_count">
               想看({{movieDetails.wish_count}})
            </div>
            <div class="watchedStyle">
               看过
            </div>
        </div>

        <div class="introduceStyle">
            <h4>头号玩家的剧情介绍</h4>
            <div class="content">
                {{movieDetails.summary}}
            </div>
        </div>

      </div>
  </div>
</template>

<style scoped>
      .container {
          padding: 5px 10px 0px;
      }
      .container .titleStyle{
          padding-bottom: 5px;
      }
      .container img{
          width:100%;
      }
      .container .actorStyle{
        padding-top: 10px;
        height: 80px;
      }
      .container .actorStyle section{
          height:100%;
          line-height: 150%;

      }
      .statisticsStyle{
        overflow: hidden;
      }
      .statisticsStyle div{
        height: 30px;
        width: 45%;
        float: left;
        text-align: center;
        line-height: 30px;
        border:1px solid #FFB712;
        color:#FFB712;
        font-size: 16px;
      }
      .statisticsStyle div:nth-child(2){
        float:right;
      }
      .introduceStyle h4{
        font-weight: 400;
        font-size: 14px;
        color: #AAAABD;
      }
      .introduceStyle .content{
        color:#494949;
        font-size: 14px;
        line-height: 21px;
      }
</style>

<script>
    import {fecthMovieDetailsByUrl,getActorData} from '../store/api'

    export default {
      name: "movie_details",
      data(){
          return{
            urlData:"",
            movieDetails:{
              images:{
                medium:""
              },
              countries:[],
            },
            actorData:''
          }
      },
      methods:{
        getUrlData(){
          this.urlData = this.$route.query.plan;
          this.urlData = this.urlData.slice(this.urlData.indexOf('subject/'));
          this.urlData = this.urlData.substr(0, this.urlData.length - 1);
        }
      },
      created(){
        this.getUrlData();

        fecthMovieDetailsByUrl(this.urlData).then(response=>{
          this.movieDetails = response;
          console.log(this.movieDetails, "1111");
        });
      },
      updated(){
        getActorData(this);
      }
    }
</script>
