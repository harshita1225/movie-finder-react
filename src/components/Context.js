import { createContext, useReducer } from "react";

export const Context = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCHMOVIE":
      // console.log(action.payload);
      return { ...state, searchTerm: action.payload };
    case "ADDMOVIES":
      return { ...state, movies: action.payload };
    default:
      return;
  }
};

const initialState = {
  searchTerm: "",
  movies: [],
};
function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

export default ContextProvider;
