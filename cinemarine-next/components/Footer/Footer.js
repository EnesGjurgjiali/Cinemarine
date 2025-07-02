import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.container}>
          <div className={styles.footerBrandWrapper}>
            <Link href="/" className={styles.logo}>
              <img src="/assets/img/logos/logo-1.png" alt="Cinemarine Logo" />
            </Link>
            <ul className={styles.footerList}>
              <li>
                <a
                  href="#"
                  className={`${styles.footerLink} ${styles.footerLocation}`}
                >
                  <ion-icon name="location-outline"></ion-icon>
                  ABI Çarshia, Rr. Tirana p.n., Prizren
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  <ion-icon name="call-outline"></ion-icon>
                  +38349137222
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={styles.footerLink}
                  style={{ textTransform: "lowercase" }}
                >
                  <ion-icon name="mail-outline"></ion-icon>
                  info@cinemarine-eu.com
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.divider}></div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <p className={styles.copyright}>
            &copy; 2022 <a href="#">cinemarine </a>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
