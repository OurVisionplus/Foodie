import { JsonValue } from "type-fest";
import { Building } from "../building/Building";
import { Comment } from "../comment/Comment";
import { Like } from "../like/Like";
import { Meal } from "../meal/Meal";
import { Payment } from "../payment/Payment";

export type User = {
  avatar: JsonValue;
  building?: Building | null;
  comments?: Array<Comment>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  likes?: Array<Like>;
  meals?: Array<Meal>;
  payments?: Array<Payment>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
