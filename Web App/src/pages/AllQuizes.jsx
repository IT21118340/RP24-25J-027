import { React, useEffect, useState } from "react";
import FloatingAddButton from "../components/FloatingAddButton.jsx";
import { supabase } from "../utils/supabase.js";

function Quizes() {
	const [cardDetails, setCardDetails] = useState();
	const [loading, setLoading] = useState(true); // Add loading state
	const [error, setError] = useState(null); // Add error state

	const fetchQuizes = async () => {
		try {
			const { data, error } = await supabase
				.from("quiz")
				.select("title, description, is_completed")
				.order("quiz_id");

			if (error) {
				setError(error);
			} else if (data) {
				setCardDetails(data);
			}
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false); // Set loading to false regardless of success or failure
		}
	};

	useEffect(() => {
		fetchQuizes();
	}, []);

	if (loading) {
		return (
			<center>
				<span className="loading loading-spinner loading-xl"></span>
			</center>
		);
	}

	if (error) {
		return (
			<div role="alert" className="alert alert-error">
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
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<span>Error! Task failed. Please reload the page.</span>
			</div>
		);
	}

	return (
		<center>
			<h1 className="text-4xl font-bold underline font-[Roboto]">
				Interactive Quizes
			</h1>

			<br />

			<div className="flex flex-wrap gap-8 justify-center">
				{cardDetails &&
					cardDetails.map((card, index) => (
						<div
							key={index}
							className="card card-border bg-base-100 card-md w-80 shadow-sm "
						>
							<figure className="px-10 pt-10">
								<p className="rounded-xl text-5xl">{index + 1}</p>
							</figure>
							<div className="card-body items-center text-center">
								<h2 className="card-title">{card.title}</h2>
								<p>{card.description}</p>
								<div className="card-actions">
									{card.is_completed ? (
										<button className="btn">Completed</button>
									) : (
										<button className="btn btn-primary">
											Try Quiz
										</button>
									)}
								</div>
							</div>
						</div>
					))}
			</div>
			<FloatingAddButton />
		</center>
	);
}

export default Quizes;
