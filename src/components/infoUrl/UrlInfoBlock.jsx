import React from "react";

import styles from "./UrlInfoBlock.module.scss";

const UrlInfoBlock = ({ url }) => {
    let domain = "";
    let scheme = "";
    let path = "";

    try {
        const parsedUrl = new URL(url);
        domain = parsedUrl.hostname;
        scheme = parsedUrl.protocol;
        path = parsedUrl.pathname;
    } catch (error) {
        // Non fare nulla se l'URL non è valido
    }

    return (
        <div className={styles.container}>
            <p className={styles.p}>URL INFO</p>
            <div className={styles.infoItem}>
                <label>DOMAIN:</label> 
                <span>{domain || ""}</span>
            </div>
            <div className={styles.infoItem}>
                <label>SCHEME:</label>
                <span>{scheme || ""}</span>
            </div>
            <div className={styles.infoItem}>
                <label>PATH:</label>
                <span>{path || ""}</span>
            </div>
        </div>
    );
};

export default UrlInfoBlock;






