import { RouteProp } from '@react-navigation/core';

export enum EHomeRoutes {
  HOME_SCREEN = 'HOME_SCREEN',
  ALL_TRANSACTIONS_SCREEN = 'ALL_TRANSACTIONS_SCREEN',
  VIEW_TRANSACTION_SCREEN = 'VIEW_TRANSACTION_SCREEN',
  PAYMENT_DETAILS = 'PAYMENT_DETAILS',
}

export type AllTransactionsRouterProps = {
  creditCardName: string;
  creditCardNumber: string;
  accountHandle: string;
};

export type ViewTransactionRouterProps = {
  amount: number;
  creditCardName: string;
  creditCardNumber: string;
  merchant: string;
  date: string;
  referralNumber: string;
};

export type TRouterHome = {
  [EHomeRoutes.HOME_SCREEN]: undefined;
  [EHomeRoutes.ALL_TRANSACTIONS_SCREEN]: AllTransactionsRouterProps
  [EHomeRoutes.VIEW_TRANSACTION_SCREEN]: ViewTransactionRouterProps
};

export type ViewAllTransactionsScreenRouterParams = RouteProp<TRouterHome,
EHomeRoutes.ALL_TRANSACTIONS_SCREEN>;
