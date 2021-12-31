import Image from "next/image"
import styles from "../styles/AboutUs.module.scss"

const data = [
    {
        img: {
            src: "/aboutus/david.jpg",
            width: 1726,
            height: 2400,
            layout: "responsive",
            alt: "David W Griffin II",
        },
        name: "David W Griffin II",
        introduction:
            "Trained in both architecture and building science, I have focused my career on the integration of the built environment and energy conserving/consuming systems. A focus on whole building energy simulation allows me to provide investment grade financial analysis to all parties involved proving the business case for sustainability in both new construction and existing buildings. My experience includes healthcare, higher education, commercial, federal and municipal buildings. Applying my experience, I continue to push the envelope and diligently seek out opportunities to save the world - one building at a time.",
        qualifications: "License and Certifications: AIA | BEMP | GGA",
    },
]

const aboutus = () => {
    return (
        <>
            <div className={styles.page}>
                <div className={styles.header}>
                    <h1>About Us</h1>
                </div>
                <div className={styles.cards}>
                    {data.map((item, index) => (
                        <div className={styles.card} key={index}>
                            <div className={styles.img}>
                                <Image
                                    src={item.img.src}
                                    width={item.img.width}
                                    height={item.img.height}
                                    layout={item.img.layout}
                                    alt={item.img.alt}
                                />
                            </div>
                            <div className={styles.name}>
                                <h2>{item.name}</h2>
                            </div>
                            <div className={styles.introduction}>
                                <p>{item.introduction}</p>
                            </div>
                            <div className={styles.qualifications}>
                                <p>{item.qualifications}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default aboutus
