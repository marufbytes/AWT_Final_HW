"use client";
import StatBadge from "./StatBadge";
import CourseTag from "./CourseTag";
import { useStudents } from "../context/StudentContext";

export default function StudentCard({ student }: { student: any }) {
  const { favorites, toggleFavorite, removeStudent } = useStudents();
  const isFavorite = favorites.includes(student.id);

  return (
    <div className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm w-64 relative">
      <div className="absolute top-3 right-3 flex items-center gap-1 text-sm text-gray-600">
        <input 
          type="checkbox" 
          checked={isFavorite}
          onChange={() => toggleFavorite(student.id)}
          className="cursor-pointer w-4 h-4 accent-blue-600"
        />
      </div>

      <img src={student.avatar} className="w-12 h-12 rounded-full mb-3 object-cover" alt="avatar" />
      <h3 className="font-bold text-lg text-gray-900 dark:text-white">{student.name}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">ID: {student.id}</p>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">Major: {student.major}</p>
      
      <StatBadge label="GPA" value={student.gpa} />
      
      <div className="mt-3">
        <p className="text-xs font-bold text-gray-500 mb-1">Courses:</p>
        <div className="flex flex-wrap">
          {student.courses.map((course: any, index: number) => (
            <CourseTag key={index} courseName={course.name} color={course.color} />
          ))}
        </div>
      </div>

      <button 
        onClick={() => removeStudent(student.id)}
        className="mt-4 w-full bg-red-500 text-white py-1 rounded text-xs hover:bg-red-600"
      >
        Remove Student
      </button>
    </div>
  );
}