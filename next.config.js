/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.colorironline.com',
                port: '',
                pathname: '/images/imgcolor/desenho-camiseta-14-para-colorir.jpg'
            }
        ],
    },
}
