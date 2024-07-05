import { CommentUpdateManyWithoutMealsInput } from "./CommentUpdateManyWithoutMealsInput";
import { InputJsonValue } from "../../types";
import { LikeUpdateManyWithoutMealsInput } from "./LikeUpdateManyWithoutMealsInput";
import { PaymentUpdateManyWithoutMealsInput } from "./PaymentUpdateManyWithoutMealsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MealUpdateInput = {
  comments?: CommentUpdateManyWithoutMealsInput;
  description?: string | null;
  ingredients?: InputJsonValue;
  likes?: LikeUpdateManyWithoutMealsInput;
  payments?: PaymentUpdateManyWithoutMealsInput;
  price?: number | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
