import { useState, FormEvent } from 'react';
import { useStudents } from '../context/StudentContext';

export default function AddStudentForm() {
  const { addStudent } = useStudents();

  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [major, setMajor] = useState('');
  const [gpa, setGpa] = useState('');
  const [coursesInput, setCoursesInput] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) newErrors.name = 'Full name is required.';
    if (!id.trim() || !/^\d{2}-\d{5}-\d$/.test(id)) {
      newErrors.id = 'Student ID must be numeric (like: 23-54391-3).';
    }
    if (!major.trim()) newErrors.major = 'Major is required.';
    
    const numGpa = parseFloat(gpa);
    if (isNaN(numGpa) || numGpa < 0 || numGpa > 4.0) {
      newErrors.gpa = 'GPA must be between 0.0 and 4.0.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const courses = coursesInput.split(',').map(c => ({
      name: c.trim() || 'General',
      color: '#2563eb'
    })).filter(c => c.name);

    const success = addStudent({
      name,
      id,
      avatar: '/boy.jpg',
      gpa: numGpa,
      major,
      courses: courses.length > 0 ? courses : [{ name: 'Web Tech', color: '#2563eb' }]
    });

    if (!success) {
      setErrors({ id: 'Student ID must be unique.' });
      return;
    }


    setName('');
    setId('');
    setMajor('');
    setGpa('');
    setCoursesInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-5 rounded-lg shadow-sm mb-6 transition-colors">
      <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-4">Add New Student</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">Full Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={e => setName(e.target.value)}
            className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-transparent text-slate-800 dark:text-slate-100"
          />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">Student ID</label>
          <input 
            type="text" 
            value={id} 
            onChange={e => setId(e.target.value)}
            className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-transparent text-slate-800 dark:text-slate-100"
          />
          {errors.id && <p className="text-xs text-red-500 mt-1">{errors.id}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">Major</label>
          <input 
            type="text" 
            value={major} 
            onChange={e => setMajor(e.target.value)}
            className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-transparent text-slate-800 dark:text-slate-100"
          />
          {errors.major && <p className="text-xs text-red-500 mt-1">{errors.major}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">GPA (0 - 4.0)</label>
          <input 
            type="number" 
            step="0.01" 
            value={gpa} 
            onChange={e => setGpa(e.target.value)}
            className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-transparent text-slate-800 dark:text-slate-100"
          />
          {errors.gpa && <p className="text-xs text-red-500 mt-1">{errors.gpa}</p>}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">Courses (comma separated)</label>
        <input 
          type="text" 
          value={coursesInput} 
          onChange={e => setCoursesInput(e.target.value)}
          className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-transparent text-slate-800 dark:text-slate-100"
        />
      </div>

      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
        Register Student
      </button>
    </form>
  );
}