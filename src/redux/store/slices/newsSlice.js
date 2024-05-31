import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../../utils/status";
import { fetchAllNewsFeed, fetchNewsSettings, fetchSingleNews } from "../../util/newsUtils";

const initialState = {
    error: null,
    status: STATUS.IDLE,
    settings: null,
    articleFeeds: null,
    singleFeed: null
};

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            // handling fetching of news settings
            .addCase(fetchNewsSettings.pending, (state) => {
                state.status = STATUS.LOADING;
            })
            .addCase(fetchNewsSettings.fulfilled, (state, action) => {
                state.settings = action.payload;
                state.status = STATUS.SUCCEEDED;
            })
            .addCase(fetchNewsSettings.rejected, (state, action) => {
                state.error = action.error.message;
                state.status = STATUS.FAILED;
            })

            // handling fetching of all news feed
            .addCase(fetchAllNewsFeed.pending, (state) => {
                state.status = STATUS.LOADING;
            })
            .addCase(fetchAllNewsFeed.fulfilled, (state, action) => {
                state.articleFeeds = action.payload;
                state.status = STATUS.SUCCEEDED;
            })
            .addCase(fetchAllNewsFeed.rejected, (state, action) => {
                state.status = STATUS.FAILED;
                state.error = action.error.message;
            })

            // handling fetching of single news feed
            .addCase(fetchSingleNews.pending, (state) => {
                state.status = STATUS.LOADING;
            })
            .addCase(fetchSingleNews.fulfilled, (state, action) => {
                state.singleFeed = action.payload;
                state.status = STATUS.SUCCEEDED;
            })
            .addCase(fetchSingleNews.rejected, (state, action) => {
                state.status = STATUS.FAILED;
                state.error = action.error.message;
            })
    },
});

export default newsSlice.reducer;