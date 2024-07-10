import { openUploadWidget } from "../utilis/cloudinaryservice";
import uploadSong from "../routes/uploadsong";
const Cloudinaryupload = ({ setUrl, setName }) => {
  const uploadImageWidget = () => {
    console.log("Uploading image...");

    const myUploadWidget = openUploadWidget(
      {
        cloudName: "dihebziau",
        uploadPreset: "vhxtb7i7",
        sources: ["local"],
      },
      function (error, result) {
        if (!error && result.event === "success") {
          setUrl(result.info.secure_url);
          console.log(result.info.secure_url);
          setName(result.info.original_filename);
          console.log(result.info.original_filename);
          console.log(result.info);
        } else {
          if (error) {
            console.log(error);
          }
        }
      }
    );
    myUploadWidget.open();
  };

  return (
    <button
      className="bg-white text-black rounded-full px-2 py-2 mt-5 "
      onClick={uploadImageWidget()}
    >
      Select track
    </button>
  );
};

export default Cloudinaryupload;
