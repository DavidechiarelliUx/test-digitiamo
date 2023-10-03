import React, { useState, useEffect } from "react";
import styles from "./ShareLink.module.scss";

const ShareLink = () => {
    const [shareLink, setShareLink] = useState('');

    useEffect(() => {
        setShareLink(generateRandomLink());
    }, []);

    const generateRandomLink = (length = 10) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return 'httprequest.com/' + result;
    }

    return (
        <>
            <h1 className={styles.Share}>SHARE</h1>
            <a className={styles.Link} href="#" onClick={(e) => e.preventDefault()}>{shareLink}</a>
        </>
    );
};

export default ShareLink;
