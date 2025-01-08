import { create } from "zustand";

const useHomeStore = create()((set) => ({
  loadingScreen: true,
  heroVideoLoaded: true,
  setLoadingScreen: (val) =>
    set(() => ({
      loadingScreen: val,
    })),
  setHeroVideoLoaded: (val) =>
    set(() => ({
      heroVideoLoaded: val,
    })),
}));

export default useHomeStore;
