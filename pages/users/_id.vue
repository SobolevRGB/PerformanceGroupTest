<template>
  <div class="user-page">
    <h1>Пользователь {{ user.name }}</h1>

    <span></span>

    {{ user }}

    <div v-for="{ title, body, id } in posts" :key="id" class="user-page__post">
      <span>№{{ id }}.  {{ title }}</span>
      <span>{{ body }}</span>
    </div>

    <button class="user-page__btn" v-if="posts.length < 1" @click="getPosts()">
      Получить записи пользователя
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserPage",
  computed: { 
    posts () {
      return this.$store.state.posts
    }
  },
  async asyncData({ app, params }) {
    const user = await app.$api.getUser(Number(params.id));
    return { user: user };
  },
  methods: {
    async getPosts() {
      await this.$store.dispatch('getPosts', Number(this.user.id));
    },
  },
});
</script>

<style lang="scss" scoped>
.user-page {
  text-align: left;
  overflow: hidden;
  width: 50%;
  margin: 0 auto;
  display: table;
  padding: 0 0 8em 0;

  &__post {
    padding-bottom: 20px;
  }

  &__btn {
    padding: 8px 21px;
    border-radius: 3px;
    line-height: 1.25;
    background: #d87561;
    text-decoration: none;
    color: white;
    font-size: 16px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.6s ease;
    overflow: hidden;
    &:focus,
    &:hover {
      background: darken(#832e1d, 7%);
    }
    &:active {
      &:after {
        width: 300px;
        height: 300px;
      }
    }
  }
}
</style>
