import { InputJsonValue } from "../../types";
import { BuildingWhereUniqueInput } from "../building/BuildingWhereUniqueInput";
import { CommentCreateNestedManyWithoutUsersInput } from "./CommentCreateNestedManyWithoutUsersInput";
import { LikeCreateNestedManyWithoutUsersInput } from "./LikeCreateNestedManyWithoutUsersInput";
import { MealCreateNestedManyWithoutUsersInput } from "./MealCreateNestedManyWithoutUsersInput";
import { PaymentCreateNestedManyWithoutUsersInput } from "./PaymentCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  avatar?: InputJsonValue;
  building?: BuildingWhereUniqueInput | null;
  comments?: CommentCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  likes?: LikeCreateNestedManyWithoutUsersInput;
  meals?: MealCreateNestedManyWithoutUsersInput;
  password: string;
  payments?: PaymentCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
