const SinglePlaylistcard = ({ info }) => {
  if (!info) {
    return null; // or handle it in another way based on your requirements
  }
  return (
    <>
      <div className="card  bg-black w-1/5 h-48   p-4 rounded-lg ">
        <div className="card-items flex flex-col   items-center cursor-pointer  ">
          <div className="pb-4 pt-2  ">
            {info.thumbnail && (
              <img
                src={info.thumbnail}
                alt=""
                className="object-cover w-28 h-28"
              />
            )}
          </div>
          <div className="text-white text-lg font-semibold">
            {info.playListName}
          </div>
        </div>
      </div>
    </>
  );
};
export default SinglePlaylistcard;
