import Image from "next/image"
import styles from "../styles/Latitudestudy.module.scss"

const data = [
    {
        img: {
            src: "/latitudestudy/Latitude_1.jpg",
            width: 3024,
            height: 1152,
            layout: "intrinsic",
            alt: "Latitude Study 1",
        },
    },
    {
        img: {
            src: "/latitudestudy/Latitude_2.jpg",
            width: 3024,
            height: 1152,
            layout: "intrinsic",
            alt: "Latitude Study 2",
        },
    },
    {
        img: {
            src: "/latitudestudy/Latitude_3.jpg",
            width: 3024,
            height: 1152,
            layout: "intrinsic",
            alt: "Latitude Study 3",
        },
    },
    {
        img: {
            src: "/latitudestudy/Latitude_4.jpg",
            width: 3024,
            height: 1152,
            layout: "intrinsic",
            alt: "Latitude Study 4",
        },
    },
    {
        img: {
            src: "/latitudestudy/Latitude_5.jpg",
            width: 3024,
            height: 1152,
            layout: "intrinsic",
            alt: "Latitude Study 5",
        },
    },
]

const latitudestudy = () => {
    return (
        <>
            <div className={styles.page}>
                <div className={styles.header}>
                    <h1>Latitude Study</h1>
                </div>
                <div className={styles.cards}>
                    {data.map((item, index) => (
                        <div className={styles.card} key={index}>
                            <Image
                                src={item.img.src}
                                width={item.img.width}
                                height={item.img.height}
                                layout={item.img.layout}
                                alt={item.img.alt}
                                className={styles.img}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default latitudestudy
