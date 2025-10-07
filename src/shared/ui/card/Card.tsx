import "./Card.css";
import type { User } from "../../../entities/user/model/types";
import {
  BlockIcon,
  Expert,
  Moderator,
  Robot,
  YandexStaff,
} from "../../assets/icons";

type CardProps = {
  id: number;
  user: User;
};
export const Card = (props: CardProps) => {
  const { id, user } = props;

  const formattedUser = Object.fromEntries(
    Object.entries(user).map(([key, val]) => {
      return [key, val ? val : "Не известно"];
    })
  ) as User;

  return (
    <div className="card">
      <div className="card-title">
        <h2>
          {formattedUser.name}
          {formattedUser.user_role === "Сотрудник" ? <YandexStaff /> : ""}
          {formattedUser.user_role === "Робот" ? <Robot /> : ""}
          {formattedUser.user_role === "Эксперт" ? <Expert /> : ""}
          {formattedUser.user_role === "Модератор" ? <Moderator /> : ""}
          {formattedUser.status === "banned" ? <BlockIcon /> : ""}
        </h2>
        <span className="card-id">{id}</span>
      </div>
      <div className="card-content">
        <p>Дата добавления: {formattedUser.created_at}</p>
        <p>
          <a href={formattedUser.link} target="_blank">
            Профиль
          </a>
        </p>
        <p>Причина: {formattedUser.reason}</p>
        <p>{formattedUser.status}</p>
        <p>Роль: {formattedUser.user_role}</p>
      </div>
    </div>
  );
};
