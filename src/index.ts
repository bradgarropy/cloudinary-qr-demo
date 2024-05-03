import "dotenv/config"

import {v2 as cloudinary} from "cloudinary"

cloudinary.config({
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    cloud_name: "bradgarropy",
    secure: true,
    force_version: false,
})

const cloudinaryUrl = cloudinary.url("cloudinary-qr-demo/bradgarropy.com", {
    transformation: [
        {effect: "make_transparent"},
        // {effect: "replace_color:red"},
        // {background: "blue"},
        {effect: "vectorize", fetch_format: "svg"},
    ],
})

console.log(cloudinaryUrl)
