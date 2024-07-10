import { Howl, Howler } from "howler";
import { useState, useEffect } from "react";

import Singlesongcard from "../components/shared/singlesongcard";
import axios from "axios";
import Loggedinhomecontainer from "../components/Loggedinhomecontainer/Loggedinhomecontainer";

const Mymusic = () => {
  const [songData, setSongData] = useState([]);
  const [soundPlayed, setSoundPlayed] = useState(null);

  const playSound = (songsrc) => {
    if (soundPlayed) {
      soundPlayed.stop();
    }
    const sound = new Howl({
      src: [songsrc],
      html5: true,
      onend: () => {
        setSoundPlayed(null); // Reset soundPlayed when playback ends
      },
    });
    sound.play();
    setSoundPlayed(sound);
  };

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
      <div className="p-8 overflow-auto pb-2 pl-4">
        <div className="text-white text-lg font-semibold">My songs</div>
        <div className="space-y-3">
          {songData.map((item, index) => {
            return (
              <Singlesongcard key={index} info={item} playSound={playSound} />
            );
          })}
        </div>
      </div>
    </Loggedinhomecontainer>
  );
};
export default Mymusic;
