import { MealWhereUniqueInput } from "../meal/MealWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  meal?: MealWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
