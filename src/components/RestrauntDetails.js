import React from "react";
import { Card, Input, Form, Grid } from "shineout";

class RestrauntsDetails extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props.game);
		this.state = {
			game: this.props.history.location.state.data,
		};
	}

	render() {
		return (
			<React.Fragment>
				<Card>
					<Card.Header>
						<h2>Game Details</h2>
					</Card.Header>
					<Card.Body
						style={{
							"text-align": "left",
						}}
					>
						<Form disabled={true} value={this.state.game}>
							<Grid gutter={2}>
								<Grid width={0.5}>
									<Form.Item required label="Rank">
										<Input name="Rank" />
									</Form.Item>
								</Grid>
								<Grid width={0.5}>
									<Form.Item required label="NAme">
										<Input name="Name" />
									</Form.Item>
								</Grid>
								<Grid width={0.5}>
									<Form.Item required label="Platform">
										<Input name="Platform" />
									</Form.Item>
								</Grid>
								<Grid width={0.5}>
									<Form.Item required label="Year">
										<Input name="Year" />
									</Form.Item>
								</Grid>
								<Grid width={0.5}>
									<Form.Item required label="Genre">
										<Input name="Genre" />
									</Form.Item>
								</Grid>
								<Grid width={0.5}>
									<Form.Item required label="Publisher">
										<Input name="Publisher" />
									</Form.Item>
								</Grid>
								<Grid width={0.5}>
									<Form.Item required label="Global Sales">
										<Input name="Global_Sales" />
									</Form.Item>
								</Grid>
							</Grid>
						</Form>
					</Card.Body>
				</Card>
			</React.Fragment>
		);
	}
}

export default RestrauntsDetails;
