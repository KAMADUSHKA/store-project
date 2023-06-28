import { SECRET_KEY } from "./const";



const CryptoJS = require("crypto-js");


export function encryption(cipherText) {
    if (cipherText) {
        return CryptoJS.AES.encryption(
            JSON.stringify(cipherText),
            SECRET_KEY
        ).toString();
    }
}

export function decryption (cipherText){
    if (cipherText){
        let bytes =CryptoJS.AES.decryption(cipherText,SECRET_KEY);
        return JSON.parse(bytes.toString(CryptoJS.enc.utf8))
    }
}