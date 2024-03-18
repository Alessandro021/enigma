import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Home = () => {
	const [textDecriptografado, setTextDecriptografado]= useState<string>("");
	const [textCriptografado, setTextCriptografado]= useState<string>("");
	const [textKey, setTextKey]= useState<string>("");

	const handleCriptografar = () => {
		console.log(textDecriptografado);
		console.log(textKey);
	};
	return (
		<div className="p-8 flex-1">
			<div className="flex gap-4 max-md:flex-col flex-row h-72 mb-4 border rounded-lg p-4 bg-secondary">
				<Textarea 
					placeholder="Insira seu texto para ser incriptado"
					className="resize-none h-full  bg-card"
					onChange={e => setTextDecriptografado(e.target.value)}
					value={textDecriptografado}
				/>

				<Textarea 
					placeholder="Insira seu texto para ser decriptografado"
					className="resize-none h-full bg-card"
					onChange={e => setTextCriptografado(e.target.value)}
					value={textCriptografado}
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
					<Button className="w-1/2 max-[370px]:w-full" variant="outline">Decriptografar</Button>
					<Button className="w-1/2 max-[370px]:w-full" onClick={handleCriptografar}>Criptografar</Button>
				</div>
			</div>
		</div>
	);
};

export default Home;