import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Loader, Error, SongCard } from "../components";
import { useGetSearchedTracksQuery } from "../redux/services/shazamCore";
const Search = () => {
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSearchedTracksQuery({ searchTerm });
  if (isFetching) return <Loader title="Searching..." />;
  if (error) return <Error />;
  const songs = data.tracks.hits;
  const songlist = songs.map((song, i) => song.track)
  console.log("terms", songlist);
  return (
    <div>
      <div
        className="flex flex-wrap sm:justify-start
      justify-center gap-8"
      >
        {songlist?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
