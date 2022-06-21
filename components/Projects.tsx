import styles from "./Projects.module.css"

const Projects = () => {
    return (
        <div className={styles.body}>
            <h2><strong>Projects</strong></h2>

            {/* MARKET */}
            <span><strong>Market</strong> <br/>
             Feb 2021 - Current</span> <br/>

            {/* YAHTZEE ONLINE */}
             <span><strong>Yahtzee Online</strong></span> <br />
             Jan 2021 - May 2021 <br/>

            {/* INVOICE SYSTEM */}
             <span><strong>Invoice System</strong></span> <br />
             August 2018 - December 2018
        </div>
    )
}

export default Projects;