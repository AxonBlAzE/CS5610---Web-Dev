import { BsGripVertical } from "react-icons/bs";
import { FaCalendarAlt, FaSearch } from "react-icons/fa";
import LessonControlButtons from "../Modules/LessonControlsButton";
import { IoAdd, IoEllipsisVertical } from "react-icons/io5";
import { IoMdBookmarks } from "react-icons/io";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="d-flex align-items-center justify-content-between">
        <div className="flex-grow-1 me-3" style={{ maxWidth: "400px" }}>
          <form className="form-inline">
            <div className="input-group w-100">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <FaSearch
                    style={{ fontSize: "1.6rem", verticalAlign: "middle" }}
                  />
                </span>
              </div>
              <input
                id="wd-search-assignment"
                className="form-control"
                placeholder="Search for Assignments"
              />
            </div>
          </form>
        </div>

        <div>
          <button id="wd-add-assignment-group" className="btn btn-light me-2">
            + Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger">
            + Assignment
          </button>
        </div>
      </div>

      <br />

      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-grey">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />

            <h2 className="mb-0 me-3">Assignments</h2>

            <h3
              className="border border-dark rounded-pill px-3 py-1 mb-0 w-50"
              style={{ maxWidth: 190 }}
            >
              40% of total
            </h3>

            <IoAdd className="me-2 fs-3" />
            <IoEllipsisVertical className="me-2 fs-3" />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <a
              className="wd-assignment-link text-decoration-none"
              href="#/Kanbas/Courses/1234/Assignments/Editor"
            >
              <li className="wd-lesson list-group-item p-3 ps-1">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <IoMdBookmarks className="me-2 fs-3" />
                  <div className="flex-grow-1">
                    <div className="fw-bold text-dark">A1</div>
                    <div className="small text-muted">
                      Description: Create a simple web page using HTML and CSS.
                    </div>
                    <div className="small text-danger mt-1">
                      <FaCalendarAlt className="me-1" />
                      Due Date: March 15, 2025
                    </div>
                  </div>{" "}
                  <LessonControlButtons />
                </div>
              </li>
            </a>

            <a
              className="wd-assignment-link text-decoration-none"
              href="#/Kanbas/Courses/1234/Assignments/Editor"
            >
              <li className="wd-lesson list-group-item p-3 ps-1">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <IoMdBookmarks className="me-2 fs-3" />
                  <div className="flex-grow-1">
                    <div className="fw-bold text-dark">A2</div>
                    <div className="small text-muted">
                      Description: Create a simple web page using HTML and CSS.
                    </div>
                    <div className="small text-danger mt-1">
                      <FaCalendarAlt className="me-1" />
                      Due Date: March 22, 2025
                    </div>
                  </div>{" "}
                  <LessonControlButtons />
                </div>
              </li>
            </a>

            <a
              className="wd-assignment-link text-decoration-none"
              href="#/Kanbas/Courses/1234/Assignments/Editor"
            >
              <li className="wd-lesson list-group-item p-3 ps-1">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <IoMdBookmarks className="me-2 fs-3" />
                  <div className="flex-grow-1">
                    <div className="fw-bold text-dark">A3</div>
                    <div className="small text-muted">
                      Description: Create a simple web page using HTML and CSS.
                    </div>
                    <div className="small text-danger mt-1">
                      <FaCalendarAlt className="me-1" />
                      Due Date: March 26, 2025
                    </div>
                  </div>{" "}
                  <LessonControlButtons />
                </div>
              </li>
            </a>

            <a
              className="wd-assignment-link text-decoration-none"
              href="#/Kanbas/Courses/1234/Assignments/Editor"
            >
              <li className="wd-lesson list-group-item p-3 ps-1">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <IoMdBookmarks className="me-2 fs-3" />
                  <div className="flex-grow-1">
                    <div className="fw-bold text-dark">A4</div>
                    <div className="small text-muted">
                      Description: Create a simple web page using HTML and CSS.
                    </div>
                    <div className="small text-danger mt-1">
                      <FaCalendarAlt className="me-1" />
                      Due Date: March 30, 2025
                    </div>
                  </div>{" "}
                  <LessonControlButtons />
                </div>
              </li>
            </a>
          </ul>
        </li>
      </ul>
    </div>
  );
}
