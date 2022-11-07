import { useContext, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { FcSearch } from "react-icons/fc";
import { Context } from "./components/Context";
import FetchData from "./FetchData";

function App() {
  const { dispatch } = useContext(Context);
  const [searchTerm, setSearchTerm] = useState("");
  const handleClick = () => {
    console.log("clicked search");
    dispatch({ type: "SEARCHMOVIE", payload: searchTerm });
  };

  return (
    <div className="App flex items-center flex-col gap-[50px]">
      <div className="searchbar flex flex-row border-[5px] items-center justify-center w-[400px] text-[20px]">
        <input
          placeholder="Search movie name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FcSearch onClick={handleClick} />
      </div>
      <FetchData />
      <Card />
    </div>
  );
}

export default App;
