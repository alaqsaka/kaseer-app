import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

// Create new product

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, imageUrl, price } = body;

    const product = await prismadb.product.create({
      data: {
        name,
        price,
        imageUrl,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
