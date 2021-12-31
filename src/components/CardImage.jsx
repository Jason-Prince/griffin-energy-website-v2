import Image from "next/image"
import styles from "../styles/CardImage.module.scss"

const CardImage = ({ image }) => {
    const { src, width, height, layout, alt } = image
    return (
        <>
            <Image src={src} width={width} height={height} layout={layout} alt={alt} />
        </>
    )
}

export default CardImage
