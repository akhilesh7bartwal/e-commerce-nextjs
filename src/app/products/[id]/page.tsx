import PriceTag from "@/components/PriceTag";
import { prisma } from "@/lib/db/prisma";
import { Product } from "@prisma/client";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cache } from "react";
import AddToCardButton from "./AddToCardButton";

interface ProductPageProducts {
    params: {
        id: string
    }
}

//from react inbuild function
const getProduct = cache(async(id: string) => {
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) {
        return notFound();
    }
    return product;
});

//from next js inbuild function
export async function generateMetadata({
    params: { id },
}: ProductPageProducts): Promise<Metadata> {
    const product = await getProduct(id)
    return {
        title: product.name+ " - FLapcart",
        description: product.description,
        openGraph: {
            images: [{url: product.imageUrl}]
        }
    }
}

export default async function ProductPage({ params: { id } }: ProductPageProducts) {
    
    const product = await getProduct(id)
    return (
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
            <Image
                src={product.imageUrl}
                alt={product.name}
                width={500}
                height={500}
                className="rounded-lg"
                priority
            />
            <div>
                <h1 className="text-5xl font-bold">{product.name}</h1>
                <PriceTag price={product.price} className="mt-4" />
                <p className="py-6">{product.description}</p>
                <AddToCardButton productId={product.id}/>
            </div>

        </div>
    )

}