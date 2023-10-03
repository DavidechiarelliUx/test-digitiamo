import React from "react";
import styles from "./HttpBlock2.module.scss";

const HttpBlock2 = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>RESPONSE</p>
            <div className={styles.infoItem}>
                <span>HTTP/1.1 200 OK</span>
            </div>
            <div className={styles.infoItem}>
                <span>Date: Mon, 27 Jul 2009</span>
            </div>
            <div className={styles.infoItem}>
                <span>Server: Apache/2.2.14 (Win32)</span>
            </div>
        </div>
    );
}

export default HttpBlock2;
