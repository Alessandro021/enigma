import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cripto } from "@/services/cripto";
import { useState } from "react";

const RIPEMD160 = () => {
	const [text, setText]= useState<string>("");
	const [textEncrypt, setTextEncrypt]= useState<string>("");

	const {generateRipemd160} = cripto();

	const handleEncrypt = () => {
		if(!text){
			return alert("Antenção, o campo nao pode estar vazio, insira um valor para ser transformado em RIPEMD160");
		}
		const hash = generateRipemd160(text);
		setTextEncrypt(hash);
	};

	
	const handleRipemd160Randon = () => {
		const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%&*";
		setText("");
		let cont = 1;
		let senha = "";
		const value = Math.floor(Math.random() * 10);
		while(cont <= value){
			senha +=charset.charAt(Math.floor(Math.random() * charset.length));
			cont++;
		}
		const hash = generateRipemd160(senha);
		setTextEncrypt(hash);
	};
	
	return (
		<div className="p-8 flex-1">
			<div className="flex gap-4 h-48 mb-4 border rounded-lg p-4 bg-secondary">
				<Textarea 
					placeholder="Texto criptografadoem RIPEMD160"
					className="resize-none h-full  bg-card"
					value={textEncrypt}
					readOnly
				/>

			</div>

			<div className="flex max-md:flex-col flex-row gap-4  items-center border rounded-lg px-4 py-8 bg-secondary-foreground">
				<div className="md:w-1/2 w-full">
					<Input
						placeholder="Insira um valor para ser transformado em RIPEMD160"
						className="placeholder:text-white text-white"
						onChange={e => setText(e.target.value)}
						value={text}
					/>
				</div>

				<div className="flex-1 flex gap-4 w-1/2 max-md:w-full">
					<Button className="w-1/2 max-[370px]:w-full" onClick={handleEncrypt}>Gerar RIPEMD160</Button>
					<Button className="w-1/2 max-[370px]:w-full" variant="outline" onClick={handleRipemd160Randon}>Gerar RIPEMD160 aleatorio</Button>
				</div>
			</div>
		</div>
	);
};

export default RIPEMD160;