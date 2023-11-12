export const state = () => ({
  posts: [],
});

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },
};

export const actions = {
  async getPosts({ commit }, userId) {
    const posts = await this.$api.getUserPosts(userId);
    commit('setPosts', posts);
  },
};
