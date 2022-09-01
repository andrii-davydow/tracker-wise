const getTotalActivity = (typeActivity, typeLabel) => {
	return typeActivity.length !== 0 ? (
		typeActivity?.map((el) => {
			const { _id, total } = el;
			return (
				<div key={_id} className="total-activity-item">
					Total {_id} distance: <span>{total} km</span>
				</div>
			);
		})
	) : (
		<p>
			Create an activity to see the max <span>{typeLabel}</span>
		</p>
	);
};
export { getTotalActivity };
