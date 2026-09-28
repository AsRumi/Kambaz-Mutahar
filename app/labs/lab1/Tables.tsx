export default function Tables() {
  return (
    <div id="wd-tables">
      <h4>Table Tag</h4>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Quiz</th>
            <th align="center">Topic</th>
            <th align="center">Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Q1</td>
            <td align="center">HTML</td>
            <td align="center">2/3/21</td>
            <td align="right">85</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td align="center">CSS</td>
            <td align="center">2/10/21</td>
            <td align="right">90</td>
          </tr>
          <tr>
            <td>Q3</td>
            <td align="center">JavaScript</td>
            <td align="center">2/17/21</td>
            <td align="right">95</td>
          </tr>
          <tr>
            <td>Q4</td>
            <td align="center">React</td>
            <td align="center">2/24/21</td>
            <td align="right">88</td>
          </tr>
          <tr>
            <td>Q5</td>
            <td align="center">Next.js</td>
            <td align="center">3/3/21</td>
            <td align="right">92</td>
          </tr>
          <tr>
            <td>Q6</td>
            <td align="center">Node.js</td>
            <td align="center">3/10/21</td>
            <td align="right">80</td>
          </tr>
          <tr>
            <td>Q7</td>
            <td align="center">Express</td>
            <td align="center">3/17/21</td>
            <td align="right">94</td>
          </tr>
          <tr>
            <td>Q8</td>
            <td align="center">MongoDB</td>
            <td align="center">3/24/21</td>
            <td align="right">87</td>
          </tr>
          <tr>
            <td>Q9</td>
            <td align="center">Mongoose</td>
            <td align="center">3/31/21</td>
            <td align="right">91</td>
          </tr>
          <tr>
            <td>Q10</td>
            <td align="center">Deployment</td>
            <td align="center">4/7/21</td>
            <td align="right">98</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Average</td>
            <td align="right">90</td>
          </tr>
        </tfoot>
      </table>
      <h5>My Courses This Term</h5>
      <table id="wd-your-table" border={1} width="100%">
        <thead>
          <tr>
            <th>Course</th>
            <th align="center">Day</th>
            <th align="center">Time</th>
            <th>Credits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CS5610 Web Development</td>
            <td align="center">Tuesday</td>
            <td align="center">6:00pm - 9:00pm</td>
            <td align="right">4</td>
          </tr>
          <tr>
            <td>CS5330 Pattern Recognition and Computer Vision</td>
            <td align="center">Monday and Thursday</td>
            <td align="center">11:45am - 1:25pm</td>
            <td align="right">4</td>
          </tr>
          <tr>
            <td>Weekly Movie Night</td>
            <td align="center">Saturday</td>
            <td align="center">9:00pm - 11:00pm</td>
            <td align="right">No credits, only fun</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
