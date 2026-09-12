"use client";
import DashboardHeader from "./components/DashboardHeader";
import StudentCard from "./components/StudentCard";
import StatBadge from "./components/StatBadge";
import SearchBar from "./components/SearchBar";
import SortControls from "./components/SortControls";
import AddStudentForm from "./components/AddStudentForm";
import { useStudents } from "./context/StudentContext";

export default function Page() {
  const { students, searchQuery, sortBy } = useStudents();

  const filteredStudents = students.filter((st: any) => 
    st.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    st.major.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedStudents = [...filteredStudents].sort((a: any, b: any) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "gpa") return b.gpa - a.gpa;
    return 0;
  });

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <DashboardHeader title="Student Dashboard" />
      
      <AddStudentForm />

      <div className="mb-4 flex flex-wrap justify-between items-center">
        <StatBadge label="Total Displayed" value={sortedStudents.length} />
        <SearchBar />
      </div>

      <SortControls />

      <div className="flex flex-wrap gap-4">
        {sortedStudents.map((st: any) => (
          <StudentCard key={st.id} student={st} />
        ))}
      </div>
    </main>
  );
}