export function callBreakEvenPoint(strike: number, premium?: number): number;
export function putBreakEvenPoint(strike: number, premium?: number): number;

export function payoffFromBuyingCall(strike: number, stock: number, premium?: number): number;
export function payoffFromBuyingPut(strike: number, stock: number, premium?: number): number;
export function payoffFromSellingCall(strike: number, stock: number, premium?: number): number;
export function payoffFromSellingPut(strike: number, stock: number, premium?: number): number;
