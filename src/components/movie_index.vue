<template>
      <div>
        <div class="container">
          <div class="titleStyle">
            <h2>{{movie_title}}</h2> <span @click="more(in_theaters)" data-type="in_theaters">更多></span>
          </div>
          <div class="movieStyle">
            <ul class="movieListStyle">
              <router-link class="movieCardStyle" v-for="(item,index) in movieList" :key="index" :to="{ path: '/details', query: { plan: item.alt }}">
                <img :src="item.images.large" alt="">
                <span>{{item.title}}</span>
              </router-link>
            </ul>
          </div>
        </div>

        <div class="container">
          <div class="titleStyle">
            <h2>{{movie_title2}}</h2><span @click="more(coming_soon)" >更多></span>
          </div>
          <div class="movieStyle">
            <ul class="movieListStyle">
              <router-link class="movieCardStyle" v-for="(item,index) in movieList2" :key="index" :to="{ path: '/details', query: { plan: item.alt }}">
                <img :src="item.images.large" alt="">
                <span>{{item.title}}</span>
              </router-link>
            </ul>
          </div>
        </div>
      </div>

</template>

<script>
    import {fecthByType} from '../store/api'

    export default {
        name: "vue-body",
        data(){
            return {
              in_theaters:"in_theaters",
              coming_soon:"coming_soon",
              movieList:[],
              movieList2:[],
              movie_title:'',
              movie_title2:''
            }
        },
        methods:{
          more(str){
            // var type = that.getAttribute("data-type");
            this.$router.push({ path: '/more',query: { type:str }});
          },
          getMovieList(){
            fecthByType("in_theaters",0,9).then(response=>{
              this.movieList = response.subjects;
              this.movie_title = response.title;
            });

            fecthByType("coming_soon",0,9).then(response=>{
              this.movieList2 = response.subjects;
              this.movie_title2 = response.title;
            });
          }
        },
        created(){
          this.getMovieList();
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


.movieStyle .movieListStyle .movieCardStyle{
  float:left;
  width: 87px;
  text-align: center;
  height: 150px;
  margin-right:20px;
  margin-top:20px;
  position: relative;
}
.movieStyle .movieListStyle .movieCardStyle:nth-child(3n+3) {
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
