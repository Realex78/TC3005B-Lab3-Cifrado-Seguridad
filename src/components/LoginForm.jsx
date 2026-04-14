import { React, useState } from 'react'
import CryptoJS from 'crypto-js'

const LoginForm = () => {
    const [plainText, setPlainText] = useState("");
    const [ciphered, setCiphered] = useState("");
    const [deciphered, setDeciphered] = useState("");

    const cifrar = (texto) => {
        var textoCifrado = CryptoJS.AES.encrypt(texto, '12345678').toString();
        return textoCifrado;
    }

    const descifrar = (texto) => {
        var bytes = CryptoJS.AES.decrypt(texto, '12345678');
        var textoDescifrado = bytes.toString(CryptoJS.enc.Utf8);
        return textoDescifrado;
    }

    const plainTextInputChangeHandler = (ev) => {
        setPlainText(ev.target.value);
    }

    const cipherClickHandler = (ev) => {
        ev.preventDefault();
        setCiphered(cifrar(plainText));
    }

    const decipherClickHandler = (ev) => {
        setDeciphered(descifrar(ciphered));
    }

    return (
        <>
            <form>
                <input id='plainTextInput' onChange={plainTextInputChangeHandler}></input>
                <button onClick={cipherClickHandler}>Cifrar</button>
            </form>
            <p>Texto cifrado: {ciphered}</p>
            <button onClick={decipherClickHandler}>Descifrar</button>
            <p>Texto descifrado: {deciphered}</p>
        </>
    )
}

export default LoginForm