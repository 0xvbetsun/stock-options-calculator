import {expectType} from 'tsd';
import {OptionType} from '../../types/enum';
import breakEvenStockPrice from '../../types/breakEvenStockPrice';

expectType<number>(breakEvenStockPrice(1400, OptionType.Call, 50));