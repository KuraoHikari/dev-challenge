import Image from "next/image";
import styles from "./page.module.css";

const Home = () => {
 return (
  <div className={styles.page}>
   <div className={styles.container}>
    <div className={styles.reviewers}>
     <div className={styles.reviewLogo}>⭐️</div>
     <h1>Reviewers</h1>
     <p>
      Reviewers is where people can access guidelines, checklists, and other tools to assist them in reviewing papers or
      manuscripts. It provides a structured approach to ensure that the review process is thorough, efficient, and
      consistent.
     </p>
     <div className={styles.reviewList}>
      <ul>
       <li>Checklist to Review an Academic Paper</li>
       <li>Peer Review Checklist</li>
       <li>Checklist for Editors, Reviewers, and Authors of SPIE Journals</li>
      </ul>
     </div>
    </div>
    <div className={styles.testiMonialCard}>
     <div className={styles.cardRight}>
      <div className={styles.card}>
       <div className={styles.cardHeader}>
        <Image
         src="/testimonial-page/google-testimonial.png"
         alt="testimonialImage"
         width={80}
         height={25}
         className={styles.cardLogo}
        />
        <div className={styles.cardRating}>
         <Image
          src="/testimonial-page/Star_fill.svg"
          alt="star-rating"
          width={25}
          height={25}
          className={styles.starRating}
         />
         <Image
          src="/testimonial-page/Star_fill.svg"
          alt="star-rating"
          width={25}
          height={25}
          className={styles.starRating}
         />
         <Image
          src="/testimonial-page/Star_fill.svg"
          alt="star-rating"
          width={25}
          height={25}
          className={styles.starRating}
         />

         <Image
          src="/testimonial-page/Star_fill.svg"
          alt="star-rating"
          width={25}
          height={25}
          className={styles.starRating}
         />
         <Image
          src="/testimonial-page/Star_fill.svg"
          alt="star-rating"
          width={25}
          height={25}
          className={styles.starRating}
         />
        </div>
       </div>
       <div className={styles.cardBody}>
        <h4>Samantha Lee</h4>
        <p>The checklist ensures that the review process is thorough</p>
       </div>
      </div>
     </div>
     <div className={styles.cardLeft}>
      <div className={styles.card}>
       <div className={styles.cardHeader}>
        <Image
         src="/testimonial-page/meta-testimonial.png"
         alt="testimonialImage"
         width={80}
         height={28}
         className={styles.cardLogo}
        />
        <div className={styles.cardRating}>
         <Image
          src="/testimonial-page/Star_fill.svg"
          alt="star-rating"
          width={25}
          height={25}
          className={styles.starRating}
         />
         <Image
          src="/testimonial-page/Star_fill.svg"
          alt="star-rating"
          width={25}
          height={25}
          className={styles.starRating}
         />
         <Image
          src="/testimonial-page/Star_fill.svg"
          alt="star-rating"
          width={25}
          height={25}
          className={styles.starRating}
         />

         <Image
          src="/testimonial-page/Star_fill.svg"
          alt="star-rating"
          width={25}
          height={25}
          className={styles.starRating}
         />
         <Image
          src="/testimonial-page/Star_fill.svg"
          alt="star-rating"
          width={25}
          height={25}
          className={styles.starRating}
         />
        </div>
       </div>
       <div className={styles.cardBody}>
        <h4>Rachel Patel</h4>
        <p>I highly recommend the Writecream Business Description</p>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Home;
