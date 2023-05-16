import { DefaultEntityFilters } from '@backstage/plugin-catalog-react';
import { EntitySecurityTierFilter } from './CustomFilterClass';

export const CustomFilters = DefaultEntityFilters & {
  securityTiers?: EntitySecurityTierFilter;
};
