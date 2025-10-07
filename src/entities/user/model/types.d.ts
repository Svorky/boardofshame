export type User = {
  name: string;
  link?: string;
  list_name: ListType;
  created_at?: string;
  reason?: string;
  user_role?: UserRole;
  status?: UserStatus;
};

type ListType = "shame" | "limbo" | "glory";

type UserStatus = "active" | "deleted" | "banned";

type UserRole =
  | "Пользователь"
  | "Сотрудник"
  | "Эксперт"
  | "Модератор"
  | "Робот";
