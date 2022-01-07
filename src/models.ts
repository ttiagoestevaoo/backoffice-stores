export interface IStore {
  id: number;
  name: string;
  owner: string;
}

export interface ITransactionType {
  id: number;
  name: string;
  symbol: string;
  is_enter: boolean;
}

export interface ITransaction {
  created_at: string;
  amount: number;
  cpf: number;
  card: string;
  time_at: string;
  store_id: number;
  id: number;
  transaction_type: ITransactionType;
}

export interface IStoreResponseData {
  data: Array<IStore>;
}
