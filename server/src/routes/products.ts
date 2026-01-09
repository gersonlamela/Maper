// src/routes/products.ts
import { desc, eq, sql } from "drizzle-orm";
import { FastifyInstance } from "fastify";
import { db } from "../db";
import { categories, productImages, products } from "../db/schema";

export async function productsRoutes(app: FastifyInstance) {
  app.get("/products", async () => {
    const rows = await db
      .select({
        productId: products.id,
        name: products.name,
        price: products.price,
        discountPercentage: products.discountPercentage,

        category: {
          id: categories.id,
          name: categories.name,
          slug: categories.slug,
        },

        image: {
          id: productImages.id,
          url: productImages.url,
          isMain: productImages.isPrimary,
        },
      })
      .from(products)
      .leftJoin(categories, eq(products.categoryId, categories.id))
      .leftJoin(productImages, eq(productImages.productId, products.id));

    const productsMap = new Map<string, any>();

    for (const row of rows) {
      if (!productsMap.has(row.productId)) {
        productsMap.set(row.productId, {
          id: row.productId,
          name: row.name,
          price: row.price,
          discountPercentage: row.discountPercentage,
          category: row.category,
          images: [],
        });
      }

      if (row.image?.id) {
        productsMap.get(row.productId).images.push(row.image);
      }
    }

    return {
      data: Array.from(productsMap.values()),
    };
  });

  app.get("/products/random", async (request) => {
    const { limit } = request.query as { limit?: string };

    const parsedLimit = Math.min(Number(limit) || 4, 20);

    const rows = await db
      .select({
        productId: products.id,
        name: products.name,
        price: products.price,
        discountPercentage: products.discountPercentage,

        category: {
          id: categories.id,
          name: categories.name,
          slug: categories.slug,
        },

        image: {
          id: productImages.id,
          url: productImages.url,
          isMain: productImages.isPrimary,
        },
      })
      .from(products)
      .leftJoin(categories, eq(products.categoryId, categories.id))
      .leftJoin(productImages, eq(productImages.productId, products.id))
      .orderBy(sql`RANDOM()`)
      .limit(parsedLimit * 3); // multiplica para garantir imagens suficientes

    // 🔹 Agrupar imagens por produto
    const productsMap = new Map<string, any>();

    for (const row of rows) {
      if (!productsMap.has(row.productId)) {
        productsMap.set(row.productId, {
          id: row.productId,
          name: row.name,
          price: row.price,
          discountPercentage: row.discountPercentage,
          category: row.category,
          images: [],
        });
      }

      if (row.image?.id) {
        productsMap.get(row.productId).images.push(row.image);
      }
    }

    // 🔹 Garantir número máximo de produtos
    const result = Array.from(productsMap.values()).slice(0, parsedLimit);

    return {
      data: result,
      meta: {
        limit: parsedLimit,
        total: result.length,
      },
    };
  });

  app.get("/products/new", async (request) => {
    const { limit } = request.query as { limit?: string };

    const parsedLimit = Math.min(Number(limit) || 4, 20);

    const rows = await db
      .select({
        productId: products.id,
        name: products.name,
        price: products.price,
        discountPercentage: products.discountPercentage,

        category: {
          id: categories.id,
          name: categories.name,
          slug: categories.slug,
        },

        image: {
          id: productImages.id,
          url: productImages.url,
          isMain: productImages.isPrimary,
        },
      })
      .from(products)
      .leftJoin(categories, eq(products.categoryId, categories.id))
      .leftJoin(productImages, eq(productImages.productId, products.id))
      .orderBy(desc(products.createdAt)) // 🔥 MAIS RECENTES
      .limit(parsedLimit * 3); // garantir imagens suficientes

    // 🔹 Agrupar imagens por produto
    const productsMap = new Map<string, any>();

    for (const row of rows) {
      if (!productsMap.has(row.productId)) {
        productsMap.set(row.productId, {
          id: row.productId,
          name: row.name,
          price: row.price,
          discountPercentage: row.discountPercentage,
          category: row.category,
          images: [],
        });
      }

      if (row.image?.id) {
        productsMap.get(row.productId).images.push(row.image);
      }
    }

    const result = Array.from(productsMap.values()).slice(0, parsedLimit);

    return {
      data: result,
      meta: {
        limit: parsedLimit,
        total: result.length,
      },
    };
  });
}
