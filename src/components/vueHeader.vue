<template>
      <div>
          <div class="headerStyle"><a href="" @click="click">电影</a></div>
          <div class="searchStyle">
            <input type="search" placeholder="请输入搜索的内容" v-model="movie_name" >
            <span class="search" @click="search"></span>
          </div>
      </div>
</template>

<script>
    import eventVue from '../store/eventVue'
    import {searchByKeywords} from '../store/api'
    export default {
        name: "vue-header",
        data(){
          return{
            movie_name:'',
            movie_list:[],
            movie_title:""
          }
        },
        methods:{
          click:function (e) {
            e.preventDefault();
            this.$router.push({ path: '/'});
          },

          search(){
            var key = this.movie_name;
            if(this.$route.path!='/search'){
              this.$router.push({ path: '/search',query: { type:"search",keywords:key}});
            }else{
              searchByKeywords('search',key,20).then(response=>{
                eventVue.$emit("myFun",response);  //$emit这个方法会触发一个事件
              })
            }
            this.movie_name="";
            // searchByKeywords("search").then(response=>{
            //   this.movieList = response.subjects;
            //   this.movie_title = response.title;
            // })
          }
        }
    }
</script>

<style scoped>
.headerStyle{
  width: 100%;
  height: 45px;
  background-color: #FFFFFF;
  line-height: 45px;
  padding-left:20px;
  position:fixed;
  z-index:100;
}

.headerStyle a{
  text-decoration: none;
  color:#2384E8;
}

.searchStyle{
 padding-top:45px;
  position: relative;
}

.searchStyle input[type='search']{
  height: 35px;
  line-height: 35px;
  width: 100%;
  border:none;
  background-color: #F5F5F5;
  padding-left:5px;
  outline:none;
}

.searchStyle .search{
  width: 13px;
  height: 13px;
  position: absolute;
  background: url("../assets/search-btn.png") ;
  right:10px;
  bottom: 10px;
}
</style>
