import StatBadge from "./StatBadge";
import CourseTag from "./CourseTag";

export default function StudentCard(props: any) {
  return (
    <div className="border border-gray-300 p-4 rounded-lg bg-white shadow-sm w-64">

      <img src={props.avatar} className="w-12 h-12 rounded-full mb-3 object-cover" alt="avatar" />
      
      <h3 className="font-bold text-lg">{props.name}</h3>
      <p className="text-gray-600 text-sm">ID: {props.id}</p>
      <p className="text-gray-600 text-sm mb-3">Major: {props.major}</p>
      

      <StatBadge label="GPA" value={props.gpa} />
      
      <div className="mt-3">
        <p className="text-xs font-bold text-gray-500 mb-1">Courses:</p>

        <div className="flex flex-wrap">
          {props.courses.map((course: any, index: number) => (
            <CourseTag key={index} courseName={course.name} color={course.color} />
          ))}
        </div>
      </div>
    </div>
  );
}