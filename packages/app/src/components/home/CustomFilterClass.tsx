import { EntityFilter } from '@backstage/plugin-catalog-react';
import { Entity } from '@backstage/catalog-model';

export class EntitySecurityTierFilter implements EntityFilter {
  constructor(readonly values: string[]) {}
  filterEntity(entity: Entity): boolean {
    const tier = entity.metadata.annotations?.['company.com/security-tier'];
    return tier !== undefined && this.values.includes(tier);
  }
}

