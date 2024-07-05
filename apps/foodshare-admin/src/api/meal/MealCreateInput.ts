import { CommentCreateNestedManyWithoutMealsInput } from "./CommentCreateNestedManyWithoutMealsInput";
import { InputJsonValue } from "../../types";
import { LikeCreateNestedManyWithoutMealsInput } from "./LikeCreateNestedManyWithoutMealsInput";
import { PaymentCreateNestedManyWithoutMealsInput } from "./PaymentCreateNestedManyWithoutMealsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MealCreateInput = {
  comments?: CommentCreateNestedManyWithoutMealsInput;
  description?: string | null;
  ingredients?: InputJsonValue;
  likes?: LikeCreateNestedManyWithoutMealsInput;
  payments?: PaymentCreateNestedManyWithoutMealsInput;
  price?: number | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
