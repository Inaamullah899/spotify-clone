import Loggedinhomecontainer from "../components/Loggedinhomecontainer/Loggedinhomecontainer";
import Singlesongcard from "../components/shared/singlesongcard";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import axios from "axios";
const Search = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [songData, setSongData] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3000/songs/");
      setSongData(response.data);
      console.log(response.data);
    };
    getData();
  }, []);

  return (
    <Loggedinhomecontainer>
      <div className="w-full py-6">
        <div
          className={`w-1/3 p-3 text-sm rounded-full bg-gray-800 px-5 flex text-white space-x-3 items-center ${
            isInputFocused ? "border border-white" : ""
          }`}
        >
          <Icon icon="ic:outline-search" className="text-lg" />
          <input
            type="text"
            placeholder="What do you want to listen to?"
            className="w-full bg-gray-800 focus:outline-none"
            onFocus={() => {
              setIsInputFocused(true);
            }}
            onBlur={() => {
              setIsInputFocused(false);
            }}
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchSong();
              }
            }}
          />
        </div>
        {songData.length > 0 ? (
          <div className="p-8 overflow-auto pb-2 pl-4">
            <div className="text-white text-lg font-semibold"></div>
            <div className="space-y-3">
              {songData.map((item, index) => {
                return <Singlesongcard key={index} info={item} />;
              })}
            </div>
          </div>
        ) : (
          <div className="text-gray-400 pt-10">Nothing to show here.</div>
        )}
      </div>
    </Loggedinhomecontainer>
  );
};
export default Search;
