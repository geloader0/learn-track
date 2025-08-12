import React, { useState } from 'react';
import { Calendar, Users, CheckCircle, XCircle, Clock, Download, Upload, Save } from 'lucide-react';

export function TeacherAttendance() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedClass, setSelectedClass] = useState('8A');
  const [selectedSubject, setSelectedSubject] = useState('Mathematics');

  const [attendance, setAttendance] = useState([
    {
      studentId: 'STU001',
      studentName: 'John Smith',
      status: 'present',
      timeIn: '08:00',
      notes: ''
    },
    {
      studentId: 'STU002',
      studentName: 'Emma Davis',
      status: 'present',
      timeIn: '07:58',
      notes: ''
    },
    {
      studentId: 'STU003',
      studentName: 'Michael Brown',
      status: 'absent',
      timeIn: '',
      notes: 'Sick leave - parent notification sent'
    },
    {
      studentId: 'STU004',
      studentName: 'Sarah Wilson',
      status: 'present',
      timeIn: '08:02',
      notes: ''
    },
    {
      studentId: 'STU005',
      studentName: 'James Johnson',
      status: 'late',
      timeIn: '08:15',
      notes: 'Traffic delay'
    },
    {
      studentId: 'STU006',
      studentName: 'Lisa Garcia',
      status: 'present',
      timeIn: '07:55',
      notes: ''
    }
  ]);

  const attendanceStats = {
    present: attendance.filter(s => s.status === 'present').length,
    absent: attendance.filter(s => s.status === 'absent').length,
    late: attendance.filter(s => s.status === 'late').length,
    total: attendance.length
  };

  const handleStatusChange = (studentId: string, newStatus: string) => {
    setAttendance(prev => 
      prev.map(student => 
        student.studentId === studentId 
          ? { ...student, status: newStatus, timeIn: newStatus === 'absent' ? '' : student.timeIn || '08:00' }
          : student
      )
    );
  };

  const handleTimeChange = (studentId: string, time: string) => {
    setAttendance(prev => 
      prev.map(student => 
        student.studentId === studentId 
          ? { ...student, timeIn: time }
          : student
      )
    );
  };

  const handleNotesChange = (studentId: string, notes: string) => {
    setAttendance(prev => 
      prev.map(student => 
        student.studentId === studentId 
          ? { ...student, notes }
          : student
      )
    );
  };

  const handleSaveAttendance = () => {
    alert('Attendance saved successfully! Parents of absent students have been notified automatically.');
  };

  const handleExportAttendance = () => {
    alert('Exporting attendance report. This would generate a comprehensive attendance report for the selected period.');
  };

  const handleImportAttendance = () => {
    alert('Import attendance data. This would allow you to upload attendance data from external sources.');
  };

  const handleMarkAllPresent = () => {
    setAttendance(prev => 
      prev.map(student => ({ 
        ...student, 
        status: 'present', 
        timeIn: student.timeIn || '08:00' 
      }))
    );
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'present':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'absent':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'late':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      default:
        return <div className="h-5 w-5 bg-gray-300 rounded-full" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'absent':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'late':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Attendance Management</h1>
          <p className="text-gray-600">Track and manage student attendance for your classes.</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={handleImportAttendance}
            className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-200"
          >
            <Upload className="h-4 w-4" />
            <span>Import</span>
          </button>
          <button
            onClick={handleExportAttendance}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            <Download className="h-4 w-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Class and Date Selection */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
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
          <div className="flex items-end">
            <button
              onClick={handleMarkAllPresent}
              className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200"
            >
              Mark All Present
            </button>
          </div>
        </div>
      </div>

      {/* Attendance Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Present</p>
              <p className="text-2xl font-bold text-green-600">{attendanceStats.present}</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
          <div className="mt-2">
            <div className="text-sm text-gray-600">
              {Math.round((attendanceStats.present / attendanceStats.total) * 100)}% of class
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Absent</p>
              <p className="text-2xl font-bold text-red-600">{attendanceStats.absent}</p>
            </div>
            <XCircle className="h-8 w-8 text-red-500" />
          </div>
          <div className="mt-2">
            <div className="text-sm text-gray-600">
              {Math.round((attendanceStats.absent / attendanceStats.total) * 100)}% of class
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Late</p>
              <p className="text-2xl font-bold text-yellow-600">{attendanceStats.late}</p>
            </div>
            <Clock className="h-8 w-8 text-yellow-500" />
          </div>
          <div className="mt-2">
            <div className="text-sm text-gray-600">
              {Math.round((attendanceStats.late / attendanceStats.total) * 100)}% of class
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Students</p>
              <p className="text-2xl font-bold text-blue-600">{attendanceStats.total}</p>
            </div>
            <Users className="h-8 w-8 text-blue-500" />
          </div>
          <div className="mt-2">
            <div className="text-sm text-gray-600">
              Enrolled in {selectedClass}
            </div>
          </div>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">
            Attendance - {selectedClass} - {selectedSubject} - {new Date(selectedDate).toLocaleDateString()}
          </h3>
          <button
            onClick={handleSaveAttendance}
            className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200"
          >
            <Save className="h-4 w-4" />
            <span>Save Attendance</span>
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
                  Status
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time In
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Notes
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quick Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {attendance.map((student) => (
                <tr key={student.studentId} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getStatusIcon(student.status)}
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">{student.studentName}</div>
                        <div className="text-sm text-gray-500">{student.studentId}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <select
                      value={student.status}
                      onChange={(e) => handleStatusChange(student.studentId, e.target.value)}
                      className={`border rounded-lg px-3 py-1 text-sm font-medium ${getStatusColor(student.status)}`}
                    >
                      <option value="present">Present</option>
                      <option value="absent">Absent</option>
                      <option value="late">Late</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <input
                      type="time"
                      value={student.timeIn}
                      onChange={(e) => handleTimeChange(student.studentId, e.target.value)}
                      disabled={student.status === 'absent'}
                      className="border border-gray-300 rounded px-2 py-1 text-sm disabled:bg-gray-100 disabled:text-gray-400"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      value={student.notes}
                      onChange={(e) => handleNotesChange(student.studentId, e.target.value)}
                      placeholder="Add notes..."
                      className="w-full border border-gray-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className="flex justify-center space-x-2">
                      <button
                        onClick={() => handleStatusChange(student.studentId, 'present')}
                        className="text-green-600 hover:text-green-800 p-1 rounded"
                        title="Mark Present"
                      >
                        <CheckCircle className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleStatusChange(student.studentId, 'absent')}
                        className="text-red-600 hover:text-red-800 p-1 rounded"
                        title="Mark Absent"
                      >
                        <XCircle className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleStatusChange(student.studentId, 'late')}
                        className="text-yellow-600 hover:text-yellow-800 p-1 rounded"
                        title="Mark Late"
                      >
                        <Clock className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Attendance Alerts */}
      {attendanceStats.absent > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <XCircle className="h-6 w-6 text-red-500 mt-0.5" />
            <div>
              <h3 className="text-lg font-medium text-red-900">Absent Students Alert</h3>
              <p className="text-red-700 mt-1">
                {attendanceStats.absent} student(s) are absent today. Parent notifications will be sent automatically when you save attendance.
              </p>
              <div className="mt-3">
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-200">
                  Send Parent Notifications
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Weekly Attendance Summary */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Weekly Attendance Summary</h3>
        <div className="grid grid-cols-7 gap-4">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
            const attendanceRate = Math.floor(Math.random() * 20) + 80; // Mock data
            return (
              <div key={day} className="text-center">
                <div className="text-sm font-medium text-gray-600 mb-2">{day}</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div
                    className="bg-green-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${attendanceRate}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-600">{attendanceRate}%</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}