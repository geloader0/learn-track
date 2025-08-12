import React, { useState } from 'react';
import { Users, Search, Filter, Eye, Edit, MessageCircle, AlertTriangle, Award, TrendingUp, TrendingDown } from 'lucide-react';

export function TeacherStudents() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('8A');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const students = [
    {
      id: 'STU001',
      name: 'John Smith',
      class: '8A',
      currentGrade: 90,
      attendance: 94,
      status: 'Good',
      trend: 'up',
      lastAssignment: 'Math Quiz - 92',
      parentContact: 'michael.smith@email.com',
      notes: 'Consistent performer, good participation',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 'STU002',
      name: 'Emma Davis',
      class: '8A',
      currentGrade: 95,
      attendance: 98,
      status: 'Excellent',
      trend: 'up',
      lastAssignment: 'Science Project - 98',
      parentContact: 'sarah.davis@email.com',
      notes: 'Top performer, natural leader',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 'STU003',
      name: 'Michael Brown',
      class: '8A',
      currentGrade: 78,
      attendance: 85,
      status: 'At Risk',
      trend: 'down',
      lastAssignment: 'English Essay - 75',
      parentContact: 'lisa.brown@email.com',
      notes: 'Needs additional support, frequent absences',
      avatar: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 'STU004',
      name: 'Sarah Wilson',
      class: '8A',
      currentGrade: 88,
      attendance: 92,
      status: 'Good',
      trend: 'stable',
      lastAssignment: 'History Report - 87',
      parentContact: 'david.wilson@email.com',
      notes: 'Steady progress, good work ethic',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 'STU005',
      name: 'James Johnson',
      class: '8B',
      currentGrade: 92,
      attendance: 96,
      status: 'Excellent',
      trend: 'up',
      lastAssignment: 'Math Test - 94',
      parentContact: 'mary.johnson@email.com',
      notes: 'Excellent analytical skills, helpful to peers',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 'STU006',
      name: 'Lisa Garcia',
      class: '8B',
      currentGrade: 85,
      attendance: 89,
      status: 'Good',
      trend: 'up',
      lastAssignment: 'Science Lab - 88',
      parentContact: 'carlos.garcia@email.com',
      notes: 'Improving steadily, active in discussions',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = selectedClass === 'all' || student.class === selectedClass;
    const matchesStatus = selectedStatus === 'all' || student.status.toLowerCase().replace(' ', '-') === selectedStatus;
    
    return matchesSearch && matchesClass && matchesStatus;
  });

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'down':
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      default:
        return <div className="h-4 w-4 bg-blue-500 rounded-full"></div>;
    }
  };

  const getStatusBadge = (status: string) => {
    const baseClasses = "inline-flex px-2 py-1 text-xs font-semibold rounded-full";
    switch (status) {
      case 'Excellent':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'Good':
        return `${baseClasses} bg-blue-100 text-blue-800`;
      case 'At Risk':
        return `${baseClasses} bg-red-100 text-red-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  const handleViewDetails = (student: any) => {
    const detailsHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 30px; border-bottom: 2px solid #3b82f6; padding-bottom: 15px;">
          <img src="${student.avatar}" alt="${student.name}" style="width: 80px; height: 80px; border-radius: 50%; margin-right: 20px; object-fit: cover;">
          <div>
            <h1 style="color: #1f2937; margin: 0;">${student.name}</h1>
            <p style="color: #6b7280; margin: 5px 0;">Student ID: ${student.id} | Class: ${student.class}</p>
            <p style="color: #6b7280; margin: 5px 0;">Parent Contact: ${student.parentContact}</p>
          </div>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 30px;">
          <div style="background: #dbeafe; padding: 20px; border-radius: 8px; text-align: center;">
            <h3 style="color: #1e40af; margin: 0 0 10px 0;">Current Grade</h3>
            <p style="font-size: 2em; font-weight: bold; color: #1e40af; margin: 0;">${student.currentGrade}</p>
          </div>
          <div style="background: #dcfce7; padding: 20px; border-radius: 8px; text-align: center;">
            <h3 style="color: #166534; margin: 0 0 10px 0;">Attendance</h3>
            <p style="font-size: 2em; font-weight: bold; color: #166534; margin: 0;">${student.attendance}%</p>
          </div>
          <div style="background: ${student.status === 'Excellent' ? '#dcfce7' : student.status === 'Good' ? '#dbeafe' : '#fef2f2'}; padding: 20px; border-radius: 8px; text-align: center;">
            <h3 style="color: ${student.status === 'Excellent' ? '#166534' : student.status === 'Good' ? '#1e40af' : '#dc2626'}; margin: 0 0 10px 0;">Status</h3>
            <p style="font-size: 1.5em; font-weight: bold; color: ${student.status === 'Excellent' ? '#166534' : student.status === 'Good' ? '#1e40af' : '#dc2626'}; margin: 0;">${student.status}</p>
          </div>
        </div>
        
        <div style="margin-bottom: 30px;">
          <h3 style="color: #374151; border-bottom: 1px solid #d1d5db; padding-bottom: 10px;">Recent Performance</h3>
          <p style="color: #6b7280; margin: 10px 0;"><strong>Last Assignment:</strong> ${student.lastAssignment}</p>
          <p style="color: #6b7280; margin: 10px 0;"><strong>Trend:</strong> ${student.trend === 'up' ? '📈 Improving' : student.trend === 'down' ? '📉 Declining' : '➡️ Stable'}</p>
        </div>
        
        <div style="margin-bottom: 30px;">
          <h3 style="color: #374151; border-bottom: 1px solid #d1d5db; padding-bottom: 10px;">Teacher Notes</h3>
          <p style="color: #6b7280; background: #f9fafb; padding: 15px; border-radius: 8px; margin: 10px 0;">${student.notes}</p>
        </div>
        
        <div style="margin-bottom: 30px;">
          <h3 style="color: #374151; border-bottom: 1px solid #d1d5db; padding-bottom: 10px;">Grade History</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px;">
            <div style="background: #f3f4f6; padding: 10px; border-radius: 6px; text-align: center;">
              <strong>Q1:</strong> 88
            </div>
            <div style="background: #f3f4f6; padding: 10px; border-radius: 6px; text-align: center;">
              <strong>Q2:</strong> ${student.currentGrade}
            </div>
            <div style="background: #f3f4f6; padding: 10px; border-radius: 6px; text-align: center;">
              <strong>Q3:</strong> --
            </div>
            <div style="background: #f3f4f6; padding: 10px; border-radius: 6px; text-align: center;">
              <strong>Q4:</strong> --
            </div>
          </div>
        </div>
        
        <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 30px;">
          <h4 style="color: #374151; margin: 0 0 15px 0;">Quick Actions</h4>
          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <button onclick="window.close()" style="background: #3b82f6; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Close</button>
            <button onclick="alert('Opening grade editor for ${student.name}')" style="background: #10b981; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Edit Grades</button>
            <button onclick="alert('Contacting parent: ${student.parentContact}')" style="background: #8b5cf6; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Contact Parent</button>
          </div>
        </div>
      </div>
    `;
    
    const newWindow = window.open('', '_blank', 'width=900,height=700,scrollbars=yes');
    if (newWindow) {
      newWindow.document.write(detailsHtml);
      newWindow.document.title = `${student.name} - Student Profile`;
    }
  };

  const handleEditGrades = (student: any) => {
    const gradeEditorHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1f2937; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
          Grade Editor - ${student.name}
        </h2>
        <form style="margin: 20px 0;">
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Subject:</label>
            <select style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
              <option>Mathematics</option>
              <option>English</option>
              <option>Science</option>
              <option>Filipino</option>
              <option>Social Studies</option>
            </select>
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Quarter:</label>
            <select style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
              <option>1st Quarter</option>
              <option>2nd Quarter</option>
              <option>3rd Quarter</option>
              <option>4th Quarter</option>
            </select>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Written Work (60%):</label>
              <input type="number" min="0" max="100" value="${student.currentGrade - 2}" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
            </div>
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Performance Task (40%):</label>
              <input type="number" min="0" max="100" value="${student.currentGrade + 2}" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
            </div>
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Notes:</label>
            <textarea rows="3" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;" placeholder="Add any notes about this grade...">${student.notes}</textarea>
          </div>
          <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button type="button" onclick="window.close()" style="background: #6b7280; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Cancel</button>
            <button type="button" onclick="alert('Grades saved successfully!'); window.close();" style="background: #10b981; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Save Changes</button>
          </div>
        </form>
      </div>
    `;
    
    const newWindow = window.open('', '_blank', 'width=700,height=600,scrollbars=yes');
    if (newWindow) {
      newWindow.document.write(gradeEditorHtml);
      newWindow.document.title = `Edit Grades - ${student.name}`;
    }
  };

  const handleContactParent = (student: any) => {
    const contactHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1f2937; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
          Contact Parent - ${student.name}
        </h2>
        <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #374151;"><strong>Parent Email:</strong> ${student.parentContact}</p>
          <p style="margin: 5px 0 0 0; color: #374151;"><strong>Student:</strong> ${student.name} (${student.id})</p>
        </div>
        <form style="margin: 20px 0;">
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Message Type:</label>
            <select style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
              <option>Academic Progress Update</option>
              <option>Attendance Concern</option>
              <option>Behavioral Notice</option>
              <option>Parent Conference Request</option>
              <option>Positive Recognition</option>
              <option>General Communication</option>
            </select>
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Subject:</label>
            <input type="text" value="Regarding ${student.name}'s Academic Progress" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Message:</label>
            <textarea rows="6" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;" placeholder="Dear Parent,&#10;&#10;I hope this message finds you well. I wanted to update you on ${student.name}'s progress in my class...">Dear Parent,

I hope this message finds you well. I wanted to update you on ${student.name}'s progress in my class.

Current Grade: ${student.currentGrade}
Attendance Rate: ${student.attendance}%
Status: ${student.status}

${student.notes}

Please feel free to contact me if you have any questions or would like to schedule a meeting.

Best regards,
Ms. Johnson</textarea>
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: flex; align-items: center; color: #374151;">
              <input type="checkbox" style="margin-right: 8px;">
              Request parent conference
            </label>
          </div>
          <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button type="button" onclick="window.close()" style="background: #6b7280; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Cancel</button>
            <button type="button" onclick="alert('Message sent successfully to ${student.parentContact}!'); window.close();" style="background: #3b82f6; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Send Message</button>
          </div>
        </form>
      </div>
    `;
    
    const newWindow = window.open('', '_blank', 'width=700,height=700,scrollbars=yes');
    if (newWindow) {
      newWindow.document.write(contactHtml);
      newWindow.document.title = `Contact Parent - ${student.name}`;
    }
  };

  const handleAddStudent = () => {
    const addStudentHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
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
              <input type="text" required placeholder="STU007" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
            </div>
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Class:</label>
              <select required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
                <option value="">Select Class</option>
                <option value="8A">Grade 8-A</option>
                <option value="8B">Grade 8-B</option>
                <option value="8C">Grade 8-C</option>
              </select>
            </div>
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Parent Email:</label>
            <input type="email" required placeholder="parent@email.com" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Parent Phone:</label>
            <input type="tel" placeholder="+63 912 345 6789" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Address:</label>
            <textarea rows="3" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;" placeholder="Student's home address"></textarea>
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
    
    const newWindow = window.open('', '_blank', 'width=700,height=800,scrollbars=yes');
    if (newWindow) {
      newWindow.document.write(addStudentHtml);
      newWindow.document.title = 'Add New Student';
    }
  };

  const handleExportData = () => {
    const csvContent = [
      ['Student ID', 'Name', 'Class', 'Current Grade', 'Attendance', 'Status', 'Parent Contact'],
      ...filteredStudents.map(student => [
        student.id,
        student.name,
        student.class,
        student.currentGrade,
        `${student.attendance}%`,
        student.status,
        student.parentContact
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

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Student Management</h1>
          <p className="text-gray-600">Monitor and manage your students' academic progress.</p>
        </div>
        <div className="flex space-x-3">
          <button 
            onClick={handleAddStudent}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200"
          >
            Add Student
          </button>
          <button 
            onClick={handleExportData}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Export Data
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Students</p>
              <p className="text-2xl font-bold text-gray-900">{students.length}</p>
            </div>
            <Users className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Excellent</p>
              <p className="text-2xl font-bold text-green-600">
                {students.filter(s => s.status === 'Excellent').length}
              </p>
            </div>
            <Award className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">At Risk</p>
              <p className="text-2xl font-bold text-red-600">
                {students.filter(s => s.status === 'At Risk').length}
              </p>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Class Average</p>
              <p className="text-2xl font-bold text-purple-600">
                {Math.round(students.reduce((sum, s) => sum + s.currentGrade, 0) / students.length)}
              </p>
            </div>
            <TrendingUp className="h-8 w-8 text-purple-500" />
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
                placeholder="Search students by name or ID..."
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
              <option value="8A">Grade 8-A</option>
              <option value="8B">Grade 8-B</option>
              <option value="8C">Grade 8-C</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Status</option>
              <option value="excellent">Excellent</option>
              <option value="good">Good</option>
              <option value="at-risk">At Risk</option>
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
                  Current Grade
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Attendance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Assignment
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
                      <img
                        src={student.avatar}
                        alt={student.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{student.name}</div>
                        <div className="text-sm text-gray-500">{student.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {student.class}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-900">{student.currentGrade}</span>
                      {getTrendIcon(student.trend)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {student.attendance}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={getStatusBadge(student.status)}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {student.lastAssignment}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleViewDetails(student)}
                        className="text-blue-600 hover:text-blue-900 p-1 rounded"
                        title="View Details"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleEditGrades(student)}
                        className="text-green-600 hover:text-green-900 p-1 rounded"
                        title="Edit Grades"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleContactParent(student)}
                        className="text-purple-600 hover:text-purple-900 p-1 rounded"
                        title="Contact Parent"
                      >
                        <MessageCircle className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* At-Risk Students Alert */}
      {students.filter(s => s.status === 'At Risk').length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-6 w-6 text-red-500 mt-0.5" />
            <div>
              <h3 className="text-lg font-medium text-red-900">Students Requiring Attention</h3>
              <p className="text-red-700 mt-1">
                {students.filter(s => s.status === 'At Risk').length} student(s) are currently at risk and may need additional support or parent conferences.
              </p>
              <div className="mt-3">
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-200">
                  Schedule Interventions
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}