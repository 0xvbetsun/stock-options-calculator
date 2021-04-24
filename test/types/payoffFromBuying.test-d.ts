import {expectType} from 'tsd';
import {OptionType} from '../../types/enum';
import payoffFromBuying from '../../types/payoffFromBuying';

expectType<number>(payoffFromBuying(1400, 100, OptionType.Call, 50));