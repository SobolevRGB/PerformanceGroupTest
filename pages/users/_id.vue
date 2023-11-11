<template>
  <div class="main-page">
    <h1>Пользователь</h1>

    {{ user }}
    {{ posts }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserPage",
  data() {
    return {
      posts: [],
    };
  },
  async asyncData({ app, params }) {
    const user = await app.$api.getUser(Number(params.id));
    return { user: user };
  },
  created() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      this.posts = await this.$api.getUserPosts(Number(this.user.id));
    },
  },
});
</script>

<style lang="scss" scoped></style>
