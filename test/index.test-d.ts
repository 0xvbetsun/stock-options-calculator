import {expectType} from 'tsd';
import {
    callBreakEvenPoint,
    putBreakEvenPoint,
    payoffFromBuyingCall,
    payoffFromBuyingPut,
    payoffFromSellingCall,
    payoffFromSellingPut,
} from '..';

expectType<number>(callBreakEvenPoint(50, 10));
expectType<number>(putBreakEvenPoint(50, 10));
expectType<number>(payoffFromBuyingCall(50, 70, 10));
expectType<number>(payoffFromBuyingPut(50, 70, 10));
expectType<number>(payoffFromSellingCall(50, 70, 10));
expectType<number>(payoffFromSellingPut(50, 70, 10));