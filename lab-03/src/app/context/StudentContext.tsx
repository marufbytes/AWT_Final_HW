"use client";
import { createContext, useContext, useState, useEffect } from "react";

const StudentContext = createContext<any>(null);

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

export function StudentProvider({ children }: { children: React.ReactNode }) {
  const [students, setStudents] = useState<any[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("students_v2"); // <--- Updated key
      return saved ? JSON.parse(saved) : initialStudents;
    }
    return initialStudents;
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("students_v2", JSON.stringify(students)); // <--- Updated key
  }, [students]);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const addStudent = (newStudent: any) => {
    setStudents((prev) => [newStudent, ...prev]);
    setSuccessMessage("Student successfully registered!");
  };

  const removeStudent = (id: string) => {
    setStudents((prev) => prev.filter((st) => st.id !== id));
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <StudentContext.Provider value={{ 
      students, searchQuery, setSearchQuery, sortBy, setSortBy, 
      favorites, toggleFavorite, addStudent, removeStudent, successMessage 
    }}>
      {children}
    </StudentContext.Provider>
  );
}

export function useStudents() {
  return useContext(StudentContext);
}