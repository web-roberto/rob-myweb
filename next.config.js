module.exports = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['prod-ripcut-delivery.disney-plus.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'prod-ripcut-delivery.disney-plus.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
    ],
    // remotePatterns: [
    //   // {
    //   //   protocol: "https",
    //   //   hostname: "placeimg.com",
    //   //   port: "",
    //   //   pathname: "/720/480/**",
    //   // },
    //   {
    //     protocol: 'http',
    //     hostname: 'localhost',
    //     port: '1234',
    //     pathname: 'public/**',
    //     search: '',
    //   },
    // ],
    // localPatterns: [
    //   {
    //     pathname: '/**',
    //     search: '',
    //   },
    // ],
  },
};
