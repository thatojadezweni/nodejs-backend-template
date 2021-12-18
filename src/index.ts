import "reflect-metadata";

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

if (!("PORT" in process.env)) throw new Error("PORT environment varianle is missing");

const PORT = process.env.PORT || 8081;

const app = express()

app.listen(Number(PORT), () => {
    console.log("[server]: Listening on port")
})