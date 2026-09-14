import { useEffect } from "react";
import DashboardHeader from "./components/DashboardHeader";
import StudentCard from "./components/StudentCard";
import StatBadge from "./components/StatBadge";
import SearchBar from "./components/SearchBar";
import SortControls from "./components/SortControls";
import AddStudentForm from "./components/AddStudentForm";
import { ThemeProvider } from "./context/ThemeContext";
import { StudentProvider, useStudents } from "./context/StudentContext";

function DashboardContent() {
  const { students, filteredAndSortedStudents, favorites, notification } = useStudents();


  useEffect(() => {
    document.title = `Dashboard - ${filteredAndSortedStudents.length} Students`;
  }, [filteredAndSortedStudents.length]);

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      <DashboardHeader title="Student Dashboard" tagline="Full Dashboard" />


      {notification && (
        <div className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 rounded-lg text-sm font-medium shadow-sm">
          {notification}
        </div>
      )}


      <div className="mb-6 flex gap-4 flex-wrap">
        <StatBadge label="Total Students" value={students.length} />
        <StatBadge label="Total Favorites" value={favorites.length} />
      </div>


      <AddStudentForm />


      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <SearchBar />
        <SortControls />
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredAndSortedStudents.map((student) => (
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

export default function App() {
  return (
    <ThemeProvider>
      <StudentProvider>
        <DashboardContent />
      </StudentProvider>
    </ThemeProvider>
  );
}