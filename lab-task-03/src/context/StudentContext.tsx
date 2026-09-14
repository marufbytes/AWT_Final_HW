import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Course {
  name: string;
  color: string;
}

export interface Student {
  name: string;
  id: string;
  avatar: string;
  gpa: number;
  major: string;
  courses: Course[];
}

interface StudentContextType {
  students: Student[];
  filteredAndSortedStudents: Student[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  sortType: string;
  setSortType: (type: string) => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  addStudent: (student: Student) => boolean;
  removeStudent: (id: string) => void;
  notification: string | null;
}

const StudentContext = createContext<StudentContextType | undefined>(undefined);

const initialStudents: Student[] = [
  { name: "Maruf Ahammed", id: "23-54391-3", avatar: "/boy.jpg", gpa: 3.89, major: "CSE", courses: [{ name: "Web Tech", color: "#2563eb" }, { name: "Algo", color: "#2563eb" }] },
  { name: "Rahim Ahmed", id: "23-51102-1", avatar: "/boy.jpg", gpa: 3.75, major: "SE", courses: [{ name: "DBMS", color: "#2563eb" }] },
  { name: "Karim Uddin", id: "23-51103-2", avatar: "/boy.jpg", gpa: 3.60, major: "EEE", courses: [{ name: "Circuits", color: "#2563eb" }] },
  { name: "Nusrat Jahan", id: "21-39912-3", avatar: "/girl.avif", gpa: 3.92, major: "CSE", courses: [{ name: "AI", color: "#2563eb" }] }
];

export function StudentProvider({ children }: { children: ReactNode }) {

    const [students, setStudents] = useState<Student[]>(() => {
    const saved = localStorage.getItem('dashboard_students');
    return saved ? JSON.parse(saved) : initialStudents;
  });
  
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortType, setSortType] = useState<string>("default");
  
  const [favorites, setFavorites] = useState<string[]>(() => {
    const savedFavs = localStorage.getItem('dashboard_favorites');
    return savedFavs ? JSON.parse(savedFavs) : [];
  });
  
  const [notification, setNotification] = useState<string | null>(null);


  useEffect(() => {
    localStorage.setItem('dashboard_students', JSON.stringify(students));
  }, [students]);

  useEffect(() => {
    localStorage.setItem('dashboard_favorites', JSON.stringify(favorites));
  }, [favorites]);


  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const addStudent = (newStudent: Student) => {
    if (students.some(s => s.id === newStudent.id)) {
      return false; 
    }
    setStudents(prev => [newStudent, ...prev]);
    setNotification("Student added successfully!");
    return true;
  };

  const removeStudent = (id: string) => {
    setStudents(prev => prev.filter(s => s.id !== id));
    setFavorites(prev => prev.filter(favId => favId !== id));
    setNotification("Student removed successfully!");
  };


  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.major.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAndSortedStudents = [...filteredStudents].sort((a, b) => {
    if (sortType === 'name') return a.name.localeCompare(b.name);
    if (sortType === 'gpa') return b.gpa - a.gpa;
    return 0;
  });

  return (
    <StudentContext.Provider value={{
      students,
      filteredAndSortedStudents,
      searchTerm,
      setSearchTerm,
      sortType,
      setSortType,
      favorites,
      toggleFavorite,
      addStudent,
      removeStudent,
      notification
    }}>
      {children}
    </StudentContext.Provider>
  );
}

export function useStudents() {
  const context = useContext(StudentContext);
  if (!context) throw new Error('useStudents must be used within a StudentProvider');
  return context;
}