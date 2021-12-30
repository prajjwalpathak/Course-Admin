import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "../../pages/api/students";
import Main from "../Main/Main";
import classes from "./StudentMain.module.css";
import StudentCard from "../StudentCard/StudentCard";
import CourseSelector from "../CourseSelector/CourseSelector";

const StudentMain = () => {
  const router = useRouter();

  const [DATA, setDATA] = useState(null);

  useEffect(() => {
    axios.get("/students").then((response) => {
      setDATA(response.data);
    });
  }, []);
  if (!DATA) return null;

  const regQuery = router.query.studentId;
  const data = DATA.find((student) => student.reg === parseInt(regQuery));

  return (
    <Main>
      <StudentCard reg={data.reg} name={data.name} />
      <CourseSelector courses={data.courses} />
    </Main>
  );
};

export default StudentMain;
