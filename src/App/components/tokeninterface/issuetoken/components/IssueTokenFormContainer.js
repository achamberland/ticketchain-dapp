import { connect } from 'react-redux'
import IssueTokenForm from './IssueTokenForm'
import * as actions from './IssueTokenActions'

const mapStateToProps = (state, ownProps) => ({
  	issueFormData: state.token.issueFormData,
})

const mapDispatchToProps = (dispatch) => ({
	updateIssueForm: (inputName, value) => dispatch(actions.updateIssueForm(inputName, value)),
	issueToken: (event, formData) => {
		event.preventDefault()
		dispatch(actions.issueToken(formData))
	},
})

const IssueTokenFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueTokenForm)

export default IssueTokenFormContainer

