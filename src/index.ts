import { GraphQLClient } from 'graphql-request'
import { getSdk, GetAccountQueryVariables, TransferAccountMutationVariables } from './sdk'

interface Config {
	clientId: string
	clientSecret: string
	endpoint: string
}

interface GetAccountQueryVariablesWithToken extends GetAccountQueryVariables {
	token: string
}

interface TransferAccountMutationVariablesWithToken extends TransferAccountMutationVariables {
	token: string
}

const MeterApi = ({ clientId, clientSecret, endpoint = 'https://meterapi.io/api' } : Config) => {
	const client = new GraphQLClient(endpoint, {
		headers: {
			'x-client-id': clientId,
			'x-client-secret': clientSecret,
		},
	})

	return {
		...getSdk(client),
		getAccount: ({ token, ...variables } : GetAccountQueryVariablesWithToken) => {
			const authedClient = new GraphQLClient(endpoint, {
				headers: {
					'x-client-id': clientId,
					'x-client-secret': clientSecret,
					Authorization: `Bearer ${token}`
				},
			})
			const authedSdk = getSdk(authedClient)

			return authedSdk.getAccount(variables)
		},
		transferAccount: ({ token, ...variables } : TransferAccountMutationVariablesWithToken) => {
			const authedClient = new GraphQLClient(endpoint, {
				headers: {
					'x-client-id': clientId,
					'x-client-secret': clientSecret,
					Authorization: `Bearer ${token}`
				},
			})
			const authedSdk = getSdk(authedClient)

			return authedSdk.transferAccount(variables)
		},
	}
}

export default MeterApi