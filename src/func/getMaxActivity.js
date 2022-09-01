import { getActivity } from './getActivity';
const getMaxActivity = (typeActivity, typeLabel) => {
	return typeActivity.length !== 0 ? (
		typeActivity?.map((el) => {
			const { _id, startTime, endTime, distance } = el;
			const dateActivity = new Intl.DateTimeFormat('en-US', {
				month: 'short',
				day: 'numeric',
			}).format(startTime);

			const { minute, hour, speed } = getActivity(startTime, endTime, distance);

			return (
				<div key={_id} className="item-activity-inner">
					<span>{dateActivity}</span>
					<span>{distance + ' km'}</span>
					<span>
						{minute > 59 ? `${hour}h ${minute % 60}m` : `${minute} minutes`}
					</span>
				</div>
			);
		})
	) : (
		<p>
			Create an activity to see the max <span>{typeLabel}</span>
		</p>
	);
};
export { getMaxActivity };
