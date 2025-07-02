import Head from "next/head";
import Link from "next/link";
import "../styles/index.css";
import { useState } from "react";
import movies from "data/movies";
import filterOptions from "data/filters";
import Seo from "components/Seo";

export default function Movies() {
  const [movieFilter, setMovieFilter] = useState("all");
  const filteredMovies =
    movieFilter === "all"
      ? movies.filter((m) => m.img.includes("/playing/"))
      : movies.filter(
          (m) =>
            m.img.includes("/playing/") && m.categories.includes(movieFilter)
        );

  return (
    <>
      <Seo title="Movies - Cinemarine" description="Cinemarine Movies" />
      {/* Sub Header Section */}
      <section
        className="sub-header"
        style={{
          backgroundImage:
            "linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)), url(/assets/img/banner.jpg)",
        }}
      >
        <div className="sub-heading h1">
          <h1>MOVIES</h1>
        </div>
      </section>
      <main>
        <article>
          <section className="top-rated">
            <div className="container">
              <p className="section-subtitle">Currently Playing At</p>
              <h2 className="h2 section-title">CINEMARINE EUROPE</h2>
              <ul className="filter-list">
                {filterOptions.map((opt) => (
                  <li key={opt.value}>
                    <button
                      className={`filter-btn${
                        movieFilter === opt.value ? " active" : ""
                      }`}
                      onClick={() => setMovieFilter(opt.value)}
                    >
                      {opt.label}
                    </button>
                  </li>
                ))}
              </ul>
              <ul className="movies-list">
                {filteredMovies.map((movie, idx) => (
                  <li key={movie.title + idx}>
                    <div className="movie-card">
                      <Link href={`/movie-details/${movie.slug}`}>
                        <figure className="card-banner">
                          <img src={movie.img} alt={movie.title} />
                        </figure>
                      </Link>
                      <div className="title-wrapper">
                        <Link href={`/movie-details/${movie.slug}`}>
                          <h3 className="card-title">{movie.title}</h3>
                        </Link>
                        <time dateTime="2022">{movie.lang}</time>
                      </div>
                      <div className="card-meta">
                        <div className="badge badge-outline">
                          {movie.badgeOutline}
                        </div>
                        <div className="badge badge-fill">
                          {movie.badgeFill}
                        </div>
                        <div className="duration">
                          <ion-icon name="time-outline"></ion-icon>
                          <time dateTime={movie.time}>{movie.duration}</time>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
