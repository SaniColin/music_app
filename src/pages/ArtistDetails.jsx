import { useParams } from "react-router-dom";
import { useGetArtistDetailsQuery, useGetArtistRelatedQuery } from "../redux/services/shazamCore";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const ArtistDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery({ id });
  const { data: songData, isFetching: isFetchingSongDetails} = useGetArtistRelatedQuery({ id });
  if (isFetchingArtistDetails || isFetchingSongDetails) return <Loader title="Loading artist information..." />;
  if (error) return <Error />;
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  console.log(id, data.data[0])
  const artistData = data.data[0];
  console.log("related songs", songData);
  console.log("id", artistData.id)
  return (
    <div className="flex-col flex justify-center items-center">
      {/* <DetailsHeader artistId={artistData.id}/> */}
      <img
        alt="profile"
        src={artistData.attributes.artwork.url
          .replace("{w}", "500")
          .replace("{h}", "500")}
        className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
      />
      <div className="mb-10 text-white">
        <h2 className="text-3xl font-bold"></h2>
        {artistData.attributes.name}

        <div className="mt-5">
          {artistData.attributes.genreNames.map((gn, i) => (
            <span key={i}>{gn}</span>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ArtistDetails;
