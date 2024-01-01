import axios from "axios";
import getToken from "./getToken";
const fetcher = async (url: string) => {
  if (!url) {
    return null;
  }

  try {
    const token = await getToken();

    const Response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return Response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default fetcher;
