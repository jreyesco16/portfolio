import Image from "next/image";
import { Space } from "antd";

import styles from "./Education.module.css"

const Education = () => {
    return (
        <div className={styles.body}>
            <h2>Education</h2>
            <Image src={"/unl.png"} height={60} width={140} layout={"fixed"} alt={"unl logo"} /> <br/>
                <Space direction="vertical">
                    <span>University of Nebraska - Lincoln (UNL) <br/> Aug 2013 - Dec 2020 </span>
                </Space>
                <Space direction="vertical">
                    <span>
                        <strong>Bachelors:</strong> Arts and Science <br/>
                        <strong>Major: </strong> Computer Science <strong>Minor:</strong> Mathematics
                    </span>
                </Space>
        </div>
    )
}

export default Education;