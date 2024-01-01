import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const useSongs = (albumId?: string) => {
  const { data, error: songsError, mutate } = useSWR(
    albumId ? `https://api.spotify.com/v1/albums/${albumId}/tracks` : null,
    fetcher
  );
  return {
    data,
    songsError,
    mutate
  };
};

export default useSongs;
