import React, { useEffect, useState } from "react";
import axios from "../../pages/api/students";
import StudentsList from "../StudentsList/StudentsList";
import Pagination from "@mui/material/Pagination";
import classes from "./PaginationPage.module.css";

const PaginationPage = () => {
  const [DATA, setDATA] = useState(null);
  const [page, setPage] = useState(1);

  //Creating a GET request using Axios to get all the data from the students database
  useEffect(() => {
    axios.get("/students").then((res) => {
      setDATA(res.data);
    });
  }, []);

  if (!DATA) return null;

  const studentsPerPage = 10;
  const pageCount = Math.ceil(DATA.length / studentsPerPage);

  //Function to handle the change when the user clicks the next page or a specific page number
  const handleChange = (event, value) => setPage(value);

  const pagesVisited = (page - 1) * studentsPerPage;
  const data = DATA.slice(pagesVisited, pagesVisited + studentsPerPage);

  return (
    <div className={classes.PaginationDiv}>
      <StudentsList data={data} />
      <Pagination
        count={pageCount}
        shape="rounded"
        color="primary"
        page={page}
        onChange={handleChange}
      />
    </div>
  );
};

export default PaginationPage;
