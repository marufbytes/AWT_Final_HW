import CourseTag from './CourseTag';

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
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm flex flex-col justify-between">
      <div>

        <div className="mb-4">
          <img 
            src={avatar} 
            alt={name} 
            className="w-12 h-12 rounded object-cover border border-slate-200 mb-3" 
          />
          <h3 className="font-bold text-slate-900 text-base">{name}</h3>
          <p className="text-xs text-slate-500 mt-0.5">ID: {id}</p>
          <p className="text-xs text-slate-500">Major: {major}</p>
        </div>


        <div className="mb-4 inline-block border border-slate-200 rounded px-2.5 py-1 bg-slate-50">
          <span className="text-xs font-semibold text-slate-600">GPA: </span>
          <span className="text-xs font-bold text-slate-800">{gpa}</span>
        </div>


        <div>
          <p className="text-xs text-slate-500 mb-1.5">Courses:</p>
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