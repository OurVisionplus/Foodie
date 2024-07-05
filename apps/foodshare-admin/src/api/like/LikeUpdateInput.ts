import { MealWhereUniqueInput } from "../meal/MealWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeUpdateInput = {
  meal?: MealWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
