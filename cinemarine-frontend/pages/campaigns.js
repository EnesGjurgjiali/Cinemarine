import Head from "next/head";
import Link from "next/link";
import "../styles/index.css";
import "../styles/static-pages.css";
import Seo from "components/Seo";

export default function Campaigns() {
  return (
    <>
      <Seo title="Campaigns - Cinemarine" description="Cinemarine Campaigns" />
      {/* Sub Header Section */}
      <section
        className="sub-header"
        style={{
          backgroundImage:
            "linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)), url(/assets/img/banner.jpg)",
        }}
      >
        <div className="sub-heading h1">
          <h1>CAMPAIGNS</h1>
        </div>
      </section>
      <main>
        <article>
          {/* Children Corner */}
          <section className="children-corner">
            <h2 className="h2 section-title">CHILDREN CORNER</h2>
            <div className="image-container">
              <div className="gallery">
                {[1, 2, 3].map((num) => (
                  <div className="image" key={num}>
                    <a
                      href={`/assets/img/campaigns/${num}.jpg`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={`/assets/img/campaigns/${num}.jpg`}
                        alt={`Children Corner ${num}`}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Birthday Celebration */}
          <section className="birthday-celebration">
            <h2
              className="h2 section-title"
              style={{ textDecoration: "underline 4px var(--secondary)" }}
            >
              birthday-celebration
            </h2>
            <p className="section-info-p">
              Imagjinata është pa kufi, atë e përjetojmë më së miri në kinema.
              <br />
              Cinemarine ju ofron mundësinë që ditëlindjen e më të dashurëve
              tuaj ta festoni në kinema. Cinemarine do të përkujdeset për
              organizimin deri në detaje dhe do të sigurohet që të vegjlit tuaj
              do të kalojnë një kohë fantastike. <br />
              Për të festuar ditëlindje në Cinemarine, kontaktoni në:
              marketing@cinemarine-eu.com ose +383 49 137 222
            </p>
            <div className="image-container">
              <div className="gallery">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div className="image" key={num}>
                    <a
                      href={`/assets/img/campaigns/b-day/${num}.jpg`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={`/assets/img/campaigns/b-day/${num}.jpg`}
                        alt={`Birthday ${num}`}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Advertise in Cinema */}
          <section className="advertise">
            <h2
              className="h2 section-title"
              style={{ textDecoration: "underline 4px var(--primary-2)" }}
            >
              Advertise in cinema
            </h2>
            <div className="advertise-1-container">
              <div className="advertise-1-text">
                <p className="text">
                  Filma të suksesshëm, ekrane gjigande dhe zërim i izoluar që ju
                  marrin vëmendjen.Reklamo ne kinema <br />
                  Nuk ka vend më të mrië, më të madh e më të dobishëm për t'ju
                  drejtuar konsumatorëve tuaj sesa në kinemanë tonë <br />
                  - Blloqe prej 5 minutave para secilit film. <br />
                  - Mundësia për t'i zgjedhur të gjitha sallat apo vetëm disa në
                  veçanti.
                  <br />
                  - Reklama deri në 30 sekonda.
                  <br />
                  - Zbritje për kohëzgjatjë më të lartë dhe marrëveshje vjetore.
                  <br />
                  - Zbritje të veçanta për paketa të sponzorizimit.
                  <br />
                  - Përfitime shtesë, varësisht prej kohëzgjatjes së kampanjës.
                  <br />
                  - Minimuni kampanjë 30 ditëshe.
                  <br />
                </p>
              </div>
              <div className="advertise-1-image">
                <img
                  src="/assets/img/campaigns/ad.png"
                  alt="Advertise in cinema"
                />
              </div>
            </div>
          </section>
          {/* Advertise in Billboard */}
          <section className="advertise">
            <h2
              className="h2 section-title"
              style={{ textDecoration: "underline 4px var(--primary-2)" }}
            >
              Advertise in bilboard
            </h2>
            <div className="advertise-1-container">
              <div className="advertise-1-text">
                <p className="text">
                  Succesful Movies, big screens and isolated volume that will
                  make you exicted.Advertise in cinema! <br />
                  - One of most frequent places in Prizren <br />
                  - Minimum 45,000 to 50,000 visitors at Rr. Tirana <br />
                  - Two sided screen with 6x4m dimensions <br />
                  - Advertisement from 10:00 till 22:00 <br />
                  - 100+ projections per day <br />
                  - Advertisement up to 10 seconds <br />
                  - Discounts for larger periods of time available <br />
                  - Minimum campaign - 30 days. <br />
                </p>
              </div>
              <div className="advertise-1-image">
                <img
                  src="/assets/img/campaigns/b2.jpg"
                  alt="Advertise in billboard"
                />
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
