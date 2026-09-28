"use client";

export default function YourForm() {
  return (
    <form
      id="wd-your-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h4>Student Profile</h4>

      <h5>Text Fields</h5>
      <label htmlFor="wd-your-first-name">First name:</label>
      <input id="wd-your-first-name" type="text" defaultValue="Mohammed" />
      <br />
      <label htmlFor="wd-your-last-name">Last name:</label>
      <input id="wd-your-last-name" type="text" defaultValue="Mutahar" />
      <br />
      <label htmlFor="wd-your-student-id">Student ID:</label>
      <input
        id="wd-your-student-id"
        type="password"
        placeholder="Student ID"
        defaultValue="default"
      />
      <br />

      <h5>Textarea</h5>
      <label htmlFor="wd-your-bio">Why I am taking this course:</label>
      <br />
      <textarea
        id="wd-your-bio"
        cols={40}
        rows={5}
        defaultValue="I want to learn more about webdev."
      />
      <br />

      <h5>Radio buttons</h5>
      <label>Class standing:</label>
      <br />
      <input type="radio" name="radio-standing" id="wd-your-freshman" />
      <label htmlFor="wd-your-freshman">Freshman</label>
      <br />
      <input type="radio" name="radio-standing" id="wd-your-sophomore" />
      <label htmlFor="wd-your-sophomore">Sophomore</label>
      <br />
      <input type="radio" name="radio-standing" id="wd-your-junior" />
      <label htmlFor="wd-your-junior">Junior</label>
      <br />
      <input type="radio" name="radio-standing" id="wd-your-senior" />
      <label htmlFor="wd-your-senior">Senior</label>
      <br />
      <input
        type="radio"
        name="radio-standing"
        id="wd-your-graduate"
        defaultChecked
      />
      <label htmlFor="wd-your-graduate">Graduate</label>
      <br />
      <label>Enrollment:</label>
      <br />
      <input
        type="radio"
        name="radio-enrollment"
        id="wd-your-full-time"
        defaultChecked
      />
      <label htmlFor="wd-your-full-time">Full-time</label>
      <br />
      <input type="radio" name="radio-enrollment" id="wd-your-part-time" />
      <label htmlFor="wd-your-part-time">Part-time</label>
      <br />

      <h5>Checkboxes</h5>
      <label>Interests:</label>
      <br />
      <input
        type="checkbox"
        name="check-interests"
        id="wd-your-frontend"
        defaultChecked
      />
      <label htmlFor="wd-your-frontend">Front end development</label>
      <br />
      <input type="checkbox" name="check-interests" id="wd-your-backend" />
      <label htmlFor="wd-your-backend">Back end development</label>
      <br />
      <input type="checkbox" name="check-interests" id="wd-your-databases" />
      <label htmlFor="wd-your-databases">Databases</label>
      <br />
      <input type="checkbox" name="check-interests" id="wd-your-cloud" />
      <label htmlFor="wd-your-cloud">Cloud computing</label>
      <br />

      <h5>Dropdowns</h5>
      <label htmlFor="wd-your-major">Major:</label>
      <br />
      <select id="wd-your-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="DS">Data Science</option>
        <option value="IS">Information Systems</option>
        <option value="SE">Software Engineering</option>
      </select>
      <br />
      <label htmlFor="wd-your-topics">Topics to deepen this term:</label>
      <br />
      <select multiple id="wd-your-topics" defaultValue={["REACT", "NEXTJS"]}>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="REACT">React</option>
        <option value="NEXTJS">Next.js</option>
        <option value="MONGODB">MongoDB</option>
      </select>
      <br />

      <h5>Typed fields</h5>
      <label htmlFor="wd-your-email">School email: </label>
      <input
        type="email"
        id="wd-your-email"
        defaultValue="jane@university.edu"
      />
      <br />
      <label htmlFor="wd-your-grad-year">Expected graduation year: </label>
      <input
        type="number"
        id="wd-your-grad-year"
        defaultValue="2027"
        min={2025}
        max={2035}
      />
      <br />
      <label htmlFor="wd-your-start-date">Program start date: </label>
      <input type="date" id="wd-your-start-date" defaultValue="2025-09-02" />
      <br />
      <label htmlFor="wd-your-excitement">
        How excited am I about this course (0-10):{" "}
      </label>
      <input
        type="range"
        id="wd-your-excitement"
        defaultValue="8"
        min="0"
        max="10"
      />
      <br />

      <h5>Buttons</h5>
      <button id="wd-your-save" type="submit">
        Save
      </button>
      <button id="wd-your-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}
