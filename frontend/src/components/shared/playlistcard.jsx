const PlayListCard = ({ title, description, imgurl }) => {
  return (
    <>
      <div className="card  bg-black w-1/5 h-60  p-4 rounded-lg ">
        <div className="card-items flex flex-col   ">
          <div className="pb-4 pt-2">
            <img src={imgurl} alt="" />
          </div>
          <div className="text-white text-xl font-semibold">{title}</div>
          <div className="text-gray-400 text-xs">{description}</div>
        </div>
      </div>
    </>
  );
};
export default PlayListCard;
