import React, { forwardRef, useImperativeHandle, useRef } from "react";

export default forwardRef((props, ref) => {
	const inputRef = useRef();
	useImperativeHandle(ref, () => {
		return {
			isFilterActive() {
				return inputRef.current.value !== "";
			},

			doesFilterPass: (params) => {
				return params.data.price.toString() === inputRef.current.value;
			},
		};
	});

	return (
		<>
			{props.value === "Male" && (
				<select
					id='dropdown'
					onChange={(e) => console.log(props, e, "custom Drop")}
				>
					<option value='Male'>Male</option>
					<option value='Female'>Female</option>
				</select>
			)}
			{props.value === "India" && (
				<select
					id='dropdown'
					onChange={(e) => console.log(props, e, "custom Drop")}
				>
					<option value='India'>India</option>
					<option value='Aus'>Aus</option>
					<option value='Srilanka'>Srilanka</option>
				</select>
			)}
		</>
	);
});
