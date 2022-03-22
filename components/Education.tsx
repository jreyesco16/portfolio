import Image from "next/image";
import { Space } from "antd";

import styles from "./Education.module.css"

const Education = () => {
    return (
        <div className={styles.body}>
            <h2><strong>Education</strong></h2>
            <Space direction="vertical" className={styles.space}>
                <Image src={"/unl-big.png"} height={70} width={210} layout={"fixed"} alt={"unl logo"} />
                <span>
                    <strong>Attened: </strong> Fall 2013 - Fall 2020 <br/>
                    <strong>Bachelors:</strong> Arts and Science <br/>
                    <strong>Major: </strong> Computer Science <strong>Minor:</strong> Mathematics
                </span>
            </Space>
        </div>
    )
}

export default Education;