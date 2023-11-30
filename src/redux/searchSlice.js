import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        isSearchOpen: false,
        searchQueries: {}
    },
    reducers: {
        addSearchQueries: (state, action) => {
            const { key, value } = action.payload;
            state.isSearchOpen = true;
            
            state.searchQueries[key] = value;
        },
        toggleIsSearchOpen: (state, action) => {
            state.isSearchOpen = action.payload;
        }
    }
})

export default searchSlice.reducer;
export const { addSearchQueries, toggleIsSearchOpen } = searchSlice.actions;