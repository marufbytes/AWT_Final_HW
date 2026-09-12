export default function CourseTag({ courseName, color }: { courseName: string; color: string }) {
  return (
    <span 
      className="text-white px-2 py-1 m-1 text-xs rounded inline-block font-medium" 
      style={{ backgroundColor: color }}>

      {courseName}
      
    </span>
  );
}