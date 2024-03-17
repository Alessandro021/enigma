/* eslint-disable react/no-unescaped-entities */
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {MenuIcon} from "lucide-react";
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
				<SheetTrigger asChild >
					<Button className="w-10 h-10" size={"icon"} variant={"ghost"}>
						<MenuIcon className="text-primary"/>
					</Button>
				</SheetTrigger>
				
				<SheetContent className="w-72 bg-secondary" >
					
				</SheetContent>
			</Sheet>
		</Card>
	);
};
 
export default Header;