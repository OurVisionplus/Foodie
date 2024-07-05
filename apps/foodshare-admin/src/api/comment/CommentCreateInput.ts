import { MealWhereUniqueInput } from "../meal/MealWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentCreateInput = {
  content?: string | null;
  meal?: MealWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
