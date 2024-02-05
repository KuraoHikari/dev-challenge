import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.mainContent}>
      <div className={styles.content}>
        <Image
          src="/c1/bg-cafe.jpg"
          alt="bg"
          className={styles.image}
          width={1380}
          height={400}
        ></Image>
        <div className={styles.contentProduct}>
          <div className={styles.contentText}>
            <h2>Our Collection</h2>
            <h4 className={styles.subtitle}>
              Introducing our Coffee Collection, a selection of unique coffees
              from different roast types and origins, expertly roasted in small
              batches and shipped fresh weekly.
            </h4>
          </div>
        </div>
      </div>
    </main>
  );
}
