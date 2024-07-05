import { MealWhereUniqueInput } from "../meal/MealWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeCreateInput = {
  meal?: MealWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
