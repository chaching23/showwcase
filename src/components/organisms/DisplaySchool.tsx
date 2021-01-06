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
    <div style={{ display: "flex" }}>
      <div>
        <Sidebar {...{ schools }} />
      </div>
      <div style={{}}>
        {schools.map((school: ISchool) => (
          <SchoolCard {...school} />
        ))}
      </div>
    </div>
  );
};

export default DisplaySchool;
