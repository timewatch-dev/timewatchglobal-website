export const dynamic = "force-dynamic";

import ProductDetails from "@/components/ProductDetails";
import axiosInstance from "@/lib/axiosInstance";
import { notFound } from "next/navigation";

const BASE_URL = "https://www.timewatchindia.com";

// 🧠 Generate metadata dynamically
export async function generateMetadata({ params }) {
  const { cat, subCat, slug } = params;

  try {
    const res = await axiosInstance.get(`/product/slug/${slug}`);
    const product = res?.data?.product;

    console.log(":product", product)

    if (!product || product?.status === "draft") {
      return {};
    }

    return {
      title: `${product.productName} | TimeWatch Infocom`,
      description:
        product.description || product.shortDesc || product.productName,
      alternates: {
        canonical: `${BASE_URL}/poducts/${cat}/${subCat}/${slug}`,
      },
      openGraph: {
        title: product.productName,
        description: product.description || product.shortDesc,
        url: `${BASE_URL}/poducts/${cat}/${subCat}/${slug}`,
        images: product.productImage
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error.message);
    return {};
  }
}

// 🧩 Product details page
export default async function ProductDetailsPage({ params }) {
  // ❌ Don't use await
  const { slug } = params;

  // console.log("Fetching product details for slug:", slug);

  let product = null;

  try {
    const res = await axiosInstance.get(`/product/slug/${slug}`, {
      next: { revalidate: 1 },
    });
    product = res?.data?.product;
    console.log("single product", product);
  } catch (err) {
    console.error("Product fetch error:", err?.response?.status || err.message);
    return notFound();
  }

  if (!product || product?.status === "draft") {
    return notFound();
  }

  return <ProductDetails product={product} />;
}
