import { combineReducers } from "redux";
import userRedux from "./userRedux";

const rootReducer = combineReducers({
  user: userRedux,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
