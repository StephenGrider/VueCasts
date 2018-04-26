const state = {
  token: null
};

const getters = {
  isLoggedIn: state => !!state.token
};

const actions = {};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};
