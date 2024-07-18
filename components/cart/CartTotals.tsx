import { Card, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/utils/format";
import { createOrderAction } from "@/utils/actions";
import FormContainer from "../form/FormContainer";
import { SubmitButton } from "../form/Buttons";
import { Cart } from "@prisma/client";

function CartTotals({ cart }: { cart: Cart }) {
  const { cartTotal, shipping, tax, orderTotal } = cart;
  return (
    <div>
      <Card className="p-8">
        <CartTotalRow label="Subtotal" amount={cartTotal}></CartTotalRow>
        <CartTotalRow label="Shipping" amount={shipping}></CartTotalRow>
        <CartTotalRow label="Tax" amount={tax}></CartTotalRow>
        <CardTitle className="mt-8">
          <CartTotalRow
            label="Order Total"
            amount={orderTotal}
            lastRow
          ></CartTotalRow>
        </CardTitle>
      </Card>
      <FormContainer action={createOrderAction}>
        <SubmitButton text="Place Order" className="w-full mt-8"></SubmitButton>
      </FormContainer>
    </div>
  );
}

function CartTotalRow({
  label,
  amount,
  lastRow,
}: {
  label: string;
  amount: number;
  lastRow?: boolean;
}) {
  return (
    <>
      <p className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{formatCurrency(amount)}</span>
      </p>
      {lastRow ? null : <Separator className="my-2"></Separator>}
    </>
  );
}

export default CartTotals;
