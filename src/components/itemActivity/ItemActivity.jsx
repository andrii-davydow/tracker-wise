import './itemActivity.scss';
import { getActivity } from '../../func/getActivity.js';
const ItemActivity = ({ data }) => {
	const renderActivity =
		data.length !== 0 ? (
			data?.map((el) => {
				const { _id, startTime, endTime, distance, activity } = el;
				const dateActivity = new Intl.DateTimeFormat('en-US', {
					month: 'long',
					day: 'numeric',
				}).format(startTime);

				const { minute, hour, speed } = getActivity(
					startTime,
					endTime,
					distance
				);
				const runClass = activity === 'Run' ? 'run-activity' : null;
				return (
					<li key={_id} className={`item-activity ${runClass}`}>
						<span>{dateActivity}</span>
						<span>{activity}</span>
						<span>{distance + ' km'}</span>
						<span>
							{minute > 59 ? `${hour}h ${minute % 60}m` : `${minute} minutes`}
						</span>
						<span>{speed + ' km/hour'}</span>
					</li>
				);
			})
		) : (
			<p className="empty-data">Create your first an activity..</p>
		);
	return <>{renderActivity}</>;
};

export default ItemActivity;
