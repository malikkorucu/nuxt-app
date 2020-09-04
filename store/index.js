import axios from "axios";

export const state = () => ({
  posts: []
});

export const getters = {
  posts(state) {
    return state.posts;
  }
};

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  }
};

export const actions = {
    setPosts({ commit }) {
       return axios.get(
          "https://api.themoviedb.org/3/discover/movie?api_key=51e52dd2ece16a4f02b1c2f71ab79559"
       ).then(res => { 
           commit('setPosts' , res.data.results)
       }).catch(err=> console.log(err))
  }
};
