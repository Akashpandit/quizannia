import React, { useState } from "react";
import "../css/login.css";
import login from "../assets/login.png";
import { useNavigate } from "react-router-dom";
const Login = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		navigate("/quiz", { state: { name, email } });
	};
	return (
		<div>
			<div className="outer-container">
				<div className="login-card">
					<div className="login-img">
						<img src={login} alt="" srcset="" />
					</div>
					<div className="login-right">
						<div style={{ fontSize: "32px" }}>Welcome to</div>
						<div className="heading-text">QUIZANNIA</div>
						<div className="line"></div>
						<form onSubmit={handleSubmit}>
							<div className="input-container">
								<input
									className="input-field"
									type="text"
									placeholder="Tell us your name"
									value={name}
									onChange={(e) => setName(e.target.value)}
									required
								/>

								<input
									className="input-field"
									type="email"
									placeholder="Tell us your email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>
							<button type="submit" className="btn">
								Take Me In
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
