import React from "react";

function AppHeader() {
	return (
		<header
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				borderBottom: "1px solid #ddd",
				marginBottom: "2%",
				backgroundColor: "black",
			}}
		>
			<h1
				className="text-white text-2xl font-[Open_Sans]"
				color="white"
				style={{ marginLeft: "1%" }}
			>
				Readify
			</h1>

			<img
				className="avatar"
				src="src\assets\user_profile_image.png"
				alt="User Profile"
				style={{
					height: "100%",
					maxHeight: "50px",
					objectFit: "cover",
					cursor: "pointer",
				}}
			/>
		</header>
	);
}

export default AppHeader;
