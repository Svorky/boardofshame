import "./Shame.css";
import data from "../../shared/data/data.json";
import { Card } from "../../shared/ui/card/Card";
import type { User } from "../../entities/user/model/types";

export const Shame = () => {
  const shameData = (data as User[]).filter(
    (user) => user.list_name === "shame"
  );
  return (
    <>
      {/* <a href="pages/glory.html" id="gloryLink" className="top-link">
        Доска почёта
      </a> */}

      <div className="title">
        <h1>ДОСКА ПОЗОРА НЯК</h1>
      </div>
      <div className="board">
        {shameData.map((user, index) => {
          return <Card key={index} id={index + 1} user={user} />;
        })}
      </div>
    </>
  );
};
