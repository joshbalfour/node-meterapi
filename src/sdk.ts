import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
  URL: any,
};

export type Account = {
   __typename?: 'Account',
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  status?: Maybe<Status>,
  email?: Maybe<Scalars['String']>,
  isTest?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  supplier?: Maybe<Supplier>,
  supplies?: Maybe<Array<Maybe<Supply>>>,
  transfers?: Maybe<Array<Maybe<Transfer>>>,
};

export type Address = {
   __typename?: 'Address',
  name?: Maybe<Scalars['String']>,
  line1?: Maybe<Scalars['String']>,
  line2?: Maybe<Scalars['String']>,
  town?: Maybe<Scalars['String']>,
  postcode?: Maybe<Scalars['String']>,
};

export type AddressInput = {
  name: Scalars['String'],
  line1: Scalars['String'],
  line2?: Maybe<Scalars['String']>,
  town: Scalars['String'],
  postcode: Scalars['String'],
};

export type BillingInput = {
  accountHolderName: Scalars['String'],
  accountNumber: Scalars['String'],
  sortCode: Scalars['String'],
};

export type ConnectionInfo = {
   __typename?: 'ConnectionInfo',
  connectionUrl?: Maybe<Scalars['String']>,
};


export type Mutation = {
   __typename?: 'Mutation',
  connectAccount?: Maybe<ConnectionInfo>,
  newSupplierAuth?: Maybe<NewSupplierAuth>,
  transferAccount?: Maybe<Account>,
  newAccount?: Maybe<NewSupplierAuth>,
};


export type MutationConnectAccountArgs = {
  supplierId: Scalars['ID'],
  redirectUrl: Scalars['String']
};


export type MutationNewSupplierAuthArgs = {
  clientId: Scalars['ID'],
  supplierId: Scalars['ID'],
  credentials: SupplierCredentials
};


export type MutationTransferAccountArgs = {
  accountId: Scalars['ID'],
  supplierId: Scalars['ID']
};


export type MutationNewAccountArgs = {
  supplierId: Scalars['ID'],
  account: NewAccount
};

export type NewAccount = {
  name: Scalars['String'],
  phoneNumber: Scalars['String'],
  address: AddressInput,
  billingInfo: BillingInput,
};

export type NewSupplierAuth = {
   __typename?: 'NewSupplierAuth',
  accountId?: Maybe<Scalars['ID']>,
  token?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  getAccount?: Maybe<Account>,
  getSuppliers?: Maybe<Array<Maybe<Supplier>>>,
};


export type QueryGetAccountArgs = {
  id: Scalars['ID']
};

export enum Status {
  Active = 'ACTIVE',
  Pending = 'PENDING',
  TransferPending = 'TRANSFER_PENDING',
  Closed = 'CLOSED'
}

export type Supplier = {
   __typename?: 'Supplier',
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  logoUrl?: Maybe<Scalars['String']>,
  category?: Maybe<Supplier_Category>,
};

export enum Supplier_Category {
  Water = 'water',
  Energy = 'energy',
  Internet = 'internet'
}

export type SupplierCredentials = {
  username?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
};

export type Supply = {
   __typename?: 'Supply',
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  address?: Maybe<Address>,
  balance?: Maybe<Scalars['Float']>,
  transactions?: Maybe<Array<Maybe<Transaction>>>,
};

export type Transaction = {
   __typename?: 'Transaction',
  createdAt?: Maybe<Scalars['DateTime']>,
  amount?: Maybe<Scalars['Float']>,
  reason?: Maybe<Scalars['String']>,
};

