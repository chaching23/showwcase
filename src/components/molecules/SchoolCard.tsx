import React, { FC } from "react";
import Card from "../atoms/Card";
import Title from "../atoms/Title";
import { ISchool } from "../../types/school.types";
import Label from "../atoms/Label";

interface Props extends ISchool {}

const SchoolCard: FC<Props> = ({
  school,
  degree,
  field,
  grade,
  description,
  id,
  start,
  end,
}) => {
  console.log(school);
  return (
    <Card id={id}>
      <Title variant="small"> {school} </Title>
      <Label>
        {" "}
        {start} - {end}{" "}
      </Label>
      <Label> {degree} </Label>
      <Label> {field} </Label>
      <Label> {grade} </Label>
      <Label> {description} </Label>
    </Card>
  );
};

export default SchoolCard;
