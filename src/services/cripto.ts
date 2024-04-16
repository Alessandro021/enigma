import {enc} from "crypto-js";
import AES from "crypto-js/aes";
import MD5  from "crypto-js/md5";

export const cripto = () => {
	const aesEncrypt = (message: string, key: string) =>{
		return AES.encrypt(message, key).toString();
	};

	const aesDecrypt = (hash: string, key: string): string | Error =>{
		try {
			const bytes = AES.decrypt(hash, key);
			const originalText = bytes.toString(enc.Utf8);
			return originalText;
		} catch (error) {
			return new Error("A chave fornecida não corresponde à chave usada para criptografar o texto.");
		}
	};

	const generateMd5 = (message: string) =>{
		const bytes = MD5(message);
		return bytes.toString();
	};


	return{
		aesEncrypt,
		aesDecrypt,
		generateMd5
	};
};
