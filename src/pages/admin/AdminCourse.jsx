import { useLocation } from "react-router-dom"
import { useState } from "react"
import AdminNavBar from "../../components/admin/AdminNavbar"

function AdminCourse() {
    const location = useLocation()
    const course = location.state?.course || {
        code: "SOEN 287",
        name: "Web Programming",
        term: "Winter 2026"
    }

    const [courseCode, setCourseCode] = useState(course.code)
    const [courseName, setCourseName] = useState(course.name)
    const [courseTerm, setCourseTerm] = useState(course.term)

    const [assessments, setAssessments] = useState([
        { name: "Test 1", weight: 10 },
        { name: "Test 2", weight: 10 },
        { name: "Quiz 1", weight: 5 },
        { name: "Quiz 2", weight: 5 },
        { name: "Quiz 3", weight: 5 },
        { name: "Midterm Exam", weight: 25 },
        { name: "Final Exam", weight: 40 }
    ])

    const [newAssessmentName, setNewAssessmentName] = useState("")
    const [newAssessmentWeight, setNewAssessmentWeight] = useState("")

    function addAssessment() {
        if (!newAssessmentName || !newAssessmentWeight) return

        setAssessments([
            ...assessments,
            {
                name: newAssessmentName,
                weight: Number(newAssessmentWeight)
            }
        ])

        setNewAssessmentName("")
        setNewAssessmentWeight("")
    }

    function deleteAssessment(indexToDelete) {
        setAssessments(assessments.filter((_, index) => index !== indexToDelete))
    }

    return (
        <>
            <AdminNavBar></AdminNavBar>

            <div className="flex flex-col items-center gap-10 p-10">

                <div className="w-2/3 bg-base-100 border-base-300 rounded-box border p-6 shadow">
                    <h2 className="text-2xl font-bold mb-4">Edit Course</h2>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Course Code</label>
                        <input
                            type="text"
                            className="input w-full"
                            value={courseCode}
                            onChange={(e) => setCourseCode(e.target.value)}
                        />

                        <label className="label">Course Name</label>
                        <input
                            type="text"
                            className="input w-full"
                            value={courseName}
                            onChange={(e) => setCourseName(e.target.value)}
                        />

                        <label className="label">Term</label>
                        <input
                            type="text"
                            className="input w-full"
                            value={courseTerm}
                            onChange={(e) => setCourseTerm(e.target.value)}
                        />

                        <button className="btn btn-neutral mt-4">Save Changes</button>
                    </fieldset>
                </div>

                <div className="w-2/3 bg-base-100 border-base-300 rounded-box border p-6 shadow">
                    <h2 className="text-2xl font-bold mb-4">Course Assessments</h2>

                    <div className="overflow-x-auto mb-6">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Weight</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {assessments.map((assessment, index) => (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{assessment.name}</td>
                                        <td>{assessment.weight}%</td>
                                        <td>
                                            <button
                                                className="btn btn-square btn-ghost"
                                                onClick={() => deleteAssessment(index)}
                                            >
                                                <img
                                                    className="w-5"
                                                    src="https://img.icons8.com/?size=100&id=99933&format=png&color=000000"
                                                    alt="Delete"
                                                />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Assessment Name</label>
                        <input
                            type="text"
                            className="input w-full"
                            placeholder="Assignment 1"
                            value={newAssessmentName}
                            onChange={(e) => setNewAssessmentName(e.target.value)}
                        />

                        <label className="label">Assessment Weight</label>
                        <input
                            type="number"
                            className="input w-full"
                            placeholder="10"
                            value={newAssessmentWeight}
                            onChange={(e) => setNewAssessmentWeight(e.target.value)}
                        />

                        <button className="btn btn-neutral mt-4" onClick={addAssessment}>
                            Add Assessment
                        </button>
                    </fieldset>
                </div>

            </div>
        </>
    )
}

export default AdminCourse