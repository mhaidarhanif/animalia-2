import { Hono } from "hono";

import { type Animal, dataAnimals } from "./data/animals";

let animals = dataAnimals;

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Animalia API",
    animals: "/animals",
  });
});

app.get("/animals", (c) => {
  if (animals.length <= 0) {
    return c.json({
      message: "There is no animals data",
    });
  }

  return c.json(animals);
});

app.get("/animals/:id", (c) => {
  const id = Number(c.req.param("id"));

  if (!id) {
    return c.json({ message: "There is no animal ID" });
  }

  const animal = animals.find((animal) => animal.id === id);

  if (!animal) {
    return c.json({ message: "Animal not found" });
  }

  return c.json(animal);
});

app.delete("/animals", (c) => {
  animals = [];

  console.log(animals);

  return c.json({
    message: "All animals data have been deleted",
  });
});

app.delete("/animals/:id", (c) => {
  const id = Number(c.req.param("id"));

  if (!id) {
    return c.json({ message: "There is no animal ID" });
  }

  const animal = animals.find((animal) => animal.id === id);

  if (!animal) {
    return c.json({ message: "Animal to be deleted not found" });
  }

  animals = animals.filter((animal) => animal.id !== id);

  return c.json({
    message: `Animal with ID ${id} has been deleted`,
    deletedAnimal: animal,
  });
});

app.post("/animals", async (c) => {
  const body = await c.req.json();

  const newAnimal: Animal = {
    id: animals[animals.length - 1].id + 1,
    name: body.name,
    // habitat: body.habitat,
  };

  const updatedAnimals = [...animals, newAnimal];

  animals = updatedAnimals;

  return c.json(newAnimal);
});

app.put("/animals/:id", async (c) => {
  const id = Number(c.req.param("id"));

  if (!id) {
    return c.json({ message: "There is no animal ID" });
  }

  const animal = animals.find((animal) => animal.id === id);

  if (!animal) {
    return c.json({ message: "Animal not found" });
  }

  const body = await c.req.json();

  const newAnimal: Animal = {
    id: animal.id,
    name: body.name,
    // habitat: body.habitat,
  };

  const updatedAnimals = animals.map((animal) => {
    if (animal.id === id) {
      return newAnimal;
    } else {
      return animal;
    }
  });

  animals = updatedAnimals;

  return c.json(newAnimal);
});

app.post("/animals/seed", async (c) => {
  animals = dataAnimals;

  return c.json({
    message: "Many animals data has been seeded.",
  });
});

console.log("🐾Animalia API is running");

export default app;
