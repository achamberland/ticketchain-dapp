import * as issueActions from './components/IssueTokenActions'

const initialState = {
	issueFormData: {
		name: "",
		description: "",
		imageUrl: "",
		postal: "",
	},
	issuedTokenStatus: issueActions.status.NOT_LOADED, 
	issuedTokens: [],
}

export default function(state = initialState, action) {
	switch (action.type) {
		case issueActions.UPDATE_ISSUED_TOKENS:
			return {
				...state,
				issuedTokens: action.payload.tokens,
				issuedTokenStatus: issueActions.status.LOADED,
			}
		case issueActions.UPDATE_ISSUED_TOKENS_ERROR:
			return {
				...state,
				issuedTokens: [], 
				issuedTokenStatus: issueActions.status.ERROR,
			}
		case issueActions.ADD_ISSUED_TOKEN:
			return {
				...state,
				issuedTokens: state.issuedTokens.concat(action.payload.token),
				issuedTokenStatus: issueActions.status.LOADED,
			}
		case issueActions.UPDATE_ISSUE_FORM:
			return {
				...state,
				issueFormData: {
					...state.issueFormData,
					[action.payload.inputName]: action.payload.value,
				},
			}
		default:
			return state
	}
}
