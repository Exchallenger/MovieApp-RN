import axios from "axios";


const getData = async(path,kind,query='') =>{
    const TMDB_KEY = "4f98d431d636a7962fcef6b6f5a35256";
    const datas = await axios.get(`https://api.themoviedb.org/3/${path}/${kind}?api_key=${TMDB_KEY}`);
    return datas.data.results;
} 


    //backdrop_path title
    //poster_path vote_average
    //overview id
    //adult
    //
    //



export const mymovie = {
    nowPlaying: () => getData('movie','now_playing'),
    popular: () => getData('movie','popular'),
    upcoming: () => getData('movie','upcoming'),
    search: query => getData('movie','search'),
    movie: id => getData('movie',id),
    discover: () => getData('movie','discover')

}

export const apiImage = (path) => `https://image.tmdb.org/t/p/w500${path}`;