import React from 'react';
import { useSelector } from 'react-redux';
import { useGetCountryTracksQuery } from '../redux/services/shazamCore';
import { Error, Loader, SongCard } from '../components';

const CountryTracks = () => {
    const countrycode = "US"
    const {data, isFetching, error} = useGetCountryTracksQuery({countrycode});
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    if (isFetching) return <Loader title="Loading songs..." />;
    if (error) return <Error />;
    console.log(data.tracks)
    const tracks = data.tracks
    return (
      <div className="flex flex-col">
        <div className="w-full flex justify-between items-center
        sm:flex-row flex-col mt-4 mb-10"
        >
          <h2 className="font-bold text-3l text-white
          text-left"
          >
            Songs around you
          </h2>
          {/* <select
            onChange={(e) => dispatch(selectGenreListId(e.target.value))}
            value={genreListId || 'pop'}
            className="bg-black text-gray-300 p-3 text-sm
            rounded-lg outline-none sm:mt-0 mt-5"
          >
            {genres.map((genre) => (
              <option
                key={genre.value}
                value={genre.value}
              >
                {genre.title}
              </option>
            ))}
          </select> */}
        </div>
        <div className="flex flex-wrap sm:justify-start
        justify-center gap-8"
        >
          {tracks?.map((song, i) => {
            console.log("((((",data,"))))")
            return (
                <SongCard
                  key={song.key}
                  song={song}
                  isPlaying={isPlaying}
                  activeSong={activeSong}
                  data={data}
                  i={i}
                />
              )
          })}
        </div>
      </div>
    );
}

export default CountryTracks;
