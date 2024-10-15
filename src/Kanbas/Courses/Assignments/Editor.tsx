import { useParams } from "react-router";
import * as db from "../../Database";
export default function AssignmentEditor() {
  const id = useParams();
  console.log("Here", id);
  console;
  console.log("aid", id.cid); // actually mentions aid
  console.log("title", id.title);
  const assignments = db.assignments.find(
    (assignment) => assignment._id === id.aid
  );
  console.log(assignments);
  return (
    <div
      id="wd-assignments-editor"
      className="container mt-1 overflow-auto"
      style={{ maxHeight: 700 }}
    >
      <div className="card border-0">
        <div className="card-body">
          <label htmlFor="wd-name">Assignment Name</label>
          <br />
          <input
            id="wd-name"
            type="text"
            className="form-control"
            placeholder={assignments!.title}
          />
        </div>

        <div className="card-body">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows={6}
            defaultValue={assignments!.description}
          ></textarea>
        </div>

        <div className="row m-2">
          <div className="col-4 text-end">
            <label htmlFor="points" className="form-label">
              Points
            </label>
          </div>
          <div className="col-8">
            <input
              type="number"
              className="form-control"
              id="points"
              placeholder="0"
            />
          </div>
        </div>

        <div className="row m-2">
          <div className="col-4 text-end">
            <label htmlFor="wd-assignment-group" className="form-label">
              Assignment Group
            </label>
          </div>
          <div className="col-8">
            <select
              className="form-select"
              id="assignment-group"
              value="Assignments"
            >
              <option>Assignments</option>
              <option>Projects</option>
              <option>Quizzes</option>
            </select>
          </div>
        </div>

        <div className="row m-2">
          <div className="col-4 text-end">
            <label htmlFor="wd-grade-dropdown" className="form-label">
              Show Grades as
            </label>
          </div>
          <div className="col-8">
            <select
              className="form-select"
              id="grades-dropdown"
              value="Percentage"
            >
              <option>Percentage</option>
              <option>100 Scale</option>
              <option>10 Scale</option>
              <option>Letter Grade</option>
              <option>Raw Score</option>
            </select>
          </div>
        </div>

        <div className="row m-2">
          <div className="col-4 text-end">
            <label htmlFor="wd-submission-type" className="form-label">
              Submission Type
            </label>
          </div>
          <div className="col-8">
            <div className="card border-grey p-2">
              <select
                className="form-select"
                id="submission-dropdown"
                value="Online"
              >
                <option>Online</option>
                <option>Offline</option>
              </select>
              <br />
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="submission-type"
                />
                <label htmlFor="submission-type">Text Entry</label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="submission-type"
                />
                <label htmlFor="submission-type">Website URL</label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="submission-type"
                />
                <label htmlFor="submission-type">Media Recordings</label>
              </div>
            </div>
          </div>
        </div>

        <div className="row m-2">
          <div className="col-4 text-end">
            <label htmlFor="wd-assign" className="form-label">
              Assign
            </label>
          </div>
          <div className="col-8">
            <div className="row m-1">
              <label htmlFor="wd-assign-to" className="form-label">
                <strong>Assign to</strong>
              </label>
              <select
                id="multi-select"
                className="form-select"
                aria-label="Dropdown"
              >
                <option value="option1">Everyone1</option>
                <option value="option2">Selected</option>
              </select>
            </div>
            <div className="row m-1">
              <label htmlFor="wd-due-date" className="form-label">
                <strong>Due Date</strong>
              </label>
              <input
                type="datetime-local"
                className="form-control"
                id="due-date"
                value={assignments!.dueDate}
              />
            </div>
            <div className="row">
              {/* Available From */}
              <div className="col-md-6 mb-3">
                <label htmlFor="wd-available-from" className="form-label">
                  <strong>Available From</strong>
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="available-from"
                />
              </div>

              {/* Available Until */}
              <div className="col-md-6 mb-3">
                <label htmlFor="wd-available-to" className="form-label">
                  <strong>Until</strong>
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="available-to"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2 buttons one for submit other cancel */}
      <div
        className="buttons-container"
        style={{
          display: "flex",
          justifyContent: "right",
          padding: "10px",
        }}
      >
        <div className="row m-2">
          <div className="col p-1">
            <button className="btn">Cancel</button>
          </div>
          <div className="col p-1">
            <button className="btn btn-danger">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
