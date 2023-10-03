import React from "react";

import styles from "./ShareLink.module.scss";

const ShareLink = () => {
    const shareLink = "httprequest.com/1a54da684864";

    return (
        <>
            <h1 className={styles.Share}>SHARE</h1>
            <a  className={styles.Link} href="#" onClick={(e) => e.preventDefault()}>{shareLink}</a>
        </>
    );
};

export default ShareLink;