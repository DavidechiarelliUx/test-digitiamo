import React, { useState } from "react";
import styles from "./FormComponent.module.scss";
import { SearchIcon } from "../../icon/index";

const FormComponent = ({ onSubmit }) => {
    const [inputUrl, setInputUrl] = useState("");
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
    const httpMethod = e.target.elements.httpMethod.value;

    if (!isValidUrl(inputUrl)) {
        alert("Per favore inserisci un URL valido");
        setStatus(null);
        return;
    }

    try {
            const response = await fetch('https://api.npoint.io/0d69fb28f4d6f7bc48e7');
            const data = await response.json();
    
            if (data[httpMethod]) {
                const responseData = data[httpMethod].response;
                    setStatus({ code: data[httpMethod].status, message: responseData.message });
                    onSubmit(inputUrl);
                } else {
                    setStatus({ code: "500", message: "Errore durante la chiamata" });
                }
        } catch (error) {
                console.error("Errore durante la chiamata:", error);
                setStatus({ code: "500", message: "Errore durante la chiamata" });
                }
        };

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
                <select name="httpMethod" className={styles.select}>
                {/* Aggiunta dei metodi HTTP dal file JSON */}
                    <option value="metodoGet">GET</option>
                    <option value="metodoPost">POST</option>
                    <option value="metodoPut">PUT</option>
                    <option value="metodoDelete">DELETE</option>
                    <option value="metodoInfo">INFO</option>
                    <option value="metodoDumb">DUMB</option>
                </select>

                <input
                    type="url"
                    className={styles.input}
                    placeholder="Inserisci URL"
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                />
                <button type="submit" className={styles.button}>
                    <span className={styles.sendText}>SEND</span>
                    <span className={styles.iconWrapper}>
                    <SearchIcon />
                    </span>
                </button>
            </form>
        </>
        );
};

export default FormComponent;
