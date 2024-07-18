"use client";
import { useState } from "react";
import SelectProductAmount from "./SelectProductAmount";
import { Mode } from "./SelectProductAmount";
import FormContainer from "../form/FormContainer";
import { SubmitButton } from "../form/Buttons";
import { addToCartAction } from "@/utils/actions";
import { useAuth } from "@clerk/nextjs";
import { ProductSignInButton } from "../form/Buttons";
import { usePathname } from "next/navigation";

function AddToCart({ productId }: { productId: string }) {
  const [amount, setAmount] = useState(1);
  const { userId } = useAuth();
  const pathName = usePathname();

  return (
    <div className="mt-4">
      <SelectProductAmount
        mode={Mode.SingleProduct}
        amount={amount}
        setAmount={setAmount}
      ></SelectProductAmount>
      {userId ? (
        <FormContainer action={addToCartAction}>
          <input type="hidden" name="productId" value={productId} />
          <input type="hidden" name="amount" value={amount} />
          <input type="hidden" name="pathName" value={pathName} />
          <SubmitButton text="add to cart" className="mt-8"></SubmitButton>
        </FormContainer>
      ) : (
        <ProductSignInButton></ProductSignInButton>
      )}
    </div>
  );
}
export default AddToCart;
