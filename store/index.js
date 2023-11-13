export const state = () => ({
  user: {},
  posts: [],
});

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },
  setUser(state, user) {
    state.user = user;
  },
};

export const actions = {
  async getPosts({ commit }, userId) {
    const posts = await this.$api.getUserPosts(userId);
    commit('setPosts', posts);
  },
  async getUser({ commit }, userId) {
    const user = await this.$api.getUser(userId);
    commit('setUser', user);
  },
};
