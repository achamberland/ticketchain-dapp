import React from 'react'
import * as actions from './IssueTokenActions'
import EventTokenFactoryContract from '../../../../../../build/contracts/EventTokenFactory.json'
import { getContractInstance } from '../../../../shared/util/web3/contractor'

class IssuedTokenList extends React.Component {

	componentWillMount() {
		if (this.props.issuedTokenStatus === actions.status.NOT_LOADED) {
			getContractInstance(EventTokenFactoryContract)
				.then((instance, coinbase) => {
					instance.getOwnedTokens.call({from: coinbase})
						.then(tokens => {
							this.props.updateIssuedTokens(tokens)})
						.catch(error => this.props.displayTokenLoadError(error))
				})
				.catch(error => this.props.displayTokenLoadError(error))
		}
	}

	render() {
		const { issuedTokens } = this.props;

		return (
			<div className="token-list">
				<h2 className="heading token-list-heading">My Tokens</h2>
				<ul className="token-list">
					{issuedTokens.map((token) =>
						<li className="token" key={token.name}>
							<div className="token-thumb">
								<img src={token.imageUrl} alt={token.name}/>
							</div>
							<div className="token-name">{token.name}</div>
							<div className="token-description">{token.description}</div>
						</li>
					)}
				</ul>
			</div>
		);
	}
}

export default IssuedTokenList;
