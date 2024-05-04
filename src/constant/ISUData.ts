import { IUnitSystem } from "./globalUnits"

export interface IISUItem {
  id: number,
  unitName: string,
  unitNamePlural: string,
  quantity: number,
  measureUnit: string,
  measureUnitId: number,
  price: number,
  supplierName: string,
  unitType: IUnitSystem | null // null if measure unit is measure unit
  
}

export const mockISUList : IISUItem[] = [
  {
    id: 1,
    unitName: 'example 1',
    unitNamePlural: 'example 1',
    quantity: 1,
    measureUnit: 'gram',
    measureUnitId: 1,
    price: 0,
    supplierName: 'Supplier example',
    unitType: 'metric mass'
  },
  {
    id: 2,
    unitName: 'example 2',
    unitNamePlural: 'example 2',
    quantity: 1,
    measureUnit: 'kg',
    measureUnitId: 2,
    price: 0,
    supplierName: 'Supplier example',
    unitType: 'metric mass'
  },
  {
    id: 3,
    unitName: 'example 3',
    unitNamePlural: 'example 3',
    quantity: 1,
    measureUnit: 'example 2',
    measureUnitId: 2,
    price: 0,
    supplierName: 'Supplier example',
    unitType: null
  }
]