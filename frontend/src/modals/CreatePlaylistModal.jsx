import { useState } from "react";
import axios from "axios";

const CreatePlaylistModal = ({ closeModal }) => {
  const [playListName, setPlaylistName] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const createPlaylist = async () => {
    try {
      const data = { playListName, thumbnail };
      const resp = await axios.post("http://localhost:3000/playList/add", data);
      console.log(resp.data + " success");
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      className=" absolute  bg-black bg-opacity-50  w-screen h-screen flex justify-center items-center"
      onClick={closeModal}
    >
      <div
        className="w-1/3 bg-app-black  text-white  rounded-md p-4 "
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="font-semibold text-lg mb-3 text-center">
          Create Playlist
        </div>
        <div
          className="
        flex flex-col justify-center space-y-3 items-center"
        >
          <div className="flex flex-col gap-1">
            <label className="text-white" htmlFor="">
              Name
            </label>
            <input
              className="p-1 w-80 text-black rounded-lg"
              type="text"
              placeholder="Enter Playlist Name"
              onChange={(e) => {
                setPlaylistName(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-white" htmlFor="">
              Thumbnail
            </label>
            <input
              className="p-1 w-80 text-black rounded-lg"
              type="text"
              placeholder="Thumbnail"
              onChange={(e) => {
                setThumbnail(e.target.value);
              }}
            />
          </div>
          <button
            className="bg-green-500 p-1 w-20 rounded-lg"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              createPlaylist();
            }}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};
export default CreatePlaylistModal;
