"use client";

import useSongs from "@/hooks/useSongs";
import React, { useEffect } from "react";
import VideosList from "./videos-list";
import _ from "lodash";
import useStreamerVideos from "@/hooks/useStreamerVideos";
import { TwitchHighlight } from "@/types";
import useOrderMenu from "@/hooks/useOrderMenu";

interface SongsMenuProps {
  StreamerId?: string;
}

const VideosMenu: React.FC<SongsMenuProps> = ({ StreamerId }) => {
  const { streamerData } = useStreamerVideos(StreamerId);
  const videosData: TwitchHighlight[] = streamerData?.data;
  const { setVideosCount, videosCount, setCheckedVideos, checkedVideos } =
    useOrderMenu();

  const handleCheckboxChange = (label: string, isChecked: boolean) => {
    setCheckedVideos(label);
    setVideosCount(isChecked ? videosCount + 1 : videosCount - 1);
  };
  useEffect(() => {
    console.log(videosData);
  }, [videosData]);
  if (_.isEmpty(videosData)) {
    return null;
  }
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 p-4 gap-4 max-h-60 overflow-y-scroll scroll-track-[#121212] scrollbar-w-1.5 scrollbar-rounded-md scrollbar scrollbar-thumb-rounded-md scrollbar-thumb-[#9146FF]">
      {videosData?.map((data, index) => (
        <VideosList
          key={index}
          title={data?.title}
          onCheckBoxChange={handleCheckboxChange}
          Url={
            data?.thumbnail_url
              ? data?.thumbnail_url
                  .replace("%{width}", "640")
                  .replace("%{height}", "360")
              : ""
          }
        />
      ))}
    </div>
  );
};

export default VideosMenu;
