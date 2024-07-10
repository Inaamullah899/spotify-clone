import { Icon } from "@iconify/react";
import IconText from "../components/shared/icontext";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import Cloudinaryupload from "../components/cloudinaryupload";

const UploadSong = () => {
  const [name, setName] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [artist, setArtist] = useState("");
  const [songUrl, setSongUrl] = useState("");
  const [uploadedsongfilename, setUploadedsongfilename] = useState("");

  const submitSong = async () => {
   
    const data = { name, thumbnail, artist, track: songUrl };
    const resp = await axios.post("http://localhost:3000/songs/add", data);
    console.log("submitted");
    console.log(resp + data + "done");
  };

  return (
    <div className="main-container h-full w-full flex">
      <div className="left-side h-screen w-1/5 bg-black">
        <div className="logo-div p-6">
          <Icon icon="logos:spotify" width="120" />
        </div>

        <div>
          <div className="py-5">
            <IconText
              logoname={"material-symbols-light:home"}
              displaytext={"Home"}
              targetlink="/loginhome"
            />
            <IconText
              logoname={"material-symbols:search"}
              displaytext={"Search"}
              targetlink="/search"
            />
            <IconText
              logoname={"bx:library"}
              displaytext={"your library"}
              targetlink="/yourlibrary"
            />
            <IconText
              logoname={"subway:add-playlist"}
              displaytext={"My music"}
              targetlink="/mymusic"
            />
          </div>
          <div className="pt-5">
            <IconText
              logoname={"material-symbols:add-box"}
              displaytext={"Create Playlist"}
            />
            <IconText logoname={"mdi:heart"} displaytext={"Favourites"} />
          </div>
        </div>
        <div className="px-5 py-1 mt-52">
          <div className="flex cursor-pointer text-sm p-1 hover:scale-110 text-white border border-white w-2/5 rounded-full">
            <div>
              <Icon icon="tabler:world" width="20" />
            </div>
            <div className="ml-1">English</div>
          </div>
        </div>
      </div>
      <div className="right-side overflow-auto h-screen bg-app-black w-4/5">
        <div className="rs-navbar bg-black bg-opacity-50 w-full h-20">
          <div className="buttons h-full flex justify-end items-center gap-2 mr-10">
            <Link to="/upload">
              <button className="text-green-500 border-none hover:scale-110 mr-3 w-28 h-12 rounded-full">
                Upload Song
              </button>
            </Link>
            <Link to="">
              <button className="border-2 border-green-500 rounded-full hover:scale-110 text-black bg-green-500 w-10 h-10">
                IB
              </button>
            </Link>
          </div>
        </div>
        <div className="rs-content p-8 pt-0 flex flex-col">
          <div>
            <h1 className="text-white font-semibold mt-10 text-3xl">
              Upload your music
            </h1>
          </div>

          <form className="flex flex-col mt-10" action="">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <label className="text-white" htmlFor="">
                  Name
                </label>
                <input
                  className="p-2 w-80 rounded-lg"
                  type="text"
                  placeholder="Enter Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-white" htmlFor="">
                  Artist
                </label>
                <input
                  className="p-2 w-80 rounded-lg"
                  type="text"
                  placeholder="Artist"
                  onChange={(e) => {
                    setArtist(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-white" htmlFor="">
                  Thumbnail
                </label>
                <input
                  className="p-2 w-80 rounded-lg"
                  type="text"
                  placeholder="Enter Thumbnail"
                  onChange={(e) => {
                    setThumbnail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              {uploadedsongfilename ? (
                <div className="bg-white rounded-full p-3 w-1/3">
                  {uploadedsongfilename.substring(0, 35)}...
                </div>
              ) : (
                <Cloudinaryupload
                  setUrl={setSongUrl}
                  setName={setUploadedsongfilename}
                />
              )}
            </div>
            <Link to="/loginhome">
              <div
                onClick={submitSong}
                className="bg-white rounded-full font-semibold p-2 w-32 mt-4 cursor-pointer"
              >
                Submit song
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadSong;
