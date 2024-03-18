import {enc} from "crypto-js";
import AES from "crypto-js/aes";

export const cripto = () => {
	const aesEncrypt = (message: string, key: string) =>{
		return AES.encrypt(message, key).toString();
	};

	const aesDecrypt = (hash: string, key: string) =>{
		const bytes=  AES.decrypt(hash, key);
		return bytes.toString(enc.Utf8);
	};

	return{
		aesEncrypt,
		aesDecrypt
	};
};
