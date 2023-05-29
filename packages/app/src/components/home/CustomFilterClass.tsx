import { EntityFilter } from '@backstage/plugin-catalog-react';
import { Entity } from '@backstage/catalog-model';

export class EntitySecurityTierFilter implements EntityFilter {
  constructor(readonly values: string[]) {}
  filterEntity(entity: Entity): boolean {
    const today = new Date();
    let registeredOn: Date | undefined;
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(today.getDate() - 7);
    sevenDaysAgo.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    if (entity.metadata.annotations?.['register-date']) {
        registeredOn = new Date(entity.metadata.annotations?.['register-date'])  
        console.log(registeredOn)
        return (registeredOn >= sevenDaysAgo && registeredOn <= today);
    } 
    return false;
  }
}

