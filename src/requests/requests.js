import axios from 'axios';

const getData = async () => {
	try {
		const response = await axios.get(`http://localhost:5000/api`);
		const data = response.data;

		return data;
	} catch (error) {
		console.error(error);
	}
};

const getRunMax = async () => {
	try {
		const response = await axios.get(`http://localhost:5000/api-run-max`);
		const data = response.data;

		return data;
	} catch (error) {
		console.error(error);
	}
};

const getRideMax = async () => {
	try {
		const response = await axios.get(`http://localhost:5000/api-ride-max`);
		const data = response.data;

		return data;
	} catch (error) {
		console.error(error);
	}
};

const getRun = async () => {
	try {
		const response = await axios.get(`http://localhost:5000/api-run`);
		const data = response.data;

		return data;
	} catch (error) {
		console.error(error);
	}
};

const getRide = async () => {
	try {
		const response = await axios.get(`http://localhost:5000/api-ride`);
		const data = response.data;

		return data;
	} catch (error) {
		console.error(error);
	}
};

const postData = async (obj) => {
	try {
		axios.post('http://localhost:5000/api', obj);
	} catch (error) {
		console.error(error);
	}
};

export { getData, postData, getRideMax, getRunMax, getRun, getRide };
