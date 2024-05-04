export interface IUnitNamePlural {
    singular: string,
    plural: string,
    isSame: boolean,
  }
  export type IUnitSystem = "metric mass" | "metric volume" | 'volume'
  
  export interface IGlobalUnit {
    id: number,
    unitSystem: IUnitSystem,
    decimalPlaces: number,
    unitNamePlural: IUnitNamePlural,
    aliases: string[],
  }
  
  export const mockGlobalUnits: IGlobalUnit[] = [
    {
      "id": 1,
      "unitSystem": "metric mass",
      "decimalPlaces": 0,
      "unitNamePlural": {
        "singular": "gram",
        "plural": "grams",
        "isSame": false,
      },
      "aliases": ["gms", "gr", "gm", "grms", "grm"],
    },
    {
      "id": 2,
      "unitSystem": "metric mass",
      "decimalPlaces": 3,
      "unitNamePlural": {
        "singular": "kg",
        "plural": "kg",
        "isSame": true,
      },
      "aliases": ["kilo", "kilos", "kilogram", "kilograms"],
    },
    {
      "id": 3,
      "unitSystem": "metric volume",
      "decimalPlaces": 3,
      "unitNamePlural": {
        "singular": "litre",
        "plural": "litres",
        "isSame": false,
      },
      "aliases": ["lt", "L", "l", "ℓ", "liters", "litres", "liter"
      ],
    },
    {
      "id": 4,
      "unitSystem": "metric volume",
      "decimalPlaces": 2,
      "unitNamePlural": {
        "singular": "ml",
        "plural": "ml",
        "isSame": true,
      },
      "aliases": ["mls", "mililitres", "mililitre", "millilitres"],
    },
    {
      "id": 5,
      "unitSystem": "volume",
      "decimalPlaces": 1,
      "unitNamePlural": {
        "singular": "tsp",
        "plural": "tsps",
        "isSame": false,
      },
      "aliases": ["t", "teaspoon", "teasp.", "teaspoons"],
    },
    {
      "id": 6,
      "unitSystem": "volume",
      "decimalPlaces": 1,
      "unitNamePlural": {
        "singular": "tbsp",
        "plural": "tbsps",
        "isSame": false,
      },
      "aliases": ["T", "TB", "Tbsp", "tablespoons"],
    },
    {
      "id": 7,
      "unitSystem": "volume",
      "decimalPlaces": 3,
      "unitNamePlural": {
        "singular": "cup",
        "plural": "cups",
        "isSame": false,
      },
      "aliases": ["c", "C"],
    }
  ]