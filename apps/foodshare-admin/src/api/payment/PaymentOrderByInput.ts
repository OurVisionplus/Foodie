import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  mealId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
