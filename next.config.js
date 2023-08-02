/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        remotePatterns: [{hostname: "images.unsplash.com"}],
    },
    experimental: {
        serverActions : true
    }
}


// const withPWA = require('next-pwa')({
//     dest: 'public'
//   })
  
//   module.exports = withPWA({
//     // next.js config
//   })

// module.exports= {
//     nextConfig :{
//         images: {
//             remotePatterns: [{hostname: "images.unsplash.com"}],
//         },
//         experimental: {
//             serverActions : true
//         }
//     },
//     withPWA : require('next-pwa')({
//     dest: 'public'
//   })
// }