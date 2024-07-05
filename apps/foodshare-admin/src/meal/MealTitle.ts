import { Meal as TMeal } from "../api/meal/Meal";

export const MEAL_TITLE_FIELD = "title";

export const MealTitle = (record: TMeal): string => {
  return record.title?.toString() || String(record.id);
};
