import { Hono } from "hono";

import { dataAnimals } from "./data/animals";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Animalia API",
    animals: "/animals",
  });
});

app.get("/animals", (c) => {
  return c.json(dataAnimals);
});

app.get("/animals/:id", (c) => {
  const id = Number(c.req.param("id"));

  if (!id) {
    return c.json({ message: "There is no ID" });
  }

  const animal = dataAnimals.find((animal) => animal.id === id);

  if (!animal) {
    return c.json({ message: "Animal not found" });
  }

  return c.json(animal);
});

export default app;
