import "./Glory.css";
import type { User } from "../../entities/user/model/types";
import data from "../../shared/data/data.json";
import { Card } from "../../shared/ui/card/Card";

export function Glory() {
  const gloryData = (data as User[]).filter(
    (user) => user.list_name === "glory"
  );
  return (
    <>
      <div className="title">
        <h1>ДОСКА ПОЧЕТА НЯК</h1>
      </div>
      <div className="board">
        {gloryData.map((user, index) => {
          return <Card key={index} id={index + 1} user={user} />;
        })}
      </div>
    </>
  );
}
