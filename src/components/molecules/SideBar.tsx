import React, { FC } from "react";
import Card from "../atoms/Card";
import Title from "../atoms/Title";
import { ISchool } from "../../types/school.types";
import Label from "../atoms/Label";

interface Props {
  schools: ISchool[];
}

const Sidebar: FC<Props> = ({ schools }) => {
  return (
    <Card>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {schools.map((school: ISchool) => (
          <a>{school.school}</a>
        ))}
      </div>
    </Card>
  );
};

export default Sidebar;
