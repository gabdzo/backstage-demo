import { DefaultEntityFilters } from '@backstage/plugin-catalog-react';
import { EntitySecurityTierFilter } from './CustomFilterClass';

export type CustomFilters = DefaultEntityFilters & {
  securityTiers?: EntitySecurityTierFilter;
};
