import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MealWhereUniqueInput } from "../meal/MealWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  meal?: MealWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
