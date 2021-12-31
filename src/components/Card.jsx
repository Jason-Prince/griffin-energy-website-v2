import CardImage from "../components/CardImage"
import ListItems from "../components/ListItems"
import Paragraphs from "../components/Paragraphs"
import styles from "../styles/Card.module.scss"

const Card = ({ cards }) => {
    return (
        <>
            {cards.map(({ image, heading, paragraphs, listItems }, index) => (
                <div className={styles.card} key={index}>
                    <div className={styles.image}>
                        <CardImage image={image} />
                    </div>
                    <div className={styles.content}>
                        <h2 className={styles.heading}>{heading}</h2>
                        <div className={styles.paragraphs}>
                            <Paragraphs paragraphs={paragraphs} />
                        </div>
                        <ul className={styles.list_items}>
                            <ListItems listItems={listItems} />
                        </ul>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Card
