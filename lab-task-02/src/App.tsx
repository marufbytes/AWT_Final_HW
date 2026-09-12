import { useState, useEffect } from "react";
import DashboardHeader from "./components/DashboardHeader";
import StudentCard from "./components/StudentCard";
import StatBadge from "./components/StatBadge";
import SearchBar from "./components/SearchBar";
import SortControls from "./components/SortControls";

export default function App() {
  const [students, setStudents] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortType, setSortType] = useState<string>("default");
  const [favorites, setFavorites] = useState<string[]>([]);


  useEffect(() => {
    const timer = setTimeout(() => {
      setStudents([
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
      ]);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);


  const filteredStudents = students.filter((student) => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.major.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (sortType === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortType === 'gpa') {
      return b.gpa - a.gpa;
    }
    return 0;
    
  });


  useEffect(() => {
    document.title = `Dashboard - ${sortedStudents.length} Students`;
  }, [sortedStudents.length]);


  const handleToggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      <DashboardHeader title="Student Dashboard" tagline="Dashboard Tagline " />


      <div className="mb-6 flex gap-4 flex-wrap">
        <StatBadge label="Total Students" value={students.length} />
        <StatBadge label="Total Favorites" value={favorites.length} />
      </div>


      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <SortControls currentSort={sortType} onSortChange={setSortType} />
      </div>


      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-3 text-sm text-slate-500 font-medium">Loading student data...</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sortedStudents.map((student) => (
            <StudentCard 
              key={student.id}
              name={student.name}
              id={student.id}
              avatar={student.avatar}
              gpa={student.gpa}
              major={student.major}
              courses={student.courses}
              isFavorite={favorites.includes(student.id)}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}