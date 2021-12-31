import { cards, carousel_cards } from "../../utils/services/data"

import Card from "../components/Card"
import CarouselCard from "../components/CarouselCard"
import styles from "../styles/Services.module.scss"

const services = () => {
    return (
        <>
            <div className={styles.page}>
                <div className={styles.page_title}>
                    <h1>Services</h1>
                </div>
                <section className={styles.cards}>
                    <CarouselCard carousel_cards={carousel_cards} />
                    <Card cards={cards} />
                </section>
            </div>
        </>
    )
}

export default services
