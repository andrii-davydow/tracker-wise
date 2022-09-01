import axios from 'axios';

const getData = async () => {
	try {
		const response = await axios.get(`/api`);
		const data = response.data;

		return data;
	} catch (error) {
		console.error(error);
	}
};

const getRunMax = async () => {
	try {
		const response = await axios.get(`/api-run-max`);
		const data = response.data;

		return data;
	} catch (error) {
		console.error(error);
	}
};

const getRideMax = async () => {
	try {
		const response = await axios.get(`/api-ride-max`);
		const data = response.data;

		return data;
	} catch (error) {
		console.error(error);
	}
};

const getRun = async () => {
	try {
		const response = await axios.get(`/api-run`);
		const data = response.data;

		return data;
	} catch (error) {
		console.error(error);
	}
};

const getRide = async () => {
	try {
		const response = await axios.get(`/api-ride`);
		const data = response.data;

		return data;
	} catch (error) {
		console.error(error);
	}
};

const postData = async (obj) => {
	try {
		axios.post('/api', obj);
	} catch (error) {
		console.error(error);
	}
};

export { getData, postData, getRideMax, getRunMax, getRun, getRide };
