import { Icon } from "@iconify/react";
import IconText from "../components/shared/icontext";
import { Link } from "react-router-dom";
import {
  PlayListView,
  SpotifyPlaylistData,
  Focusdata,
  ForYouData,
} from "../components/playlistview";

const Home = () => {
  return (
    <>
      <div className="main-container h-full w-full flex ">
        <div className="left-side h-screen w-1/5 bg-black">
          <div className="logo-div p-6">
            <Icon icon="logos:spotify" width="120" />
          </div>

          <div>
            <div className="py-5">
              {
                <IconText
                  logoname={"material-symbols-light:home"}
                  displaytext={"Home"}
                />
              }
              {
                <IconText
                  logoname={"material-symbols:search"}
                  displaytext={"Search"}
                />
              }
              {
                <IconText
                  logoname={"bx:library"}
                  displaytext={"your library"}
                />
              }
            </div>
            <div className="pt-5">
              {
                <IconText
                  logoname={"material-symbols:add-box"}
                  displaytext={"Create Playlist"}
                />
              }
              {<IconText logoname={"mdi:heart"} displaytext={"Favourites"} />}
            </div>
          </div>
          <div className="px-5 py-1 mt-52 ">
            <div className="flex cursor-pointer text-sm p-1 hover:scale-110 text-white border border-white w-2/5 rounded-full">
              <div>
                <Icon icon="tabler:world" width="20" />
              </div>
              <div className="ml-1">English</div>
            </div>
          </div>
        </div>
        <div className="right-side overflow-auto h-screen bg-app-black w-4/5 ">
          <div className="rs-navbar bg-black bg-opacity-50 w-full  h-20 ">
            <div className="buttons h-full flex justify-end items-center  gap-2 mr-10 ">
              <Link to="/signup">
                <button className="text-green-500 border-none hover:scale-110  w-24 h-12 rounded-full">
                  Sign up
                </button>
              </Link>
              <Link to="/login">
                <button className="border-2 border-green-500 rounded-full hover:scale-110 text-black bg-green-500 w-24 h-12">
                  Log in
                </button>
              </Link>
            </div>
          </div>
          <div className="rs-content p-8 pt-0  flex flex-col">
            <PlayListView titletext="Focus" cardsdata={Focusdata} />
            <PlayListView
              titletext="Pleasent"
              cardsdata={SpotifyPlaylistData}
            />
            <PlayListView titletext="For You" cardsdata={ForYouData} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
