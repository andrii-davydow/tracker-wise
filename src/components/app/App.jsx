import { useEffect, useState } from 'react';
import { getData } from '../../requests/requests';
import ItemActivity from '../itemActivity/ItemActivity';
import SaveActive from '../saveActivity/SaveActivity';
import InfoActive from '../InfoActivity/InfoActivity';
import TotalActive from '../totalActivity/TotalActivity';

import './app.scss';
const App = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		getData().then((res) => {
			res.length > 0 ? setData(res) : setData([]);
		});
	}, []);

	const getNewActive = (obj) => {
		setData([obj, ...data]);
	};

	return (
		<>
			<div className="app-name">
				<h1>Activity tracker</h1>
			</div>
			<SaveActive getNewActive={getNewActive} />
			<div className="content-activity">
				<ul className="list-activity">
					<ItemActivity data={data} />
				</ul>
			</div>
			<div className="result-activity">
				<InfoActive data={data} />
				<TotalActive data={data} />
			</div>
		</>
	);
};

export default App;
