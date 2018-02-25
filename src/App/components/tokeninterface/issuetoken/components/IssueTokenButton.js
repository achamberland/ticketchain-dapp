import React from 'react'

class IssueTokenButton extends React.Component {

	handleButtonSelect(event) {
		const data = this.props.issueFormData;
		this.props.issueToken(event, data);
		return false;
	}

	render() {
		return(
    		<button
				className="issue-button pure-button"
				onClick={event => this.handleButtonSelect(event)}
				onKeyDown={event => event.which === 13 && this.handleButtonSelect(event)}
			>
				Issue Token
    		</button>
  		)
	}
}

export default IssueTokenButton
