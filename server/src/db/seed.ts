import { hash } from "bcryptjs";
import { db } from "./index";
import {
  categories,
  productColors,
  productImages,
  products,
  users,
} from "./schema";

async function seed() {
  console.log("🌱 Seeding database...");

  /* =========================
     USERS
  ========================= */

  await db.insert(users).values({
    name: "Admin",
    email: "admin@maper.pt",
    password: await hash("admin123", 10),
    role: "ADMIN",
  });

  /* =========================
     CATEGORIES
  ========================= */

  const [olhos, labios, rosto, acessorios] = await db
    .insert(categories)
    .values([
      { name: "Olhos", slug: "olhos" },
      { name: "Lábios", slug: "labios" },
      { name: "Rosto", slug: "rosto" },
      { name: "Acessórios", slug: "acessorios" },
    ])
    .returning();

  /* =========================
     PRODUCTS
  ========================= */

  const insertedProducts = await db
    .insert(products)
    .values([
      {
        name: "Máscara Volume Pro",
        description: "Máscara para pestanas de alto volume",
        composition: "Vitamina B5",
        price: "14.90",
        discountPercentage: 0,
        stock: 80,
        categoryId: olhos.id,
      },
      {
        name: "Delineador Precision",
        description: "Delineador líquido ultra preciso",
        composition: "Pigmentos naturais",
        price: "9.90",
        discountPercentage: 5,
        stock: 120,
        categoryId: olhos.id,
      },
      {
        name: "Paleta Nude Eyes",
        description: "Paleta de sombras em tons nude",
        composition: "Minerais naturais",
        price: "29.90",
        discountPercentage: 10,
        stock: 60,
        categoryId: olhos.id,
      },
      {
        name: "Batom Matte Lux",
        description: "Batom matte de longa duração",
        composition: "Vitamina E",
        price: "19.90",
        discountPercentage: 10,
        stock: 100,
        categoryId: labios.id,
      },
      {
        name: "Gloss Shine",
        description: "Gloss com efeito espelhado",
        composition: "Óleo de jojoba",
        price: "12.90",
        discountPercentage: 0,
        stock: 90,
        categoryId: labios.id,
      },
      {
        name: "Base Perfect Skin",
        description: "Base líquida acabamento natural",
        composition: "Ácido hialurónico",
        price: "24.90",
        discountPercentage: 15,
        stock: 70,
        categoryId: rosto.id,
      },
      {
        name: "Corretor Cover Pro",
        description: "Corretor de alta cobertura",
        composition: "Vitamina C",
        price: "11.90",
        discountPercentage: 0,
        stock: 110,
        categoryId: rosto.id,
      },
      {
        name: "Pó Compacto Soft",
        description: "Pó compacto efeito matte",
        composition: "Minerais naturais",
        price: "16.90",
        discountPercentage: 5,
        stock: 60,
        categoryId: rosto.id,
      },
      {
        name: "Esponja Beauty Blend",
        description: "Esponja para aplicação de maquilhagem",
        composition: "Látex free",
        price: "6.90",
        discountPercentage: 0,
        stock: 200,
        categoryId: acessorios.id,
      },
      {
        name: "Pincel Base Pro",
        description: "Pincel profissional para base",
        composition: "Fibras sintéticas",
        price: "13.90",
        discountPercentage: 0,
        stock: 150,
        categoryId: acessorios.id,
      },
    ])
    .returning();

  /* =========================
     PRODUCT IMAGES (3 por produto)
  ========================= */

  const IMAGE_HOST = "https://images.unsplash.com";

  const IMAGES = [
    `${IMAGE_HOST}/photo-1522335789203-aabd1fc54bc9`,
    `${IMAGE_HOST}/photo-1512496015851-a90fb38ba796`,
    `${IMAGE_HOST}/photo-1526045478516-99145907023c`,
  ];

  await db.insert(productImages).values(
    insertedProducts.flatMap((product) =>
      IMAGES.map((url, index) => ({
        productId: product.id,
        url,
        isPrimary: index === 0 ? 1 : 0,
      }))
    )
  );

  /* =========================
     PRODUCT COLORS
  ========================= */

  await db.insert(productColors).values(
    insertedProducts.flatMap((product) => [
      { productId: product.id, value: "Nude" },
      { productId: product.id, value: "Red" },
    ])
  );

  console.log("✅ Seed completed successfully");
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Seed failed", err);
  process.exit(1);
});
