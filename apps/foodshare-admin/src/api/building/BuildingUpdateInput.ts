import { UserUpdateManyWithoutBuildingsInput } from "./UserUpdateManyWithoutBuildingsInput";

export type BuildingUpdateInput = {
  name?: string | null;
  users?: UserUpdateManyWithoutBuildingsInput;
};
