import axios from 'axios'

const Host = "http://127.0.0.1:8008";

export function fecth(url){
  return  new Promise((resolve, reject) => {
    axios.get(Host + url)
      .then(response => {
      resolve(response.data);
  })
  })
}

export  function fecthByUrl(url) {
  return fecth(`${url}`);
}
export function fecthByType(type,start=0,count=20){
  return fecthByUrl(`/movie/${type}?start=${start}&count=${count}`)
}

export function searchByKeywords(type,q=0,start=0){
  return fecthByUrl(`/movie/${type}?q=${q}&start=${start}`)
}


export function fecthMovieDetailsByUrl(type){
  return fecthByUrl(`/movie/${type}`)
}

export function getActorData(that){
  var casts = '';
  var length = that.movieDetails.casts.length - 1;
  that.movieDetails.casts.forEach(function(item,index){
    if(index === length){
      casts += item.name;
    }else{
      casts += item.name + ' / ';
    }
  })
  that.actorData =  that.movieDetails.countries.join(' / ')+ ' / ' +that.movieDetails.genres.join(' / ')+ ' / ' +
  that.movieDetails.directors[0].name + '(导演) / ' + casts;
}
