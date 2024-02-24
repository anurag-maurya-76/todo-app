import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type sortDir = "ASC" | "DESC";
export type sortBy = "Date" | "Name" | "Priority" | "Tag" | "";

export interface Filter {
  sortDir: sortDir;
  sortBy: sortBy;
  searchParamter: string;
  searchBy: "Date" | "";
}

export interface Search {
  searchParamter: string;
  searchBy: "Date" | "";
}

export const initialState: Filter = {
  sortDir: "ASC",
  sortBy: "",
  searchParamter: "",
  searchBy: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    updateSortDir: (state) => {
      state = {
        ...state,
        sortDir: state.sortDir === "ASC" ? "DESC" : "ASC",
      };
      return state;
    },
    updateSortBy: (state, filter: PayloadAction<sortBy>) => {
      state = {
        ...state,
        sortBy: filter.payload,
      };
      return state;
    },
    updateSearch: (state, filter: PayloadAction<Search>) => {
      state = {
        ...state,
        searchBy: filter.payload.searchBy,
        searchParamter: filter.payload.searchParamter,
      };
      return state;
    },
  },
});
export const filterAction = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
