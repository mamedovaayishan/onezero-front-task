import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await axios.get("http://localhost:3000/data");
    // console.log("Fetched Categories Response:", response.data);
    return response.data;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    filteredCategories: [],
    status: "idle",
    error: null,
  },
  reducers: {
    filterByCategory: (state, action) => {
      console.log(state.categories);
      if (action.payload === "all") {
        state.filteredCategories = state.categories;
      } else {
        state.filteredCategories = state.categories.filter(
          (category) => category.name[0].value === action.payload
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        // state.categories = action.payload;
        state.categories = action.payload.categories
          .filter((category) => !category.isArchived)
          .map((category) => ({
            ...category,
            menuItems: category.menuItems.filter((item) => !item.isArchived),
          }));
        state.filteredCategories = state.categories;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { filterByCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
