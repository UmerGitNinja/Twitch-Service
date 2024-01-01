import { create } from "zustand";

export interface useOrderMenuInterface {
  isLive?: string;
  setIsLive: (isLive: string) => void;
  videosCount: number;
  setVideosCount: (count: number) => void;
  checkedVideos: string[];
  setCheckedVideos: (video: string) => void;
  ViewsValue: number;
  setViewsValue: (count: number) => void;
  FollowerValue: number;
  setFollowerValue: (count: number) => void;
  HourViewValue: number;
  setHourViewValue: (count: number) => void;
  LiveValue: number;
  setLiveValue: (count: number) => void;
}

const useOrderMenu = create<useOrderMenuInterface>((set) => ({
  isLive: undefined,
  setIsLive: (isLive: string) => set(() => ({ isLive: isLive })),
  videosCount: 1,
  setVideosCount: (count: number) => set(() => ({ videosCount: count })),
  checkedVideos: [],
  setCheckedVideos: (video: string) =>
    set((state) => ({ checkedVideos: [...state.checkedVideos, video] })),
  ViewsValue: 0,
  setViewsValue: (count: number) => set(() => ({ ViewsValue: count })),
  HourViewValue: 1,
  setHourViewValue: (count: number) => set(() => ({ HourViewValue: count })),
  FollowerValue: 0,
  setFollowerValue: (count: number) => set(() => ({ FollowerValue: count })),
  LiveValue: 0,
  setLiveValue: (count: number) => set(() => ({ LiveValue: count })),
}));

export default useOrderMenu;
