import { useReducer } from "react";
import FontContext from "./fontContext";
import FontReducer from "./fontReducer";
import {
  SET_CURRENT_LANGUAGE
} from "./types";

const FontState = props => {
  const initialState = {
    currentLanguage: 'en'
  };
  const [state, dispatch] = useReducer(FontReducer, initialState);

  const setCurrentLanguage = (lang) => {
    dispatch({
      type: SET_CURRENT_LANGUAGE,
      payload: lang
    })
  }
 
  
  return (
    <FontContext.Provider
      value={{
        currentLanguage: state.currentLanguage,
        setCurrentLanguage,
      }}
    >
      {props.children}
    </FontContext.Provider>
  );
};
export default FontState;
