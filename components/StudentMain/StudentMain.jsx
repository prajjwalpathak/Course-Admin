import { useRouter } from "next/router";
import DATA from "../../DATA";
import Main from "../Main/Main";
import classes from "./StudentMain.module.css";

const StudentMain = () => {
  const router = useRouter();
  const regQuery = router.query.studentId;
  const data = DATA.find((student) => student.reg === parseInt(regQuery));
  
  return <Main>
    <span>{data.reg}</span>
    <span>{data.name}</span>
    <span>{data.courses}</span>
  </Main>;
};

export default StudentMain;
