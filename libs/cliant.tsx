import {createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "hiro-tutorial-nextjs",
    apiKey: process.env.API_KEY || '',
});