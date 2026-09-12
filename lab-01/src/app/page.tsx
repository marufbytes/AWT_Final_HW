import DashboardHeader from "./components/DashboardHeader";
import StudentCard from "./components/StudentCard";
import StatBadge from "./components/StatBadge";

export default function Page() {
  const students = [
    {
      name: "Maruf Ahammed",
      id: "23-54391-3",
      avatar: "https://i.pravatar.cc/150?img=11",
      gpa: 3.89,
      major: "CSE",
      courses: [{ name: "Web Tech", color: "#2563eb" }, { name: "Algo", color: "#2563eb" }]
    },
    {
      name: "Rahim Ahmed",
      id: "23-51102-1",
      avatar: "https://i.pravatar.cc/150?img=53",
      gpa: 3.75,
      major: "SE",
      courses: [{ name: "DBMS", color: "#2563eb" }]
    },
    {
      name: "Karim Uddin",
      id: "23-51103-2",
      avatar: "https://i.pravatar.cc/150?img=32",
      gpa: 3.60,
      major: "EEE",
      courses: [{ name: "Circuits", color: "#2563eb" }]
    },
    {
      name: "Nusrat Jahan",
      id: "21-39912-3",
      avatar: "https://i.pravatar.cc/150?img=44",
      gpa: 3.92,
      major: "CSE",
      courses: [{ name: "AI", color: "#2563eb" }]
    }
  ];

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <DashboardHeader title="Student Dashboard" tagline="Lab 01: Components & Props" />
      

      <div className="mb-6">
        <StatBadge label="Total Students" value={students.length} />
      </div>


      <div className="flex flex-wrap gap-4">
        {students.map((st) => (
          <StudentCard 
            key={st.id}
            name={st.name}
            id={st.id}
            avatar={st.avatar}
            gpa={st.gpa}
            major={st.major}
            courses={st.courses}
          />
        ))}
      </div>
    </main>
  );
}