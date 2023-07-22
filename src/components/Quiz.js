import React, { useState } from "react";
import Question from "./Question";
import { useLocation, useNavigate } from "react-router-dom";
import account from "../assets/account.png";
const Quiz = () => {
	const questions = [
		{
			question:
				"Which method is used to update the state of a component in React?",
			options: [
				"setState()",
				"updateState()",
				"changeState()",
				"modifyState()",
			],
			answer: "setState()",
			bgcolor: "linear-gradient(91.05deg, #0887CE 49.1%, #05ABD0 95.47%)",
		},
		{
			question: "What is the purpose of the render() method in React?",
			options: [
				"It updates the state of the component.",
				"It triggers the component lifecycle methods.",
				"It returns the JSX to be rendered on the screen.",
				"It handles user events and interactions.",
			],
			answer: "It returns the JSX to be rendered on the screen.",
			bgcolor: "linear-gradient(91.05deg, #6C42A8 49.1%, #755ADD 95.47%)",
		},
		{
			question: "What is JSX in React?",
			options: [
				"JavaScript XML",
				"Java Serialized Exchange",
				"JavaScript XSL",
				"Java XML Script",
			],
			answer: "JavaScript XML",
			bgcolor: "linear-gradient(91.05deg, #FD8933 49.1%, #FCBB2D 95.47%)",
		},
		{
			question:
				"Which lifecycle method is called after a component is rendered for the first time?",
			options: [
				"componentDidMount()",
				"componentWillUnmount()",
				"componentDidUpdate()",
				"componentWillMount()",
			],
			answer: "componentDidMount()",
			bgcolor: "linear-gradient(91.05deg, #FE261E 49.1%, #F67515 95.47%)",
		},
	];

	const [selectedOptions, setSelectedOptions] = useState({});
	const [score, setScore] = useState(0);
	const [attempted, setAttempted] = useState(0);
	const navigate = useNavigate();
	const location = useLocation();
	const name = location?.state?.name;
	const email = location?.state?.email;
	const handleOptionChange = (event, questionIndex) => {
		const updatedSelectedOptions = {
			...selectedOptions,
			[questionIndex]: event.target.value,
		};
		console.log("updated options: ", updatedSelectedOptions);
		setSelectedOptions(updatedSelectedOptions);
		const numQuestionsAttempted = Object.keys(
			updatedSelectedOptions
		).length;
		setAttempted(numQuestionsAttempted);
	};

	const handleAnswer = () => {
		let newScore = 0;
		let numQuestionsAttempted = 0;

		for (let i = 0; i < questions.length; i++) {
			if (selectedOptions[i] === questions[i].answer) {
				newScore++;
			}
			if (selectedOptions[i]) {
				numQuestionsAttempted++;
			}
		}
		setScore(newScore);
		setSelectedOptions({});
		const totalques = questions.length;
		const userData = [name, email, newScore, totalques];
		navigate("/feedback", { state: { userData } });
		// Display the score and number of questions attempted in an alert
		// alert(
		// 	`Quiz completed!\nScore: ${newScore}/${questions.length}\nQuestions Attempted: ${numQuestionsAttempted}/${questions.length}`
		// );
	};

	const showUserInfo = () => {
		alert(`You are logged in as:\nName: ${name}\nEmail: ${email} `);
	};
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: "1rem",
				paddingBottom: "1rem",
			}}
		>
			<div className="header">
				<div className="name-container" onClick={showUserInfo}>
					<img src={account} height={"20px"} alt="" />
					<div>
						Welcome <b>{name}</b>
					</div>
				</div>
				<div className="progress-container">
					You answered: {attempted}/{questions.length}
				</div>
			</div>
			<h2>Score: {score}</h2>
			<div className="question-container">
				{questions.map((question, index) => (
					<Question
						key={index}
						number={index}
						question={question.question}
						options={question.options}
						selectedOption={selectedOptions[index] || ""}
						onOptionChange={(event) =>
							handleOptionChange(event, index)
						}
						bgcolor={question.bgcolor}
					/>
				))}
			</div>

			<button className="btn" onClick={handleAnswer}>
				Submit
			</button>
		</div>
	);
};

export default Quiz;
