import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "../../pages/api/students";
import Main from "../Main/Main";
import classes from "./StudentMain.module.css";
import StudentCard from "../StudentCard/StudentCard";
import CourseSelector from "../CourseSelector/CourseSelector";

const StudentMain = () => {
  const [data, setData] = useState(null);
  const router = useRouter();
  const regQuery = router.query.studentId;

  useEffect(() => {
    if (!router.isReady) return;
    axios.get(`/students?reg=${regQuery}`).then((response) => {
      setData(response.data);
    });
  }, [router.isReady, regQuery]);

  if (!data) return null;

  return (
    <Main>
      <StudentCard reg={data[0].reg} name={data[0].name} />
      <CourseSelector courses={data[0].courses} reg={data[0].reg} id={data[0].id} />
    </Main>
  );
};

export default StudentMain;
