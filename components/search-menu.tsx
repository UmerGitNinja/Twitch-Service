import { SearchArtists } from "@/hooks/useSearchArtist";
import { TwitchStream } from "@/types";
import React, { useEffect } from "react";
import _ from "lodash";
import SearchItem from "./Search-item";
import useOrderMenu from "@/hooks/useOrderMenu";

const SearchMenu = ({ Query }: { Query: string }) => {
  const { data } = SearchArtists(Query);
  const ArtistData: TwitchStream[] = data;

  useEffect(() => {
    console.log(ArtistData);
  }, [ArtistData]);
  if (_.isEmpty(data)) {
    return null;
  }

  return (
    <div className="absolute top-[105%] z-50 right-0 left-0 h-80 rounded-md scrollbar-w-1.5 scrollbar-rounded-md overflow-y-scroll scrollbar scrollbar-thumb-rounded-md scrollbar-track-neutral-400 scrollbar-thumb-[#6E62E7]">
      {ArtistData.map((data, index) => (
        <SearchItem
          key={index}
          label={data?.display_name}
          Url={data?.thumbnail_url}
          StreamerId={data?.id}
          isLive={data?.is_live}
        />
      ))}
    </div>
  );
};

export default SearchMenu;
