import { JsonFilter } from "../../util/JsonFilter";
import { BuildingWhereUniqueInput } from "../building/BuildingWhereUniqueInput";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { MealListRelationFilter } from "../meal/MealListRelationFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type UserWhereInput = {
  avatar?: JsonFilter;
  building?: BuildingWhereUniqueInput;
  comments?: CommentListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  likes?: LikeListRelationFilter;
  meals?: MealListRelationFilter;
  payments?: PaymentListRelationFilter;
  username?: StringFilter;
};
