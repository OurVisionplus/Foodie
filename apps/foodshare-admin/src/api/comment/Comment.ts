import { Meal } from "../meal/Meal";
import { User } from "../user/User";

export type Comment = {
  content: string | null;
  createdAt: Date;
  id: string;
  meal?: Meal | null;
  updatedAt: Date;
  user?: User | null;
};
