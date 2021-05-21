import { expectType } from 'tsd';
import {
    callBreakEvenPoint,
    putBreakEvenPoint,
    payoffFromBuyingCall,
    payoffFromBuyingPut,
    payoffFromSellingCall,
    payoffFromSellingPut,
    callPrice,
    putPrice,
} from '..';

const BlackScholesInput = {
    strike: 58,
    stock: 60,
    interestRate: 0.035,
    volatility: 0.2,
    timeToExpire: 0.5,
    dividend: 0.0125
}

expectType<number>(callBreakEvenPoint(50, 10));
expectType<number>(putBreakEvenPoint(50, 10));
expectType<number>(payoffFromBuyingCall(50, 70, 10));
expectType<number>(payoffFromBuyingPut(50, 70, 10));
expectType<number>(payoffFromSellingCall(50, 70, 10));
expectType<number>(payoffFromSellingPut(50, 70, 10));
expectType<number>(callPrice(BlackScholesInput));
expectType<number>(putPrice(BlackScholesInput));