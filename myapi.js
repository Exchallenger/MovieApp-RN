import axios from "axios";


const getData = async(path,kind,query='') => {
    const TMDB_KEY = "4f98d431d636a7962fcef6b6f5a35256";
    const datas = await axios.get(`https://api.themoviedb.org/3/${path}/${kind}?api_key=${TMDB_KEY}${query ? "&query=" : '' }${query? query:''}`);
    return datas.data.results;
};

//api.themoviedb.org/3/search/movie?api_key=1231231&query=kimchi/

export const mymovie = {
    nowPlaying: () => getData('movie','now_playing'),
    popular: () => getData('movie','popular'),
    upcoming: () => getData('movie','upcoming'),
    search: query => getData('search','movie',query),
    movie: id => getData('movie',id),
    discover: () => getData('movie','discover')
};

export const myTv = {
    today: () => getData("tv",'airing_today'),
    topRated: () => getData("tv",'top_rated'),
    popular : () => getData("tv",'popular'),
    search : query => getData("search",'tv',query),
    show: (id) => getData(`tv`,''),
};


export const similar = async(kind,id) => {
    const TMDB_KEY = '4f98d431d636a7962fcef6b6f5a35256';
    const datas = await axios.get(`https://api.themoviedb.org/3/${kind}/${id}/similar?api_key=${TMDB_KEY}&language=en-US&page=1`);
    return datas.data.results;
}



export const apiImage = (path) => path === null ? 'https://images.unsplash.com/photo-1610337673044-720471f83677?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2766&q=80':`https://image.tmdb.org/t/p/w500${path}`;

