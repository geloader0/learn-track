import React, { useState } from 'react';
import { Users, Plus, Search, Filter, Edit, Trash2, Eye, UserCheck, UserX, Download, Upload, GraduationCap } from 'lucide-react';

export function AdminStudents() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const [students, setStudents] = useState([
    {
      id: 'STU001',
      name: 'John Smith',
      email: 'john.smith@sjcsi.edu',
      class: 'Grade 8-A',
      status: 'active',
      enrollmentDate: '2024-08-15',
      parentName: 'Michael Smith',
      parentEmail: 'michael.smith@email.com',
      parentPhone: '+63 912 345 6789',
      currentGrade: 90,
      attendance: 94,
      address: '123 Main St, Manila',
      birthDate: '2010-05-15'
    },
    {
      id: 'STU002',
      name: 'Emma Davis',
      email: 'emma.davis@sjcsi.edu',
      class: 'Grade 8-A',
      status: 'active',
      enrollmentDate: '2024-08-15',
      parentName: 'Sarah Davis',
      parentEmail: 'sarah.davis@email.com',
      parentPhone: '+63 912 345 6790',
      currentGrade: 95,
      attendance: 98,
      address: '456 Oak Ave, Quezon City',
      birthDate: '2010-03-22'
    },
    {
      id: 'STU003',
      name: 'Michael Brown',
      email: 'michael.brown@sjcsi.edu',
      class: 'Grade 8-B',
      status: 'active',
      enrollmentDate: '2024-08-15',
      parentName: 'Lisa Brown',
      parentEmail: 'lisa.brown@email.com',
      parentPhone: '+63 912 345 6791',
      currentGrade: 78,
      attendance: 85,
      address: '789 Pine St, Makati',
      birthDate: '2010-07-10'
    },
    {
      id: 'STU004',
      name: 'Sarah Wilson',
      email: 'sarah.wilson@sjcsi.edu',
      class: 'Grade 8-C',
      status: 'inactive',
      enrollmentDate: '2024-08-15',
      parentName: 'David Wilson',
      parentEmail: 'david.wilson@email.com',
      parentPhone: '+63 912 345 6792',
      currentGrade: 88,
      attendance: 92,
      address: '321 Elm St, Pasig',
      birthDate: '2010-01-18'
    }
  ]);

  const studentStats = {
    total: students.length,
    active: students.filter(s => s.status === 'active').length,
    gradeA: students.filter(s => s.class.includes('8-A')).length,
    gradeB: students.filter(s => s.class.includes('8-B')).length,
    gradeC: students.filter(s => s.class.includes('8-C')).length,
    avgGrade: Math.round(students.reduce((sum, s) => sum + s.currentGrade, 0) / students.length)
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = selectedClass === 'all' || student.class === selectedClass;
    const matchesStatus = selectedStatus === 'all' || student.status === selectedStatus;
    
    return matchesSearch && matchesClass && matchesStatus;
  });

  const handleAddStudent = () => {
    const addStudentHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1f2937; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
          Add New Student
        </h2>
        <form style="margin: 20px 0;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">First Name:</label>
              <input type="text" required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
            </div>
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Last Name:</label>
              <input type="text" required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
            </div>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Student ID:</label>
              <input type="text" required placeholder="STU005" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
            </div>
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Class:</label>
              <select required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
                <option value="">Select Class</option>
                <option value="Grade 8-A">Grade 8-A</option>
                <option value="Grade 8-B">Grade 8-B</option>
                <option value="Grade 8-C">Grade 8-C</option>
              </select>
            </div>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Birth Date:</label>
              <input type="date" required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
            </div>
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Student Email:</label>
              <input type="email" required placeholder="student@sjcsi.edu" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
            </div>
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Address:</label>
            <textarea rows="2" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;" placeholder="Student's home address"></textarea>
          </div>
          <h3 style="color: #374151; border-bottom: 1px solid #d1d5db; padding-bottom: 10px; margin: 30px 0 20px 0;">Parent/Guardian Information</h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Parent Name:</label>
              <input type="text" required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
            </div>
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Parent Email:</label>
              <input type="email" required placeholder="parent@email.com" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
            </div>
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Parent Phone:</label>
            <input type="tel" required placeholder="+63 912 345 6789" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Notes:</label>
            <textarea rows="3" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;" placeholder="Any additional notes about the student"></textarea>
          </div>
          <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button type="button" onclick="window.close()" style="background: #6b7280; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Cancel</button>
            <button type="button" onclick="alert('Student added successfully!'); window.close();" style="background: #10b981; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Add Student</button>
          </div>
        </form>
      </div>
    `;
    
    const newWindow = window.open('', '_blank', 'width=800,height=800,scrollbars=yes');
    if (newWindow) {
      newWindow.document.write(addStudentHtml);
      newWindow.document.title = 'Add New Student';
    }
  };

  const handleViewStudent = (student: any) => {
    const viewStudentHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1f2937; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">
          Student Profile - ${student.name}
        </h2>
        <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 30px; margin: 30px 0;">
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px;">
            <h3 style="color: #374151; margin: 0 0 15px 0;">Basic Information</h3>
            <div style="space-y: 10px;">
              <p style="margin: 8px 0; color: #6b7280;"><strong>Name:</strong> ${student.name}</p>
              <p style="margin: 8px 0; color: #6b7280;"><strong>Student ID:</strong> ${student.id}</p>
              <p style="margin: 8px 0; color: #6b7280;"><strong>Email:</strong> ${student.email}</p>
              <p style="margin: 8px 0; color: #6b7280;"><strong>Class:</strong> ${student.class}</p>
              <p style="margin: 8px 0; color: #6b7280;"><strong>Status:</strong> 
                <span style="color: ${student.status === 'active' ? '#10b981' : '#ef4444'};">${student.status.charAt(0).toUpperCase() + student.status.slice(1)}</span>
              </p>
              <p style="margin: 8px 0; color: #6b7280;"><strong>Birth Date:</strong> ${new Date(student.birthDate).toLocaleDateString()}</p>
              <p style="margin: 8px 0; color: #6b7280;"><strong>Enrollment Date:</strong> ${new Date(student.enrollmentDate).toLocaleDateString()}</p>
            </div>
          </div>
          <div>
            <h3 style="color: #374151; margin: 0 0 15px 0;">Academic Performance</h3>
            <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                <div style="text-align: center;">
                  <div style="font-size: 2em; font-weight: bold; color: #166534;">${student.currentGrade}</div>
                  <div style="color: #166534; font-size: 0.9em;">Current Grade</div>
                </div>
                <div style="text-align: center;">
                  <div style="font-size: 2em; font-weight: bold; color: #166534;">${student.attendance}%</div>
                  <div style="color: #166534; font-size: 0.9em;">Attendance Rate</div>
                </div>
              </div>
            </div>
            <h3 style="color: #374151; margin: 20px 0 15px 0;">Parent/Guardian Information</h3>
            <div style="background: #eff6ff; padding: 20px; border-radius: 8px;">
              <p style="margin: 8px 0; color: #1e40af;"><strong>Name:</strong> ${student.parentName}</p>
              <p style="margin: 8px 0; color: #1e40af;"><strong>Email:</strong> ${student.parentEmail}</p>
              <p style="margin: 8px 0; color: #1e40af;"><strong>Phone:</strong> ${student.parentPhone}</p>
            </div>
            <h3 style="color: #374151; margin: 20px 0 15px 0;">Address</h3>
            <div style="background: #fef3c7; padding: 20px; border-radius: 8px;">
              <p style="margin: 0; color: #92400e;">${student.address}</p>
            </div>
          </div>
        </div>
        <div style="text-align: center; margin-top: 30px;">
          <button onclick="window.close()" style="background: #6b7280; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; font-size: 16px;">Close</button>
        </div>
      </div>
    `;
    
    const newWindow = window.open('', '_blank', 'width=900,height=700,scrollbars=yes');
    if (newWindow) {
      newWindow.document.write(viewStudentHtml);
      newWindow.document.title = `Student Profile - ${student.name}`;
    }
  };

  const handleEditStudent = (student: any) => {
    const editStudentHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1f2937; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
          Edit Student - ${student.name}
        </h2>
        <form style="margin: 20px 0;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">First Name:</label>
              <input type="text" value="${student.name.split(' ')[0]}" required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
            </div>
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Last Name:</label>
              <input type="text" value="${student.name.split(' ')[1] || ''}" required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
            </div>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Student ID:</label>
              <input type="text" value="${student.id}" required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
            </div>
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Class:</label>
              <select required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
                <option value="Grade 8-A" ${student.class === 'Grade 8-A' ? 'selected' : ''}>Grade 8-A</option>
                <option value="Grade 8-B" ${student.class === 'Grade 8-B' ? 'selected' : ''}>Grade 8-B</option>
                <option value="Grade 8-C" ${student.class === 'Grade 8-C' ? 'selected' : ''}>Grade 8-C</option>
              </select>
            </div>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Email:</label>
              <input type="email" value="${student.email}" required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
            </div>
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Status:</label>
              <select required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
                <option value="active" ${student.status === 'active' ? 'selected' : ''}>Active</option>
                <option value="inactive" ${student.status === 'inactive' ? 'selected' : ''}>Inactive</option>
              </select>
            </div>
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Address:</label>
            <textarea rows="2" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">${student.address}</textarea>
          </div>
          <h3 style="color: #374151; border-bottom: 1px solid #d1d5db; padding-bottom: 10px; margin: 30px 0 20px 0;">Parent/Guardian Information</h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Parent Name:</label>
              <input type="text" value="${student.parentName}" required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
            </div>
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Parent Email:</label>
              <input type="email" value="${student.parentEmail}" required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
            </div>
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Parent Phone:</label>
            <input type="tel" value="${student.parentPhone}" required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
          </div>
          <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button type="button" onclick="window.close()" style="background: #6b7280; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Cancel</button>
            <button type="button" onclick="alert('Student updated successfully!'); window.close();" style="background: #3b82f6; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Update Student</button>
          </div>
        </form>
      </div>
    `;
    
    const newWindow = window.open('', '_blank', 'width=800,height=800,scrollbars=yes');
    if (newWindow) {
      newWindow.document.write(editStudentHtml);
      newWindow.document.title = `Edit Student - ${student.name}`;
    }
  };

  const handleToggleStatus = (studentId: string) => {
    setStudents(prev => 
      prev.map(student => 
        student.id === studentId 
          ? { ...student, status: student.status === 'active' ? 'inactive' : 'active' }
          : student
      )
    );
  };

  const handleDeleteStudent = (studentId: string) => {
    if (confirm('Are you sure you want to delete this student? This action cannot be undone.')) {
      setStudents(prev => prev.filter(student => student.id !== studentId));
    }
  };

  const handleExportStudents = () => {
    const csvContent = [
      ['Student ID', 'Name', 'Email', 'Class', 'Status', 'Parent Name', 'Parent Email', 'Parent Phone', 'Address'],
      ...filteredStudents.map(student => [
        student.id,
        student.name,
        student.email,
        student.class,
        student.status,
        student.parentName,
        student.parentEmail,
        student.parentPhone,
        student.address
      ])
    ].map(row => row.join(',')).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `students_export_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const handleImportStudents = () => {
    const importHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1f2937; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">
          Import Students
        </h2>
        <div style="background: #fef3c7; border: 1px solid #f59e0b; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #92400e;"><strong>Note:</strong> This will import student data from a CSV file.</p>
        </div>
        <form style="margin: 20px 0;">
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Select CSV File:</label>
            <input type="file" accept=".csv" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Import Mode:</label>
            <select style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
              <option>Add new students only</option>
              <option>Update existing students</option>
              <option>Replace all student data</option>
            </select>
          </div>
          <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h4 style="color: #374151; margin: 0 0 10px 0;">Expected CSV Format:</h4>
            <code style="display: block; background: white; padding: 10px; border-radius: 4px; font-size: 12px;">
              Student ID, Name, Email, Class, Parent Name, Parent Email, Parent Phone, Address<br>
              STU001, John Smith, john@sjcsi.edu, Grade 8-A, Michael Smith, michael@email.com, +63 912 345 6789, 123 Main St
            </code>
          </div>
          <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button type="button" onclick="window.close()" style="background: #6b7280; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Cancel</button>
            <button type="button" onclick="alert('Students imported successfully!'); window.close();" style="background: #8b5cf6; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Import Students</button>
          </div>
        </form>
      </div>
    `;
    
    const newWindow = window.open('', '_blank', 'width=700,height=600,scrollbars=yes');
    if (newWindow) {
      newWindow.document.write(importHtml);
      newWindow.document.title = 'Import Students';
    }
  };

  const getStatusBadge = (status: string) => {
    return status === 'active' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-red-100 text-red-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Student Management</h1>
          <p className="text-gray-600">Manage all students in the school system.</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={handleImportStudents}
            className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-200"
          >
            <Upload className="h-4 w-4" />
            <span>Import</span>
          </button>
          <button
            onClick={handleExportStudents}
            className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200"
          >
            <Download className="h-4 w-4" />
            <span>Export</span>
          </button>
          <button
            onClick={handleAddStudent}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            <Plus className="h-4 w-4" />
            <span>Add Student</span>
          </button>
        </div>
      </div>

      {/* Student Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{studentStats.total}</div>
            <div className="text-sm text-gray-600">Total Students</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{studentStats.active}</div>
            <div className="text-sm text-gray-600">Active</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{studentStats.gradeA}</div>
            <div className="text-sm text-gray-600">Grade 8-A</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">{studentStats.gradeB}</div>
            <div className="text-sm text-gray-600">Grade 8-B</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">{studentStats.gradeC}</div>
            <div className="text-sm text-gray-600">Grade 8-C</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-600">{studentStats.avgGrade}</div>
            <div className="text-sm text-gray-600">Avg Grade</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search students by name, ID, or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Classes</option>
              <option value="Grade 8-A">Grade 8-A</option>
              <option value="Grade 8-B">Grade 8-B</option>
              <option value="Grade 8-C">Grade 8-C</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">
            Students ({filteredStudents.length})
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Class
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Parent Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Enrollment Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <GraduationCap className="h-8 w-8 text-gray-400 mr-3" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{student.name}</div>
                        <div className="text-sm text-gray-500">{student.id}</div>
                        <div className="text-sm text-gray-500">{student.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {student.class}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadge(student.status)}`}>
                      {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{student.parentName}</div>
                    <div className="text-sm text-gray-500">{student.parentEmail}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {new Date(student.enrollmentDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleViewStudent(student)}
                        className="text-blue-600 hover:text-blue-900 p-1 rounded"
                        title="View Details"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleEditStudent(student)}
                        className="text-green-600 hover:text-green-900 p-1 rounded"
                        title="Edit Student"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleToggleStatus(student.id)}
                        className={`p-1 rounded ${student.status === 'active' ? 'text-red-600 hover:text-red-900' : 'text-green-600 hover:text-green-900'}`}
                        title={student.status === 'active' ? 'Deactivate Student' : 'Activate Student'}
                      >
                        {student.status === 'active' ? <UserX className="h-4 w-4" /> : <UserCheck className="h-4 w-4" />}
                      </button>
                      <button
                        onClick={() => handleDeleteStudent(student.id)}
                        className="text-red-600 hover:text-red-900 p-1 rounded"
                        title="Delete Student"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}