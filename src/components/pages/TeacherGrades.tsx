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
    // Simulate saving grades
    const updatedGrades = grades.map(grade => ({
      ...grade,
      lastUpdated: new Date().toISOString()
    }));
    
    // Show success message with details
    const successHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 50px auto; padding: 30px; background: white; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        <div style="text-align: center; margin-bottom: 20px;">
          <div style="width: 60px; height: 60px; background: #10b981; border-radius: 50%; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
            <span style="color: white; font-size: 24px;">✓</span>
          </div>
          <h2 style="color: #1f2937; margin: 0;">Grades Saved Successfully!</h2>
        </div>
        <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #166534;"><strong>Summary:</strong></p>
          <ul style="color: #166534; margin: 10px 0;">
            <li>${grades.length} student grades updated</li>
            <li>Class: ${selectedClass}</li>
            <li>Subject: ${selectedSubject}</li>
            <li>Quarter: ${selectedQuarter}</li>
          </ul>
        </div>
        <div style="background: #eff6ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #1e40af;"><strong>Automatic Notifications:</strong></p>
          <ul style="color: #1e40af; margin: 10px 0;">
            <li>Students will be notified of grade updates</li>
            <li>Parents will receive email notifications</li>
            <li>Grade reports have been updated</li>
          </ul>
        </div>
        <div style="text-align: center; margin-top: 20px;">
          <button onclick="window.close()" style="background: #3b82f6; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; font-size: 16px;">Close</button>
        </div>
      </div>
    `;
    
    const newWindow = window.open('', '_blank', 'width=600,height=500');
    if (newWindow) {
      newWindow.document.write(successHtml);
      newWindow.document.title = 'Grades Saved';
    }
  };

  const handleExportGrades = () => {
    const csvContent = [
      ['Student ID', 'Student Name', 'Written Work', 'Performance Task', 'Quarterly Grade'],
      ...grades.map(grade => [
        grade.studentId,
        grade.studentName,
        (grade as any).written[selectedQuarter.toLowerCase()] || '',
        (grade as any).performance[selectedQuarter.toLowerCase()] || '',
        (grade as any).quarterly[selectedQuarter.toLowerCase()] || ''
      ])
    ].map(row => row.join(',')).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `grades_${selectedClass}_${selectedSubject}_${selectedQuarter}_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const handleImportGrades = () => {
    const importHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1f2937; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">
          Import Grades
        </h2>
        <div style="background: #fef3c7; border: 1px solid #f59e0b; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #92400e;"><strong>Important:</strong> Please ensure your CSV file follows the correct format.</p>
        </div>
        <form style="margin: 20px 0;">
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Select CSV File:</label>
            <input type="file" accept=".csv,.xlsx" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Import Type:</label>
            <select style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
              <option>Replace existing grades</option>
              <option>Update only empty grades</option>
              <option>Add new assignments</option>
            </select>
          </div>
          <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h4 style="color: #374151; margin: 0 0 10px 0;">Expected CSV Format:</h4>
            <code style="display: block; background: white; padding: 10px; border-radius: 4px; font-size: 12px;">
              Student ID, Student Name, Written Work, Performance Task<br>
              STU001, John Smith, 88, 90<br>
              STU002, Emma Davis, 95, 93
            </code>
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: flex; align-items: center; color: #374151;">
              <input type="checkbox" style="margin-right: 8px;">
              Send notifications to students and parents after import
            </label>
          </div>
          <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button type="button" onclick="window.close()" style="background: #6b7280; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Cancel</button>
            <button type="button" onclick="alert('Grades imported successfully! 5 records processed.'); window.close();" style="background: #8b5cf6; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Import Grades</button>
          </div>
        </form>
      </div>
    `;
    
    const newWindow = window.open('', '_blank', 'width=700,height=600,scrollbars=yes');
    if (newWindow) {
      newWindow.document.write(importHtml);
      newWindow.document.title = 'Import Grades';
    }
  };

  const handleAddAssignment = () => {
    const assignmentHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1f2937; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
          Add New Assignment
        </h2>
        <form style="margin: 20px 0;">
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Assignment Name:</label>
            <input type="text" required placeholder="e.g., Quiz 3 - Geometry" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Type:</label>
              <select required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
                <option value="">Select Type</option>
                <option value="written">Written Work</option>
                <option value="performance">Performance Task</option>
                <option value="exam">Examination</option>
              </select>
            </div>
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Max Score:</label>
              <input type="number" required min="1" max="100" value="100" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
            </div>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Quarter:</label>
              <select required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
                <option value="q1">1st Quarter</option>
                <option value="q2" selected>2nd Quarter</option>
                <option value="q3">3rd Quarter</option>
                <option value="q4">4th Quarter</option>
              </select>
            </div>
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Due Date:</label>
              <input type="date" required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
            </div>
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Description:</label>
            <textarea rows="4" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;" placeholder="Describe the assignment, topics covered, and grading criteria..."></textarea>
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: flex; align-items: center; color: #374151;">
              <input type="checkbox" style="margin-right: 8px;">
              Notify students about this assignment
            </label>
          </div>
          <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button type="button" onclick="window.close()" style="background: #6b7280; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Cancel</button>
            <button type="button" onclick="alert('Assignment created successfully!'); window.close();" style="background: #10b981; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Create Assignment</button>
          </div>
        </form>
      </div>
    `;
    
    const newWindow = window.open('', '_blank', 'width=700,height=700,scrollbars=yes');
    if (newWindow) {
      newWindow.document.write(assignmentHtml);
      newWindow.document.title = 'Add New Assignment';
    }
  };

  const handleViewStudentDetails = (studentId: string) => {
    const student = grades.find(g => g.studentId === studentId);
    if (!student) return;
    
    const detailsHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1f2937; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
          Grade Details - ${student.studentName}
        </h2>
        <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #374151;"><strong>Student ID:</strong> ${student.studentId}</p>
          <p style="margin: 5px 0 0 0; color: #374151;"><strong>Subject:</strong> ${selectedSubject} | <strong>Class:</strong> ${selectedClass}</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 30px 0;">
          <div style="background: #dbeafe; padding: 20px; border-radius: 8px; text-align: center;">
            <h3 style="color: #1e40af; margin: 0 0 10px 0;">Q1 Grade</h3>
            <p style="font-size: 2em; font-weight: bold; color: #1e40af; margin: 0;">${(student as any).quarterly.q1}</p>
            <p style="color: #1e40af; margin: 5px 0 0 0; font-size: 0.9em;">W: ${(student as any).written.q1} | P: ${(student as any).performance.q1}</p>
          </div>
          <div style="background: #dcfce7; padding: 20px; border-radius: 8px; text-align: center;">
            <h3 style="color: #166534; margin: 0 0 10px 0;">Q2 Grade</h3>
            <p style="font-size: 2em; font-weight: bold; color: #166534; margin: 0;">${(student as any).quarterly.q2}</p>
            <p style="color: #166534; margin: 5px 0 0 0; font-size: 0.9em;">W: ${(student as any).written.q2} | P: ${(student as any).performance.q2}</p>
          </div>
          <div style="background: #fef3c7; padding: 20px; border-radius: 8px; text-align: center;">
            <h3 style="color: #92400e; margin: 0 0 10px 0;">Final Grade</h3>
            <p style="font-size: 2em; font-weight: bold; color: #92400e; margin: 0;">${student.finalGrade}</p>
            <p style="color: #92400e; margin: 5px 0 0 0; font-size: 0.9em;">Current Average</p>
          </div>
        </div>
        
        <div style="margin: 30px 0;">
          <h3 style="color: #374151; border-bottom: 1px solid #d1d5db; padding-bottom: 10px;">Assignment Breakdown</h3>
          <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
              <thead>
                <tr style="background: #f9fafb;">
                  <th style="border: 1px solid #d1d5db; padding: 12px; text-align: left;">Assignment</th>
                  <th style="border: 1px solid #d1d5db; padding: 12px; text-align: center;">Type</th>
                  <th style="border: 1px solid #d1d5db; padding: 12px; text-align: center;">Score</th>
                  <th style="border: 1px solid #d1d5db; padding: 12px; text-align: center;">Max</th>
                  <th style="border: 1px solid #d1d5db; padding: 12px; text-align: center;">Percentage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="border: 1px solid #d1d5db; padding: 12px;">Quiz 1 - Algebra</td>
                  <td style="border: 1px solid #d1d5db; padding: 12px; text-align: center;">Written</td>
                  <td style="border: 1px solid #d1d5db; padding: 12px; text-align: center;">45</td>
                  <td style="border: 1px solid #d1d5db; padding: 12px; text-align: center;">50</td>
                  <td style="border: 1px solid #d1d5db; padding: 12px; text-align: center;">90%</td>
                </tr>
                <tr>
                  <td style="border: 1px solid #d1d5db; padding: 12px;">Midterm Exam</td>
                  <td style="border: 1px solid #d1d5db; padding: 12px; text-align: center;">Written</td>
                  <td style="border: 1px solid #d1d5db; padding: 12px; text-align: center;">88</td>
                  <td style="border: 1px solid #d1d5db; padding: 12px; text-align: center;">100</td>
                  <td style="border: 1px solid #d1d5db; padding: 12px; text-align: center;">88%</td>
                </tr>
                <tr>
                  <td style="border: 1px solid #d1d5db; padding: 12px;">Group Project</td>
                  <td style="border: 1px solid #d1d5db; padding: 12px; text-align: center;">Performance</td>
                  <td style="border: 1px solid #d1d5db; padding: 12px; text-align: center;">95</td>
                  <td style="border: 1px solid #d1d5db; padding: 12px; text-align: center;">100</td>
                  <td style="border: 1px solid #d1d5db; padding: 12px; text-align: center;">95%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 30px;">
          <h4 style="color: #374151; margin: 0 0 15px 0;">Grade Calculation</h4>
          <p style="color: #6b7280; margin: 5px 0;">Written Work (60%): ${(student as any).written.q2} × 0.6 = ${Math.round((student as any).written.q2 * 0.6)}</p>
          <p style="color: #6b7280; margin: 5px 0;">Performance Task (40%): ${(student as any).performance.q2} × 0.4 = ${Math.round((student as any).performance.q2 * 0.4)}</p>
          <p style="color: #374151; margin: 15px 0 5px 0; font-weight: bold;">Quarterly Grade: ${(student as any).quarterly.q2}</p>
        </div>
        
        <div style="text-align: center; margin-top: 30px;">
          <button onclick="window.close()" style="background: #3b82f6; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; font-size: 16px;">Close</button>
        </div>
      </div>
    `;
    
    const newWindow = window.open('', '_blank', 'width=900,height=700,scrollbars=yes');
    if (newWindow) {
      newWindow.document.write(detailsHtml);
      newWindow.document.title = `Grade Details - ${student.studentName}`;
    }
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