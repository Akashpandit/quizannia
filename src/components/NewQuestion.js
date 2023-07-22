import React from "react";

const NewQuestion = ({
	question,
	options,
	selectedOption,
	onOptionChange,
	number,
}) => {
	return (
		<div>
			<div className="question-card">
				<div
					className="question-title"
					style={{ backgroundColor: "black" }}
				>
					<div className="question-number">{number}</div>
					<h4>{question}</h4>
					<div>
						<form>
							{options.map((option, index) => (
								<div key={index}>
									<input
										type="radio"
										name="answer"
										id={index}
										checked
									/>
									<label htmlFor={index}>{option}</label>
								</div>
							))}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewQuestion;
