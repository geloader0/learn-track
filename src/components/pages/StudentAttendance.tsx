import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle, XCircle, AlertCircle, Download, Filter } from 'lucide-react';
import { StatCard } from '../common/StatCard';
import { AttendanceChart } from '../charts/AttendanceChart';

export function StudentAttendance() {
  const [selectedMonth, setSelectedMonth] = useState('november');
  const [selectedSubject, setSelectedSubject] = useState('all');

  const attendanceData = [
    { date: '2024-11-01', subject: 'Mathematics', status: 'present', time: '08:00 AM' },
    { date: '2024-11-01', subject: 'English', status: 'present', time: '09:00 AM' },
    { date: '2024-11-01', subject: 'Science', status: 'present', time: '10:00 AM' },
    { date: '2024-11-02', subject: 'Mathematics', status: 'absent', time: '08:00 AM', reason: 'Sick' },
    { date: '2024-11-02', subject: 'English', status: 'present', time: '09:00 AM' },
    { date: '2024-11-02', subject: 'Science', status: 'present', time: '10:00 AM' },
    { date: '2024-11-03', subject: 'Mathematics', status: 'present', time: '08:00 AM' },
    { date: '2024-11-03', subject: 'English', status: 'late', time: '09:15 AM' },
    { date: '2024-11-03', subject: 'Science', status: 'present', time: '10:00 AM' },
    { date: '2024-11-04', subject: 'Mathematics', status: 'present', time: '08:00 AM' },
    { date: '2024-11-04', subject: 'English', status: 'present', time: '09:00 AM' },
    { date: '2024-11-04', subject: 'Science', status: 'present', time: '10:00 AM' },
    { date: '2024-11-05', subject: 'Mathematics', status: 'present', time: '08:00 AM' },
    { date: '2024-11-05', subject: 'English', status: 'present', time: '09:00 AM' },
    { date: '2024-11-05', subject: 'Science', status: 'absent', time: '10:00 AM', reason: 'Family emergency' },
  ];

  const subjects = ['Mathematics', 'English', 'Science', 'Filipino', 'Social Studies', 'Physical Education'];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'present':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'absent':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'late':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const baseClasses = "inline-flex px-2 py-1 text-xs font-semibold rounded-full";
    switch (status) {
      case 'present':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'absent':
        return `${baseClasses} bg-red-100 text-red-800`;
      case 'late':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  const filteredAttendance = attendanceData.filter(record => {
    const monthMatch = selectedMonth === 'all' || record.date.includes('2024-11');
    const subjectMatch = selectedSubject === 'all' || record.subject === selectedSubject;
    return monthMatch && subjectMatch;
  });

  const handleDownloadReport = () => {
    alert('Attendance report download initiated. This would generate a PDF report.');
  };

  // Calculate statistics
  const totalRecords = filteredAttendance.length;
  const presentCount = filteredAttendance.filter(r => r.status === 'present').length;
  const absentCount = filteredAttendance.filter(r => r.status === 'absent').length;
  const lateCount = filteredAttendance.filter(r => r.status === 'late').length;
  const attendanceRate = totalRecords > 0 ? Math.round((presentCount / totalRecords) * 100) : 0;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Attendance</h1>
          <p className="text-gray-600">Track your attendance record and patterns.</p>
        </div>
        <button
          onClick={handleDownloadReport}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          <Download className="h-4 w-4" />
          <span>Download Report</span>
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="Attendance Rate"
          value={`${attendanceRate}%`}
          icon={CheckCircle}
          color="green"
          subtitle="This month"
        />
        <StatCard
          title="Present Days"
          value={presentCount.toString()}
          icon={CheckCircle}
          color="blue"
          subtitle="Total present"
        />
        <StatCard
          title="Absent Days"
          value={absentCount.toString()}
          icon={XCircle}
          color="red"
          subtitle="Total absent"
        />
        <StatCard
          title="Late Arrivals"
          value={lateCount.toString()}
          icon={AlertCircle}
          color="orange"
          subtitle="Times late"
        />
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Months</option>
              <option value="november">November 2024</option>
              <option value="october">October 2024</option>
              <option value="september">September 2024</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Subjects</option>
              {subjects.map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Attendance Chart */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Monthly Attendance Trend</h3>
        <AttendanceChart />
      </div>

      {/* Detailed Attendance Records */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Attendance Records</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Remarks
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAttendance.map((record, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(record.date).toLocaleDateString('en-US', {
                      weekday: 'short',
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {record.subject}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {record.time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(record.status)}
                      <span className={getStatusBadge(record.status)}>
                        {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {record.reason || '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Attendance Summary by Subject */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Attendance by Subject</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map(subject => {
            const subjectRecords = attendanceData.filter(r => r.subject === subject);
            const subjectPresent = subjectRecords.filter(r => r.status === 'present').length;
            const subjectTotal = subjectRecords.length;
            const subjectRate = subjectTotal > 0 ? Math.round((subjectPresent / subjectTotal) * 100) : 0;

            return (
              <div key={subject} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium text-gray-900">{subject}</h4>
                  <span className="text-sm font-bold text-gray-900">{subjectRate}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${subjectRate}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  {subjectPresent}/{subjectTotal} classes attended
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}