import AdminNavBar from "../../components/admin/AdminNavbar"
import CourseOptions from "../../components/admin/CourseOptions"
import CourseStatus from "../../components/admin/CourseStatus"

function AdminDashboard() {

    const courses = [
        {code: "COMP 249", title: "Object-Oriented Programming II", term: "Winter 2026", },
        {code: "ENGR 233", title: "Applied Advanced Calculus", term: "Winter 2026" },
        {code: "SOEN 228", title: "System Hardware", term: "Winter 2026" },
        {code: "SOEN 287", title: "Web Programming", term: "Winter 2026" },
        {code: "SOEN 287", title: "Web Programming", term: "Winter 2026" },
    ];
    
    return (
        <>
            <AdminNavBar></AdminNavBar>

            <div className="flex flex-col items-center gap-10 p-10"> 

                <div className="stats shadow w-1/2">
                    <div className="stat">
                        <div className="stat-figure">
                            <img src="https://img.icons8.com/?size=100&id=85057&format=png&color=000000" alt="Group" className="w-10" />
                        </div>
                        <div className="stat-title">Students</div>
                        <div className="stat-value">5232</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure">
                            <img src="https://img.icons8.com/?size=100&id=82464&format=png&color=000000" alt="Book" className="w-10" />
                        </div>
                        <div className="stat-title">Courses</div>
                        <div className="stat-value">635</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure">
                            <img src="https://img.icons8.com/?size=100&id=85929&format=png&color=000000" alt="Light Bulb" className="w-10" />
                        </div>
                        <div className="stat-title">Active Courses</div>
                        <div className="stat-value">532</div>
                    </div>
                </div>

                <div className="tabs tabs-lift w-2/3 flex flex-row justify-center">
                    <input type="radio" name="my_tabs_3" className="tab" aria-label="Course List" defaultChecked />
                    <div className="tab-content bg-base-100 border-base-300 p-6">

                        <label className="input">
                            <img src="https://img.icons8.com/?size=100&id=82712&format=png&color=000000" alt="Search" className="w-5"/>
                            <input type="search" placeholder="Search courses" />
                        </label>

                        

                        <ul className="list bg-base-100 rounded-box shadow">
                        {courses.map((course, index) => (
                            <li key={index} className="list-row">
                                <CourseStatus />
                                <div>
                                    <div>
                                        {course.code} - {course.title}
                                    </div>
                                    <div className="text-xs font-semibold opacity-60">
                                        {course.term}
                                    </div>
                                </div>
                                <CourseOptions />
                            </li>
                        ))}
                        </ul>

                    </div>

                    <input type="radio" name="my_tabs_3" className="tab" aria-label="Add Course" />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Code</label>
                            <input type="text" className="input w-full" placeholder="MATH 205" />

                            <label className="label">Name</label>
                            <input type="text" className="input w-full" placeholder="Differential & Integral Calculus II" />

                            <label className="label">Term</label>
                            <input type="text" className="input w-full" placeholder="Winter 2025" />

                            <button className="btn btn-neutral mt-4">Add Course</button>
                        </fieldset>   
                    </div>
                </div>

            </div>
        </>

    )
}

export default AdminDashboard