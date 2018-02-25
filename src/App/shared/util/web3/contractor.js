import contract from 'truffle-contract'
import store from '../../../../store'

export function getContractInstance(ContractJson) {
	return new Promise((resolve, reject) => {
		let web3 = store.getState().web3.web3Instance

		if (typeof web3 !== 'undefined') {
			const factoryContract = contract(ContractJson)
			factoryContract.setProvider(web3.currentProvider)
			web3.eth.getCoinbase((coinbaseError, coinbase) => {
				if (!coinbaseError) {
					factoryContract.deployed()
						.then(instance => resolve(instance, coinbase))
						.catch(deployError => handleError(deployError, reject))
				} else {
					handleError(coinbaseError, reject)
				}
			});
		} else {
			handleError("web3 instance unavailable", reject)
		}
	});
};

function handleError(error, reject) {
	console.error(error)
	reject(error)
}
