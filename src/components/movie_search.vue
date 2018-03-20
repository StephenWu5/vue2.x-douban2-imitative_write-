<template>
  <div>
    <div class="container">
      <div class="titleStyle">
        <h2>{{movie_title}}</h2>
      </div>
      <div class="movieStyle">
        <ul class="movieListStyle">
          <li class="movieCardStyle" v-for="(item,index) in movieList" :key="index">
            <img :src="item.images.large" alt="">
            <span>{{item.title}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  import eventVue from '../store/eventVue'
  import {searchByKeywords} from '../store/api'

  export default {
    name: "movie_more",
    data(){
      return {
        type:'',
        movie_name:'',
        movieList:[],
        movie_title:'',
      }
    },
    methods:{
      getType(){
        this.type = this.$route.query.type;
        this.movie_name = this.$route.query.keywords;
      },
      eventOn(){
        eventVue.$on("myFun",(response)=>{   //这里最好用箭头函数，不然this指向有问题
          this.movieList = response.subjects;
          this.movie_title = response.title;
        })
      },
      getMovieList(){
        console.log("000", "1111");
        var movie_name = this.movie_name;
        console.log(movie_name, "1111movie_name");
        searchByKeywords(this.type,movie_name,0).then(response=>{
          this.movieList = response.subjects;
          this.movie_title = response.title;
        });
      }
    },
    created(){
      this.getType();
      this.getMovieList();
    },
    mounted(){
      this.eventOn();
    }
  }
</script>

<style scoped>
  .container{
    color:#EEEEEE;
  }

  .container .titleStyle{
    height: 50px;
    line-height: 50px;
    position: relative;
  }

  .container .titleStyle h2{
    color:#8E8E8E;
    margin:0px;
    font-size:12px;
    padding-left:30px;
  }

  .container .titleStyle  span{
    position: absolute;
    right: 20px;
    bottom: 0px;
    color:#999999;
    font-size: 12px;
  }

  .movieStyle{
    padding: 0 15px 0 15px;
    border-radius: 10px;
  }

  .movieStyle ul.movieListStyle{
    padding:15px;
    background-color: white;
    overflow: hidden;
  }


  .movieStyle .movieListStyle li.movieCardStyle{
    float:left;
    width: 87px;
    text-align: center;
    height: 150px;
    margin-right:20px;
    margin-top:20px;
    position: relative;
  }
  .movieStyle .movieListStyle li.movieCardStyle:nth-child(3n+3) {
    margin-right:0px;
  }

  .movieStyle .movieListStyle .movieCardStyle  img{
    width: 87px;
    height: 125px;
  }
  .movieStyle .movieListStyle .movieCardStyle  span{
    display: block;
    width: 60px;
    color:black;
    font-size: 12px;
    position: absolute;
    bottom: 0px;
    left:20%;
    text-overflow:ellipsis;
    white-space:nowrap;
    overflow:hidden;
  }

</style>
