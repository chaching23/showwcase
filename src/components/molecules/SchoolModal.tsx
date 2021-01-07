import React, { FC, useState } from "react";
import YearMonth from "year-month";
import Input from "../atoms/Input";
import Title from "../atoms/Title";
import Modal from "../atoms/Modal";
import AsyncSelect from "react-select/async";
import Button from "../atoms/Button";
import { ISchoolState } from "../../types/school.types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Label from "../atoms/Label";

interface Props {
  modalIsOpen: boolean;
  closeModal: () => void;
  submitHandler: (data: any) => void;
}

const InitialValue = {
  school: null,
  degree: "",
  field: "",
  start: null,
  end: null,
  grade: "",
  description: "",
};

const SchoolModal: FC<Props> = ({ closeModal, modalIsOpen, submitHandler }) => {
  const [values, setValues] = useState<ISchoolState>(InitialValue);
  const [present, setPresent] = useState(false);
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
    const { school, start, end, ...rest } = values;
    const data = {
      ...rest,
      id: Math.random().toString(32),
      school: school?.value,
      start: start
        ? start.toLocaleString("default", { month: "long", year: "numeric" })
        : "",
      end: present
        ? "present"
        : end
        ? end.toLocaleString("default", { month: "long", year: "numeric" })
        : "",
    };
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

        <DatePicker
          selected={values.start}
          onChange={(date) => handleSetState("start", date)}
        />
        <div>
          <Label>till present?</Label>
          <input
            type="checkbox"
            checked={present}
            onChange={() => setPresent((prev) => !prev)}
          />
        </div>
        {!present && (
          <DatePicker
            selected={values.end}
            onChange={(date) => handleSetState("end", date)}
          />
        )}

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
