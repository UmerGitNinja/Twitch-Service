import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import getToken from "@/lib/getToken";
import axios from "axios";

const useStreamerVideos = (streamerId?: string) => {
  const { data: streamerData, error } = useSWR(
    streamerId
      ? `https://api.twitch.tv/helix/videos?user_id=${streamerId}`
      : null,
      async (url) => {
        if (!url) {
          return null;
        }
  
        try {
          const token = await getToken();
  
          const searchResponse = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Client-ID': 'z9slyk3o8ja6qfkqv75r0w8yb062hi', // Replace with your actual client ID
            },
          });
  
          return searchResponse.data;
        } catch (error) {
          console.error("Error fetching data:", error);
          throw error;
        }
      },
  );

  return {
    streamerData,
    error
  };
};

export default useStreamerVideos;
