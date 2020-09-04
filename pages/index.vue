<template>
  <div class="container" style="display:flex;flex-wrap:wrap">
    <div
      style="width:250px ;border:2px solid black; display:flex; flex-direction:column;justify-content:center;align-items:center"
      v-for="item in posts"
      :key="item.id"
    >
      <img
        width="150"
        :src="'https://image.tmdb.org/t/p/w500' + item.poster_path"
        alt=""
      />
      <h3>{{ item.title }}</h3>
      <p>
        {{ item.overview }}
      </p>
    </div>
    <h1>{{a}}</h1>
    <button @click.enter="increaseA">arttır</button>
  </div>
</template>

<script>
import { mapState, mapGetters,mapMutations } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      // items:[]
    };
  },
  methods:{
    ...mapMutations({
      increaseA : 'modules/post/setA'
    })
  },
  computed: {
    ...mapState({
      counter: "counter"
    }),
    ...mapGetters({
      posts: "posts",
      a:'modules/post/getA'
    })
  },

  fetch({ store }) {
    return (store.dispatch("setPosts"),store.dispatch('setPosts'));
  },
  created() {}
};
</script>

<style></style>
