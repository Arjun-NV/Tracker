export default function Summary() {
  const team = ['Arjun','Isha','Shailja','Onkar','Satish','Ankita','Himanshu','Shivani','Gargi','Adithya'];

  return (
    <div style={{padding:20,fontFamily:'Arial'}}>
      <h1>OJE Tracker - Summary Dashboard</h1>

      <h2>Executive Summary</h2>
      <table border="1" cellPadding="8">
        <tbody>
          <tr><td>Total Test Cases</td><td>0</td></tr>
          <tr><td>Feasible</td><td>0</td></tr>
          <tr><td>Completed</td><td>0</td></tr>
          <tr><td>Pending</td><td>0</td></tr>
          <tr><td>Blocked</td><td>0</td></tr>
        </tbody>
      </table>

      <h2>Team Performance</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Member</th>
            <th>Assigned</th>
            <th>Completed</th>
            <th>Pending</th>
          </tr>
        </thead>
        <tbody>
          {team.map(t => (
            <tr key={t}>
              <td>{t}</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Modules Planned</h2>
      <ul>
        <li>Test Cases</li>
        <li>Team Members</li>
        <li>Excel Import / Export</li>
        <li>Dataset Tracking</li>
        <li>Engagement Tracking</li>
        <li>ADO Compliance</li>
        <li>Daily Progress Tracker</li>
      </ul>
    </div>
  );
}