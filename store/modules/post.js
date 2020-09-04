// import axios from "axios";

export const state = () => ({
  a: 1
});

export const getters = {
  getA(state) {
    return state.a;
  }
};

export const mutations = {
  setA(state) {
    state.a++;
  }
};

// export const mutations = {
//   setPosts(state, posts) {
//     state.posts = posts;
//   }
// };

// export const actions = {
//   async getPosts({ commit }) {
//     let { data } = await axios.get(
//       "https://api.themoviedb.org/3/discover/movie?api_key=51e52dd2ece16a4f02b1c2f71ab79559"
//     );
//     commit("setPosts", data.results);
//   }
// };
