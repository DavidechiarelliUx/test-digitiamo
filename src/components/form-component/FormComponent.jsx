import React from "react";

import styles from "./FormComponent.module.scss";

const FormComponent = () => {
    return (
        <>
            <form className={styles.form}>
                <select className={styles.select}>
                    {/* aggiunta dei metodi http*/}
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="PUT">PUT</option>
                    <option value="DELETE">DELETE</option>
                    <option value="INFO">INFO</option>
                    <option value="DUMB">DUMB</option>
                </select>
                
                <input type="url" className={styles.input} placeholder="Inserisci URL" />

                <button type="submit" className={styles.button}>SEND</button>
            </form>
        </>
    );
};


export default FormComponent;