import { create } from "zustand";

const useHomeStore = create()((set) => ({
  loadingScreen: true,
  heroVideoLoaded: true,
  activeCommentIndex: 0,
  setLoadingScreen: (val) =>
    set(() => ({
      loadingScreen: val,
    })),
  setHeroVideoLoaded: (val) =>
    set(() => ({
      heroVideoLoaded: val,
    })),
  setActiveCommentIndex: (index) =>
    set(() => ({
      activeCommentIndex: index,
    })),
}));

export default useHomeStore;
