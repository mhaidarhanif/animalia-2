export type Animal = {
  id: number;
  name: string;
  diet?: string;
  lifespan?: string;
  conservationStatus?: string;
  habitats?: Habitat[];
};

export type Habitat = {
  id: number;
  name: string;
};

export const dataAnimals: Animal[] = [
  {
    id: 1,
    name: "Bear",
    habitats: [
      { id: 10, name: "Forests" },
      { id: 11, name: "Mountains" },
    ],
    diet: "Omnivore",
    lifespan: "20-30 years",
    conservationStatus: "Least Concern",
  },
  {
    id: 2,
    name: "Cat",
    habitats: [{ id: 12, name: "Various (domesticated)" }],
    diet: "Carnivore",
    lifespan: "12-20 years",
    conservationStatus: "Domesticated",
  },
  {
    id: 3,
    name: "Dog",
    habitats: [{ id: 12, name: "Various (domesticated)" }],
    diet: "Omnivore",
    lifespan: "10-13 years",
    conservationStatus: "Domesticated",
  },
  {
    id: 4,
    name: "Elephant",
    habitats: [
      { id: 10, name: "Forests" },
      { id: 11, name: "Grasslands" },
    ],
    diet: "Herbivore",
    lifespan: "60-70 years",
    conservationStatus: "Endangered",
  },
];
