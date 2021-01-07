import { FC } from "react";
import { useSelector } from "react-redux";
import { ISchool } from "../../types/school.types";
import SchoolCard from "../molecules/SchoolCard";
import Sidebar from "../molecules/SideBar";
interface Props {}

const DisplaySchool: FC<Props> = ({}) => {
  const schools: any = useSelector<{ schools: ISchool[] }>(
    ({ schools }) => schools
  );
  return (
    <div style={{ display: "flex", marginTop: "50px", width: "90vw" }}>
      <Sidebar {...{ schools }} />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "0 10px",
        }}
      >
        {schools.map((school: ISchool) => (
          <SchoolCard {...school} />
        ))}
      </div>
    </div>
  );
};

export default DisplaySchool;
