import { useContext, useEffect } from "react";
import { Context } from "./components/Context";

function FetchData() {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=111d6e02&s=${state.searchTerm}`
      );
      const data = await res.json();
      console.log(data.Search);
      dispatch({ type: "ADDMOVIES", payload: data.Search });
    };
    getData();
  }, [state.searchTerm]);
}

export default FetchData;
