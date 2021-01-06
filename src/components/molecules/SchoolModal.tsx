import React, { FC, useState } from "react";
import Input from "../atoms/Input";
import Title from "../atoms/Title";
import Modal from "../atoms/Modal";
import AsyncSelect from "react-select/async";
import Button from "../atoms/Button";

interface Props {
  modalIsOpen: boolean;
  closeModal: () => void;
  submitHandler: (data: any) => void;
}

interface IState {
  degree: string;
  field: string;
  grade: string;
  description: string;
  school: { value: string; label: string } | null;
}

const InitialValue = {
  school: null,
  degree: "",
  field: "",
  grade: "",
  description: "",
};

const SchoolModal: FC<Props> = ({ closeModal, modalIsOpen, submitHandler }) => {
  const [values, setValues] = useState<IState>(InitialValue);

  const handleSetState = (key: string, value: any) => {
    setValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const loadSchools = async (value: string, callback: any) => {
    const fetchObj = await fetch(
      `http://universities.hipolabs.com/search?name=${value}`
    );
    const data = await fetchObj.json();
    const formattedData = data.map((t: any) => ({
      value: t.name,
      label: t.name,
    }));
    callback(formattedData);
  };

  const handleSubmit = () => {
    const { school, ...rest } = values;
    const data = { ...rest, school: school?.value };
    console.log(data);
    setValues(InitialValue);
    submitHandler(data);
    closeModal();
  };

  return (
    <Modal modalIsOpen={modalIsOpen} closeModal={closeModal}>
      <Title>Add School Experience</Title>

      <div>
        {/* Name of School, Degree, Field of study, Start year, End Year (Or expected), Grade, a Description field,  */}
        <AsyncSelect
          cacheOptions
          loadOptions={loadSchools}
          placeholder="School"
          value={values.school}
          onChange={(value) => handleSetState("school", value)}
        />
        <Input
          placeholder="Degree"
          value={values.degree}
          onChange={(e) => handleSetState("degree", e.target.value)}
        />
        <Input
          placeholder="Field of study"
          value={values.field}
          onChange={(e) => handleSetState("field", e.target.value)}
        />

        <Input
          placeholder="Grade"
          value={values.grade}
          onChange={(e) => handleSetState("grade", e.target.value)}
        />
        <Input
          placeholder="Description"
          value={values.description}
          onChange={(e) => handleSetState("description", e.target.value)}
        />
        <Button onClick={handleSubmit}>Add School</Button>
      </div>
    </Modal>
  );
};

export default SchoolModal;
