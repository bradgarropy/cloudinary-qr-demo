import "dotenv/config"

import {v2 as cloudinary} from "cloudinary"

if (process.argv.length !== 3) {
    console.log("Please provide a URL for the QR code.")
    process.exit(1)
}

const input = process.argv.at(-1)

cloudinary.config({
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    cloud_name: "bradgarropy",
    secure: true,
    force_version: false,
})

const url = cloudinary.url(`cloudinary-qr-demo/${input}`, {
    effect: "vectorize",
    fetch_format: "svg",
})

console.log(url)
