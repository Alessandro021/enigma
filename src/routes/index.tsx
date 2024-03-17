import Header from "@/components/ui/header";
import Home from "@/pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const MyRoutes = () => {
	return(
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="*" element={<Home />} /> */}
			</Routes>
		</BrowserRouter>
	);
};

export default MyRoutes;