import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "../../pages/api/students";
import StudentCard from "../StudentCard/StudentCard";
import CourseSelector from "../CourseSelector/CourseSelector";
import classes from "./StudentMain.module.css";

const StudentMain = () => {
  const [data, setData] = useState(null);

  //next/router used to get the current query
  const router = useRouter();
  const regQuery = router.query.studentId;

  useEffect(() => {
    if (!router.isReady) return;

    //Creating GET request using Axios to get the data of a student having registration id equal to the query
    axios.get(`/students?reg=${regQuery}`).then((res) => {
      setData(res.data);
    });
  }, [router.isReady, regQuery]);

  if (!data) return null;

  return (
    <div className={classes.StudentMainDiv}>
      <StudentCard reg={data[0].reg} name={data[0].name} />
      <CourseSelector courses={data[0].courses} id={data[0].id} />
    </div>
  );
};

export default StudentMain;
