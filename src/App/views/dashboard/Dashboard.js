import React, { Component } from 'react'
import IssuedTokenListContainer from '../../components/tokeninterface/issuetoken/components/IssuedTokenListContainer'
import IssueTokenFormContainer from '../../components/tokeninterface/issuetoken/components/IssueTokenFormContainer'

class Dashboard extends Component {
	constructor(props, { authData }) {
		super(props)
		authData = this.props
	}

	render() {
		return(
			<main className="container">
				<div>
					<div>
						<h1>Dashboard</h1>
						<p><strong>Congratulations {this.props.authData.name}!</strong> If you're seeing this page, you've logged in with your own smart contract successfully.</p>
					</div>
				</div>
				<div>
					<IssuedTokenListContainer/>	
				</div>
				<div>
					<h2>Issue a token</h2>
					<p>Do it</p>
					<IssueTokenFormContainer/>
				</div>
			</main>
		)
	}
}

export default Dashboard
