import React from "react";

function Button({ children, onClick }) {
	return (
		<div>
			<button
				onClick={onClick}
				style={{ padding: "6px 10px", backgroundColor: "white" }}
			>
				{children}
			</button>
		</div>
	);
}

export default Button;
