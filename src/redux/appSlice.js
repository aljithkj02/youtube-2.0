import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isMenuOpen: true,
        popularVideos: null
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        addPopularVideos: (state, action) => {
            state.popularVideos = action.payload;
        }
    }
})

export default appSlice.reducer;
export const { toggleMenu, addPopularVideos } = appSlice.actions;