import Seo from "components/Seo";
import styles from "./Pricing.module.css";
import {
  IoFilmOutline,
  IoCubeOutline,
  IoStarOutline,
  IoSchoolOutline,
  IoTimeOutline,
} from "react-icons/io5";

export default function Pricing() {
  return (
    <>
      <Seo title="Pricing - Cinemarine" description="Cinemarine Pricing" />
      <section className="sub-header" style={{backgroundImage: "linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)), url(/assets/img/banner.jpg)"}}>
        <div className="sub-heading h1">
          <h1>PRICING</h1>
        </div>
      </section>
      <main>
        <article>
          <section style={{background: '#181f2f', paddingBottom: 80}}>
            <div className="container">
              <h2 className="section-title">PRICING LIST</h2>
              <div className={styles.pricingCards}>
                {/* Week days */}
                <div className={styles.pricingCard + " " + styles.cardWeekdays}>
                  <div className={styles.pricingCardHeader}>
                    <span className={styles.pricingTitle}>Weekdays</span>
                  </div>
                  <div className={styles.pricingCardDays}>Mon, Wed, Thu</div>
                  <ul className={styles.pricingList}>
                    <li className={styles.ticketType}>
                      <IoFilmOutline /> 2D
                    </li>
                    <li>
                      <span>Normal</span> <strong>3.50€</strong>
                    </li>
                    <li>
                      <span>Students</span> <strong>3€</strong>
                    </li>
                    <li className={styles.dividerCard}></li>
                    <li className={styles.ticketType}>
                      <IoCubeOutline /> 3D
                    </li>
                    <li>
                      <span>Normal</span> <strong>4.50€</strong>
                    </li>
                    <li>
                      <span>Students</span> <strong>4€</strong>
                    </li>
                  </ul>
                </div>
                {/* Cinema Day */}
                <div
                  className={
                    styles.pricingCard +
                    " " +
                    styles.bestValue +
                    " " +
                    styles.cardCinema
                  }
                >
                  <div className={styles.pricingCardHeader}>
                    <span className={styles.pricingTitle}>Cinema Day</span>
                    <span className={styles.badgeBest}>Best Value</span>
                  </div>
                  <div className={styles.pricingCardDays}>Tuesday</div>
                  <ul className={styles.pricingList}>
                    <li className={styles.ticketType}>
                      <IoFilmOutline /> 2D
                    </li>
                    <li>
                      <span>All</span> <strong>2.80€</strong>
                    </li>
                    <li className={styles.dividerCard}></li>
                    <li className={styles.ticketType}>
                      <IoCubeOutline /> 3D
                    </li>
                    <li>
                      <span>All</span> <strong>3.80€</strong>
                    </li>
                  </ul>
                </div>
                {/* Weekend */}
                <div className={styles.pricingCard + " " + styles.cardWeekend}>
                  <div className={styles.pricingCardHeader}>
                    <span className={styles.pricingTitle}>Weekend</span>
                  </div>
                  <div className={styles.pricingCardDays}>Fri, Sat, Sun</div>
                  <ul className={styles.pricingList}>
                    <li className={styles.ticketType}>
                      <IoFilmOutline /> 2D
                    </li>
                    <li>
                      <span>Normal</span> <strong>3.50€</strong>
                    </li>
                    <li>
                      <span>Students</span> <strong>3€</strong>
                    </li>
                    <li className={styles.dividerCard}></li>
                    <li className={styles.ticketType}>
                      <IoCubeOutline /> 3D
                    </li>
                    <li>
                      <span>Normal</span> <strong>4.50€</strong>
                    </li>
                    <li>
                      <span>Students</span> <strong>4€</strong>
                    </li>
                  </ul>
                </div>
                {/* Situational */}
                <div
                  className={
                    styles.pricingCard +
                    " " +
                    styles.situational +
                    " " +
                    styles.cardSituational
                  }
                >
                  <div className={styles.pricingCardHeader}>
                    <span className={styles.pricingTitle}>Situational</span>
                  </div>
                  <div className={styles.pricingCardDays}>Campaigns</div>
                  <ul className={styles.pricingList}>
                    <li>
                      <IoStarOutline /> Pre-Premiere <strong>3.90€</strong>
                    </li>
                    <li>
                      <IoSchoolOutline /> Schools <strong>2.80€</strong>
                    </li>
                    <li className={styles.dividerCard}></li>
                    <li>
                      <IoTimeOutline /> Movies &gt; 120min{" "}
                      <strong>+0.30€</strong>
                    </li>
                    <li>
                      <IoTimeOutline /> Movies &gt; 160min{" "}
                      <strong>+1.00€</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
