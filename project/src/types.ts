export interface ForexRate {
  agentId: string;
  country: string;
  currency: string;
  payIn: string;
  amount: number;
  payoutAmount: number;
  rates: number;
}