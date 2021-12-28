import React, { useState } from "react";
import DATA from "../../DATA.json";
import StudentsList from "../StudentsList/StudentsList";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import classes from "./PaginationPage.module.css";

const PaginationPage = () => {
  const studentsPerPage = 10;
  const pageCount = Math.ceil(DATA.students.length / studentsPerPage);

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => setPage(value);

  const pagesVisited = (page - 1) * studentsPerPage;
  const data = DATA.students.slice(pagesVisited, pagesVisited + studentsPerPage);

  return (
    <div className={classes.PaginationDiv}>
      <StudentsList data={data} />
      <Stack spacing={2}>
        <Pagination
          count={pageCount}
          shape="rounded"
          color="primary"
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
};

export default PaginationPage;
