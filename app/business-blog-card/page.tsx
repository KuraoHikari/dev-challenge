import Image from "next/image";
import styles from "./page.module.css";

const Home = () => {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        {/* Card Body */}
        <div className={styles.cardBody}>
          {/* Card Image */}
          <div className={styles.cardHeroImage}>
            <Image
              src="/business-blog-card/hero-image-business-card.png"
              alt=""
              width={836}
              height={560}
              className={styles.cardImage}
            />
            <Image
              src="/business-blog-card/white-overlay.svg"
              alt=""
              width={450}
              height={75}
              className={styles.cardImageSVG}
            />
          </div>

          {/* Card Text */}
          <div className={styles.cardText}>
            <h1>Perfect solution for small business</h1>

            <p>
              Small businesses need to generate leads to grow. You can use tools
              like Ringy.
            </p>
          </div>
        </div>
        {/* Card Footer */}
        <div className={styles.cardFooter}>
          <Image
            src="/business-blog-card/avatar-image-business-card.png"
            width={40}
            height={40}
            alt="Avatar Image"
            className={styles.cardFooterAuthorImage}
          />
          <div className={styles.cardFooterAuthor}>
            <h2>Amy Burgess</h2>

            <p>Customer Manger, Solution Oy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
