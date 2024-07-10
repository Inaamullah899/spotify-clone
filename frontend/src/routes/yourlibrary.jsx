import Loggedinhomecontainer from "../components/Loggedinhomecontainer/Loggedinhomecontainer";
import SinglePlaylistcard from "../components/shared/singlePlaylistcard";
import { useState, useEffect } from "react";
import axios from "axios";

const Yourlibrary = () => {
  const [playListData, setPlayListData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3000/playList/");
      setPlayListData(response.data);
      console.log(response.data);
    };
    getData();
  }, []);
  return (
    <Loggedinhomecontainer>
      <div className="p-8  pb-2 pl-4">
        <div className="text-white text-lg font-semibold">My Library</div>
        <div className=" flex flex-wrap -mx-2  gap-10 mt-5   ">
          {playListData.map((item, index) => {
            return <SinglePlaylistcard key={index} info={item} />;
          })}
        </div>
      </div>
      <SinglePlaylistcard />
    </Loggedinhomecontainer>
  );
};
export default Yourlibrary;
