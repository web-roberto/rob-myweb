module.exports = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "placeimg.com",
      //   port: "",
      //   pathname: "/720/480/**",
      // },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1234',
        pathname: 'public/**',
        search: '',
      },
    ],
    localPatterns: [
      {
        pathname: '/**',
        search: '',
      },
    ],
  },
};

module.exports = {};
