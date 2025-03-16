import { React, useState } from "react";
import { NavLink } from "react-router";
import { supabase } from "../utils/supabase.js";

function NewQuiz() {
	const [topic_given, setTopic] = useState("");
	const [description_given, setDescription] = useState("");
	const [Other_data_given, setOtherData] = useState("");
	const [showAlert, setShowAlert] = useState(false);
	const [alertMessage, setAlertMessage] = useState("");
	const [alertType, setAlertType] = useState("error"); // Default to error
	const [loading, setLoading] = useState(false);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		if (name === "topic_given") {
			setTopic(value);
		} else if (name === "description_given") {
			setDescription(value);
		} else if (name === "Other_data_given") {
			setOtherData(value);
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);
		setShowAlert(false); // Hide previous alerts

		const { data, error } = await supabase
			.from("quiz")
			.insert([
				{
					topic_given: topic_given,
					description_given: description_given,
					other_data_given: Other_data_given,
				},
			])
			.select();

		if (error) {
			console.error("Error inserting data:", error);
			setAlertMessage(`Error! Failed to store data: ${error.message}`);
			setAlertType("error");
			setShowAlert(true);
		} else {
			console.log("Data inserted successfully:", data);
			setAlertMessage("Success! Quiz data has been saved.");
			setAlertType("success");
			setShowAlert(true);
			// Clear the form
			setTopic("");
			setDescription("");
			setOtherData("");
		}
		setLoading(false);
	};

	const handleClear = () => {
		setTopic("");
		setDescription("");
		setOtherData("");
		setShowAlert(false);
	};

	const handleSurpriseMe = () => {
		// Implement your surprise me logic here
		setTopic("Random Topic");
		setDescription("Some interesting description.");
		setOtherData("Extra info");
	};

	return (
		<>
			<center style={{ margin: "0.5%" }}>
				{showAlert && (
					<div role="alert" className={`alert alert-${alertType}`}>
						{alertType === "error" ? (
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
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="stroke-current shrink-0 h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						)}
						<span>{alertMessage}</span>
					</div>
				)}

				<h1
					className="text-4xl font-bold underline font-[Open_Sans]"
					style={{ marginTop: "1%" }}
				>
					Enter Details to Create New Quiz
				</h1>

				<br />

				<form onSubmit={handleSubmit} className="space-y-4 max-w-md w-full">
					<div>
						<label
							htmlFor="topic_given"
							className="block text-gray-700 text-sm font-bold mb-2"
						>
							Topic:
						</label>
						<input
							type="text"
							id="topic_given"
							name="topic_given"
							value={topic_given}
							onChange={handleInputChange}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							required
						/>
					</div>

					<div>
						<label
							htmlFor="description_given"
							className="block text-gray-700 text-sm font-bold mb-2"
						>
							Description:
						</label>
						<textarea
							id="description_given"
							name="description_given"
							value={description_given}
							onChange={handleInputChange}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							rows="5"
							required
						/>
					</div>

					<div>
						<label
							htmlFor="Other_data_given"
							className="block text-gray-700 text-sm font-bold mb-2"
						>
							Other Data:
						</label>
						<textarea
							id="Other_data_given"
							name="Other_data_given"
							value={Other_data_given}
							onChange={handleInputChange}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							rows="5"
						/>
					</div>

					<div className="flex justify-center space-x-4">
						<button
							type="button"
							className="btn btn-secondary"
							onClick={handleSurpriseMe}
						>
							Surprise me!
						</button>
						<button
							type="submit"
							className={`btn btn-primary ${loading ? "loading" : ""}`}
							disabled={loading}
						>
							Submit
						</button>
						<button
							type="button"
							className="btn btn-accent"
							onClick={handleClear}
						>
							Clear
						</button>
						<NavLink to="/quizes" end>
							<button type="button" className="btn">
								Go Back
							</button>
						</NavLink>
					</div>
				</form>
			</center>
		</>
	);
}

export default NewQuiz;
