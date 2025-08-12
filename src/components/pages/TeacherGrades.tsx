import React, { useState } from 'react';
import { BookOpen, Plus, Save, Download, Upload, Calculator, Eye, Edit } from 'lucide-react';

export function TeacherGrades() {
  const [selectedClass, setSelectedClass] = useState('8A');
  const [selectedSubject, setSelectedSubject] = useState('Mathematics');
  const [selectedQuarter, setSelectedQuarter] = useState('Q2');
  const [editingCell, setEditingCell] = useState<string | null>(null);

  const [grades, setGrades] = useState([
    {
      studentId: 'STU001',
      studentName: 'John Smith',
      written: { q1: 88, q2: 92, q3: 0, q4: 0 },
      performance: { q1: 90, q2: 94, q3: 0, q4: 0 },
      quarterly: { q1: 89, q2: 93, q3: 0, q4: 0 },
      finalGrade: 91
    },
    {
      studentId: 'STU002',
      studentName: 'Emma Davis',
      written: { q1: 95, q2: 97, q3: 0, q4: 0 },
      performance: { q1: 93, q2: 96, q3: 0, q4: 0 },
      quarterly: { q1: 94, q2: 97, q3: 0, q4: 0 },
      finalGrade: 95
    },
    {
      studentId: 'STU003',
      studentName: 'Michael Brown',
      written: { q1: 75, q2: 78, q3: 0, q4: 0 },
      performance: { q1: 80, q2: 82, q3: 0, q4: 0 },
      quarterly: { q1: 78, q2: 80, q3: 0, q4: 0 },
      finalGrade: 79
    },
    {
      studentId: 'STU004',
      studentName: 'Sarah Wilson',
      written: { q1: 87, q2: 89, q3: 0, q4: 0 },
      performance: { q1: 88, q2: 90, q3: 0, q4: 0 },
      quarterly: { q1: 88, q2: 90, q3: 0, q4: 0 },
      finalGrade: 89
    },
    {
      studentId: 'STU005',
      studentName: 'James Johnson',
      written: { q1: 91, q2: 94, q3: 0, q4: 0 },
      performance: { q1: 93, q2: 95, q3: 0, q4: 0 },
      quarterly: { q1: 92, q2: 95, q3: 0, q4: 0 },
      finalGrade: 93
    }
  ]);

  const assignments = [
    { id: 1, name: 'Quiz 1 - Algebra', type: 'written', maxScore: 50, dateGiven: '2024-10-15' },
    { id: 2, name: 'Problem Solving Activity', type: 'performance', maxScore: 100, dateGiven: '2024-10-20' },
    { id: 3, name: 'Midterm Exam', type: 'written', maxScore: 100, dateGiven: '2024-10-25' },
    { id: 4, name: 'Group Project', type: 'performance', maxScore: 100, dateGiven: '2024-11-01' },
    { id: 5, name: 'Quiz 2 - Geometry', type: 'written', maxScore: 50, dateGiven: '2024-11-10' }
  ];

  const handleGradeChange = (studentId: string, category: string, quarter: string, value: number) => {
    setGrades(prevGrades => 
      prevGrades.map(grade => {
        if (grade.studentId === studentId) {
          const updatedGrade = { ...grade };
          (updatedGrade as any)[category][quarter] = value;
          
          // Recalculate quarterly grade (60% written, 40% performance)
          const written = (updatedGrade as any).written[quarter];
          const performance = (updatedGrade as any).performance[quarter];
          if (written > 0 && performance > 0) {
            (updatedGrade as any).quarterly[quarter] = Math.round(written * 0.6 + performance * 0.4);
          }
          
          return updatedGrade;
        }
        return grade;
      })
    );
  };

  const handleSaveGrades = () => {
    alert('Grades saved successfully! This would save all grade changes to the database and notify students/parents of updates.');
  };

  const handleExportGrades = () => {
    alert('Exporting grades to Excel/PDF. This would generate a comprehensive grade report for the selected class and subject.');
  };

  const handleImportGrades = () => {
    alert('Import grades from file. This would allow you to upload a CSV or Excel file with grade data.');
  };

  const handleAddAssignment = () => {
    alert('Add new assignment. This would open a form to create a new quiz, exam, or project with scoring criteria.');
  };

  const handleViewStudentDetails = (studentId: string) => {
    alert(`Viewing detailed grade breakdown for student ${studentId}. This would show all individual assignment scores and performance analytics.`);
  };

  const calculateClassAverage = (category: string, quarter: string) => {
    const validGrades = grades
      .map(g => (g as any)[category][quarter])
      .filter(grade => grade > 0);
    
    if (validGrades.length === 0) return 0;
    return Math.round(validGrades.reduce((sum, grade) => sum + grade, 0) / validGrades.length);
  };

  const getGradeColor = (grade: number) => {
    if (grade >= 90) return 'text-green-600 font-semibold';
    if (grade >= 85) return 'text-blue-600 font-semibold';
    if (grade >= 80) return 'text-yellow-600 font-semibold';
    if (grade >= 75) return 'text-orange-600 font-semibold';
    if (grade > 0) return 'text-red-600 font-semibold';
    return 'text-gray-400';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Grade Management</h1>
          <p className="text-gray-600">Input and manage student grades across all subjects.</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={handleAddAssignment}
            className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200"
          >
            <Plus className="h-4 w-4" />
            <span>Add Assignment</span>
          </button>
          <button
            onClick={handleImportGrades}
            className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-200"
          >
            <Upload className="h-4 w-4" />
            <span>Import</span>
          </button>
          <button
            onClick={handleExportGrades}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            <Download className="h-4 w-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Class and Subject Selection */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="8A">Grade 8-A</option>
              <option value="8B">Grade 8-B</option>
              <option value="8C">Grade 8-C</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="Mathematics">Mathematics</option>
              <option value="English">English</option>
              <option value="Science">Science</option>
              <option value="Filipino">Filipino</option>
              <option value="Social Studies">Social Studies</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Quarter</label>
            <select
              value={selectedQuarter}
              onChange={(e) => setSelectedQuarter(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="Q1">1st Quarter</option>
              <option value="Q2">2nd Quarter</option>
              <option value="Q3">3rd Quarter</option>
              <option value="Q4">4th Quarter</option>
            </select>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Class Average</p>
              <p className="text-2xl font-bold text-blue-600">
                {calculateClassAverage('quarterly', selectedQuarter.toLowerCase())}
              </p>
            </div>
            <Calculator className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Highest Grade</p>
              <p className="text-2xl font-bold text-green-600">
                {Math.max(...grades.map(g => (g as any).quarterly[selectedQuarter.toLowerCase()]).filter(g => g > 0))}
              </p>
            </div>
            <BookOpen className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Students Graded</p>
              <p className="text-2xl font-bold text-purple-600">
                {grades.filter(g => (g as any).quarterly[selectedQuarter.toLowerCase()] > 0).length}/{grades.length}
              </p>
            </div>
            <Eye className="h-8 w-8 text-purple-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Below 75</p>
              <p className="text-2xl font-bold text-red-600">
                {grades.filter(g => {
                  const grade = (g as any).quarterly[selectedQuarter.toLowerCase()];
                  return grade > 0 && grade < 75;
                }).length}
              </p>
            </div>
            <BookOpen className="h-8 w-8 text-red-500" />
          </div>
        </div>
      </div>

      {/* Recent Assignments */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Recent Assignments</h3>
          <button
            onClick={handleAddAssignment}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Add New Assignment
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {assignments.slice(0, 6).map(assignment => (
            <div key={assignment.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-medium text-gray-900">{assignment.name}</h4>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  assignment.type === 'written' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  {assignment.type}
                </span>
              </div>
              <p className="text-sm text-gray-600">Max Score: {assignment.maxScore}</p>
              <p className="text-xs text-gray-500">{new Date(assignment.dateGiven).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Grades Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">
            {selectedSubject} - {selectedClass} - {selectedQuarter}
          </h3>
          <button
            onClick={handleSaveGrades}
            className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200"
          >
            <Save className="h-4 w-4" />
            <span>Save Changes</span>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Written Work<br />
                  <span className="text-xs font-normal">(60%)</span>
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Performance Task<br />
                  <span className="text-xs font-normal">(40%)</span>
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quarterly Grade
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {grades.map((student) => (
                <tr key={student.studentId} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{student.studentName}</div>
                    <div className="text-sm text-gray-500">{student.studentId}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={(student as any).written[selectedQuarter.toLowerCase()] || ''}
                      onChange={(e) => handleGradeChange(
                        student.studentId, 
                        'written', 
                        selectedQuarter.toLowerCase(), 
                        parseInt(e.target.value) || 0
                      )}
                      className={`w-16 text-center border border-gray-300 rounded px-2 py-1 text-sm ${
                        getGradeColor((student as any).written[selectedQuarter.toLowerCase()])
                      }`}
                      placeholder="--"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={(student as any).performance[selectedQuarter.toLowerCase()] || ''}
                      onChange={(e) => handleGradeChange(
                        student.studentId, 
                        'performance', 
                        selectedQuarter.toLowerCase(), 
                        parseInt(e.target.value) || 0
                      )}
                      className={`w-16 text-center border border-gray-300 rounded px-2 py-1 text-sm ${
                        getGradeColor((student as any).performance[selectedQuarter.toLowerCase()])
                      }`}
                      placeholder="--"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className={`text-lg font-bold ${
                      getGradeColor((student as any).quarterly[selectedQuarter.toLowerCase()])
                    }`}>
                      {(student as any).quarterly[selectedQuarter.toLowerCase()] || '--'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <button
                      onClick={() => handleViewStudentDetails(student.studentId)}
                      className="text-blue-600 hover:text-blue-900 p-1 rounded"
                      title="View Details"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
              {/* Class Average Row */}
              <tr className="bg-gray-100 font-semibold">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  Class Average
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900">
                  {calculateClassAverage('written', selectedQuarter.toLowerCase())}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900">
                  {calculateClassAverage('performance', selectedQuarter.toLowerCase())}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-lg font-bold text-blue-600">
                  {calculateClassAverage('quarterly', selectedQuarter.toLowerCase())}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  --
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Grading Scale Reference */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Grading Scale Reference</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-lg font-bold text-green-600">90-100</div>
            <div className="text-sm text-green-700">Excellent</div>
          </div>
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-lg font-bold text-blue-600">85-89</div>
            <div className="text-sm text-blue-700">Very Good</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 rounded-lg">
            <div className="text-lg font-bold text-yellow-600">80-84</div>
            <div className="text-sm text-yellow-700">Good</div>
          </div>
          <div className="text-center p-3 bg-red-50 rounded-lg">
            <div className="text-lg font-bold text-red-600">75-79</div>
            <div className="text-sm text-red-700">Satisfactory</div>
          </div>
        </div>
      </div>
    </div>
  );
}