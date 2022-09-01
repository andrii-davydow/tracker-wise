import { useEffect, useState } from 'react';
import { getMaxActivity } from '../../func/getMaxActivity';
import { getRideMax, getRunMax } from '../../requests/requests';
import './infoActivity.scss';

const InfoActive = ({ data }) => {
	const [runMax, setRunMax] = useState([]);
	const [rideMax, setRideMax] = useState([]);

	const getRunServer = async () => {
		await getRunMax().then((res) => {
			res.length > 0 ? setRunMax(res) : setRunMax([]);
		});
	};
	const getRideServer = async () => {
		await getRideMax().then((res) => {
			res.length > 0 ? setRideMax(res) : setRideMax([]);
		});
	};

	useEffect(() => {
		getRunServer();
		getRideServer();
	}, [data]);

	return (
		<div className="info-activity">
			<div className="info-type">
				<h3 className="info-type-title">Longest ride:</h3>
				{getMaxActivity(rideMax, 'Ride')}
			</div>
			<div className="info-type">
				<h3 className="info-type-title">Longest run:</h3>

				{getMaxActivity(runMax, 'Run')}
			</div>
		</div>
	);
};

export default InfoActive;
