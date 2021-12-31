import Image from "next/image"
import styles from "../styles/ZeroNetEnergy.module.scss"

const ZeroNetEnergy = () => {
    return (
        <>
            <div className={styles.grid_wrapper}>
                {/* **************SECTION**************** */}
                <div className={styles.section_zero_net_energy}>
                    <div className={styles.title}>Zero Net Energy</div>
                    {/* **************CARD**************** */}
                    <div className={styles.card_zne_multifamily_infografic}>
                        <h3 className={styles.h3}>ZNE Multifamily Infografic</h3>
                        <div className={styles.img}>
                            <Image
                                src="/zeronetenergy/ZNEMultifamilyInfografic.jpg"
                                width={5100}
                                height={3300}
                                layout="responsive"
                                alt="ZNE Multifamily Infografic"
                            />
                        </div>
                    </div>
                    {/* **************CARD**************** */}
                    <div className={styles.card_zne_residential_infographic}>
                        <h3 className={styles.h3}>ZNE Residential Infographic</h3>
                        <div className={styles.img}>
                            <Image
                                src="/zeronetenergy/ZNEResidentialInfographic.png"
                                width={3400}
                                height={2200}
                                layout="responsive"
                                alt="ZNE Residential Infographic"
                            />
                        </div>
                    </div>
                    {/* **************SUMMARY**************** */}
                    <div className={styles.summary}>
                        <div className={styles.paragraph_wrapper}>
                            <p>
                                Griffin EnerG Consulting approached the Governor’s Office of Energy
                                Development (OED), Rocky Mountain Power (RMP), and Dominion about
                                educating developers, contractors, and design professionals on zero
                                net energy building principles (Climate Zone 5B) through a series of
                                infographics.
                            </p>
                            <p>
                                The results of the effort was in the form of interactive,
                                web-capable infographics for both single family homes and
                                multi-family projects.
                            </p>
                        </div>
                    </div>
                </div>
                {/* **************SECTION**************** */}
                <div className={styles.section_certifications}>
                    <div className={styles.section_title}>Certifications</div>
                    {/* **************CARD**************** */}
                    <div className={styles.card_living_building_challenge}>
                        <h3 className={styles.h3}>Living Building Challenge</h3>
                        <div className={styles.img}>
                            <Image
                                src="/zeronetenergy/LivingBuildingChallenge.jpg"
                                width={1600}
                                height={1200}
                                layout="responsive"
                                alt="Living Building Challenge"
                            />
                        </div>
                        <div className={styles.description}>
                            <p>
                                Project:&emsp;
                                <strong>Arch|Nexus Sac</strong>&nbsp;(Sacramento, CA)
                            </p>
                            <p>
                                Certification Level:&emsp;
                                <strong>Full</strong>
                            </p>
                            <p>
                                ZNE Approach:&emsp;
                                <strong>On-site Generation</strong>
                            </p>
                            <p>
                                ZNE Status:&emsp;
                                <strong>Verified</strong>
                            </p>
                            <p>
                                <small>Under separate tenure</small>
                            </p>
                        </div>
                        <div className={styles.img_logo}>
                            <Image
                                src="/zeronetenergy/LivingBuildingChallengeLogo.jpg"
                                width={150}
                                height={53}
                                layout="fixed"
                                alt="Living Building Challenge Logo"
                            />
                        </div>
                    </div>
                    {/* **************CARD**************** */}
                    <div className={styles.card_green_globes}>
                        <h3 className={styles.h3}>Green Globes</h3>
                        <div className={styles.img}>
                            <Image
                                src="/zeronetenergy/GreenGlobes.jpg"
                                width={1050}
                                height={693}
                                layout="responsive"
                                alt="Green Globes"
                            />
                        </div>
                        <div className={styles.description}>
                            <p>
                                Project:&emsp;
                                <strong>Wynn South Convention Expansion</strong>&nbsp; (Las Vegas,
                                NV)
                            </p>
                            <p>
                                Certification Level:&emsp;
                                <strong>Three Green Globes</strong>
                            </p>
                            <p>
                                ZNE Approach:&emsp;
                                <strong>On/Off-site Generation</strong>
                            </p>
                            <p>
                                ZNE Status:&emsp;
                                <strong>Pending Verification</strong>
                            </p>
                        </div>
                        <div className={styles.img_logo}>
                            <Image
                                src="/zeronetenergy/GreenGlobesLogo.jpg"
                                width={150}
                                height={126}
                                layout="fixed"
                                alt="Green Globes Logo"
                            />
                        </div>
                    </div>

                    {/* **************CARD**************** */}
                    <div className={styles.card_highland_drive}>
                        <h3 className={styles.h3}>ILFI Zero Energy</h3>
                        <div className={styles.img}>
                            <Image
                                src="/zeronetenergy/HighlandDrive.jpg"
                                width={4032}
                                height={3024}
                                layout="responsive"
                                alt="Highland Drive"
                            />
                        </div>
                        <div className={styles.description}>
                            <p>
                                Project:&emsp;
                                <strong>Highland Drive Certification</strong>
                                (Holladay, UT)
                            </p>
                            <p>
                                Level:&emsp;
                                <strong>Full</strong>
                            </p>
                            <p>
                                ZNE Approach:&emsp;
                                <strong>On-site Generation</strong>
                            </p>
                            <p>
                                ZNE Status:&emsp;
                                <strong>Verified</strong>
                            </p>
                        </div>
                        <div className={styles.img_logo}>
                            <Image
                                src="/zeronetenergy/ZeroEnergyLogo.png"
                                width={150}
                                height={77}
                                layout="fixed"
                                alt="Zero Energy Logo"
                            />
                        </div>
                    </div>
                    {/* **************CARD**************** */}
                    <div className={styles.card_lincoln_lane}>
                        <h3 className={styles.h3}>ILFI Zero Energy</h3>
                        <div className={styles.img}>
                            <Image
                                src="/zeronetenergy/LincolnLane.jpg"
                                width={1600}
                                height={1200}
                                layout="responsive"
                                alt="Lincoln Lane"
                            />
                        </div>
                        <div className={styles.description}>
                            <p>
                                Project:&emsp;
                                <strong>Lincoln Lane</strong>
                            </p>
                            <p>
                                Certification Level:&emsp;
                                <strong>Full</strong>
                            </p>
                            <p>
                                ZNE Approach:&emsp;
                                <strong>On-site Generation</strong>
                            </p>
                            <p>
                                ZNE Status:&emsp;
                                <strong>Verified</strong>
                            </p>
                        </div>
                        <div className={styles.img_logo}>
                            <Image
                                src="/zeronetenergy/ZeroEnergyLogo.png"
                                width={150}
                                height={77}
                                layout="fixed"
                                alt="Zero Energy Logo"
                            />
                        </div>
                    </div>

                    <div className={styles.section_summary}>
                        <div className={styles.paragraph_wrapper}>
                            <p>
                                The most effective way of verifying the status of a zero net energy
                                (ZNE) building is via third party verification. I have had the
                                opportunity to work on the design and operation of several ZNE
                                projects which have been verified by a third party through a
                                certification system. The Living Building Challenge, Green Globes,
                                and the International Living Future Institute’s (ILFI) zero energy
                                certification are relevant work examples illustrated below.
                            </p>
                        </div>
                    </div>
                </div>
                {/* **************SECTION**************** */}
                <div className={styles.section_non_certifications}>
                    <div className={styles.section_title}>Non-Certifications</div>

                    {/* **************CARD**************** */}
                    <div className={styles.card_us_bureau_of_reclamation}>
                        <h3 className={styles.h3}>
                            US Bureau of Reclamation
                            <br />
                            (Pleasant Grove, UT)
                        </h3>
                        <div className={styles.img}>
                            <Image
                                src="/zeronetenergy/USBureauOfReclamation.jpg"
                                width={5000}
                                height={2768}
                                layout="responsive"
                                alt="US Bureau of Reclamation"
                            />
                        </div>
                        <div className={styles.description}>
                            <p>
                                ZNE Status:&emsp;
                                <strong>On-site Generation</strong>
                            </p>
                            <p>
                                ZNE Status:&emsp;
                                <strong>Feasibility Study</strong>
                            </p>
                            <p>
                                <small>Under separate tenure</small>
                            </p>
                        </div>
                    </div>
                    {/* **************CARD**************** */}
                    <div className={styles.card_slc_fire_station}>
                        <h3 className={styles.h3}>
                            SLC Fire Station #14
                            <br />
                            (SLC, UT)
                        </h3>
                        <div className={styles.img}>
                            <Image
                                src="/zeronetenergy/SLCFireStation.png"
                                width={5000}
                                height={2768}
                                layout="responsive"
                                alt="SLC Fire Station #14"
                            />
                        </div>
                        <div className={styles.description}>
                            <p>
                                ZNE Status:&emsp;
                                <strong>On-site Generation</strong>
                            </p>
                            <p>
                                ZNE Status:&emsp;
                                <strong>Post Occupancy Evaluation</strong>
                            </p>
                        </div>
                    </div>
                    {/* **************SUMMARY**************** */}
                    <div className={styles.section_summary}>
                        <div className={styles.paragraph_wrapper}>
                            <p>
                                The Department of Energy’s (DOE) zero net energy building (ZNEB)
                                definition is an alternative path to third party certifications. On
                                multiple occasions, I have had the opportunity to provide
                                feasibility studies and post occupancy evaluation for getting
                                projects to ZNE. The projects below illustrate projects which either
                                explored ZNE and chose not to obtain the status or the owner
                                experienced issues getting to ZNE and required corrective action
                                post occupancy to obtain the operational goal.
                            </p>
                        </div>
                    </div>
                </div>
                {/* **************SECTION**************** */}
                <div className={styles.section_project_credits}>
                    <div className={styles.section_title}>Project Credits</div>

                    {/* **************SUMMARY**************** */}
                    <div className={styles.section_summary}>
                        <div className={styles.paragraph_wrapper}>
                            <p>Emma Shipley, Graphic Designer, ZNE Infographics</p>
                            <p>Shawna Cuan, Project Manager, ZNE Infographics</p>
                            <p>Joseph Yee, Architect, Arch|Nexus SAC</p>
                            <p>Frank Moore, Wynn Architect, Wynn South Convention Expansion</p>
                            <p>Amir Haskic, Owner, Lincoln Lane Residence</p>
                            <p>Amir Haskic, Owner, Highland Drive</p>
                            <p>
                                Stephen Dundorf, Sustainable Building Design, US Bureau of
                                Reclamation
                            </p>
                            <p>Cameron Scott, SLC CxA, Fire Station 14</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ZeroNetEnergy
