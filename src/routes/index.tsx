import Header from "@/components/ui/header";
import Home from "@/pages/home";
import MD5 from "@/pages/md5";
import SHA1 from "@/pages/sha1";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const MyRoutes = () => {
	return(
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/md5" element={<MD5 />} />
				<Route path="/sha1" element={<SHA1 />} />
				{/* <Route path="*" element={<Home />} /> */}
			</Routes>
		</BrowserRouter>
	);
};

export default MyRoutes;