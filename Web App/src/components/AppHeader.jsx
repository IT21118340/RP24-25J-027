import React from "react";

function AppHeader() {
	return (
		<header
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				borderBottom: "1px solid #ddd",
				marginBottom: "1%",
			}}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<img
					src="src\assets\AppIcon.png"
					alt="User Profile"
					style={{
						height: "100%",
						maxHeight: "50px",
						objectFit: "cover",
						cursor: "pointer",
					}}
				/>
				<p
					className="text-2xl font-[Open_Sans]"
					color="white"
					style={{ marginLeft: "1%" }}
				>
					Readify
				</p>
			</div>

			<div class="grow"> &nbsp; </div>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					gap: "64px",
				}}
			>
				<button className="text-lg font-[Open_Sans] hover:underline">
					Home
				</button>
				<button className="text-lg font-[Open_Sans]  hover:underline">
					Learn Strategies
				</button>
				<button className="text-lg font-[Open_Sans]  hover:underline">
					Quizes
				</button>
				<button className="text-lg font-[Open_Sans]  hover:underline">
					Final Exam
				</button>
			</div>

			<img
				className="avatar"
				src="src\assets\user_profile_image.png"
				alt="User Profile"
				style={{
					height: "100%",
					maxHeight: "50px",
					objectFit: "cover",
					cursor: "pointer",
					marginLeft: "5%",
				}}
			/>
		</header>
	);
}

export default AppHeader;
