import React from "react";
import { useState } from "react";
import styles from "./FormComponent.module.scss";

const FormComponent = ({onSubmit}) => {

    const [inputUrl, setInputUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValidUrl(inputUrl)) {
            alert("Per favore inserisci un URL valido");
            return;
        }
        onSubmit(inputUrl);
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