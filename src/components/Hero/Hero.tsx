import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h2>Unlimited movies, TV shows, and more</h2>
      <p>Starts at €4.99. Cancel anytime.</p>
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <input type="email" placeholder="Email address" />
      <button type="button">Get Started</button>
    </section>
  );
}