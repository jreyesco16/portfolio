import styles from './AboutMe.module.css'
import Image from "next/image";

const AboutMe = () => {
    return (
        <div className={styles.body}>
            <h2><strong>About Me</strong></h2>

            <Image src={"/jesse.jpeg"} height={150} width={150} layout={"intrinsic"} alt={"jesse"}></Image> <br/>
            <span><strong>Born:</strong> Red Bluff, CA April 16, 1995<br/>   
            <strong>From:</strong> Lincoln, NE USA 1999 - 2020<br/>   
            <strong>Current:</strong> Austin, TX USA 2021-Current</span><br/><br/>
        </div>
    )
}

export default AboutMe;
