import { combineReducers } from "redux";

import categories from "../pages/dashboard/reducer";
import randomCategoryJoke from "../pages/view-category/reducer";
import searchResults from "../pages/search/reducer";

const rootReducer = combineReducers({
  categories,
  randomCategoryJoke,
  searchResults
});

export default rootReducer;
