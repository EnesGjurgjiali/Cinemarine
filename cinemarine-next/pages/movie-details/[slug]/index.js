import Head from "next/head";
import Link from "next/link";
import "styles/index.css";
import Seo from "components/Seo";
import getTrailerLink from "utils/getTrailerLink";
import movies from "data/movies";
import styles from "./MovieDetail.module.css";

export async function getStaticPaths() {
  return {
    paths: movies.map((movie) => ({ params: { slug: movie.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const movie = movies.find((m) => m.slug === params.slug);
  return { props: { movie } };
}

export default function MovieDetails({ movie }) {
  if (!movie) return <div>Movie not found</div>;
  const trailer = getTrailerLink(movie);
  const isComingSoon = movie.img.includes("/soon/");
  return (
    <>
      <Seo
        title={`${movie.title} - Cinemarine`}
        description={movie.description}
      />
      <main>
        <section
          className={styles.movieDetail}
          style={{
            backgroundImage: `linear-gradient(rgba(2,8,31,0.85),rgba(1,2,10,0.85)), url(${movie.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            paddingTop: 120,
            paddingBottom: 80,
          }}
        >
          <div
            className={styles.container}
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 48,
            }}
          >
            <figure
              className={styles.movieDetailBanner}
              style={{
                position: "relative",
                minWidth: 280,
                maxWidth: 340,
                margin: 0,
              }}
            >
              <img
                src={movie.img}
                alt={movie.title}
                style={{
                  borderRadius: 12,
                  width: "100%",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
              />
              {trailer && (
                <a href={trailer} target="_blank" rel="noopener noreferrer">
                  <button
                    className="play-btn"
                    style={{
                      background: "none",
                      border: "none",
                      position: "absolute",
                      inset: 0,
                      display: "grid",
                      placeItems: "center",
                      fontSize: 120,
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    <ion-icon name="play-circle-outline"></ion-icon>
                  </button>
                </a>
              )}
            </figure>
            <div
              className={styles.movieDetailContent}
              style={{ flex: "1 1 400px", minWidth: 260 }}
            >
              <div style={{ marginBottom: 18 }}>
                <Link href="/movies" className="back-to-movies-btn">
                  <ion-icon name="arrow-back-outline"></ion-icon>
                  <span className="back-text">Back to Movies</span>
                </Link>
              </div>
              <p
                className="detail-subtitle"
                style={{
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: isComingSoon ? "#f7c873" : "#89cff0",
                  fontSize: 20,
                  marginBottom: 8,
                }}
              >
                {isComingSoon ? "Coming Soon" : "Now Playing"}
              </p>
              <h1
                className="h1 detail-title"
                style={{ fontSize: 42, marginBottom: 12 }}
              >
                {movie.title}
              </h1>
              <div className="meta-wrapper" style={{ marginBottom: 24 }}>
                <div className="badge-wrapper">
                  <div className="badge badge-fill">{movie.badgeOutline}</div>
                  <div className="badge badge-fill">{movie.badgeFill}</div>
                </div>
                <div className="date-time">
                  <div>
                    <ion-icon name="time-outline"></ion-icon>
                    <time dateTime={movie.time}>{movie.duration}</time>
                  </div>
                  <div>
                    <ion-icon name="language-outline"></ion-icon>
                    <span>{movie.lang}</span>
                  </div>
                </div>
              </div>
              <div className="ganre-wrapper" style={{ marginBottom: 18 }}>
                {movie.categories.map((cat) => (
                  <a href="#" key={cat}>
                    {cat}
                  </a>
                ))}
              </div>
              <p className="storyline">{movie.description}</p>
              <div className="details-actions">
                {!isComingSoon && (
                  <button className="btn btn-primary">
                    <ion-icon name="ticket-outline"></ion-icon>
                    <span>Buy Tickets</span>
                  </button>
                )}
                {trailer && (
                  <a href={trailer} target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-primary">
                      <ion-icon name="play"></ion-icon>
                      <span>Watch Trailer</span>
                    </button>
                  </a>
                )}
                <button
                  className="btn btn-primary share"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                  }}
                >
                  <ion-icon name="share-social-outline"></ion-icon>
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <style jsx>{`
        .back-to-movies-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #232946;
          color: #f7c873;
          border-radius: 50px;
          padding: 8px 10px;
          font-size: 1.2rem;
          font-weight: 600;
          border: none;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          width: 44px;
          overflow: hidden;
          transition: width 0.28s cubic-bezier(0.4, 0, 0.2, 1), background 0.2s,
            color 0.2s;
          position: relative;
        }
        .back-to-movies-btn .back-text {
          display: none;
          opacity: 0;
          width: 0;
          margin-left: 0;
          overflow: hidden;
          white-space: nowrap;
          transition: opacity 0.18s, width 0.18s, margin-left 0.18s;
        }
        .back-to-movies-btn:hover,
        .back-to-movies-btn:focus {
          width: 170px;
          background: #f7c873;
          color: #232946;
        }
        .back-to-movies-btn:hover .back-text,
        .back-to-movies-btn:focus .back-text {
          display: inline;
          opacity: 1;
          width: 120px;
          margin-left: 10px;
        }
        .back-to-movies-btn ion-icon {
          font-size: 1.4rem;
          flex-shrink: 0;
        }
      `}</style>
    </>
  );
}
