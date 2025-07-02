import Head from "next/head";
import Link from "next/link";
import "../styles/index.css";
import "../styles/static-pages.css";
import Seo from "components/Seo";
import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <>
      <Seo title="Pricing - Cinemarine" description="Cinemarine Pricing" />
      {/* Sub Header Section */}
      <section
        className="sub-header"
        style={{
          backgroundImage:
            "linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)), url(/assets/img/banner.jpg)",
        }}
      >
        <div className="sub-heading h1">
          <h1>PRICING</h1>
        </div>
      </section>
      <main>
        <article>
          <section className={styles.pricing} id="pricing">
            <div className={styles.pricingInner}>
              <h2 className={styles.sectionTitle}>PRICING LIST</h2>
              <div className={styles.pricingCards}>
                {/* Week days */}
                <div className={styles.pricingCard + " " + styles.cardWeekdays}>
                  <div className={styles.pricingCardHeader}>
                    <span className={styles.pricingTitle}>Weekdays</span>
                  </div>
                  <div className={styles.pricingCardDays}>Mon, Wed, Thu</div>
                  <ul className={styles.pricingList}>
                    <li className={styles.ticketType}>
                      <ion-icon name="film-outline"></ion-icon> 2D
                    </li>
                    <li>
                      <span>Normal</span> <strong>3.50€</strong>
                    </li>
                    <li>
                      <span>Students</span> <strong>3€</strong>
                    </li>
                    <li className={styles.dividerCard}></li>
                    <li className={styles.ticketType}>
                      <ion-icon name="cube-outline"></ion-icon> 3D
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
                      <ion-icon name="film-outline"></ion-icon> 2D
                    </li>
                    <li>
                      <span>All</span> <strong>2.80€</strong>
                    </li>
                    <li className={styles.dividerCard}></li>
                    <li className={styles.ticketType}>
                      <ion-icon name="cube-outline"></ion-icon> 3D
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
                      <ion-icon name="film-outline"></ion-icon> 2D
                    </li>
                    <li>
                      <span>Normal</span> <strong>3.50€</strong>
                    </li>
                    <li>
                      <span>Students</span> <strong>3€</strong>
                    </li>
                    <li className={styles.dividerCard}></li>
                    <li className={styles.ticketType}>
                      <ion-icon name="cube-outline"></ion-icon> 3D
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
                      <ion-icon name="star-outline"></ion-icon> Pre-Premiere{" "}
                      <strong>3.90€</strong>
                    </li>
                    <li>
                      <ion-icon name="school-outline"></ion-icon> Schools{" "}
                      <strong>2.80€</strong>
                    </li>
                    <li className={styles.dividerCard}></li>
                    <li>
                      <ion-icon name="time-outline"></ion-icon> Movies &gt;
                      120min <strong>+0.30€</strong>
                    </li>
                    <li>
                      <ion-icon name="time-outline"></ion-icon> Movies &gt;
                      160min <strong>+1.00€</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
      <style jsx>{`
        .clean-dark-pricing {
          background: #181f2f;
          padding-bottom: 80px;
        }
        .pricing-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .pricing-cards {
          display: flex;
          flex-wrap: wrap;
          gap: 32px;
          justify-content: center;
          align-items: stretch;
          margin: 40px 0 0 0;
        }
        .pricing-card {
          background: #232946;
          border-radius: 18px;
          box-shadow: 0 4px 24px 0 rgba(20, 22, 40, 0.13);
          padding: 36px 30px 32px 30px;
          min-width: 260px;
          max-width: 320px;
          flex: 1 1 260px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          border: 1.5px solid #232946;
          transition: box-shadow 0.18s, border 0.18s, transform 0.18s;
        }
        .pricing-card:hover {
          box-shadow: 0 8px 32px 0 rgba(20, 22, 40, 0.22);
          border: 1.5px solid #2563eb;
          transform: translateY(-4px) scale(1.02);
          z-index: 2;
        }
        .pricing-card.best-value {
          border: 2px solid #2563eb;
        }
        .badge-best {
          background: #2563eb;
          color: #fff;
          font-weight: 600;
          font-size: 0.95rem;
          border-radius: 6px;
          padding: 3px 10px;
          margin-left: 10px;
          letter-spacing: 0.5px;
          box-shadow: none;
        }
        .pricing-card-header {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
        }
        .pricing-title {
          font-size: 1.22rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .pricing-card-days {
          color: #b3b8c7;
          font-size: 1.02rem;
          font-weight: 500;
          margin-bottom: 18px;
          letter-spacing: 0.2px;
        }
        .pricing-list {
          width: 100%;
          padding: 0;
          margin: 0;
          list-style: none;
        }
        .pricing-list li {
          color: #f7f7fa;
          font-size: 1.04rem;
          font-weight: 500;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .pricing-list li strong {
          color: #ffd700;
          font-size: 1.13rem;
          font-weight: 700;
          margin-left: 8px;
        }
        .ticket-type {
          color: #2563eb;
          font-size: 1.04rem;
          font-weight: 700;
          margin: 12px 0 4px 0;
          letter-spacing: 0.5px;
        }
        .ticket-type ion-icon {
          margin-right: 6px;
          color: #2563eb;
          font-size: 1.1em;
          opacity: 0.8;
        }
        .divider-card {
          border-bottom: 2.5px solid #2563eb;
          margin: 10px 0 10px 0;
          height: 0;
          width: 100%;
        }
        .situational .divider-card {
          border-bottom: 2.5px solid #ffd700;
        }
        .situational .pricing-title {
          color: #ffd700;
        }
        .situational .pricing-card-days {
          color: #ffd700;
        }
        @media (max-width: 900px) {
          .pricing-cards {
            flex-direction: column;
            gap: 24px;
            align-items: center;
          }
          .pricing-card {
            max-width: 400px;
            width: 100%;
          }
          .pricing-inner {
            padding: 0 10px;
          }
        }
      `}</style>
    </>
  );
}
