import "dotenv/config"

import {v2 as cloudinary} from "cloudinary"

if (process.argv.length < 3) {
    console.log("Usage: npm start <url> [color]")
    process.exit(1)
}

let url
let color

if (process.argv.length === 3) {
    url = process.argv.at(-1)
}

if (process.argv.length === 4) {
    url = process.argv.at(-2)
    color = process.argv.at(-1)
}

cloudinary.config({
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    cloud_name: "bradgarropy",
    secure: true,
    force_version: false,
})

const cloudinaryUrl = cloudinary.url(`cloudinary-qr-demo/${url}`, {
    fetch_format: "svg",
    background: color ? color : "white",
    transformation: [
        color ? {effect: `replace_color:${color}`} : undefined,
        {effect: "make_transparent"},
        {effect: "vectorize"},
    ],
})

console.log(cloudinaryUrl)
