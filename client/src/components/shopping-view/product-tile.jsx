import { Card, CardContent } from "../ui/card";
import { categoryOptionsMap } from "@/config";
import { Badge } from "../ui/badge";
import { Plus } from "lucide-react";

function ShoppingProductTile({
  product,
  handleGetProductDetails,
  handleAddtoCart,
}) {
  return (
    <Card className="w-full max-w-sm mx-auto group">
      <div onClick={() => handleGetProductDetails(product?._id)}>
        <div className="relative">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[300px] object-cover rounded-t-lg"
          />
          {product?.totalStock === 0 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              Out Of Stock
            </Badge>
          ) : product?.totalStock < 10 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              {`Only ${product?.totalStock} items left`}
            </Badge>
          ) : product?.salePrice > 0 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              Sale
            </Badge>
          ) : null}

          {/* Add to Cart Icon */}
          {product?.totalStock > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAddtoCart(product?._id, product?.totalStock);
              }}
              className="absolute bottom-2 right-2 bg-primary text-primary-foreground rounded-full p-3 shadow-lg hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Add to cart"
            >
              <Plus className="h-5 w-5" />
            </button>
          )}
        </div>
        <CardContent className="p-4">
          <h2 className="text-2xl font-bold mb-2">{product?.title}</h2>
          <div className="flex justify-between items-center mb-2">
            <span className="text-[16px] text-muted-foreground">
              {categoryOptionsMap[product?.category]}
            </span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span
              className={`${
                product?.salePrice > 0 ? "line-through" : ""
              } text-lg font-semibold text-primary`}
            >
              ${product?.price}
            </span>
            {product?.salePrice > 0 ? (
              <span className="text-lg font-semibold text-primary">
                ${product?.salePrice}
              </span>
            ) : null}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

export default ShoppingProductTile;
