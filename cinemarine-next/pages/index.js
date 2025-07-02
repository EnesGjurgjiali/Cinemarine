import Head from "next/head";
import "../styles/index.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Header from "components/Header";
import Footer from "components/Footer/Footer";
import movies from "data/movies";
import filterOptions from "data/filters";
import Seo from "components/Seo";

export default function Home() {
  // State for menu
  const [menuActive, setMenuActive] = useState(false);
  // State for header active on scroll
  const [headerActive, setHeaderActive] = useState(false);
  // State for go-top button
  const [goTopActive, setGoTopActive] = useState(false);
  // Ref for overlay
  const overlayRef = useRef(null);
  // Ref for header
  const headerRef = useRef(null);
  // Ref for upcoming movies list
  const upcomingListRef = useRef(null);

  useEffect(() => {
    // Header scroll effect
    const handleScroll = () => {
      setHeaderActive(window.scrollY >= 10);
      setGoTopActive(window.scrollY >= 700);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu open/close handlers
  const handleMenuOpen = () => setMenuActive(true);
  const handleMenuClose = () => setMenuActive(false);
  const handleOverlayClick = () => setMenuActive(false);

  // Top Rated (playing) movies
  const playingMovies = movies.filter((m) => m.img.includes("/playing/"));
  // Upcoming movies
  const upcomingMovies = movies.filter((m) => m.img.includes("/soon/"));
  // Duplicate the array to allow more scrolling
  const upcomingMoviesDoubled = [
    ...upcomingMovies,
    ...upcomingMovies,
    ...upcomingMovies,
  ];

  const [movieFilter, setMovieFilter] = useState("all");
  const filteredMovies =
    movieFilter === "all"
      ? playingMovies
      : playingMovies.filter((m) => m.categories.includes(movieFilter));

  // Scroll handler for roll-effect
  const scrollUpcoming = (direction) => {
    const container = upcomingListRef.current;
    if (!container) return;
    const scrollAmount = container.offsetWidth * 0.7;
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      <Seo
        title="Cinemarine"
        description="Cinemarine Europe - Unlimited Movies, with the best experiences!"
      />
      <main>
        <article>
          {/* Hero Section */}
          <section className="hero">
            <div className="container">
              <div className="hero-content">
                <p className="hero-subtitle">CINEMARINE Europe</p>
                <h1 className="h1 hero-title">
                  Unlimited <strong>Movies</strong>, with the best experiences!
                </h1>
                <div className="meta-wrapper">
                  <div className="badge-wrapper">
                    <div className="badge badge-fill">DOLBY ATMOS SYSTEM</div>
                    <div className="badge badge-fill">SONY 4K</div>
                    <div className="badge badge-outline">2D/3D</div>
                    <div className="badge badge-outline">FREE VIP SEATS</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Upcoming Section */}
          <section className="upcoming" style={{ margin: "60px 0" }}>
            <div className="container">
              <div className="flex-wrapper" style={{ marginBottom: 24 }}>
                <div className="title-wrapper">
                  <p className="section-subtitle">Comming Soon</p>
                  <h2 className="h2 section-title">
                    ONLY IN <strong> THEATERS </strong>
                  </h2>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                    marginLeft: "auto",
                  }}
                >
                  <button
                    aria-label="Scroll left"
                    style={{
                      fontSize: 28,
                      background: "none",
                      border: "none",
                      color: "var(--primary-2)",
                      cursor: "pointer",
                    }}
                    onClick={() => scrollUpcoming("left")}
                  >
                    <ion-icon name="chevron-back-outline"></ion-icon>
                  </button>
                  <button
                    aria-label="Scroll right"
                    style={{
                      fontSize: 28,
                      background: "none",
                      border: "none",
                      color: "var(--primary-2)",
                      cursor: "pointer",
                    }}
                    onClick={() => scrollUpcoming("right")}
                  >
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                  </button>
                </div>
              </div>
              <ul
                className="movies-list has-scrollbar"
                ref={upcomingListRef}
                style={{ scrollBehavior: "smooth", marginBottom: 32 }}
              >
                {upcomingMoviesDoubled.map((movie, idx) => (
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
                          <time>{movie.duration}</time>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Service Section */}
          <section className="service" style={{ margin: "60px 0" }}>
            <div className="container">
              <div className="service-banner">
                <figure>
                  <img src="/assets/img/services.jpg" alt="Service" />
                </figure>
              </div>
              <div className="service-content">
                <p className="service-subtitle">About Us</p>
                <h2 className="h2 service-title">
                  Watch your favourite movies, with best experiences
                </h2>
                <ul className="service-list">
                  <li>
                    <div className="service-card">
                      <div className="card-icon">
                        <ion-icon name="tv"></ion-icon>
                      </div>
                      <div className="card-content">
                        <h3 className="h3 card-title">Enjoy on Big Screen.</h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="service-card">
                      <div className="card-icon">
                        <ion-icon name="videocam"></ion-icon>
                      </div>
                      <div className="card-content">
                        <h3 className="h3 card-title">
                          Watch at highest Quality.
                        </h3>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Top Rated Section */}
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

          {/* CTA Section */}
          <section className="cta">
            <div className="container">
              <div className="title-wrapper">
                <h2 className="cta-title">
                  Subscribe to get notified about the latest movies!
                </h2>
                <p className="cta-text">
                  Enter your email to create your membership.
                </p>
              </div>
              <form className="cta-form">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="email-field"
                />
                <button type="submit" className="cta-form-btn">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </section>
        </article>
      </main>
      {/* Go to top button */}
      <a
        href="#top"
        className={`go-top${goTopActive ? " active" : ""}`}
        data-go-top
        style={{ position: "fixed", right: 20, bottom: 20, zIndex: 1000 }}
      >
        <ion-icon name="chevron-up"></ion-icon>
      </a>
    </>
  );
}
