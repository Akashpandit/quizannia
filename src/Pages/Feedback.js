import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import feedbackImg from "../assets/feedback.png";
const Feedback = () => {
	const location = useLocation();
	const uData = location?.state?.userData;
	const [feedback, setFeedback] = useState("");
	const navigate = useNavigate();
	const handleSubmit = () => {
		const data = [...uData, feedback];
		// console.log(data);
		navigate("/score", { state: { data } });
	};
	return (
		<div className="outer-container">
			<div className="feedback-card">
				<div className="feedback-img">
					<img src={feedbackImg} alt="" />
				</div>
				<div className="fb-text">
					{uData[0]}, leave your feedback to see your score
				</div>
				<div className="input-container">
					<textarea
						rows={4}
						className="fb-input"
						value={feedback}
						placeholder="This was a great experience."
						onChange={(e) => {
							setFeedback(e.target.value);
						}}
						required
					/>
				</div>
				<button className="btn" type="submit" onClick={handleSubmit}>
					Submit
				</button>
			</div>
		</div>
	);
};

export default Feedback;
