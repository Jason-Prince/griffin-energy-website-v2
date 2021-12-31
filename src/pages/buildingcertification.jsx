import Image from "next/image"
import styles from "../styles/BuildingCertification.module.scss"

const data = [
    {
        img: {
            src: "/buildingcertification/LEED.jpg",
            width: 834,
            height: 551,
            layout: "responsive",
            alt: "LEED Certification",
        },
        name: "LEED® Certification",
        description: {
            p1: "LEED is the most widely used green building rating system in the world. Available for virtually all building types, LEED provides a framework for healthy, highly efficient, and cost-saving green buildings. LEED certification is a globally recognized symbol of sustainability achievement and leadership.",
        },
    },
    {
        img: {
            src: "/buildingcertification/GBILogomarkMain.png",
            width: 1041,
            height: 557,
            layout: "responsive",
            alt: "Green Globes",
        },
        name: "Green Globes®",
        description: {
            p1: "Green Globes is a comprehensive, science-based building rating system that supports a wide range of new construction and existing building project types. Designed to allow building owners and managers to select which sustainability features best fit their building and occupants, Green Globes certifies projects that meet at least 35% of the 1,000 points that are deemed applicable to the project. Our custom-tailored approach helps you produce the most sustainable outcomes based on your building’s type and purpose. The Green Globes user-friendly software allows project teams to import and monitor performance for individual buildings through entire portfolios.",
        },
    },
    {
        img: {
            src: "/buildingcertification/ZeroEnergyLogo.png",
            width: 1285,
            height: 658,
            layout: "responsive",
            alt: "ILFI Zero Energy",
        },
        name: "ILFI Zero Energy®",
        description: {
            p1: "Some of the most efficient buildings in the world, reducing their energy use by as much as 90% from average, go unnoticed. Reveal is an elegant, third-party tool that highlights your high-performance projects and shows off your leadership in creating climate solutions.",
        },
    },
    {
        img: {
            src: "/buildingcertification/ES.jpg",
            width: 297,
            height: 304,
            layout: "responsive",
            alt: "ENERGY STAR",
        },
        name: "ENERGY STAR®",
        description: {
            p1: "ENERGY STAR certified buildings save energy, save money, and help protect the environment by generating fewer greenhouse gas emissions than typical buildings. To be certified as ENERGY STAR, a building must meet strict energy performance standards set by EPA.",
            p2: "Specifically, to be eligible for ENERGY STAR certification, a building must earn an ENERGY STAR score of 75 or higher on EPA’s 1 – 100 scale, indicating that it performs better than at least 75 percent of similar buildings nationwide. This 1 – 100 ENERGY STAR score is based on the actual, measured energy use of a building and is calculated within EPA’s ENERGY STAR Portfolio Manager tool. The score accounts for differences in operating conditions, regional weather data, and other important considerations.",
            p3: "Certification is given on an annual basis, so a building must maintain its high performance to be certified year to year. And the information submitted in the certification application must be verified by a licensed Professional Engineer (PE) or Registered Architect (RA) to be eligible for approval.",
        },
    },
]

const BuildingCertification = () => {
    return (
        <>
            <div className={styles.page}>
                <div className={styles.header}>
                    <h1>Building Certification</h1>
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
                            <div className={styles.description}>
                                <p>{item.description.p1}</p>
                                <p>{item.description.p2}</p>
                                <p>{item.description.p3}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BuildingCertification
