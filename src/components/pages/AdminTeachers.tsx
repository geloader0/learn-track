import React, { useState } from 'react';
import { Users, Plus, Search, Filter, Edit, Trash2, Eye, UserCheck, UserX, Download, Upload, GraduationCap, Mail, Phone } from 'lucide-react';

export function AdminTeachers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const [teachers, setTeachers] = useState([
    {
      id: 'TCH001',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@sjcsi.edu',
      phone: '+63 912 345 6789',
      department: 'Mathematics',
      subjects: ['Mathematics', 'Algebra'],
      status: 'active',
      hireDate: '2022-08-15',
      experience: 8,
      education: 'Master of Education in Mathematics',
      classes: ['Grade 8-A', 'Grade 8-B'],
      studentCount: 62,
      performance: 4.6,
      address: '456 Teacher St, Quezon City'
    },
    {
      id: 'TCH002',
      name: 'Michael Thompson',
      email: 'michael.thompson@sjcsi.edu',
      phone: '+63 912 345 6790',
      department: 'English',
      subjects: ['English', 'Literature'],
      status: 'active',
      hireDate: '2021-06-10',
      experience: 12,
      education: 'Bachelor of Arts in English Literature',
      classes: ['Grade 8-A', 'Grade 8-C'],
      studentCount: 63,
      performance: 4.4,
      address: '789 Education Ave, Manila'
    },
    {
      id: 'TCH003',
      name: 'Dr. Maria Martinez',
      email: 'maria.martinez@sjcsi.edu',
      phone: '+63 912 345 6791',
      department: 'Science',
      subjects: ['Biology', 'Chemistry', 'Physics'],
      status: 'active',
      hireDate: '2020-01-20',
      experience: 15,
      education: 'PhD in Biology',
      classes: ['Grade 8-B', 'Grade 8-C'],
      studentCount: 61,
      performance: 4.8,
      address: '321 Science Blvd, Makati'
    },
    {
      id: 'TCH004',
      name: 'Carmen Santos',
      email: 'carmen.santos@sjcsi.edu',
      phone: '+63 912 345 6792',
      department: 'Filipino',
      subjects: ['Filipino', 'Araling Panlipunan'],
      status: 'active',
      hireDate: '2023-03-01',
      experience: 5,
      education: 'Bachelor of Arts in Filipino',
      classes: ['Grade 8-A'],
      studentCount: 32,
      performance: 4.2,
      address: '654 Heritage St, Pasig'
    },
    {
      id: 'TCH005',
      name: 'Robert Wilson',
      email: 'robert.wilson@sjcsi.edu',
      phone: '+63 912 345 6793',
      department: 'Physical Education',
      subjects: ['Physical Education', 'Health'],
      status: 'inactive',
      hireDate: '2019-07-15',
      experience: 10,
      education: 'Bachelor of Physical Education',
      classes: [],
      studentCount: 0,
      performance: 4.0,
      address: '987 Sports Ave, Taguig'
    }
  ]);

  const teacherStats = {
    total: teachers.length,
    active: teachers.filter(t => t.status === 'active').length,
    mathematics: teachers.filter(t => t.department === 'Mathematics').length,
    english: teachers.filter(t => t.department === 'English').length,
    science: teachers.filter(t => t.department === 'Science').length,
    avgPerformance: (teachers.reduce((sum, t) => sum + t.performance, 0) / teachers.length).toFixed(1)
  };

  const filteredTeachers = teachers.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || teacher.department === selectedDepartment;
    const matchesStatus = selectedStatus === 'all' || teacher.status === selectedStatus;
    
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  const handleAddTeacher = () => {
    const addTeacherHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1f2937; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
          Add New Teacher
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
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Teacher ID:</label>
              <input type="text" required placeholder="TCH006" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
            </div>
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Department:</label>
              <select required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
                <option value="">Select Department</option>
                <option value="Mathematics">Mathematics</option>
                <option value="English">English</option>
                <option value="Science">Science</option>
                <option value="Filipino">Filipino</option>
                <option value="Social Studies">Social Studies</option>
                <option value="Physical Education">Physical Education</option>
              </select>
            </div>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Email:</label>
              <input type="email" required placeholder="teacher@sjcsi.edu" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
            </div>
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Phone:</label>
              <input type="tel" required placeholder="+63 912 345 6789" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
            </div>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Hire Date:</label>
              <input type="date" required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
            </div>
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Years of Experience:</label>
              <input type="number" min="0" max="50" required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
            </div>
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Education Background:</label>
            <input type="text" required placeholder="e.g., Master of Education in Mathematics" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Subjects (comma-separated):</label>
            <input type="text" required placeholder="e.g., Mathematics, Algebra" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Address:</label>
            <textarea rows="2" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;" placeholder="Teacher's address"></textarea>
          </div>
          <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button type="button" onclick="window.close()" style="background: #6b7280; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Cancel</button>
            <button type="button" onclick="alert('Teacher added successfully!'); window.close();" style="background: #10b981; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Add Teacher</button>
          </div>
        </form>
      </div>
    `;
    
    const newWindow = window.open('', '_blank', 'width=800,height=800,scrollbars=yes');
    if (newWindow) {
      newWindow.document.write(addTeacherHtml);
      newWindow.document.title = 'Add New Teacher';
    }
  };

  const handleViewTeacher = (teacher: any) => {
    const viewTeacherHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1f2937; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">
          Teacher Profile - ${teacher.name}
        </h2>
        <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 30px; margin: 30px 0;">
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px;">
            <h3 style="color: #374151; margin: 0 0 15px 0;">Basic Information</h3>
            <div style="space-y: 10px;">
              <p style="margin: 8px 0; color: #6b7280;"><strong>Name:</strong> ${teacher.name}</p>
              <p style="margin: 8px 0; color: #6b7280;"><strong>Teacher ID:</strong> ${teacher.id}</p>
              <p style="margin: 8px 0; color: #6b7280;"><strong>Email:</strong> ${teacher.email}</p>
              <p style="margin: 8px 0; color: #6b7280;"><strong>Phone:</strong> ${teacher.phone}</p>
              <p style="margin: 8px 0; color: #6b7280;"><strong>Department:</strong> ${teacher.department}</p>
              <p style="margin: 8px 0; color: #6b7280;"><strong>Status:</strong> 
                <span style="color: ${teacher.status === 'active' ? '#10b981' : '#ef4444'};">${teacher.status.charAt(0).toUpperCase() + teacher.status.slice(1)}</span>
              </p>
              <p style="margin: 8px 0; color: #6b7280;"><strong>Hire Date:</strong> ${new Date(teacher.hireDate).toLocaleDateString()}</p>
              <p style="margin: 8px 0; color: #6b7280;"><strong>Experience:</strong> ${teacher.experience} years</p>
            </div>
          </div>
          <div>
            <h3 style="color: #374151; margin: 0 0 15px 0;">Professional Information</h3>
            <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 8px 0; color: #166534;"><strong>Education:</strong> ${teacher.education}</p>
              <p style="margin: 8px 0; color: #166534;"><strong>Subjects:</strong> ${teacher.subjects.join(', ')}</p>
              <p style="margin: 8px 0; color: #166534;"><strong>Classes:</strong> ${teacher.classes.join(', ') || 'None assigned'}</p>
              <p style="margin: 8px 0; color: #166534;"><strong>Student Count:</strong> ${teacher.studentCount}</p>
            </div>
            <h3 style="color: #374151; margin: 20px 0 15px 0;">Performance Metrics</h3>
            <div style="background: #eff6ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                <div style="text-align: center;">
                  <div style="font-size: 2em; font-weight: bold; color: #1e40af;">${teacher.performance}</div>
                  <div style="color: #1e40af; font-size: 0.9em;">Performance Rating</div>
                </div>
                <div style="text-align: center;">
                  <div style="font-size: 2em; font-weight: bold; color: #1e40af;">${teacher.studentCount}</div>
                  <div style="color: #1e40af; font-size: 0.9em;">Students</div>
                </div>
              </div>
            </div>
            <h3 style="color: #374151; margin: 20px 0 15px 0;">Contact Information</h3>
            <div style="background: #fef3c7; padding: 20px; border-radius: 8px;">
              <p style="margin: 0; color: #92400e;"><strong>Address:</strong> ${teacher.address}</p>
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
      newWindow.document.write(viewTeacherHtml);
      newWindow.document.title = `Teacher Profile - ${teacher.name}`;
    }
  };

  const handleEditTeacher = (teacher: any) => {
    const editTeacherHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1f2937; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
          Edit Teacher - ${teacher.name}
        </h2>
        <form style="margin: 20px 0;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">First Name:</label>
              <input type="text" value="${teacher.name.split(' ')[0]}" required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
            </div>
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Last Name:</label>
              <input type="text" value="${teacher.name.split(' ')[1] || ''}" required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
            </div>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Teacher ID:</label>
              <input type="text" value="${teacher.id}" required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
            </div>
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Department:</label>
              <select required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
                <option value="Mathematics" ${teacher.department === 'Mathematics' ? 'selected' : ''}>Mathematics</option>
                <option value="English" ${teacher.department === 'English' ? 'selected' : ''}>English</option>
                <option value="Science" ${teacher.department === 'Science' ? 'selected' : ''}>Science</option>
                <option value="Filipino" ${teacher.department === 'Filipino' ? 'selected' : ''}>Filipino</option>
                <option value="Social Studies" ${teacher.department === 'Social Studies' ? 'selected' : ''}>Social Studies</option>
                <option value="Physical Education" ${teacher.department === 'Physical Education' ? 'selected' : ''}>Physical Education</option>
              </select>
            </div>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Email:</label>
              <input type="email" value="${teacher.email}" required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
            </div>
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Phone:</label>
              <input type="tel" value="${teacher.phone}" required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
            </div>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Status:</label>
              <select required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
                <option value="active" ${teacher.status === 'active' ? 'selected' : ''}>Active</option>
                <option value="inactive" ${teacher.status === 'inactive' ? 'selected' : ''}>Inactive</option>
              </select>
            </div>
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Experience (years):</label>
              <input type="number" value="${teacher.experience}" min="0" max="50" required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
            </div>
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Education Background:</label>
            <input type="text" value="${teacher.education}" required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Subjects:</label>
            <input type="text" value="${teacher.subjects.join(', ')}" required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Address:</label>
            <textarea rows="2" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">${teacher.address}</textarea>
          </div>
          <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button type="button" onclick="window.close()" style="background: #6b7280; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Cancel</button>
            <button type="button" onclick="alert('Teacher updated successfully!'); window.close();" style="background: #3b82f6; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Update Teacher</button>
          </div>
        </form>
      </div>
    `;
    
    const newWindow = window.open('', '_blank', 'width=800,height=800,scrollbars=yes');
    if (newWindow) {
      newWindow.document.write(editTeacherHtml);
      newWindow.document.title = `Edit Teacher - ${teacher.name}`;
    }
  };

  const handleToggleStatus = (teacherId: string) => {
    setTeachers(prev => 
      prev.map(teacher => 
        teacher.id === teacherId 
          ? { ...teacher, status: teacher.status === 'active' ? 'inactive' : 'active' }
          : teacher
      )
    );
  };

  const handleDeleteTeacher = (teacherId: string) => {
    if (confirm('Are you sure you want to delete this teacher? This action cannot be undone.')) {
      setTeachers(prev => prev.filter(teacher => teacher.id !== teacherId));
    }
  };

  const handleExportTeachers = () => {
    const csvContent = [
      ['Teacher ID', 'Name', 'Email', 'Phone', 'Department', 'Status', 'Experience', 'Student Count', 'Performance'],
      ...filteredTeachers.map(teacher => [
        teacher.id,
        teacher.name,
        teacher.email,
        teacher.phone,
        teacher.department,
        teacher.status,
        teacher.experience,
        teacher.studentCount,
        teacher.performance
      ])
    ].map(row => row.join(',')).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `teachers_export_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const handleImportTeachers = () => {
    const importHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1f2937; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">
          Import Teachers
        </h2>
        <div style="background: #fef3c7; border: 1px solid #f59e0b; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #92400e;"><strong>Note:</strong> This will import teacher data from a CSV file.</p>
        </div>
        <form style="margin: 20px 0;">
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Select CSV File:</label>
            <input type="file" accept=".csv" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Import Mode:</label>
            <select style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
              <option>Add new teachers only</option>
              <option>Update existing teachers</option>
              <option>Replace all teacher data</option>
            </select>
          </div>
          <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h4 style="color: #374151; margin: 0 0 10px 0;">Expected CSV Format:</h4>
            <code style="display: block; background: white; padding: 10px; border-radius: 4px; font-size: 12px;">
              Teacher ID, Name, Email, Phone, Department, Subjects, Experience, Education<br>
              TCH001, Sarah Johnson, sarah@sjcsi.edu, +63 912 345 6789, Mathematics, "Math, Algebra", 8, Master of Education
            </code>
          </div>
          <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button type="button" onclick="window.close()" style="background: #6b7280; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Cancel</button>
            <button type="button" onclick="alert('Teachers imported successfully!'); window.close();" style="background: #8b5cf6; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Import Teachers</button>
          </div>
        </form>
      </div>
    `;
    
    const newWindow = window.open('', '_blank', 'width=700,height=600,scrollbars=yes');
    if (newWindow) {
      newWindow.document.write(importHtml);
      newWindow.document.title = 'Import Teachers';
    }
  };

  const getStatusBadge = (status: string) => {
    return status === 'active' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-red-100 text-red-800';
  };

  const getPerformanceColor = (rating: number) => {
    if (rating >= 4.5) return 'text-green-600';
    if (rating >= 4.0) return 'text-blue-600';
    if (rating >= 3.5) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Teacher Management</h1>
          <p className="text-gray-600">Manage all teachers and faculty members in the school system.</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={handleImportTeachers}
            className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-200"
          >
            <Upload className="h-4 w-4" />
            <span>Import</span>
          </button>
          <button
            onClick={handleExportTeachers}
            className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200"
          >
            <Download className="h-4 w-4" />
            <span>Export</span>
          </button>
          <button
            onClick={handleAddTeacher}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            <Plus className="h-4 w-4" />
            <span>Add Teacher</span>
          </button>
        </div>
      </div>

      {/* Teacher Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{teacherStats.total}</div>
            <div className="text-sm text-gray-600">Total Teachers</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{teacherStats.active}</div>
            <div className="text-sm text-gray-600">Active</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{teacherStats.mathematics}</div>
            <div className="text-sm text-gray-600">Mathematics</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">{teacherStats.english}</div>
            <div className="text-sm text-gray-600">English</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">{teacherStats.science}</div>
            <div className="text-sm text-gray-600">Science</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-600">{teacherStats.avgPerformance}</div>
            <div className="text-sm text-gray-600">Avg Rating</div>
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
                placeholder="Search teachers by name, ID, or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Departments</option>
              <option value="Mathematics">Mathematics</option>
              <option value="English">English</option>
              <option value="Science">Science</option>
              <option value="Filipino">Filipino</option>
              <option value="Social Studies">Social Studies</option>
              <option value="Physical Education">Physical Education</option>
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

      {/* Teachers Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">
            Teachers ({filteredTeachers.length})
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Teacher
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Department
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Experience
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Students
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Performance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTeachers.map((teacher) => (
                <tr key={teacher.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <GraduationCap className="h-8 w-8 text-gray-400 mr-3" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{teacher.name}</div>
                        <div className="text-sm text-gray-500">{teacher.id}</div>
                        <div className="text-sm text-gray-500">{teacher.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{teacher.department}</div>
                    <div className="text-sm text-gray-500">{teacher.subjects.join(', ')}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadge(teacher.status)}`}>
                      {teacher.status.charAt(0).toUpperCase() + teacher.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {teacher.experience} years
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {teacher.studentCount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className={`text-sm font-bold ${getPerformanceColor(teacher.performance)}`}>
                        {teacher.performance}/5.0
                      </span>
                      <div className="ml-2 flex">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-2 w-2 rounded-full mr-1 ${
                              i < Math.floor(teacher.performance) ? 'bg-yellow-400' : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleViewTeacher(teacher)}
                        className="text-blue-600 hover:text-blue-900 p-1 rounded"
                        title="View Details"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleEditTeacher(teacher)}
                        className="text-green-600 hover:text-green-900 p-1 rounded"
                        title="Edit Teacher"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleToggleStatus(teacher.id)}
                        className={`p-1 rounded ${teacher.status === 'active' ? 'text-red-600 hover:text-red-900' : 'text-green-600 hover:text-green-900'}`}
                        title={teacher.status === 'active' ? 'Deactivate Teacher' : 'Activate Teacher'}
                      >
                        {teacher.status === 'active' ? <UserX className="h-4 w-4" /> : <UserCheck className="h-4 w-4" />}
                      </button>
                      <button
                        onClick={() => handleDeleteTeacher(teacher.id)}
                        className="text-red-600 hover:text-red-900 p-1 rounded"
                        title="Delete Teacher"
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