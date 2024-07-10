import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import LogIn from "./routes/logIn";
import SignUp from "./routes/signup";
import Signedinhome from "./routes/signedinhome";
import Home from "./routes/home";
import UploadSong from "./routes/uploadsong";
import Mymusic from "./routes/mymusic";
import Yourlibrary from "./routes/yourlibrary";
import Search from "./routes/search";
import { useState } from "react";
import songContext from "./context/songcontext";

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [soundPlayed, setSoundPlayed] = useState(null);
  const [isPaused, setIsPaused] = useState(true);

  // const [LoggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <div className="App font-poppins">
        <songContext.Provider
          value={{
            currentSong,
            setCurrentSong,
            soundPlayed,
            setSoundPlayed,
            isPaused,
            setIsPaused,
          }}
        >
          <Routes>
            {/* <React.Fragment>
              {LoggedIn ? (
                <songContext.Provider value={{ currentSong, setCurrentSong }}>
                  <Route
                    path="/loginhome"
                    element={<Signedinhome setLoggedIn={setLoggedIn} />}
                  />
                </songContext.Provider>
              ) : (
                <Route path="/" element={<Home />} />
              )}
            </React.Fragment> */}
            <Route path="/loginhome" element={<Signedinhome />} />
            <Route path="/upload" element={<UploadSong />} />

            <Route path="/yourlibrary" element={<Yourlibrary />} />
            <Route path="/mymusic" element={<Mymusic />} />
            <Route path="/search" element={<Search />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </songContext.Provider>
      </div>
    </>
  );
}

export default App;
