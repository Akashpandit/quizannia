import React from "react";

const Question = ({
	question,
	options,
	selectedOption,
	onOptionChange,
	number,
	bgcolor,
}) => {
	return (
		<div className="question-card">
			<div className="question-title" style={{ background: bgcolor }}>
				<div
					className="question-number"
					style={{
						borderImage: `${bgcolor} 1`,
					}}
				>
					{number + 1}
				</div>
				<h3>{question}</h3>
			</div>
			<div style={{ padding: "10px 20px" }}>
				<form>
					{options.map((option, index) => (
						<div
							key={index}
							style={{ display: "flex", gap: "0.5rem" }}
						>
							<input
								type="radio"
								id={index}
								name="answer"
								value={option}
								checked={selectedOption === option}
								onChange={onOptionChange}
							/>
							<label htmlFor={index}>{option}</label>
						</div>
					))}
				</form>
			</div>
		</div>
	);
};

export default Question;
