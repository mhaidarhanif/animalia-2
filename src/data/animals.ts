export type Animal = {
  id: number;
  name: string;
  habitat: string;
  diet?: string;
  lifespan?: string;
  conservationStatus?: string;
};

export const dataAnimals: Animal[] = [
  {
    id: 1,
    name: "Bear",
    habitat: "Forests, mountains",
    diet: "Omnivore",
    lifespan: "20-30 years",
    conservationStatus: "Least Concern",
  },
  {
    id: 2,
    name: "Cat",
    habitat: "Various (domesticated)",
    diet: "Carnivore",
    lifespan: "12-20 years",
    conservationStatus: "Domesticated",
  },
  {
    id: 3,
    name: "Dog",
    habitat: "Various (domesticated)",
    diet: "Omnivore",
    lifespan: "10-13 years",
    conservationStatus: "Domesticated",
  },
  {
    id: 4,
    name: "Elephant",
    habitat: "Grasslands, forests",
    diet: "Herbivore",
    lifespan: "60-70 years",
    conservationStatus: "Endangered",
  },
];
