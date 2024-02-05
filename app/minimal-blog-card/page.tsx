import Image from "next/image";
import styles from "./page.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      {/* Card */}
      <div className={styles.card}>
        {/* Item Image */}

        <Image
          src="/minimal-blog-card/cactus_img.jpg"
          alt="Cactus image"
          width={336}
          height={152}
          className={styles.image}
        />

        {/* Item Category */}
        <div className={styles.category}>
          <span className={styles.buttonCategory}>Design</span>
        </div>

        {/* Item Title */}
        <div className={styles.cardTitle}>
          <h2>Embracing Minimalism</h2>
        </div>

        {/* Item Desc */}
        <div className={styles.cardDesc}>
          <p>
            From minimalist sculptures to minimalist paintings, this blog will
            inspire you to appreciate the beauty that lies in simplicity.
          </p>
        </div>

        {/* Author */}

        {/* <div className={styles.cardAuthor}>
          <p>Annie Spratt</p>
        </div> */}
      </div>
      <div className={styles.cardAuthor}>
        <p>Annie Spratt</p>
      </div>
    </div>
  );
};

export default Home;
