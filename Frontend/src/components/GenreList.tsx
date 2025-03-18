import useGenres from "@/hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenres();

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.mal_id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
