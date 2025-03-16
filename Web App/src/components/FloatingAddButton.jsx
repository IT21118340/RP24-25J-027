import React from "react";
import { NavLink } from "react-router";

const FloatingAddButton = () => {
	return (
		<NavLink to="/newquiz" end>
			<button className="fixed bottom-16 right-8 btn btn-outline btn-secondary btn-circle btn-xl">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-10 w-10"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M12 6v6m0 0v6m0-6h6m-6 0H6"
					/>
				</svg>
			</button>
		</NavLink>
	);
};

export default FloatingAddButton;
