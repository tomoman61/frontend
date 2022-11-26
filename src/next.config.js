/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

// 旧バージョンのホットリロード設定（多分不要だが一応まだ残す）
// module.exports = {
//   reactStrictMode: true,
//   webpackDevMiddleware: config => {
//   config.watchOptions = {
//     poll: 800,
//     aggregateTimeout: 300,
//   }
//   return config
//   },
//  }
