import {expectType} from 'tsd';
import {
    breakEvenStockPrice,
    payoffFromBuyingCall,
    payoffFromBuyingPut,
    payoffFromSellingCall,
    payoffFromSellingPut,
    OptionType
} from '..';

expectType<number>(breakEvenStockPrice(50, OptionType.Call, 10));
expectType<number>(payoffFromBuyingCall(50, 70, 10));
expectType<number>(payoffFromBuyingPut(50, 70, 10));
expectType<number>(payoffFromSellingCall(50, 70, 10));
expectType<number>(payoffFromSellingPut(50, 70, 10));