import { EntityFilter } from '@backstage/plugin-catalog-react';
import { Entity } from '@backstage/catalog-model';

export class EntitySecurityTierFilter implements EntityFilter {
  constructor(readonly values: string[]) {}
  filterEntity(entity: Entity): boolean {
    const today = new Date();
    const registeredOn = entity.metadata.annotations?.['register-date'];
    const registerDate = new Date(registeredOn);
    today.setHours(0, 0, 0, 0);
    registerDate.setHours(0, 0, 0, 0);
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(today.getDate() - 7);
    sevenDaysAgo.setHours(0, 0, 0, 0);

    return registeredOn !== (undefined && registerDate >= sevenDaysAgo && registerDate <= today);

  }
}

