import React from 'react';

import IssueTokenButtonContainer from './IssueTokenButtonContainer';

class IssueTokenForm extends React.Component {

	handleInputChange(event) {
		this.props.updateIssueForm(event.currentTarget.getAttribute("name"), event.currentTarget.value);
	}

	handleFormSubmit(event) {
		this.props.issueToken(event, this.props.issueFormData);
		return false;
	}

	render() {
		return (
			<form
				className={"issue-token-form"}
				id={"issue-token-form"}
				onSubmit={event => this.handleFormSubmit(event)}
			>
				<input type={"text"} name={"name"}        onChange={event => this.handleInputChange(event)}/>
				<input type={"text"} name={"description"} onChange={event => this.handleInputChange(event)}/>
				<input type={"text"} name={"imageUrl"}    onChange={event => this.handleInputChange(event)}/>
				<input type={"text"} name={"postal"}      onChange={event => this.handleInputChange(event)}/>
				<IssueTokenButtonContainer issueFormData={this.props.issueFormData}/>
			</form>
		);
	}
}

export default IssueTokenForm;
