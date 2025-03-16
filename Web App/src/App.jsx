import React from "react";
import "./App.css";

function App() {
	const cardDetails = [
		{
			title: "Reading Comprehension Strategies",
			description:
				"Improve your reading comprehension abilities with these expert strategies and techniques. Unlock your potential to analyze complex texts with confidence.",
			img: "src/assets/Skills.jpg",
		},
		{
			title: "Interactive Quizzes",
			description:
				"Test your understanding and track your progress with engaging quizzes. Receive instant and comprehensive feedback and pinpoint areas for improvement.",
			img: "src/assets/Quizes.jpg",
		},
		{
			title: "Instant Answer Insight",
			description:
				"Snap a picture of your written answers, and this module will analyze your work, providing instant, personalized feedback",
			img: "src/assets/Pastpapers.jpg",
		},
		{
			title: "Final Exam",
			description:
				"Put your skills to the ultimate test with this final exam. Gauge your readiness and solidify your mastery of advanced reading comprehension.",
			img: "src/assets/FinalExam.jpg",
		},
	];

	return (
		<>
			<center>
				<h1 className="text-4xl font-bold underline font-[Open_Sans]">
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
									<button className="btn btn-primary">
										Learn More
									</button>
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
