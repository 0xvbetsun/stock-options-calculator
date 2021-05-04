export enum OptionType {
    Call = 'CALL',
    Put = 'PUT'
}

export enum PositionType {
    Long = 'LONG',
    Short = 'SHORT'
}

export function breakEvenStockPrice(strike: number, type: OptionType, premium?: number): number;

export function payoffFromBuyingCall(strike: number, stock: number, premium?: number): number;
export function payoffFromBuyingPut(strike: number, stock: number, premium?: number): number;
export function payoffFromSellingCall(strike: number, stock: number, premium?: number): number;
export function payoffFromSellingPut(strike: number, stock: number, premium?: number): number;
