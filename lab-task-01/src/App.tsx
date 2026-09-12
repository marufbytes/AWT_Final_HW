import DashboardHeader from "./components/DashboardHeader";
import StudentCard from "./components/StudentCard";
import StatBadge from "./components/StatBadge";

export default function App() {
  const students = [
    {
      name: "Maruf Ahammed",
      id: "23-54391-3",
      avatar: "/boy.jpg",
      gpa: 3.89,
      major: "CSE",
      courses: [{ name: "Web Tech", color: "#2563eb" }, { name: "Algo", color: "#2563eb" }]
    },
    {
      name: "Rahim Ahmed",
      id: "23-51102-1",
      avatar: "/boy.jpg",
      gpa: 3.75,
      major: "SE",
      courses: [{ name: "DBMS", color: "#2563eb" }]
    },
    {
      name: "Karim Uddin",
      id: "23-51103-2",
      avatar: "/boy.jpg",
      gpa: 3.60,
      major: "EEE",
      courses: [{ name: "Circuits", color: "#2563eb" }]
    },
    {
      name: "Nusrat Jahan",
      id: "21-39912-3",
      avatar: "/girl.avif",
      gpa: 3.92,
      major: "CSE",
      courses: [{ name: "AI", color: "#2563eb" }]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      <DashboardHeader title="Student Dashboard" tagline="Dashboard Tagline" />


      <div className="mb-6">
        <StatBadge label="Total Students" value={students.length} />
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {students.map((student) => (
          <StudentCard 
            key={student.id}
            name={student.name}
            id={student.id}
            avatar={student.avatar}
            gpa={student.gpa}
            major={student.major}
            courses={student.courses}
          />
        ))}
      </div>
    </div>
  );
}