import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ChatWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  recipient?: StringNullableFilter;
  sender?: StringNullableFilter;
};
