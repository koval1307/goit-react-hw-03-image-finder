import React from 'react'
import styles from "./button.module.css"



export function Button({ fetch }) {
    return (
        <button className={styles.Button} onClick={fetch}>
            Load more
        </button>
    );
};

