"use client";
import { useState, useEffect } from "react";
import DashboardHeader from "./components/DashboardHeader";
import StudentCard from "./components/StudentCard";
import StatBadge from "./components/StatBadge";
import SearchBar from "./components/SearchBar";
import SortControls from "./components/SortControls";

const initialStudents = [
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

export default function Page() {
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [favoriteCount, setFavoriteCount] = useState(0);



  useEffect(() => {
    const timer = setTimeout(() => {
      setStudents(initialStudents);
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);



  useEffect(() => {
    document.title = `Dashboard — ${filteredStudents.length} Students`;
  }, [students, searchQuery]);



  const filteredStudents = students.filter((st) => 
    st.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    st.major.toLowerCase().includes(searchQuery.toLowerCase())
  );



  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "gpa") {
      return b.gpa - a.gpa;
    }
    return 0;
  });



  const handleFavoriteChange = (isFav: boolean) => {
    setFavoriteCount((prev) => (isFav ? prev + 1 : prev - 1));
  };



  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mb-3"></div>
        <p className="text-gray-600 font-medium text-sm">Loading student data...</p>
      </div>
    );
  }

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <DashboardHeader 
        title="Student Dashboard" 
        favoriteCount={favoriteCount}
      />

      <div className="mb-4 flex flex-wrap justify-between items-center">
        <StatBadge label="Total Displayed" value={sortedStudents.length} />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>

      <SortControls setSortBy={setSortBy} />

      <div className="flex flex-wrap gap-4">
        {sortedStudents.map((st) => (
          <StudentCard 
            key={st.id}
            name={st.name}
            id={st.id}
            avatar={st.avatar}
            gpa={st.gpa}
            major={st.major}
            courses={st.courses}
            onFavoriteChange={handleFavoriteChange}
          />
        ))}
      </div>
    </main>
  );
}