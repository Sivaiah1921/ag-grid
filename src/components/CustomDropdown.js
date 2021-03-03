import React, {
	forwardRef,
	useImperativeHandle,
	useRef,
	useEffect,
} from "react";

export default forwardRef((props, ref) => {
	const inputRef = useRef();
	useImperativeHandle(ref, () => {
		return {
			getValue: () => {
				return inputRef.current.value;
			},
		};
	});

	// useEffect(() => {
	// 	setTimeout(() => inputRef.current.focus(), 10);
	// }, []);

	return (
		<>
			{props.value === "Male" && (
				<select id='dropdown' ref={inputRef} defaultValue={props.value}>
					<option value={props.value}>Male</option>
					<option value={props.value}>Female</option>
				</select>
			)}
			{props.value === "India" && (
				<select id='dropdown' ref={inputRef} defaultValue={props.value}>
					<option value={props.value}>India</option>
					<option value={props.value}>Aus</option>
					<option value={props.value}>Srilanka</option>
				</select>
			)}
		</>
	);
});
