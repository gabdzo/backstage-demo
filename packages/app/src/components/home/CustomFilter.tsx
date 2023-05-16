import React, { useEffect } from 'react';
import { useEntityList } from '@backstage/plugin-catalog-react';

import { EntitySecurityTierFilter } from './CustomFilterClass'; 
import { CustomFilters } from './CustomFilter2';

// If somebody understands TypeScript better then I, feel free to remove 
// unnecessary code and make it work properly. This is just temporary solution.

export const EntitySecurityTierPicker = () => {
  // The securityTiers key is recognized due to the CustomFilter generic
  const {
    filters: { securityTiers },
    updateFilters,
  } = useEntityList<CustomFilters>();

  // Toggles the value, depending on whether it's already selected
  function onChange(value: string) {
    const newTiers = securityTiers?.values.includes(value)
      ? securityTiers.values.filter(tier => tier !== value)
      : [...(securityTiers?.values ?? []), value];
    updateFilters({
      securityTiers: newTiers.length
        ? new EntitySecurityTierFilter(newTiers)
        : undefined,
    });
  }

  useEffect(() => {
      onChange('7');
  }, []);


  const tierOptions = ['1', '2', '3'];
  return null
};
