import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import { prisma } from "./libs/prisma";
import { z } from "zod";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Animalia API",
    animals: "/animals",
  });
});

app.get("/animals", async (c) => {
  const animals = await prisma.animal.findMany();

  return c.json(animals);
});

app.get("/animals/:id", async (c) => {
  const id = Number(c.req.param("id"));

  if (!id) return c.json({ message: "There is no animal ID" });

  const animal = await prisma.animal.findUnique({
    where: { id },
  });

  if (!animal) {
    c.status(404);
    return c.json({ message: "Animal not found" });
  }

  return c.json(animal);
});

app.delete("/animals", async (c) => {
  await prisma.animal.deleteMany();

  return c.json({
    message: "All animals data have been deleted",
  });
});

app.delete("/animals/:id", async (c) => {
  const id = Number(c.req.param("id"));

  if (!id) return c.json({ message: "There is no animal ID" });

  const deletedAnimal = await prisma.animal.delete({
    where: { id },
  });

  return c.json({
    message: `Animal with ID ${id} has been deleted`,
    deletedAnimal,
  });
});

app.post(
  "/animals",
  zValidator(
    "json",
    z.object({
      name: z.string(),
      lifespan: z.string(),
      speed: z.number().optional(),
    })
  ),
  async (c) => {
    const body = c.req.valid("json");

    try {
      const newAnimal = await prisma.animal.create({
        data: {
          name: body.name,
          lifespan: body.lifespan,
          speed: body.speed,
        },
      });
      return c.json(newAnimal);
    } catch (error) {
      c.status(400);
      return c.json({
        message: "Cannot create animal",
        error,
      });
    }
  }
);

app.put("/animals/:id", async (c) => {
  const id = Number(c.req.param("id"));
  if (!id) return c.json({ message: "There is no animal ID" });

  const body = await c.req.json();
  const newAnimal = await prisma.animal.update({
    where: { id },
    data: {
      name: body.name ? String(body.name) : undefined,
      lifespan: body.lifespan ? String(body.lifespan) : undefined,
    },
  });

  return c.json(newAnimal);
});

// TODO
// app.post("/animals/seed", async (c) => {
//   return c.json({
//     message: "Many animals data has been seeded.",
//   });
// });

console.log("🐾Animalia API is running");

export default app;
