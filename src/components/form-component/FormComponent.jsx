import React from "react";
import { useState } from "react";
import styles from "./FormComponent.module.scss";

const FormComponent = ({onSubmit}) => {

    const [inputUrl, setInputUrl] = useState("");
    const [statusMessage, setStatusMessage] = useState("");
    const [status,setStatus] = useState(null)


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValidUrl(inputUrl)) {
            alert("Per favore inserisci un URL valido");
            setStatus(null);
            return;
        }
        onSubmit(inputUrl);
        setStatus({ code: "200", message: "Everything is fine" });
    };
    
    // Funzione di utilità per controllare la validità di un URL
    const isValidUrl = (string) => {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;  
        }
    };
    
    return (
        <>
            {status && (
                <div className={styles.statusContainer}>
                    <span className={styles.statusCode}>{status.code}</span>
                    <span className={styles.statusMessage}>{status.message}</span>
                </div>
            )}
            <form className={styles.form} onSubmit={handleSubmit}>
                <select className={styles.select}>
                    {/* aggiunta dei metodi http*/}
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="PUT">PUT</option>
                    <option value="DELETE">DELETE</option>
                    <option value="INFO">INFO</option>
                    <option value="DUMB">DUMB</option>
                </select>
                
                <input type="url"
                className={styles.input}
                placeholder="Inserisci URL"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                />

                <button type="submit" className={styles.button}>SEND</button>
            </form>
        </>
    );
};


export default FormComponent;