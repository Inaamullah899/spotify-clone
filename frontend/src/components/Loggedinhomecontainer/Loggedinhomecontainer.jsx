import { children } from "react";
import { Icon } from "@iconify/react";
import IconText from "../shared/icontext";
import { Link } from "react-router-dom";
import { useState, useLayoutEffect, useRef } from "react";
import { Howl, Howler } from "howler";
import { useContext } from "react";
import songContext from "../../context/songcontext";
import CreatePlaylistModal from "../../modals/CreatePlaylistModal";
const Loggedinhomecontainer = ({ children }) => {
  const [createPlaylistModalOpen, setCreatePlaylistModalOpen] = useState(true);

  const {
    currentSong,
    setCurrentSong,
    soundPlayed,
    setSoundPlayed,
    isPaused,
    setIsPaused,
    volume,
    setVolume,
  } = useContext(songContext);
  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (!currentSong) {
      return;
    }
    changeSong(currentSong.track);
  }, [currentSong && currentSong.track]);
  const playSound = () => {
    if (!soundPlayed) {
      return;
    }
    soundPlayed.play();
  };
  const changeSong = (songsrc) => {
    if (soundPlayed) {
      soundPlayed.stop();
      soundPlayed.unload();
    }
    let sound = new Howl({
      src: [songsrc],
      html5: true,
    });
    setSoundPlayed(sound);
    sound.play();
    setIsPaused(false);
  };
  const pauseSound = () => {
    soundPlayed.pause();
  };
  const togglePlayPause = () => {
    if (isPaused) {
      playSound(currentSong.track);
      setIsPaused(false);
    } else {
      pauseSound();
      setIsPaused(true);
    }
  };
  return (
    <>
      <div className=" h-screen bg-black  w-full">
        {createPlaylistModalOpen && (
          <CreatePlaylistModal
            closeModal={() => {
              setCreatePlaylistModalOpen(false);
            }}
          />
        )}
        <div className={`${currentSong ? "h-9/10" : "h-full"} flex`}>
          <div className="main-container h-full  w-full flex ">
            <div className="left-side h-full  w-1/5 bg-black">
              <div className="logo-div p-6">
                <Icon icon="logos:spotify" width="120" />
              </div>

              <div>
                <div className="py-5">
                  {
                    <IconText
                      logoname={"material-symbols-light:home"}
                      displaytext={"Home"}
                      targetlink={"/loginhome"}
                    />
                  }

                  {
                    <IconText
                      logoname={"material-symbols:search"}
                      displaytext={"Search"}
                      targetlink={"/search"}
                    />
                  }

                  {
                    <IconText
                      logoname={"bx:library"}
                      displaytext={"your library"}
                      targetlink={"/yourlibrary"}
                    />
                  }

                  {
                    <IconText
                      logoname={"akar-icons:music"}
                      displaytext={"My music"}
                      targetlink={"/mymusic"}
                    />
                  }
                </div>
                <div className="pt-5">
                  {
                    <IconText
                      logoname={"material-symbols:add-box"}
                      displaytext={"Create Playlist"}
                      onClick={() => {
                        setCreatePlaylistModalOpen(true);
                      }}
                    />
                  }
                  {
                    <IconText
                      logoname={"mdi:heart"}
                      displaytext={"Favourites"}
                    />
                  }
                </div>
              </div>
              <div className="px-5 py-1 mt-32  ">
                <div className="flex cursor-pointer justify-center text-sm p-1 hover:scale-110 text-white border border-white w-2/5 rounded-full">
                  <div>
                    <Icon icon="tabler:world" width="20" />
                  </div>
                  <div className="ml-1">English</div>
                </div>
              </div>
            </div>
            <div className="right-side overflow-auto   bg-app-black w-4/5 ">
              <div className="rs-navbar bg-black   bg-opacity-50 w-full  h-20 ">
                <div className="buttons h-full flex justify-end items-center   gap-2 mr-10 ">
                  <Link to="/upload">
                    <button className="text-green-500 border-none hover:scale-110 mr-3 w-28 h-12 rounded-full"></button>
                  </Link>
                  <Link to="">
                    <button className="border-2 border-green-500 rounded-full hover:scale-110 text-black bg-green-500 w-10 h-10">
                      IB
                    </button>
                  </Link>
                </div>
              </div>
              <div className="rs-content p-8 pt-0 overflow-auto flex flex-col">
                {children}
              </div>
            </div>
          </div>
        </div>
        {currentSong && (
          <div className="h-1/10   flex">
            <div className="flex h-full pl-4 gap-2 w-1/4 items-center">
              <img
                src={currentSong.thumbnail}
                alt=""
                className="h-10 w-10 rounded"
              />
              <div className="text-white">
                <div className="text-sm">{currentSong.name}</div>
                <div className="text-xs text-gray-500">
                  {currentSong.artist}
                </div>
              </div>
            </div>

            <div className="flex justify-center flex-col items-center w-2/4">
              <div className="text-gray-400  flex w-1/3 justify-between items-center">
                <Icon
                  icon="ph:shuffle-fill"
                  fontSize={20}
                  className="hover:text-white cursor-pointer"
                />
                <Icon
                  icon="fluent:previous-20-filled"
                  fontSize={20}
                  className="hover:text-white cursor-pointer"
                />
                <Icon
                  icon={isPaused ? "gridicons:play" : "gridicons:pause"}
                  fontSize={40}
                  className="hover:text-white cursor-pointer"
                  onClick={togglePlayPause}
                />
                <Icon
                  icon="fluent:next-24-filled"
                  fontSize={20}
                  className="hover:text-white cursor-pointer"
                />
                <Icon
                  icon="ri:repeat-line"
                  fontSize={20}
                  className="hover:text-white cursor-pointer"
                />
              </div>
              <div className="text-white"></div>
            </div>
            <div className="flex justify-end items-center w-1/4 text-gray-400 gap-3 mr-5">
              <Icon
                icon="cil:playlist-add"
                fontSize={20}
                className="hover:text-white cursor-pointer"
              />
              <Icon
                icon="gravity-ui:volume"
                fontSize={20}
                className="hover:text-white cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Loggedinhomecontainer;
