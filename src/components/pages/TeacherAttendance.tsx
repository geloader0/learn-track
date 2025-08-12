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
    const absentStudents = attendance.filter(s => s.status === 'absent');
    const lateStudents = attendance.filter(s => s.status === 'late');
    
    const successHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 50px auto; padding: 30px; background: white; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        <div style="text-align: center; margin-bottom: 20px;">
          <div style="width: 60px; height: 60px; background: #10b981; border-radius: 50%; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
            <span style="color: white; font-size: 24px;">✓</span>
          </div>
          <h2 style="color: #1f2937; margin: 0;">Attendance Saved!</h2>
        </div>
        <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #166534;"><strong>Summary for ${new Date(selectedDate).toLocaleDateString()}:</strong></p>
          <ul style="color: #166534; margin: 10px 0;">
            <li>Present: ${attendanceStats.present} students</li>
            <li>Absent: ${attendanceStats.absent} students</li>
            <li>Late: ${attendanceStats.late} students</li>
            <li>Class: ${selectedClass} - ${selectedSubject}</li>
          </ul>
        </div>
        ${absentStudents.length > 0 ? `
        <div style="background: #fef2f2; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #dc2626;"><strong>Parent Notifications Sent:</strong></p>
          <ul style="color: #dc2626; margin: 10px 0;">
            ${absentStudents.map(s => `<li>${s.studentName}</li>`).join('')}
          </ul>
        </div>
        ` : ''}
        <div style="text-align: center; margin-top: 20px;">
          <button onclick="window.close()" style="background: #3b82f6; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; font-size: 16px;">Close</button>
        </div>
      </div>
    `;
    
    const newWindow = window.open('', '_blank', 'width=600,height=500');
    if (newWindow) {
      newWindow.document.write(successHtml);
      newWindow.document.title = 'Attendance Saved';
    }
  };

  const handleExportAttendance = () => {
    const csvContent = [
      ['Date', 'Student ID', 'Student Name', 'Status', 'Time In', 'Notes'],
      ...attendance.map(record => [
        selectedDate,
        record.studentId,
        record.studentName,
        record.status,
        record.timeIn || '',
        record.notes || ''
      ])
    ].map(row => row.join(',')).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `attendance_${selectedClass}_${selectedDate}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const handleImportAttendance = () => {
    const importHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1f2937; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">
          Import Attendance Data
        </h2>
        <div style="background: #fef3c7; border: 1px solid #f59e0b; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #92400e;"><strong>Note:</strong> This will import attendance data for the selected date and class.</p>
        </div>
        <form style="margin: 20px 0;">
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Select CSV File:</label>
            <input type="file" accept=".csv" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Import Mode:</label>
            <select style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
              <option>Replace existing attendance</option>
              <option>Update only missing records</option>
              <option>Merge with existing data</option>
            </select>
          </div>
          <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h4 style="color: #374151; margin: 0 0 10px 0;">Expected CSV Format:</h4>
            <code style="display: block; background: white; padding: 10px; border-radius: 4px; font-size: 12px;">
              Student ID, Student Name, Status, Time In, Notes<br>
              STU001, John Smith, present, 08:00, <br>
              STU002, Emma Davis, absent, , Sick leave
            </code>
          </div>
          <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button type="button" onclick="window.close()" style="background: #6b7280; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Cancel</button>
            <button type="button" onclick="alert('Attendance data imported successfully!'); window.close();" style="background: #8b5cf6; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Import Data</button>
          </div>
        </form>
      </div>
    `;
    
    const newWindow = window.open('', '_blank', 'width=700,height=600,scrollbars=yes');
    if (newWindow) {
      newWindow.document.write(importHtml);
      newWindow.document.title = 'Import Attendance';
    }
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