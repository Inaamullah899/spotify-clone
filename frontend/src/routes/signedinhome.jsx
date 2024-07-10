import { Icon } from "@iconify/react";
import IconText from "../components/shared/icontext";
import { Link } from "react-router-dom";
import {
  PlayListView,
  SpotifyPlaylistData,
  Focusdata,
  ForYouData,
} from "../components/playlistview";
import Loggedinhomecontainer from "../components/Loggedinhomecontainer/Loggedinhomecontainer";

const signedinhome = () => {
  return (
    <Loggedinhomecontainer>
      <PlayListView titletext="Focus" cardsdata={Focusdata} />
      <PlayListView titletext="Pleasent" cardsdata={SpotifyPlaylistData} />
      <PlayListView titletext="For You" cardsdata={ForYouData} />
    </Loggedinhomecontainer>
  );
};
export default signedinhome;
