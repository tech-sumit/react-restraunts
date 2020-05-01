import React from "react";
import "../App.css";
import MaterialTable from "material-table";
import { data } from './Restraunts'

class RestrauntsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			columns: [
				{ title: "Restaurant ID", field: "Restaurant_ID" },
				{ title: "Restaurant Name", field: "Restaurant_Name" },
				{ title: "Cuisines", field: "Cuisines" },
				{ title: "Average Cost for two", field: "Average_Cost_for_two" },
				{ title: "Currency", field: "Currency" },
				{ title: "Has Table booking", field: "Has_Table_booking" },
				{ title: "Has Online delivery", field: "Has_Online_delivery" },
				{ title: "Aggregate rating", field: "Aggregate_rating" },
				{ title: "Rating color", field: "Rating_color" },
				{ title: "Rating text", field: "Rating_text" },
				{ title: "Votes", field: "Votes" },
			],
			data: [],
		};
	}

	render() {
		return (
			<MaterialTable
				title={"Top Restraunts"}
				columns={this.state.columns}
				data={data}
				options={{
					padding: "dense",
					filtering: true,
					grouping: true,
					loadingType: "overlay",
					actionsColumnIndex: 100,
					addRowPosition: "first",
				}}
			/>
		);
	}
}

export default RestrauntsList;
