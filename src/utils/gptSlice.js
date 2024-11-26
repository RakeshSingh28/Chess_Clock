import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    searchText: "",
    movieSuggestions: [],
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addSearchedMovies: (state, action) => {
      const { searchedText, movies } = action.payload;
      state.searchText = searchedText;
      state.movieSuggestions = movies;
    },
  },
});

export const { toggleGptSearchView, addSearchedMovies } = gptSlice.actions;

export default gptSlice.reducer;
