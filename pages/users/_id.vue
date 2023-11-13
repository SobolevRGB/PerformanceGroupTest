<template>
  <div class="user-page">
    <h1>Пользователь: {{ user.name }}</h1>
    <div class="user-page__props">
      <span>Имя: {{ user.name }}</span>
      <span>Ник: {{ user.username }}</span>
      <span>E-mail: <a :href="`mailto:${user.email}`">{{ user.email }}</a></span>
      <span>Телефон: <a :href="`tel:${user.phone}`">{{ user.phone }}</a></span>
      <span>Сайт: <a :href="user.website">{{ user.website }}</a></span>
      <span>Город: {{ user.address.city }}</span>
      <span>Индекс: {{ user.address.zipcode }}</span>
    </div>

    <div v-for="({ title, body, id }, index) in posts" :key="id" class="user-page__post">
      <span>№{{ index + 1}}.  {{ title }}</span><br>
      <span>{{ body }}</span>
    </div>

    <button class="nice-btn" v-if="posts.length < 1" @click="getPosts()">
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
      // Честно сказать - не понял пункт в задании "используйте vuex, чтобы передавать между странницами данные пользователя", поэтому хоть как-то вплёл сюда Vuex)
      await this.$store.dispatch('getPosts', Number(this.user.id));
    },
  },
});
</script>

<style lang="scss" scoped>
$padding-bottom: 20px;
.user-page {
  text-align: left;
  overflow: hidden;
  width: 50%;
  margin: 0 auto;
  display: table;
  padding: 0 0 8em 0;

  &__props {
    display: flex;
    flex-direction: column;
    padding-bottom: $padding-bottom;
  }

  &__post {
    padding-bottom: $padding-bottom;
  }
}
</style>
