import Header from "@/components/ui/header";
import RIPEMD160 from "@/pages/Ripemd160";
import Home from "@/pages/home";
import MD5 from "@/pages/md5";
import SHA1 from "@/pages/sha1";
import SHA256 from "@/pages/sha256";
import SHA512 from "@/pages/sha512";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const MyRoutes = () => {
	return(
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/md5" element={<MD5 />} />
				<Route path="/sha1" element={<SHA1 />} />
				<Route path="/sha256" element={<SHA256 />} />
				<Route path="/sha512" element={<SHA512 />} />
				<Route path="/ripemd160" element={<RIPEMD160 />} />
				{/* <Route path="*" element={<Home />} /> */}
			</Routes>
		</BrowserRouter>
	);
};

export default MyRoutes;