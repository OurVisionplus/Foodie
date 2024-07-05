import { SortOrder } from "../../util/SortOrder";

export type ChatOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  recipient?: SortOrder;
  sender?: SortOrder;
  updatedAt?: SortOrder;
};
