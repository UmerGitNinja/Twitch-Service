import axios from "axios";

const clientId = "z9slyk3o8ja6qfkqv75r0w8yb062hi";
const clientSecret = "zrpo509175tvwpr8kw2hmf7n1sc58j";

export default async function getToken() {
  try {
    const data = new URLSearchParams();
    data.append("client_id", clientId);
    data.append("client_secret", clientSecret);
    data.append("grant_type", "client_credentials");

    const response = await axios.post(
      "https://id.twitch.tv/oauth2/token",
      data.toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return response.data.access_token;
  } catch (error:any) {
    console.error("Error getting Twitch token:", error.response.data);
    throw error; // Rethrow the error to indicate failure
  }
}