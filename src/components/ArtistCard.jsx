import { Link } from "react-router-dom";

const ArtistCard = (track) => {
  console.log("*********", track.track);
  const info = track.track;
  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-white/5
    bg-opacity-80 backdrop-blur-sm animate-slideup
    rounded-lg cursor-pointer"
    >
      <img src={info.share.avatar} />
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/artists/${info.artists[0].adamid}`}>
            {info.artists[0].alias}
          </Link>
        </p>
        {/* <p className="text-sm truncate text-gray-300 mt-1">
          <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
            {info.subtitle}
          </Link>
        </p> */}
      </div>
    </div>
  );
};

export default ArtistCard;
