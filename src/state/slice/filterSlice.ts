import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filter, SortBy } from "../../interface/filterInterface";

export interface Search {
  searchParameter: string;
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
    updateSortBy: (state, filter: PayloadAction<SortBy>) => {
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
        searchParamter: filter.payload.searchParameter,
      };
      return state;
    },
  },
});
export const filterAction = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
