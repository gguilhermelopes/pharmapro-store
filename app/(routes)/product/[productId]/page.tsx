import { FC } from "react";

import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";
import Gallery from "@/components/gallery";
import Info from "@/components/info";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export const revalidate = 0;

const ProductPage: FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category.id,
  });
  const filteredSuggestedProducts = suggestedProducts.filter(
    (item) => params.productId !== item.id
  );
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-2 md:items-start md:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-20 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10 " />
          <ProductList
            title="Items relacionados"
            items={filteredSuggestedProducts}
          />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
