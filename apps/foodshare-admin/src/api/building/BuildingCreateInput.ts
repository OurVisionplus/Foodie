import { UserCreateNestedManyWithoutBuildingsInput } from "./UserCreateNestedManyWithoutBuildingsInput";

export type BuildingCreateInput = {
  name?: string | null;
  users?: UserCreateNestedManyWithoutBuildingsInput;
};
