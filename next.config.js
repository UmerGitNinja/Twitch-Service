/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'static-cdn.jtvnw.net',
            pathname: '/jtv_user_pictures/**',
          },
          {
            protocol: 'https',
            hostname: 'static-cdn.jtvnw.net',
            pathname:"/user-default-pictures-uv/**"
          },
          {
            protocol: 'https',
            hostname: 'static-cdn.jtvnw.net',
            pathname: "/cf_vods/**"
          },
          {
            protocol: 'https',
            hostname: 'vod-secure.twitch.tv',
            pathname: "/**"
          },
        ],
      },
}

module.exports = nextConfig