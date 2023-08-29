import React from "react"
import styles from './cell.modules.scss'

export interface CellProps {
    headerText:string
    footerText:string
}
export const Cell =({headerText, footerText}:CellProps)=>{
    return <div className={styles.wrapper}>
        <div className={styles.headerText}>{headerText}</div>
        <div className={styles.footerText}>{footerText}</div>
    </div>
}