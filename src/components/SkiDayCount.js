import '../stylesheets/ui.scss'

const decimalToPercent = (decimal) => {
	return ((decimal) * 100 + "%")
}
	
const calcGoalProgress = (total, goal) => {
	return decimalToPercent(total/goal);
}

export const SkiDayCount = ({total, powder, backcountry, goal}) => (
		<div className="ski-day-count">
			<div className="total-days">
				<span>{total}</span>
				<span>days</span>
			</div>
			<div className="powder-days">
				<span>{powder}</span>
				<span> days</span>
			</div>
			<div className="backcountry-days">
				<span>{backcountry}</span>
				<span> hiking days</span>
			</div>
			<div>
				<span>Goal Progress: </span>
				<span>{calcGoalProgress(total, goal)}</span>
			</div>
		</div>
)