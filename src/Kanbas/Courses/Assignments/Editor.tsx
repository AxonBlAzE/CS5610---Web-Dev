export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />

      <textarea id="wd-description">
        The assignment is available online. Submit a link to the landing page of
      </textarea>
      <br />
      
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-due-date">Due Date</label>
          </td>
          <td>
            <input type="date" id="wd-due-date" />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-link">Submission Link</label>
          </td>
          <td>
            <input type="url" id="wd-submission-link" placeholder="https://example.com" />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assignment-type">Assignment Type</label>
          </td>
          <td>
            <select id="wd-assignment-type">
              <option value="essay">Essay</option>
              <option value="project">Project</option>
              <option value="quiz">Quiz</option>
              <option value="presentation">Presentation</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-file-upload">Upload Assignment File</label>
          </td>
          <td>
            <input type="file" id="wd-file-upload" />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label>Graded</label>
          </td>
          <td>
            <input type="checkbox" id="wd-graded" />
            <label htmlFor="wd-graded">This assignment is graded</label>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label>Peer Review</label>
          </td>
          <td>
            <input type="radio" id="wd-peer-review-yes" name="peer-review" value="yes" />
            <label htmlFor="wd-peer-review-yes">Yes</label>
            <input type="radio" id="wd-peer-review-no" name="peer-review" value="no" />
            <label htmlFor="wd-peer-review-no">No</label>
          </td>
        </tr>

      </table>
    </div>
  );
}
