import { useEffect, useState } from 'react';
import { getRide, getRun } from '../../requests/requests';
import { getTotalActivity } from '../../func/getTotalActivity';
import './totalActivity.scss';
const TotalActive = ({ data }) => {
	const [run, setRun] = useState([]);
	const [ride, setRide] = useState([]);

	const getRunRender = async () => {
		await getRun().then((res) => {
			res.length > 0 ? setRun(res) : setRun([]);
		});
	};

	const getRideRender = async () => {
		await getRide().then((res) => {
			res.length > 0 ? setRide(res) : setRide([]);
		});
	};

	useEffect(() => {
		getRunRender();
		getRideRender();
	}, [data]);

	return (
		<div className="total-activity">
			{getTotalActivity(run, 'Run')}
			{getTotalActivity(ride, 'Ride')}
		</div>
	);
};

export default TotalActive;
