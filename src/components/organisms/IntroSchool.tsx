import React, { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import SchoolModal from "../molecules/SchoolModal";
import { ISchool } from "../../types/school.types";
import { addSchool } from "../../store/slices/schoolSlice";

interface Props {}

const IntroSchool: FC<Props> = ({}) => {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const closeModal = () => setModalIsOpen(false);

  const submitHandler = (data: ISchool) => {
    dispatch(addSchool(data));
  };

  const name = useSelector<{ username: string }>(({ username }) => username);

  const handleAction = () => setModalIsOpen(true);
  return (
    <div
      style={{
        alignSelf: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Title>Welcome to {name} education page</Title>

      <Button onClick={handleAction} variant="mid">
        Add new Education
      </Button>
      <SchoolModal {...{ modalIsOpen, closeModal, submitHandler }} />
    </div>
  );
};

export default IntroSchool;
