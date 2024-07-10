import { useContext } from "react";
import songContext from "../../context/songcontext";
const Singlesongcard = ({ info, playSound }) => {
  const { currentSong, setCurrentSong } = useContext(songContext);
  return (
    <>
      <div
        className="text-white flex hover:bg-gray-400 hover:bg-opacity-20 p-2 rounded-sm cursor-pointer"
        onClick={() => {
          setCurrentSong(info);
        }}
      >
        <div
          className="w-12 h-12 bg-cover bg-center"
          style={{
            backgroundImage: `url(${info.thumbnail})`,
          }}
        ></div>
        <div className="flex w-full">
          <div className="flex justify-center hover:underline  flex-col pl-4 w-5/6">
            <div>{info.name}</div>
            <div className="text-sm text-gray-400">{info.artist}</div>
          </div>
          <div className="w-1/6 flex items-center justify-center text-gray-400 text-sm">
            <div>3:44</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Singlesongcard;
