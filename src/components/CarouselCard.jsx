import CarouselImages from "../components/CarouselImages"
import ListItems from "../components/ListItems"
import Paragraphs from "../components/Paragraphs"
import styles from "../styles/CarouselCards.module.scss"
import { useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"

const CarouselCards = ({ carousel_cards }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

    useEffect(() => {
        if (emblaApi) {
            // Ebla API is ready
        }
    }, [emblaApi])

    return (
        <>
            {carousel_cards.map(({ images, heading, paragraphs, listItems }, index) => (
                <div className={styles.embla} ref={emblaRef} key={index}>
                    <div className={styles.embla_container}>
                        <div className={styles.embla_slide}>
                            <CarouselImages images={images} />
                        </div>
                    </div>
                    <div className={styles.content_container}>
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

export default CarouselCards
