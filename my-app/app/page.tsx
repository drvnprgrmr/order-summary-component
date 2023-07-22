import styles from "./page.module.css";


export default function Home() {
    return (
        <main>
            <div className="hero-img"></div>
            <div>
                <h1>Order Summary</h1>
                <p>
                    You can now listen to millions of songs, audiobooks, and
                    podcasts on any device anywhere you like!
                </p>
                <div>
                    <img src="./images/illustration-hero.svg" alt="hero img" />
                    <p>Annual Plan</p>
                    <p>$59.99/year</p>
                    <p>Change</p>
                </div>
                <button>Proceed to Payment</button>
                <button>Cancel Order</button>
            </div>

            <div className={styles.attribution}>
                Challenge by
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                >
                    Frontend Mentor
                </a>
                . Coded by <a href="https://github.com/drvnprgrmr">drvnprgrmr</a>.
            </div>
        </main>
    );
}
