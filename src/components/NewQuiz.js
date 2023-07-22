import React from "react";
import NewQuestion from "./NewQuestion";

const NewQuiz = () => {
	const questions = [
		{
			question: "Question goes here",
			options: ["option 1", "option 2", "option 3", "option 4"],
			answer: "option 2",
		},
		{
			question: "Question 2 goes here",
			options: ["option2 1", "option2 2", "option2 3", "option2 4"],
			answer: "option2 1",
		},
	];

	return (
		<div>
			<div className="question-container">
				{questions.map((question, index) => (
					// console.log(question)
					<NewQuestion
						key={index}
						number={index + 1}
						question={question.question}
						options={question.options}
						selectedOption={""}
						onOptionChange={""}
					/>
				))}
			</div>
		</div>
	);
};

export default NewQuiz;
