import React from "react"

import styles from './card.modules.scss'
import {Cell} from '../cell/Cell'
import { Image,ImageProps } from "../../atoms"

export interface CardProps {
    imageProps: ImageProps
    name:string
    email:string
    dateOfBirth:string
    address:string
    phone:string
    password:string
}
//        

export const Card =({imageProps,name,email,dateOfBirth, phone, address, password}: CardProps)=>{
    return <div className={styles.card}>
        <Image {...imageProps}></Image>
        <Cell headerText={name}footerText={email}></Cell>
        <Cell headerText={dateOfBirth} footerText="Birth date"></Cell>
        <Cell headerText={address} footerText="Address"></Cell>
        <Cell headerText={phone} footerText="Phone number"></Cell>
        <Cell headerText={password} footerText="Password"></Cell>
    </div>
}