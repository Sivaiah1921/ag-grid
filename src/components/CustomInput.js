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

	useEffect(() => {
		console.log(inputRef.current.value, props, "useeffect");
	}, []);

	return (
		<input
			type='text'
			ref={inputRef}
			placeholder='text'
			defaultValue={props.value}
		/>
	);
});
