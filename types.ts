interface Image {
  height: number;
  width: number;
  url: string
}

export interface TwitchHighlight {
  created_at: string; // timestamp in ISO 8601 format, e.g., "2020-10-10T02:32:57Z"
  description: string; // "19:24 run on Minecraft 1.16.1"
  duration: string; // "24m49s"
  id: string; // "765868909"
  language: string; // "en"
  muted_segments: null;
  published_at: string; // timestamp in ISO 8601 format, e.g., "2020-10-10T02:32:57Z"
  stream_id: null;
  thumbnail_url: string; // URL, e.g., "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/1062d1c6c98650354486_dreamwastaken_58435375378_2415504210//thumb/thumb765868909-%{width}x%{height}.jpg"
  title: string; // "19:24 run"
  type: string; // "highlight"
  url: string; // URL, e.g., "https://www.twitch.tv/videos/765868909"
  user_id: string; // "451544676"
  user_login: string; // "dream"
  user_name: string; // "Dream"
  view_count: number; // e.g., 982776
  viewable: string; // "public"
};

export interface TwitchStream {
  broadcaster_language: string;
  broadcaster_login: string;
  display_name: string;
  game_id: string;
  game_name: string;
  id: string;
  is_live: boolean;
  started_at: string;
  tag_ids: string[];
  tags: string[];
  thumbnail_url: string;
  title: string;
};

interface Links {
  href: string,
  label: string
}

 export interface Footer {
  Cards: string[];
  Links: Links[];
}