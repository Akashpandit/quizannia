import React from "react";
import ScoreCard from "../components/ScoreCard";
import { useNavigate } from "react-router-dom";

const Score = () => {
	const navigate = useNavigate();
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "1rem",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
			}}
		>
			<ScoreCard />
			<button
				className="btn"
				onClick={() => {
					navigate("/");
				}}
			>
				Exit
			</button>
		</div>
	);
};

export default Score;
