import React, { FC } from "react";
import { ISchool } from "../../types/school.types";
import { NavHashLink } from "react-router-hash-link";

interface Props {
  schools: ISchool[];
}

const Sidebar: FC<Props> = ({ schools }) => {
  return (
    <div
      style={{
        width: "300px",
        backgroundColor: "#ddd",
        minHeight: "40vh",
        padding: "10px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        {schools.map((school: ISchool) => (
          <NavHashLink
            to={`/dashboard#${school.id}`}
            // activeClassName="selected-hash"
            activeStyle={{ fontWeight: "bold" }}
          >
            {school.school}
          </NavHashLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
