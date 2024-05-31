import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchData from "../../api/axios";

export const fetchNewsSettings = createAsyncThunk(
    "news/fetchNewsSettings",
    async () => {
        try {
            console.log("news/fetchNewsSettings");
            const { data } = await fetchData('api/webnewssettings/');
            console.log("Data ==>", data);
            return data;
        } catch (error) {
            throw Error("Failed to fetch news settings.");
        }
    }
);

export const fetchAllNewsFeed = createAsyncThunk(
    "news/fetchAllNewsFeed",
    async () => {
        try {
            const { data } = await fetchData('api/allfeeds');
            console.log("Data ==>", data);
            return data;
        } catch (error) {
            throw Error("Failed to fetch all news feed.");
        }
    }
);

export const fetchSingleNews = createAsyncThunk(
    "news/fetchSingleNews",
    async (newsId) => {
        try {
            const { data } = await fetchData(`api/feed/${newsId}`);
            console.log("Data ==>", data);
            return data;
        } catch (error) {
            throw Error("Failed to fetch single news.");
        }
    }
);
