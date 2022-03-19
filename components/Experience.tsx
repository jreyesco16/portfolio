import { Space } from "antd";
import Image from "next/image";
import styles from "./Experience.module.css"

const Experience = () => {
    return (
        <div className={styles.body}>
            <h2><strong>Experience</strong></h2>

            <Image src={"/regular-phil.png"} height={50} width={200} layout={"fixed"} alt={"regular phil logo"}  /> <br />
            <span><strong>Software Developer</strong>: <strong>Regular Phil</strong> - DMSI UNL Senior Design</span> <br/>
            <span>Fall 2019 - Spring 2020</span><br/> <br/>
            
            <Image src={"/snyders-logo.png"} height={70} width={200} layout={"fixed"} alt={"snyders salvage logo"} /> <br/>
            <span><strong>Software Developer</strong>: <strong>Snyders Salvage</strong> <br/>
            July 2021-Current  </span>
        </div>
    )
}

export default Experience;