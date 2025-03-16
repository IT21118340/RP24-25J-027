import React, { useState } from "react";
import { NavLink } from "react-router";
import "./App.css";

function App() {
	const [showAlert, setShowAlert] = useState(false);

	const cardDetails = [
		{
			title: "Reading Comprehension Strategies",
			description:
				"Improve your reading comprehension abilities with these expert strategies and techniques. Unlock your potential to analyze complex texts with confidence.",
			img: "src/assets/Skills.jpg",
			link: "/skills",
			status: "active",
		},
		{
			title: "Interactive Quizzes",
			description:
				"Test your understanding and track your progress with engaging quizzes. Receive instant and comprehensive feedback and pinpoint areas for improvement.",
			img: "src/assets/Quizes.jpg",
			link: "/quizes",
			status: "active",
		},
		{
			title: "Final Exam",
			description:
				"Put your skills to the ultimate test with this final exam. Gauge your readiness and solidify your mastery of advanced reading comprehension.",
			img: "src/assets/FinalExam.jpg",
			link: "/",
			status: "inactive",
		},
	];

	const handleLockedButtonClick = () => {
		setShowAlert(true);
		setTimeout(() => {
			setShowAlert(false);
		}, 3000);
	};

	return (
		<>
			<center style={{ margin: "0.5%" }}>
				{showAlert && (
					<div role="alert" className="alert alert-warning">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 shrink-0 stroke-current"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
							/>
						</svg>
						<span>
							Warning: Final Exam is currently locked! You need to
							complete at least five quizes to unlock this.
						</span>
					</div>
				)}

				<h1
					className="text-4xl font-bold underline font-[Open_Sans]"
					style={{ marginTop: "1%" }}
				>
					Welcome to Advanced Reading Comprehension Skill Module!
				</h1>

				<br />

				<div className="flex flex-wrap gap-8 justify-center">
					{cardDetails.map((card, index) => (
						<div
							key={index}
							className="card bg-base-100 card-md w-80 shadow-sm card-border"
						>
							<figure className="px-10 pt-10">
								<img
									src={card.img}
									alt={card.title}
									className="rounded-xl"
								/>
							</figure>
							<div className="card-body items-center text-center">
								<h2 className="card-title">{card.title}</h2>
								<p>{card.description}</p>
								<div className="card-actions">
									{card.status === "active" ? (
										<NavLink to={card.link} end>
											<button className="btn btn-primary">
												Try Now
											</button>
										</NavLink>
									) : (
										<button
											className="btn btn-neutral"
											onClick={handleLockedButtonClick}
										>
											Locked
										</button>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</center>
		</>
	);
}

export default App;
