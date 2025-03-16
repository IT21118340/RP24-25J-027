import "./index.css"; // This should be the first line
import { React, StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx";
import AppFooter from "./components/AppFooter.jsx";
import AppHeader from "./components/AppHeader.jsx";
import Skills from "./pages/Skills.jsx";
import Quizes from "./pages/AllQuizes.jsx";
/*
import FinalTest from "./pages/FinalTest.jsx";
import Quiz from "./pages/QuizPage.jsx";
import WrittenPapers from "./pages/WrittenPapers.jsx";
*/

createRoot(document.getElementById("root")).render(
	<>
		<AppHeader />
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
        <Route path="/skills" element={<Skills />} />
        
				<Route path="/quizes" element={<Quizes />} />
				{/* 

				<Route path="/quiz" element={<Quiz />} />

				<Route path="/papers" element={<WrittenPapers />} />

				<Route path="/exam" element={<FinalTest />} />*/}
			</Routes>
		</BrowserRouter>
		<AppFooter />
	</>
);
