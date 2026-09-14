import CourseTag from './CourseTag';
import { useStudents } from '../context/StudentContext';

interface Course {
  name: string;
  color: string;
}

interface StudentCardProps {
  name: string;
  id: string;
  avatar: string;
  gpa: number;
  major: string;
  courses: Course[];
}

export default function StudentCard({ name, id, avatar, gpa, major, courses }: StudentCardProps) {
  const { favorites, toggleFavorite, removeStudent } = useStudents();
  const isFavorite = favorites.includes(id);

  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-5 shadow-sm flex flex-col justify-between transition-colors">
      <div>
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-3">
            <img 
              src={avatar} 
              alt={name} 
              className="w-12 h-12 rounded object-cover border border-slate-200 dark:border-slate-700" 
            />
            <div>
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">{name}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">ID: {id}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Major: {major}</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-end">
            <button 
              onClick={() => toggleFavorite(id)}
              className={`text-xs px-2.5 py-1 rounded border font-medium transition-colors ${isFavorite ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800' : 'bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600'}`}
            >
              {isFavorite ? 'Fav' : 'Fav'}
            </button>
            <button 
              onClick={() => removeStudent(id)}
              className="text-xs px-2 py-0.5 rounded text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
            >
              Remove
            </button>
          </div>
        </div>

        <div className="mb-4 inline-block border border-slate-200 dark:border-slate-700 rounded px-2.5 py-1 bg-slate-50 dark:bg-slate-700/50">
          <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">GPA: </span>
          <span className="text-xs font-bold text-slate-800 dark:text-slate-100">{gpa}</span>
        </div>

        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1.5">Courses:</p>
          <div className="flex flex-wrap">
            {courses.map((course, index) => (
              <CourseTag key={index} courseName={course.name} color={course.color} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}