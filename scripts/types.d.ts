type User = {
  name: string;
  link?: string;
  list_name: ListType;
  created_at?: string;
  reason?: string;
  user_role?: string;
  status?: UserStatus;
};

type ListType = "shame" | "limbo" | "glory";

type UserStatus = "active" | "deleted" | "banned";
