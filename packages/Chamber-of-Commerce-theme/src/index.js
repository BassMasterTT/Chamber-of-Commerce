import Root from "./theme-files";

export default {
  name: "Chamber-of-Commerce-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: { isMenuOpen: false },
  },
  actions: {
    theme: {
      openMenu: ({ state }) => {
        state.theme.isMenuOpen = true;
      },
      closeMenu: ({ state }) => {
        state.theme.isMenuOpen = false;
      },
    },
  },
};
