import styles from "../styles/Paragraphs.module.scss"

const Paragraphs = ({ paragraphs }) => {
    return (
        <>
            {paragraphs.map((paragraph, index) => (
                <p className={styles.paragraph} key={index}>
                    {paragraph}
                </p>
            ))}
        </>
    )
}

export default Paragraphs
