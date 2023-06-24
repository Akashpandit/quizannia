import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Quiz from "./components/Quiz";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Feedback from "./Pages/Feedback";
import Score from "./Pages/Score";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/quiz" element={<Home />} />
					<Route path="/feedback" element={<Feedback />} />
					<Route path="/score" element={<Score />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
