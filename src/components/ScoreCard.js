import React from "react";
import { useLocation } from "react-router-dom";

const ScoreCard = () => {
	const location = useLocation();
	const score = location?.state?.data[2];
	const total = location?.state?.data[3];
	const feedback = location?.state?.data[4];

	let bgcolor;
	if (score === 0) {
		bgcolor = " linear-gradient(136deg, #000 0%, #252424 100%)";
	} else if (score === 1) {
		bgcolor = "linear-gradient(136deg, #F00 0%, #BA0000 100%)";
	} else if (score === 2) {
		bgcolor = "linear-gradient(136deg, #F90 0%, #BA3800 100%)";
	} else if (score === 3) {
		bgcolor = "linear-gradient(136deg, #0047FF 0%, #0B838B 100%)";
	} else if (score === 4) {
		bgcolor = "linear-gradient(136deg, #180785 0%, #0A6FA8 100%)";
	} else {
		bgcolor = "linear-gradient(136deg, #1B8E08 0%, #33A80A 100%)";
	}
	return (
		<div>
			<div className="score-card" style={{ background: bgcolor }}>
				<div className="top-part">
					<div>You Scored</div>
					<h1>{score}</h1>
					<div>Out of {total}</div>
				</div>
				<div className="bottom-part">
					<div style={{ fontWeight: "bolder" }}>Your Feedback:</div>
					<p>{feedback}</p>
				</div>
			</div>
		</div>
	);
};

export default ScoreCard;
