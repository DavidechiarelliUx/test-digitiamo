import React from "react";

import styles from "./HttpBlock1.module.scss"

const HttpBlock1 = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>RESPONSE</p>
            <div className={styles.infoItem}>
                <span>HTTP/1.1 302</span>
            </div>
            <div className={styles.infoItem}>
                <span>Location:/newpage.php</span>
            </div>
            <div className={styles.infoItem}>
                <span>Server:Apache / 2.2.14</span>
            </div>
        </div>
    )
}

export default HttpBlock1;
