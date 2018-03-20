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
