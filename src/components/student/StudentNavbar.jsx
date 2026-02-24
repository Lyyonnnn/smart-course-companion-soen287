import { Link } from 'react-router-dom';

function StudentNavbar() {
  return (
    <>
        <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">

      {/* Left */}
      <div className="navbar-start">
        <Link to="/Student/dashboard" className="btn btn-ghost text-xl">
          Student Dashboard
        </Link>
      </div>

      {/* Center */}
      {/* <div className="navbar-center">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/student/assessments">Assessments</Link>
          </li>
        </ul>
      </div> */}

      {/* Right */}
      <div className="navbar-end gap-4">

        {/* Circular Initials Avatar */}
        {/* <div className="avatar placeholder">
          <div className="bg-primary text-primary-content rounded-full w-10">
            <span className="text-sm font-bold">DUVAL</span>
          </div>
        </div> */}

        <Link to="/" className="btn btn-link">
          Sign Out
        </Link>

      </div>
    </div>
    </>
  )
}

export default StudentNavbar