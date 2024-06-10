import "dotenv/config"

import {v2 as cloudinary} from "cloudinary"

cloudinary.config({
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    secure: true,
})

const cloudinaryUrl = cloudinary.url(
    "cloudinary-qr-demo/https://bradgarropy.com",
    {
        transformation: [
            {effect: "make_transparent"},
            {effect: "replace_color:red"},
            {background: "blue"},
            {effect: "vectorize", fetch_format: "svg"},
        ],
    },
)

console.log(cloudinaryUrl)
