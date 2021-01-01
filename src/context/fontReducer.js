import {
  SET_CURRENT_LANGUAGE
} from "./types";

const fontReducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_LANGUAGE:
      return {
        ...state,
        currentLanguage: action.payload
      };
    
    default:
      throw Error(`Auth Reducer - Unhandled Action: ${action.type}`);
  }
};
export default fontReducer;
