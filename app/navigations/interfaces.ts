import { ToDoCardProps } from "@/app/components/TodoCard/interfaces";

export type RootStackParamList = {
  UPDATETODO: { item: ToDoCardProps };
  ADDTODO: undefined;
  HOME: undefined;
  ONBOARDING: undefined;
};
