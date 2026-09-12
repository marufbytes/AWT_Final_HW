"use client";
import { useState } from "react";
import { useStudents } from "../context/StudentContext";

export default function AddStudentForm() {
  const { students, addStudent } = useStudents();
  
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [major, setMajor] = useState("");
  const [gpa, setGpa] = useState("");
  const [coursesInput, setCoursesInput] = useState("");

  const [errors, setErrors] = useState<any>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let newErrors: any = {};


    if (!name.trim()) newErrors.name = "Name is required.";
    if (!id.trim()) {
      newErrors.id = "ID is required.";
    } else if (students.some((st: any) => st.id === id)) {
      newErrors.id = "ID must be unique.";
    }
    if (!major.trim()) newErrors.major = "Major is required.";
    
    const gpaNum = parseFloat(gpa);
    if (isNaN(gpaNum) || gpaNum < 0 || gpaNum > 4.0) {
      newErrors.gpa = "GPA must be between 0 and 4.0.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    

    const formattedCourses = coursesInput.split(",").map((c) => ({
      name: c.trim(),
      color: "#2563eb"
    })).filter(c => c.name);

    addStudent({
      name,
      id,
      major,
      gpa: gpaNum,
      avatar: "/boy.jpg",
      courses: formattedCourses.length > 0 ? formattedCourses : [{ name: "General", color: "#2563eb" }]
    });


    setName("");
    setId("");
    setMajor("");
    setGpa("");
    setCoursesInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded-lg mb-6 shadow-sm bg-white dark:bg-gray-800">
      <h2 className="text-lg font-bold mb-3">Add New Student</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border p-2 rounded text-sm dark:bg-gray-700 dark:border-gray-600" />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} className="w-full border p-2 rounded text-sm dark:bg-gray-700 dark:border-gray-600" />
          {errors.id && <p className="text-red-500 text-xs mt-1">{errors.id}</p>}
        </div>

        <div>
          <input type="text" placeholder="Major" value={major} onChange={(e) => setMajor(e.target.value)} className="w-full border p-2 rounded text-sm dark:bg-gray-700 dark:border-gray-600" />
          {errors.major && <p className="text-red-500 text-xs mt-1">{errors.major}</p>}
        </div>

        <div>
          <input type="number" step="0.01" placeholder="CGPA" value={gpa} onChange={(e) => setGpa(e.target.value)} className="w-full border p-2 rounded text-sm dark:bg-gray-700 dark:border-gray-600" />
          {errors.gpa && <p className="text-red-500 text-xs mt-1">{errors.gpa}</p>}
        </div>
      </div>

      <div className="mt-3">
        <input type="text" placeholder="Couses" value={coursesInput} onChange={(e) => setCoursesInput(e.target.value)} className="w-full border p-2 rounded text-sm dark:bg-gray-700 dark:border-gray-600" />
      </div>

      <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700">
        Register Student
      </button>
    </form>
  );
}