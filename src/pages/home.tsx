import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import {cripto} from "@/services/cripto";

const Home = () => {
	const [text, setText]= useState<string>("");
	const [textEncrypt, setTextEncrypt]= useState<string>("");
	const [textKey, setTextKey]= useState<string>("");

	const {aesEncrypt, aesDecrypt} = cripto();

	const handleEncrypt = () => {
		if(!text){
			return alert("Insira uma texto para poder ser criptografado");
		}
		if(!textKey){
			return alert("Insira uma chave para poder que o texto possa ser criptografado");
		}
		const hash = aesEncrypt(text, textKey);
		setTextEncrypt(hash);
	};
	const handleDecrypt = () => {
		if(!textEncrypt){
			return alert("Insira uma texto para poder ser descriptografado");
		}
		if(!textKey){
			return alert("Insira uma chave para poder que o texto criptografado possa ser descriptografado");
		}
		const message = aesDecrypt(textEncrypt, textKey);

		if(message instanceof Error){
			return alert(message.message);
		}
		setText(message);
	};
	return (
		<div className="p-8 flex-1">
			<div className="flex gap-4 max-md:flex-col flex-row h-96 mb-4 border rounded-lg p-4 bg-secondary">
				<Textarea 
					placeholder="Insira um texto para ser criptografado"
					className="resize-none h-full  bg-card"
					onChange={e => setText(e.target.value)}
					value={text}
				/>

				<Textarea 
					placeholder="Insira um texto para ser descriptografado"
					className="resize-none h-full bg-card"
					onChange={e => setTextEncrypt(e.target.value)}
					value={textEncrypt}
				/>
			</div>

			<div className="flex max-md:flex-col flex-row gap-4  items-center border rounded-lg px-4 py-8 bg-secondary-foreground">
				<div className="md:w-1/2 w-full">
					<Input
						placeholder="Insira uma chave para incriptar o decriptografar o texto"
						className="placeholder:text-white text-white"
						onChange={e => setTextKey(e.target.value)}
						value={textKey}
					/>
				</div>

				<div className="flex-1 flex gap-4 w-1/2 max-md:w-full">
					<Button className="w-1/2 max-[370px]:w-full" onClick={handleEncrypt}>Criptografar</Button>
					<Button className="w-1/2 max-[370px]:w-full" onClick={handleDecrypt} variant="outline">Decriptografar</Button>
				</div>
			</div>
		</div>
	);
};

export default Home;