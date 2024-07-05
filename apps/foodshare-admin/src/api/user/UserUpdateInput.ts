import { InputJsonValue } from "../../types";
import { BuildingWhereUniqueInput } from "../building/BuildingWhereUniqueInput";
import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";
import { LikeUpdateManyWithoutUsersInput } from "./LikeUpdateManyWithoutUsersInput";
import { MealUpdateManyWithoutUsersInput } from "./MealUpdateManyWithoutUsersInput";
import { PaymentUpdateManyWithoutUsersInput } from "./PaymentUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  avatar?: InputJsonValue;
  building?: BuildingWhereUniqueInput | null;
  comments?: CommentUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  likes?: LikeUpdateManyWithoutUsersInput;
  meals?: MealUpdateManyWithoutUsersInput;
  password?: string;
  payments?: PaymentUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
