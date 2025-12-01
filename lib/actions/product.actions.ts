"use server";

import { prisma } from "@/db/prisma";



export async function getALatestProducts() {
    const data=await prisma.product.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })   
}

export async function getProductBySlug(slug: string) {
    const data = await prisma.product.findFirst({
        where: { slug },
    })
    return data;
}