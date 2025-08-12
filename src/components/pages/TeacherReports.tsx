import React, { useState } from 'react';
import { FileText, Download, Calendar, BarChart3, Users, TrendingUp, Filter, Eye } from 'lucide-react';

export function TeacherReports() {
  const [selectedReportType, setSelectedReportType] = useState('grade-summary');
  const [selectedPeriod, setSelectedPeriod] = useState('current-quarter');
  const [selectedClass, setSelectedClass] = useState('8A');

  const reportTypes = [
    { id: 'grade-summary', name: 'Grade Summary Report', icon: BarChart3 },
    { id: 'attendance-report', name: 'Attendance Report', icon: Calendar },
    { id: 'student-progress', name: 'Student Progress Report', icon: TrendingUp },
    { id: 'class-performance', name: 'Class Performance Analysis', icon: Users },
    { id: 'parent-conference', name: 'Parent Conference Report', icon: FileText },
    { id: 'intervention-report', name: 'Intervention Report', icon: FileText }
  ];

  const recentReports = [
    {
      id: 1,
      name: 'Grade 8-A Mathematics Q2 Summary',
      type: 'Grade Summary',
      date: '2024-11-15',
      status: 'completed',
      size: '2.3 MB'
    },
    {
      id: 2,
      name: 'October Attendance Report - All Classes',
      type: 'Attendance',
      date: '2024-11-01',
      status: 'completed',
      size: '1.8 MB'
    },
    {
      id: 3,
      name: 'At-Risk Students Intervention Plan',
      type: 'Intervention',
      date: '2024-10-28',
      status: 'completed',
      size: '3.1 MB'
    },
    {
      id: 4,
      name: 'Parent Conference Preparation - Grade 8A',
      type: 'Parent Conference',
      date: '2024-10-25',
      status: 'completed',
      size: '4.2 MB'
    }
  ];

  const quickStats = {
    totalReports: 24,
    thisMonth: 8,
    pending: 2,
    avgGrade: 87.5
  };

  const handleGenerateReport = () => {
    const reportName = reportTypes.find(r => r.id === selectedReportType)?.name;
    alert(`Generating ${reportName} for ${selectedClass} - ${selectedPeriod}. This would create a comprehensive report with charts, statistics, and detailed analysis.`);
  };

  const handleDownloadReport = (reportId: number) => {
    alert(`Downloading report ${reportId}. This would download the selected report as a PDF file.`);
  };

  const handleViewReport = (reportId: number) => {
    alert(`Opening report ${reportId} for preview. This would display the report in a new window with options to print or share.`);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600">Generate comprehensive reports and analyze student performance data.</p>
        </div>
        <button
          onClick={handleGenerateReport}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          <FileText className="h-4 w-4" />
          <span>Generate Report</span>
        </button>
      </div>

      {/* Quick Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Reports</p>
              <p className="text-2xl font-bold text-blue-600">{quickStats.totalReports}</p>
            </div>
            <FileText className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">This Month</p>
              <p className="text-2xl font-bold text-green-600">{quickStats.thisMonth}</p>
            </div>
            <Calendar className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-yellow-600">{quickStats.pending}</p>
            </div>
            <TrendingUp className="h-8 w-8 text-yellow-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Class Average</p>
              <p className="text-2xl font-bold text-purple-600">{quickStats.avgGrade}</p>
            </div>
            <BarChart3 className="h-8 w-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Report Generator */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Generate New Report</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
            <select
              value={selectedReportType}
              onChange={(e) => setSelectedReportType(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {reportTypes.map(type => (
                <option key={type.id} value={type.id}>{type.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Period</label>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="current-quarter">Current Quarter</option>
              <option value="previous-quarter">Previous Quarter</option>
              <option value="semester">Full Semester</option>
              <option value="school-year">School Year</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Classes</option>
              <option value="8A">Grade 8-A</option>
              <option value="8B">Grade 8-B</option>
              <option value="8C">Grade 8-C</option>
            </select>
          </div>
        </div>
        
        {/* Report Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {reportTypes.map(type => (
            <div
              key={type.id}
              onClick={() => setSelectedReportType(type.id)}
              className={`p-4 border-2 rounded-lg cursor-pointer transition duration-200 ${
                selectedReportType === type.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                <type.icon className={`h-6 w-6 ${
                  selectedReportType === type.id ? 'text-blue-600' : 'text-gray-400'
                }`} />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">{type.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleGenerateReport}
            className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            <FileText className="h-4 w-4" />
            <span>Generate Report</span>
          </button>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Recent Reports</h3>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <select className="border border-gray-300 rounded px-2 py-1 text-sm">
              <option>All Types</option>
              <option>Grade Summary</option>
              <option>Attendance</option>
              <option>Progress</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Report Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date Generated
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Size
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentReports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-gray-400 mr-3" />
                      <div className="text-sm font-medium text-gray-900">{report.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {report.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {new Date(report.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadge(report.status)}`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {report.size}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleViewReport(report.id)}
                        className="text-blue-600 hover:text-blue-900 p-1 rounded"
                        title="View Report"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDownloadReport(report.id)}
                        className="text-green-600 hover:text-green-900 p-1 rounded"
                        title="Download Report"
                      >
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Report Templates */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Report Templates</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button
            onClick={() => alert('Generating weekly progress report...')}
            className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition duration-200 text-left"
          >
            <Calendar className="h-6 w-6 text-blue-500 mb-2" />
            <h4 className="text-sm font-medium text-gray-900">Weekly Progress</h4>
            <p className="text-xs text-gray-600">Quick weekly summary</p>
          </button>
          
          <button
            onClick={() => alert('Generating parent conference report...')}
            className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition duration-200 text-left"
          >
            <Users className="h-6 w-6 text-green-500 mb-2" />
            <h4 className="text-sm font-medium text-gray-900">Parent Conference</h4>
            <p className="text-xs text-gray-600">Meeting preparation</p>
          </button>
          
          <button
            onClick={() => alert('Generating at-risk students report...')}
            className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition duration-200 text-left"
          >
            <TrendingUp className="h-6 w-6 text-orange-500 mb-2" />
            <h4 className="text-sm font-medium text-gray-900">At-Risk Students</h4>
            <p className="text-xs text-gray-600">Intervention planning</p>
          </button>
          
          <button
            onClick={() => alert('Generating class performance report...')}
            className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition duration-200 text-left"
          >
            <BarChart3 className="h-6 w-6 text-purple-500 mb-2" />
            <h4 className="text-sm font-medium text-gray-900">Class Performance</h4>
            <p className="text-xs text-gray-600">Overall analysis</p>
          </button>
        </div>
      </div>
    </div>
  );
}