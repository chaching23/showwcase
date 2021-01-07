interface ISchoolBase {
  degree: string;
  field: string;
  grade: string;
  description: string;
}
export interface ISchool extends ISchoolBase {
  school: string;
  start: string;
  id: string;
  end: string;
}
export interface ISchoolState extends ISchoolBase {
  school: { value: string; label: string } | null;
  start: Date | null;
  end: Date | null;
}
