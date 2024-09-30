import { FaSearch } from "react-icons/fa";

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

      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>

      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/Editor"
          >
            A1 - ENV + HTML
          </a>
          <p className="assignment-description">
            Description: Create a simple web page using HTML and CSS.
          </p>
          <p className="assignment-due-date">Due Date: March 15, 2024</p>
        </li>

        <li className="wd-assignment-list-item">
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/Editor"
          >
            A2 - CSS Basics
          </a>
          <p className="assignment-description">
            Description: Learn the basics of CSS styling.
          </p>
          <p className="assignment-due-date">Due Date: March 22, 2024</p>
        </li>

        <li className="wd-assignment-list-item">
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/Editor"
          >
            A3 - JavaScript Essentials
          </a>
          <p className="assignment-description">
            Description: Understand core JavaScript concepts.
          </p>
          <p className="assignment-due-date">Due Date: March 29, 2024</p>
        </li>

        <li className="wd-assignment-list-item">
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/Editor"
          >
            A4 - React Introduction
          </a>
          <p className="assignment-description">
            Description: Introduction to React and its components.
          </p>
          <p className="assignment-due-date">Due Date: April 5, 2024</p>
        </li>

        <li className="wd-assignment-list-item">
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/Editor"
          >
            A5 - API Integration
          </a>
          <p className="assignment-description">
            Description: Learn how to integrate APIs in your application.
          </p>
          <p className="assignment-due-date">Due Date: April 12, 2024</p>
        </li>
      </ul>
    </div>
  );
}