export type Transfer = {
   __typename?: 'Transfer',
  id?: Maybe<Scalars['ID']>,
  supplier?: Maybe<Supplier>,
  status?: Maybe<TransferStatus>,
  statusMessage?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export enum TransferStatus {
  Pending = 'PENDING',
  Error = 'ERROR',
  Completed = 'COMPLETED'
}


export type ConnectAccountMutationVariables = {
  supplierId: Scalars['ID'],
  redirectUrl: Scalars['String']
};


export type ConnectAccountMutation = (
  { __typename?: 'Mutation' }
  & { connectAccount: Maybe<(
    { __typename?: 'ConnectionInfo' }
    & Pick<ConnectionInfo, 'connectionUrl'>
  )> }
);

export type NewAccountMutationVariables = {
  supplierId: Scalars['ID'],
  newAccount: NewAccount
};


export type NewAccountMutation = (
  { __typename?: 'Mutation' }
  & { newAccount: Maybe<(
    { __typename?: 'NewSupplierAuth' }
    & Pick<NewSupplierAuth, 'accountId' | 'token'>
  )> }
);

export type GetAccountQueryVariables = {
  accountId: Scalars['ID']
};


export type GetAccountQuery = (
  { __typename?: 'Query' }
  & { getAccount: Maybe<(
    { __typename?: 'Account' }
    & Pick<Account, 'id' | 'name' | 'status' | 'email' | 'createdAt'>
    & { supplier: Maybe<(
      { __typename?: 'Supplier' }
      & Pick<Supplier, 'id' | 'name' | 'logoUrl' | 'category'>
    )>, supplies: Maybe<Array<Maybe<(
      { __typename?: 'Supply' }
      & Pick<Supply, 'id' | 'createdAt' | 'balance'>
      & { address: Maybe<(
        { __typename?: 'Address' }
        & Pick<Address, 'name' | 'line1' | 'line2' | 'town' | 'postcode'>
      )>, transactions: Maybe<Array<Maybe<(
        { __typename?: 'Transaction' }
        & Pick<Transaction, 'createdAt' | 'amount' | 'reason'>
      )>>> }
    )>>>, transfers: Maybe<Array<Maybe<(
      { __typename?: 'Transfer' }
      & Pick<Transfer, 'id' | 'status' | 'statusMessage' | 'createdAt' | 'updatedAt'>
      & { supplier: Maybe<(
        { __typename?: 'Supplier' }
        & Pick<Supplier, 'id' | 'name' | 'logoUrl' | 'category'>
      )> }
    )>>> }
  )> }
);

export type GetSuppliersQueryVariables = {};


export type GetSuppliersQuery = (
  { __typename?: 'Query' }
  & { getSuppliers: Maybe<Array<Maybe<(
    { __typename?: 'Supplier' }
    & Pick<Supplier, 'id' | 'name' | 'logoUrl' | 'category'>
  )>>> }
);

export type TransferAccountMutationVariables = {
  accountId: Scalars['ID'],
  supplierId: Scalars['ID']
};


export type TransferAccountMutation = (
  { __typename?: 'Mutation' }
  & { transferAccount: Maybe<(
    { __typename?: 'Account' }
    & Pick<Account, 'id' | 'name' | 'status' | 'email' | 'createdAt'>
    & { supplier: Maybe<(
      { __typename?: 'Supplier' }
      & Pick<Supplier, 'id' | 'name' | 'logoUrl' | 'category'>
    )>, supplies: Maybe<Array<Maybe<(
      { __typename?: 'Supply' }
      & Pick<Supply, 'id' | 'createdAt' | 'balance'>
      & { address: Maybe<(
        { __typename?: 'Address' }
        & Pick<Address, 'name' | 'line1' | 'line2' | 'town' | 'postcode'>
      )>, transactions: Maybe<Array<Maybe<(
        { __typename?: 'Transaction' }
        & Pick<Transaction, 'createdAt' | 'amount' | 'reason'>
      )>>> }
    )>>>, transfers: Maybe<Array<Maybe<(
      { __typename?: 'Transfer' }
      & Pick<Transfer, 'id' | 'status' | 'statusMessage' | 'createdAt' | 'updatedAt'>
      & { supplier: Maybe<(
        { __typename?: 'Supplier' }
        & Pick<Supplier, 'id' | 'name' | 'logoUrl' | 'category'>
      )> }
    )>>> }
  )> }
);


export const ConnectAccountDocument = gql`
    mutation connectAccount($supplierId: ID!, $redirectUrl: String!) {
  connectAccount(supplierId: $supplierId, redirectUrl: $redirectUrl) {
    connectionUrl
  }
}
    `;
export const NewAccountDocument = gql`
    mutation newAccount($supplierId: ID!, $newAccount: NewAccount!) {
  newAccount(supplierId: $supplierId, account: $newAccount) {
    accountId
    token
  }
}
    `;
export const GetAccountDocument = gql`
    query getAccount($accountId: ID!) {
  getAccount(id: $accountId) {
    id
    name
    status
    email
    createdAt
    supplier {
      id
      name
      logoUrl
      category
    }
    supplies {
      id
      createdAt
      address {
        name
        line1
        line2
        town
        postcode
      }
      balance
      transactions {
        createdAt
        amount
        reason
      }
    }
    transfers {
      id
      supplier {
        id
        name
        logoUrl
        category
      }
      status
      statusMessage
      createdAt
      updatedAt
    }
  }
}
    `;
export const GetSuppliersDocument = gql`
    query getSuppliers {
  getSuppliers {
    id
    name
    logoUrl
    category
  }
}
    `;
export const TransferAccountDocument = gql`
    mutation transferAccount($accountId: ID!, $supplierId: ID!) {
  transferAccount(accountId: $accountId, supplierId: $supplierId) {
    id
    name
    status
    email
    createdAt
    supplier {
      id
      name
      logoUrl
      category
    }
    supplies {
      id
      createdAt
      address {
        name
        line1
        line2
        town
        postcode
      }
      balance
      transactions {
        createdAt
        amount
        reason
      }
    }
    transfers {
      id
      supplier {
        id
        name
        logoUrl
        category
      }
      status
      statusMessage
      createdAt
      updatedAt
    }
  }
}
    `;
export function getSdk(client: GraphQLClient) {
  return {
    connectAccount(variables: ConnectAccountMutationVariables): Promise<ConnectAccountMutation> {
      return client.request<ConnectAccountMutation>(print(ConnectAccountDocument), variables);
    },
    newAccount(variables: NewAccountMutationVariables): Promise<NewAccountMutation> {
      return client.request<NewAccountMutation>(print(NewAccountDocument), variables);
    },
    getAccount(variables: GetAccountQueryVariables): Promise<GetAccountQuery> {
      return client.request<GetAccountQuery>(print(GetAccountDocument), variables);
    },
    getSuppliers(variables?: GetSuppliersQueryVariables): Promise<GetSuppliersQuery> {
      return client.request<GetSuppliersQuery>(print(GetSuppliersDocument), variables);
    },
    transferAccount(variables: TransferAccountMutationVariables): Promise<TransferAccountMutation> {
      return client.request<TransferAccountMutation>(print(TransferAccountDocument), variables);
    }
  };
}