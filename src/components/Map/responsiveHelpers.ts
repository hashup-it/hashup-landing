export const getWindowDimensions = () => {
	const { innerWidth: width, innerHeight: height } = window as any;

	return {
		width,
		height,
	};
};
