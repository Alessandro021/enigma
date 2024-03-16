import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					{/* <Route path="*" element={<Home />} /> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
