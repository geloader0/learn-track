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
    alert(`Viewing detailed profile for ${student.name}. This would open a comprehensive student profile with grades, attendance history, assignments, and parent communication logs.`);
  };

  const handleEditGrades = (student: any) => {
    alert(`Opening grade editor for ${student.name}. This would allow you to input new grades, update assignments, and modify assessment scores.`);
  };

  const handleContactParent = (student: any) => {
    alert(`Initiating parent contact for ${student.name}. This would open a communication interface to send messages or schedule meetings with ${student.parentContact}.`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Student Management</h1>
          <p className="text-gray-600">Monitor and manage your students' academic progress.</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200">
            Add Student
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
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