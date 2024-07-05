import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MealWhereUniqueInput } from "../meal/MealWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  meal?: MealWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
