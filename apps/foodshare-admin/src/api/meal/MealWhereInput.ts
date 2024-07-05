import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MealWhereInput = {
  comments?: CommentListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  ingredients?: JsonFilter;
  likes?: LikeListRelationFilter;
  payments?: PaymentListRelationFilter;
  price?: FloatNullableFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
