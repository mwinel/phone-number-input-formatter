import { formatUK } from './utils';
import { zone1Formatter } from './zone1-formatter';
import { zone2AFormatter } from './zone2A-formatter';
import { zone2BEgyptFormatter } from './zone2BEgypt-formatter';

type Formatter = (digits: string) => string;

export const formatters: Record<string, Formatter> = {
  // Zone 1
  US: zone1Formatter,
  CA: zone1Formatter,
  BM: zone1Formatter,
  JM: zone1Formatter,
  BS: zone1Formatter,

  UK: formatUK,

  // Zone 2A
  UG: zone2AFormatter,
  KE: zone2AFormatter,
  TZ: zone2AFormatter,
  RW: zone2AFormatter,

  // Zone 2B
  EG: zone2BEgyptFormatter,
};
