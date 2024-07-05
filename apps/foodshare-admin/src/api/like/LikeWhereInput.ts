import { StringFilter } from "../../util/StringFilter";
import { MealWhereUniqueInput } from "../meal/MealWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeWhereInput = {
  id?: StringFilter;
  meal?: MealWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
