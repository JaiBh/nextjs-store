import Link from "next/link";
import { Button } from "../ui/button";
import { LuShoppingCart } from "react-icons/lu";
function CartButton() {
  // temp
  const numItemsInCart = 9;
  return (
    <Button
      variant="outline"
      asChild
      size="icon"
      className="flex justify-center items-center relative"
    >
      <Link href="/cart">
        <LuShoppingCart></LuShoppingCart>
        <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 items-center justify-center text-xs flex">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}
export default CartButton;
