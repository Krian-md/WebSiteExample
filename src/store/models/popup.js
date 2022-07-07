export default {
  mutations: {
    openDialog(state, popup) {
      const indexPopup = indexOfPopupName(state.currentPopup, popup.namePopup);
      if (indexPopup === -1) {
        state.currentPopup.push(popup);
      }
    },
    closeDialog(state, namePopup) {
      const indexPopup = indexOfPopupName(state.currentPopup, namePopup);
      if (indexPopup !== -1) {
        state.currentPopup.splice(indexPopup, 1);
      }
      console.log(state.currentPopup);
    },
  },
  state: {
    currentPopup: [],
  },
  getters: {
    getAllPopup(state) {
      return state.currentPopup;
    },
  },
};

function indexOfPopupName(currentPopup, namePopup) {
  let target = -1;
  currentPopup.forEach((popup, index) => {
    if (popup.name === namePopup) {
      target = index;
    }
  });
  return target;
}
