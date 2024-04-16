import Header from "@/components/ui/header";
import Home from "@/pages/home";
import MD5 from "@/pages/md5";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const MyRoutes = () => {
	return(
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/md5" element={<MD5 />} />
				{/* <Route path="*" element={<Home />} /> */}
			</Routes>
		</BrowserRouter>
	);
};

export default MyRoutes;