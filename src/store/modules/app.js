const state = {
  drawer: true
}

const mutations = {
  TOGGLE_DRAWER(state) {
    state.drawer = !state.drawer
  }
}

const actions = {
  toggleDrawer: ({commit}) => {
    commit('TOGGLE_DRAWER')
  }
}

const getters = {
  getDrawer: state => {
    return state.drawer
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
