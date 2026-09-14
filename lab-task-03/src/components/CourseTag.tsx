interface CourseTagProps {
  courseName: string;
  color: string;
}

export default function CourseTag({ courseName, color }: CourseTagProps) {
  return (
    <span 
      className="text-xs text-white px-2.5 py-1 rounded font-medium inline-block mr-1 mb-1"
      style={{ backgroundColor: color }}
    >
      {courseName}
    </span>
  );
}