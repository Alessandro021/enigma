/* eslint-disable react/no-unescaped-entities */
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {HomeIcon, MenuIcon} from "lucide-react";
import Logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
	return ( 
		<Card className="rounded-none bg-secondary flex flex-row items-center px-4">
			
			<div className="flex items-center justify-center w-full px-4">
				<Link to={"/"} >
					<img src={Logo} className="w-20 h-20"  />
				</Link>
			</div>
			<Sheet>
				<SheetTrigger asChild  >
					<Button className="w-10 h-10" size={"icon"} variant={"ghost"}>
						<MenuIcon className="text-primary"/>
					</Button>
				</SheetTrigger>
		
				<SheetContent className="w-72 bg-primary border-l-0" >
					<SheetHeader className="items-center mt-4">
						<text className="text-white">Menu</text>
					</SheetHeader>
					<div className="flex flex-col gap-4 py-4 ">
						<SheetClose asChild>
							<Link to={"/"}>
								<Button
									variant={"outline"}
									className="w-full items-center gap-2"
								>
								Criptografar AES
								</Button>
							</Link>
						</SheetClose>

						<SheetClose asChild>
							<Link to={"/"}>
								<Button
									variant={"outline"}
									className="w-full items-center gap-2"
								>
								Decriptografar AES
								</Button>
							</Link>
						</SheetClose>

						<SheetClose asChild>
							<Link to={"/md5"}>
								<Button
									variant={"outline"}
									className="w-full items-center gap-2"
								>
								Criptografar MD5
								</Button>
							</Link>
						</SheetClose>

						<SheetClose asChild>
							<Link to={"/"}>
								<Button
									variant={"outline"}
									className="w-full items-center gap-2"
								>
								Criptografar SHA1
								</Button>
							</Link>
						</SheetClose>

						<SheetClose asChild>
							<Link to={"/"}>
								<Button
									variant={"outline"}
									className="w-full items-center gap-2"
								>
								Criptografar SHA256
								</Button>
							</Link>
						</SheetClose>

						<SheetClose asChild>
							<Link to={"/"}>
								<Button
									variant={"outline"}
									className="w-full items-center gap-2"
								>
								Criptografar 512
								</Button>
							</Link>
						</SheetClose>

						<SheetClose asChild>
							<Link to={"/"}>
								<Button
									variant={"outline"}
									className="w-full items-center gap-2"
								>
								Criptografar ripemd160
								</Button>
							</Link>
						</SheetClose>
					</div>
				</SheetContent>
			</Sheet>
		</Card>
	);
};
 
export default Header;