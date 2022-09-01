const getActivity = (startTime, endTime, distance) => {
	const minute = Math.floor((endTime - startTime) / 60000),
		hour = Math.floor(minute / 60),
		speed = (distance / ((endTime - startTime) / 60000 / 60)).toFixed(1);
	return {
		minute,
		hour,
		speed,
	};
};
export { getActivity };
