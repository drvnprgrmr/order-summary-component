import styles from "./page.module.css";

export default function Home() {
    return (
        <main>
            Order Summary You can now listen to millions of songs, audiobooks,
            and podcasts on any device anywhere you like! Annual Plan
            $59.99/year Change Proceed to Payment Cancel Order
            <div className={styles.attribution}>
                Challenge by{" "}
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                >
                    Frontend Mentor
                </a>
                . Coded by <a href="#">Your Name Here</a>.
            </div>
        </main>
    );
}
