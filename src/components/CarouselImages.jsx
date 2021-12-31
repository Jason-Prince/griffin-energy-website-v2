import Image from "next/image"
import styles from "../styles/CarouselImages.module.scss"

const CarouselImages = ({ images }) => {
    return (
        <>
            {images.map(({ src, width, height, layout, alt }, index) => (
                <>
                    <Image src={src} width={width} height={height} layout={layout} alt={alt} />
                </>
            ))}
        </>
    )
}

export default CarouselImages
