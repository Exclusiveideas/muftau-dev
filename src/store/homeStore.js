import { create } from "zustand";

const useHomeStore = create()((set) => ({
  loadingScreen: true,
  heroVideoLoaded: true,
  activeCommentIndex: 0,
  appSectRef: null,
  workContRefs: [],
  activeMenu: 'about',
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
  setAppSectRef: (ref) =>
    set(() => ({
      appSectRef: ref,
    })),
  addToWorkContRefs: (ref) =>
    set((state) => ({
      workContRefs: [...state.workContRefs, ref],
    })),
  setActiveMenu: (section) =>
    set(() => ({
      activeMenu: section,
    })),
}));

export default useHomeStore;
