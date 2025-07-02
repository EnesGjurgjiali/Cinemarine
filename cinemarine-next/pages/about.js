import Seo from "components/Seo";
import Link from "next/link";
import "../styles/index.css";
import "../styles/static-pages.css";

export default function About() {
  return (
    <>
      <Seo title="About - Cinemarine" description="About Cinemarine" />
      {/* Sub Header Section */}
      <section
        className="sub-header"
        style={{
          backgroundImage:
            "linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)), url(/assets/img/banner.jpg)",
        }}
      >
        <div className="sub-heading h1">
          <h1>ABOUT CINEMARINE</h1>
        </div>
      </section>
      <main>
        <article>
          {/* General */}
          <section className="about-section-1">
            <h2 className="h2 section-title">CINEMA</h2>
            <p className="section-info-p">
              Zinxhiri i kinemave CINEMARINE është themeluar në vitin 1994 në
              qytetin e Bodrumit të Turqisë. Pas suksesit dhe kërkesave të
              shumta, CINEMARINE u shpërnda në 11 qytete të Turqisë me prezencën
              e 15 komplekseve luksoze të kinemave të cilat ofrojnë shërbime
              superiore të kinemasë me teknologjinë më të fundit për audio dhe
              video projektime, të kombinuara me cilësi dhe standarde përtej
              pritjeve të adhuruesve të kinemasë. <br />
              Kapaciteti i përgjithshëm i 15 komplekseve të kinemave është 132
              hapësira projektimi dhe 14.262 ulëse. <br />
              <br />
              CINEMARINE vazhdimisht punon për të themeluar dhe menaxhuar kinema
              luksoze të cilat ofrojnë standarde të larta të argëtimit për të
              gjitha gjeneratat. Përpos themelimit dhe menaxhimit të suksesshëm
              të kinemave, CINEMARINE si anëtare e Rrjetit të Kinemave të
              Evropës me krenari përkrah zhvillimin e kinematografisë me
              eksperiencë shumëvjeçare në themelimin e shoqatave të
              kinematografisë, organizimin e kampanjave dhe evenimenteve
              promovuese të projekteve kinematografike, javë dhe festivale filmi
              si dhe evenimente dhe kampanja të shumta kulturore si platformë
              për të afruar audiencën me industrinë e kinemasë.
            </p>
          </section>
          {/* General 2 */}
          <section className="about-section-1">
            <h2 className="h2 section-title">CINEMARINE IN KOSOVO</h2>
            <p className="section-info-p">
              Duke sjellë standarde të reja dhe luksoze të industrisë së
              kinemasë, CINEMARINE vjen për herë të parë në Prizren, Kosovë në
              kënaqësi të adhuruesve të kinematografisë, zbavitjes dhe
              evenimenteve të shumta kulturore. Adhuruesit e kinemasë do të
              përjetojnë kënaqësinë dhe komforin unik të cilin e ofron
              CINEMARINE përmes shërbimeve superiore dhe teknologjinë më
              bashkëkohore. <br />
              <br />
              Kinemaja CINEMARINE në Prizren paraqet kompleks të përbërë prej 8
              sallave me 1,300 ulëse. Katër pikat e shitjes së biletave japin
              komoditet dhe ofrojnë shërbime të shpejta për vizitorët, ndërsa si
              opsione praktike për blerjen e biletave ofron dhe shitjet online
              dhe përmes website-t. CINEMARINE ofron dhe shërbimin e hyrjes VIP
              sipas standardeve më bashkëkohore si dhe ofron të gjitha shërbimet
              dhe qasje të lehtë të personave me aftësi të kufizuara.
            </p>
          </section>
          {/* Information */}
          <section className="about-section-1">
            <h2 className="h2 section-title">ALL IN ONE PLACE</h2>
            <p className="section-info-p">
              Për herë të parë në Kosovë, CINEMARINE sjell sistemin e
              projektimit SONY me cilësi të imazhit 4K si dhe sistemin e
              avancuar ATMOS që siguron zërimin e barabartë për 360 shkallë.{" "}
              <br />
              Disa nga avantazhet ti cilat ofrojnë eksperiencë përtej pritjeve
              janë: <br />
              <br />
              • LED ekrane dhe LCD monitorë të mëdhenj në hapësirën hyrëse ku
              projektohen trailerat dhe orari i projektimit të filmave <br />
              • Sistem i sofistikuar i ndriçimit në të gjitha njësitë e
              kompleksit <br />
              • Ulëse të dizajnuara enkas për kinemanë në Prizren me gjerësi
              komote prej 70 cm nga lëkura komfore e përshtatshme për të gjitha
              sezonet <br />
              • Dyer të hyrjes / daljes sipas standardeve më të përsosura <br />
              • Sistem i përsosur i ventilimit si dhe i ngrohjes/ftohjes <br />
              • Detektorë të tymit dhe zjarrit dhe sistem automatik spërkatës
              për shuarje të zjarrit
              <br />
              • Mure të papërshkueshme nga zëri
              <br />
              • Dhomë kujdesi për fëmijët dhe për familjet me fëmijë
              <br />
              • Pako speciale për kremtime të ditëlindjeve të fëmijëve <br />
              • Këndi i fëmijëve
              <br />
              • Qasje të lehtë dhe lëvizshmëri në të gjitha sallat, hapësirat e
              përbashkëta si dhe tualetet e kinemasë
              <br />
              • Tarraca për duhanpirës <br />
            </p>
          </section>
          {/* Gallery */}
          <section className="about-section-1">
            <h2 className="h2 section-title">GALLERY</h2>
            <p className="section-info-p">
              PAMJET NGA CINEMARINE MUND T'I GJENI POSHTË <br />
            </p>
            <div className="image-container">
              <div className="gallery">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <div className="image" key={num}>
                    <a
                      href={`/assets/img/about-galery/${num}.jpg`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={`/assets/img/about-galery/${num}.jpg`}
                        alt={`Gallery ${num}`}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
