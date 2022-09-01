import { useState, useEffect } from 'react';
import { postData } from '../../requests/requests';
import './saveActivity.scss';

const SaveActive = ({ getNewActive }) => {
	const [startTime, setStartTime] = useState('');
	const [endTime, setEndTime] = useState('');
	const [distance, setDistance] = useState('');
	const [activity, setActivity] = useState('');
	const activityOption = [
		{ value: '', label: 'Select active type' },
		{ value: 'Run', label: 'Run' },
		{ value: 'Ride', label: 'Ride' },
	];
	const [changeActivity] = useState(() => {
		return (e) => {
			setActivity(e.target.value);
		};
	});

	const saveActivity = (e) => {
		e.preventDefault();

		let convertDate = new Date(),
			startT = new Date(
				convertDate.toISOString().split('T')[0] + `T${startTime}:00.000Z`
			).getTime(),
			endT = new Date(
				convertDate.toISOString().split('T')[0] + `T${endTime}:00.000Z`
			).getTime();

		const dataActivity = {
			_id: new Date(),
			startTime: startT,
			endTime: endT,
			distance,
			activity,
		};

		if (endTime > startTime) {
			getNewActive(dataActivity);
			postData(dataActivity);
			setDisabled(true);
			setStartTime('');
			setEndTime('');
			setDistance('');
			setActivity('');
		} else {
			alert('Finish time cannot equal Start time');
		}
	};

	const [disabled, setDisabled] = useState(true);

	useEffect(() => {
		if (startTime && endTime && distance && activity) {
			setDisabled(false);
		}
	}, [startTime, endTime, distance, activity]);

	const renderOption = activityOption.map((el, i) => {
		const { value, label } = el;
		return (
			<option key={i} value={value}>
				{label}
			</option>
		);
	});
	return (
		<div className="add-activity">
			<h3>Add new activity</h3>
			<form onSubmit={saveActivity} action="/api">
				<input
					type="time"
					value={startTime}
					onChange={(e) => setStartTime(e.target.value)}
					placeholder="Start time"
				/>
				<input
					type="time"
					value={endTime}
					onChange={(e) => setEndTime(e.target.value)}
					placeholder="Finish time"
				/>
				<input
					type="number"
					value={distance}
					onChange={(e) => setDistance(e.target.value)}
					placeholder="Distance"
					min={0}
				/>
				<select value={activity} onChange={changeActivity}>
					{renderOption}
				</select>
				<button type="submit" disabled={disabled}>
					Save
				</button>
			</form>
		</div>
	);
};

export default SaveActive;
