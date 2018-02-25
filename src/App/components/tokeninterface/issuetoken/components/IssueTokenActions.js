import EventTokenFactoryContract from '../../../../../../build/contracts/EventTokenFactory.json'
import { getContractInstance } from '../../../../shared/util/web3/contractor'
import { browserHistory } from 'react-router'
import store from '../../../../../store'

export const UPDATE_ISSUED_TOKENS = 'UPDATE_ISSUED_TOKENS'
export const UPDATE_ISSUED_TOKENS_ERROR = 'UPDATE_ISSUED_TOKENS_ERROR'
export const ADD_ISSUED_TOKEN = 'ADD_ISSUED_TOKEN'
export const UPDATE_ISSUE_FORM = 'UPDATE_ISSUE_FORM_DATA'

export const status = {
	ERROR: -1,
	NOT_LOADED: 0,
	LOADED: 1,
}

export function updateIssuedTokens(tokens) {
	return {
		type: UPDATE_ISSUED_TOKENS,
		payload: {
			tokens,
		},
	};
}

export function displayTokenLoadError(error) {
	return {
		type: UPDATE_ISSUED_TOKENS_ERROR,
		payload: {
			error,
		},
	}
}

export function addIssuedToken(token) {
	return {
		type: ADD_ISSUED_TOKEN,
		payload: {
			token,
		},
	}
}

export function updateIssueForm(inputName, value) {
	return {
		type: UPDATE_ISSUE_FORM,
		payload: {
			inputName,
			value,
		}
	}
}

export function issueToken(formData) {
	const { name, desc, imageUrl, postal } = formData;

	getContractInstance(EventTokenFactoryContract)
		.then((contractInstance, coinbase) => {
			contractInstance.createEventToken.call({ from: coinbase }, name, desc, imageUrl, postal)
				.then(() => {
					store.dispatch(addIssuedToken(formData))
					var currentLocation = browserHistory.getCurrentLocation()
					if ('redirect' in currentLocation.query) {
						return browserHistory.push(decodeURIComponent(currentLocation.query.redirect))
					}
					return browserHistory.push('/dashboard')
				})
		});
}

