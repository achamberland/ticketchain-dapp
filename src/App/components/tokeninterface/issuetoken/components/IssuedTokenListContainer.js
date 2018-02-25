import { connect } from 'react-redux'
import * as actions from './IssueTokenActions';
import IssuedTokenList from './IssuedTokenList';

const mapStateToProps = (data) => ({
	issuedTokens: data.token.issuedTokens,
	issuedTokenStatus: data.token.issuedTokenStatus,
})

const mapDispatchToProps = dispatch => ({
	updateIssuedTokens: tokens => dispatch(actions.updateIssuedTokens(tokens)),
	displayTokenLoadError: error => dispatch(actions.displayTokenLoadError(error)),
})

const IssuedTokenListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(IssuedTokenList)

export default IssuedTokenListContainer
