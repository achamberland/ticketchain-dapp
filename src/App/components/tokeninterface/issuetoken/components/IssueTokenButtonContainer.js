import { connect } from 'react-redux'
import IssueTokenButton from './IssueTokenButton'
import * as actions from './IssueTokenActions'

const mapStateToProps = (state, ownProps) => ({
  	issueFormData: state.token.issueFormData
})

const mapDispatchToProps = dispatch => ({
    issueToken: (event, formData) => {
      event.preventDefault();
      dispatch(actions.issueToken(formData))
    }
})

const IssueTokenButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueTokenButton)

export default IssueTokenButtonContainer
