export const state = () => ({
  activeCategory: 0
})

export const mutations = {
  setActive (state, number) {
    state.activeCategory = number
  }
}
