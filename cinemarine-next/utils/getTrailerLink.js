// Utility to get a trailer link for a movie (extend as needed)
export default function getTrailerLink(movie) {
  if (movie.slug === "fast-x") {
    return "https://www.youtube.com/watch?v=32RAq6JzY-w&ab_channel=TheFastSaga";
  }
  return null;
}
