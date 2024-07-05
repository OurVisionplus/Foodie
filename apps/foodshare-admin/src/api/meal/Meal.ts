import { Comment } from "../comment/Comment";
import { JsonValue } from "type-fest";
import { Like } from "../like/Like";
import { Payment } from "../payment/Payment";
import { User } from "../user/User";

export type Meal = {
  comments?: Array<Comment>;
  createdAt: Date;
  description: string | null;
  id: string;
  ingredients: JsonValue;
  likes?: Array<Like>;
  payments?: Array<Payment>;
  price: number | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
