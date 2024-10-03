import CoursesNavigation from "./CoursesNav";
import { Routes, Route, Navigate } from "react-router-dom";
import Modules from "./Modules/index";
import Home from "./Home/index";
import Assignments from "./Assignments/index";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/table";

export default function Courses() {
  return (
    <div id="wd-courses" className="container-fluid">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        Course 1234
      </h2>
      <hr />
      <div className="d-flex">
        <div className="col-md-3 d-none d-md-block" style={{ width: "200px" }}>
          <CoursesNavigation />
        </div>
        {/* <div className="d-none d-md-block w-100 vh-100"> */}
        <div className="col-12 col-md-9">
          <Routes>
            <Route path="/" element={<Navigate to="./1234/Home" />} />
            <Route path="/1234/Home" element={<Home />} />
            <Route path="/1234/Modules" element={<Modules />} />
            <Route path="/1234/Assignments" element={<Assignments />} />
            <Route
              path="/1234/Assignments/:aid"
              element={<AssignmentEditor />}
            />
            <Route path="/1234/People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
