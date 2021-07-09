/**
 * @param strike - strike price ($$$ per share)
 * @param stock - underlying price ($$$ per share)
 * @param interestRate - continuously compounded risk-free interest rate (% p.a.)
 * @param volatility - (% p.a.)
 * @param timeToExpire - time to expiration (% of year)
 * @param dividend - continuously compounded dividend yield (% p.a.)
 */
type BlackScholesInput = {
    strike: number, 
    stock: number, 
    interestRate: number, 
    volatility: number, 
    timeToExpire: number 
    dividend?: number, 
}

/**
 * @param strike - strike price ($$$ per share)
 * @param premium - current market price of an option ($$$ per share)
 * 
 * @returns Price in the underlying asset at which exercise/dispose of the contract without incurring a loss
 */
export function callBreakEvenPoint(strike: number, premium?: number): number;

/**
 * @param strike - strike price ($$$ per share)
 * @param premium - current market price of an option ($$$ per share)
 * 
 * @returns Price in the underlying asset at which exercise/dispose of the contract without incurring a loss
 */
export function putBreakEvenPoint(strike: number, premium?: number): number;


/**
 * @param strike - strike price ($$$ per share)
 * @param stock - underlying price ($$$ per share)
 * @param premium - current market price of an option ($$$ per share)
 */
export function payoffFromBuyingCall(strike: number, stock: number, premium?: number): number;
/**
 * @param strike - strike price ($$$ per share)
 * @param stock - underlying price ($$$ per share)
 * @param premium - current market price of an option ($$$ per share)
 */
export function payoffFromBuyingPut(strike: number, stock: number, premium?: number): number;
/**
 * @param strike - strike price ($$$ per share)
 * @param stock - underlying price ($$$ per share)
 * @param premium - current market price of an option ($$$ per share)
 */
export function payoffFromSellingCall(strike: number, stock: number, premium?: number): number;
/**
 * @param strike - strike price ($$$ per share)
 * @param stock - underlying price ($$$ per share)
 * @param premium - current market price of an option ($$$ per share)
 */
export function payoffFromSellingPut(strike: number, stock: number, premium?: number): number;

/**
 * @param blackScholesInput 
 * @returns price of `call` option
 */
export function callPrice(blackScholesInput: BlackScholesInput): number;
/**
 * @param blackScholesInput 
 * @returns price of `put` option
 */
export function putPrice(blackScholesInput: BlackScholesInput): number;
