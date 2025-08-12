import React, { useState } from 'react';
import { FileText, Download, Calendar, BarChart3, Users, TrendingUp, Filter, Eye, AlertTriangle } from 'lucide-react';

export function AdminSystemReports() {
  const [selectedReportType, setSelectedReportType] = useState('enrollment-report');
  const [selectedPeriod, setSelectedPeriod] = useState('current-semester');
  const [selectedFormat, setSelectedFormat] = useState('pdf');

  const reportTypes = [
    { id: 'enrollment-report', name: 'Enrollment Report', icon: Users, description: 'Student enrollment statistics and trends' },
    { id: 'academic-performance', name: 'Academic Performance Report', icon: BarChart3, description: 'School-wide academic performance analysis' },
    { id: 'attendance-summary', name: 'Attendance Summary', icon: Calendar, description: 'Comprehensive attendance statistics' },
    { id: 'teacher-performance', name: 'Teacher Performance Report', icon: TrendingUp, description: 'Faculty performance and evaluation data' },
    { id: 'financial-report', name: 'Financial Report', icon: FileText, description: 'Budget and financial analysis' },
    { id: 'system-usage', name: 'System Usage Report', icon: BarChart3, description: 'Platform usage and engagement metrics' }
  ];

  const recentReports = [
    {
      id: 1,
      name: 'Q2 2024 Enrollment Report',
      type: 'Enrollment',
      date: '2024-11-15',
      status: 'completed',
      size: '4.2 MB',
      downloads: 23
    },
    {
      id: 2,
      name: 'Academic Performance Analysis - Semester 1',
      type: 'Academic Performance',
      date: '2024-11-10',
      status: 'completed',
      size: '6.8 MB',
      downloads: 45
    },
    {
      id: 3,
      name: 'October 2024 Attendance Summary',
      type: 'Attendance',
      date: '2024-11-01',
      status: 'completed',
      size: '2.1 MB',
      downloads: 18
    },
    {
      id: 4,
      name: 'Teacher Performance Evaluation Q2',
      type: 'Teacher Performance',
      date: '2024-10-28',
      status: 'completed',
      size: '3.5 MB',
      downloads: 12
    },
    {
      id: 5,
      name: 'System Usage Analytics - October',
      type: 'System Usage',
      date: '2024-10-25',
      status: 'processing',
      size: '1.8 MB',
      downloads: 0
    }
  ];

  const systemMetrics = {
    totalReports: 156,
    thisMonth: 24,
    avgDownloads: 28,
    systemUptime: 99.8
  };

  const handleGenerateReport = () => {
    const reportType = reportTypes.find(r => r.id === selectedReportType);
    if (!reportType) return;
    
    const reportHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 900px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px; border-bottom: 2px solid #3b82f6; padding-bottom: 20px;">
          <h1 style="color: #1f2937; margin: 0;">${reportType.name}</h1>
          <p style="color: #6b7280; margin: 10px 0;">SJCSI Junior High School - System Report</p>
          <p style="color: #6b7280; margin: 5px 0;">Period: ${selectedPeriod} | Generated: ${new Date().toLocaleDateString()}</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 30px 0;">
          <div style="background: #dbeafe; padding: 20px; border-radius: 8px; text-align: center;">
            <h3 style="color: #1e40af; margin: 0 0 10px 0;">Total Students</h3>
            <p style="font-size: 2em; font-weight: bold; color: #1e40af; margin: 0;">1,247</p>
          </div>
          <div style="background: #dcfce7; padding: 20px; border-radius: 8px; text-align: center;">
            <h3 style="color: #166534; margin: 0 0 10px 0;">Active Teachers</h3>
            <p style="font-size: 2em; font-weight: bold; color: #166534; margin: 0;">45</p>
          </div>
          <div style="background: #fef3c7; padding: 20px; border-radius: 8px; text-align: center;">
            <h3 style="color: #92400e; margin: 0 0 10px 0;">System Uptime</h3>
            <p style="font-size: 2em; font-weight: bold; color: #92400e; margin: 0;">99.8%</p>
          </div>
          <div style="background: #fce7f3; padding: 20px; border-radius: 8px; text-align: center;">
            <h3 style="color: #be185d; margin: 0 0 10px 0;">Avg Performance</h3>
            <p style="font-size: 2em; font-weight: bold; color: #be185d; margin: 0;">86.7</p>
          </div>
        </div>
        
        <div style="margin: 30px 0;">
          <h3 style="color: #374151; border-bottom: 1px solid #d1d5db; padding-bottom: 10px;">Executive Summary</h3>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px;">
            <p style="color: #374151; line-height: 1.6; margin: 0 0 15px 0;">
              This comprehensive ${reportType.name.toLowerCase()} provides detailed insights into the current state of 
              SJCSI Junior High School's operations. The data presented covers the ${selectedPeriod} period and 
              includes key performance indicators, trends, and actionable recommendations.
            </p>
            <p style="color: #374151; line-height: 1.6; margin: 0;">
              ${reportType.description} Key findings indicate positive trends in student engagement and academic 
              performance, with areas for improvement identified in specific operational aspects.
            </p>
          </div>
        </div>
        
        <div style="margin: 30px 0;">
          <h3 style="color: #374151; border-bottom: 1px solid #d1d5db; padding-bottom: 10px;">Key Performance Indicators</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 20px 0;">
            <div style="background: #f0fdf4; padding: 20px; border-radius: 8px;">
              <h4 style="color: #166534; margin: 0 0 15px 0;">✓ Achievements</h4>
              <ul style="color: #166534; margin: 0; padding-left: 20px;">
                <li>Student enrollment increased by 8.5%</li>
                <li>Overall academic performance improved by 4.2%</li>
                <li>System uptime maintained at 99.8%</li>
                <li>Parent engagement increased by 15%</li>
              </ul>
            </div>
            <div style="background: #fef2f2; padding: 20px; border-radius: 8px;">
              <h4 style="color: #dc2626; margin: 0 0 15px 0;">⚠ Areas for Improvement</h4>
              <ul style="color: #dc2626; margin: 0; padding-left: 20px;">
                <li>Teacher-student ratio needs optimization</li>
                <li>Some classes showing attendance concerns</li>
                <li>Technology infrastructure upgrades needed</li>
                <li>Professional development programs expansion</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div style="margin: 30px 0;">
          <h3 style="color: #374151; border-bottom: 1px solid #d1d5db; padding-bottom: 10px;">Detailed Analysis</h3>
          <div style="background: #eff6ff; padding: 20px; border-radius: 8px;">
            <h4 style="color: #1e40af; margin: 0 0 15px 0;">Enrollment Trends</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
              <div style="text-align: center; background: white; padding: 15px; border-radius: 6px;">
                <div style="font-size: 1.5em; font-weight: bold; color: #1e40af;">Grade 8-A</div>
                <div style="color: #1e40af; font-size: 0.9em;">32 students</div>
              </div>
              <div style="text-align: center; background: white; padding: 15px; border-radius: 6px;">
                <div style="font-size: 1.5em; font-weight: bold; color: #1e40af;">Grade 8-B</div>
                <div style="color: #1e40af; font-size: 0.9em;">30 students</div>
              </div>
              <div style="text-align: center; background: white; padding: 15px; border-radius: 6px;">
                <div style="font-size: 1.5em; font-weight: bold; color: #1e40af;">Grade 8-C</div>
                <div style="color: #1e40af; font-size: 0.9em;">31 students</div>
              </div>
            </div>
          </div>
        </div>
        
        <div style="margin: 30px 0;">
          <h3 style="color: #374151; border-bottom: 1px solid #d1d5db; padding-bottom: 10px;">Recommendations</h3>
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px;">
            <ol style="color: #0369a1; margin: 0; padding-left: 20px; line-height: 1.8;">
              <li>Continue current enrollment strategies to maintain growth trajectory</li>
              <li>Implement targeted interventions for underperforming student groups</li>
              <li>Expand teacher professional development programs</li>
              <li>Upgrade technology infrastructure to support digital learning initiatives</li>
              <li>Enhance parent-school communication channels</li>
            </ol>
          </div>
        </div>
        
        <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 30px; text-align: center;">
          <p style="color: #6b7280; margin: 0 0 15px 0; font-size: 0.9em;">
            This report was generated by the LEARNTRACK System on ${new Date().toLocaleDateString()}
          </p>
          <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
            <button onclick="window.print()" style="background: #3b82f6; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer;">Print Report</button>
            <button onclick="alert('Downloading full report...')" style="background: #10b981; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer;">Download PDF</button>
            <button onclick="window.close()" style="background: #6b7280; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer;">Close</button>
          </div>
        </div>
      </div>
    `;
    
    const newWindow = window.open('', '_blank', 'width=1000,height=800,scrollbars=yes');
    if (newWindow) {
      newWindow.document.write(reportHtml);
      newWindow.document.title = `${reportType.name} - SJCSI`;
    }
  };

  const handleViewReport = (reportId: number) => {
    const report = recentReports.find(r => r.id === reportId);
    if (!report) return;
    
    const reportHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px; border-bottom: 2px solid #8b5cf6; padding-bottom: 20px;">
          <h1 style="color: #1f2937; margin: 0;">${report.name}</h1>
          <p style="color: #6b7280; margin: 10px 0;">Type: ${report.type}</p>
          <p style="color: #6b7280; margin: 5px 0;">Generated: ${new Date(report.date).toLocaleDateString()}</p>
          <p style="color: #6b7280; margin: 5px 0;">Downloads: ${report.downloads}</p>
        </div>
        
        <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin: 0 0 15px 0;">Report Overview</h3>
          <p style="color: #6b7280; line-height: 1.6;">
            This ${report.type.toLowerCase()} report provides comprehensive analysis and insights 
            based on data collected during the specified period. The report includes statistical 
            analysis, trend identification, and actionable recommendations for school administration.
          </p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 30px 0;">
          <div style="background: #dbeafe; padding: 20px; border-radius: 8px; text-align: center;">
            <h4 style="color: #1e40af; margin: 0 0 10px 0;">Data Points</h4>
            <p style="font-size: 1.8em; font-weight: bold; color: #1e40af; margin: 0;">2,847</p>
          </div>
          <div style="background: #dcfce7; padding: 20px; border-radius: 8px; text-align: center;">
            <h4 style="color: #166534; margin: 0 0 10px 0;">Accuracy Rate</h4>
            <p style="font-size: 1.8em; font-weight: bold; color: #166534; margin: 0;">99.2%</p>
          </div>
          <div style="background: #fef3c7; padding: 20px; border-radius: 8px; text-align: center;">
            <h4 style="color: #92400e; margin: 0 0 10px 0;">File Size</h4>
            <p style="font-size: 1.2em; font-weight: bold; color: #92400e; margin: 0;">${report.size}</p>
          </div>
        </div>
        
        <div style="margin: 30px 0;">
          <h3 style="color: #374151; border-bottom: 1px solid #d1d5db; padding-bottom: 10px;">Report Highlights</h3>
          <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 15px 0;">
            <h4 style="color: #166534; margin: 0 0 10px 0;">✓ Key Findings</h4>
            <ul style="color: #166534; margin: 0; padding-left: 20px;">
              <li>All major KPIs show positive trends</li>
              <li>Data quality and completeness at 99.2%</li>
              <li>Automated analysis completed successfully</li>
              <li>Recommendations generated based on current data</li>
            </ul>
          </div>
        </div>
        
        <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 30px; text-align: center;">
          <p style="color: #6b7280; margin: 0 0 15px 0; font-size: 0.9em;">
            Full report contains detailed charts, statistical analysis, and comprehensive recommendations.
          </p>
          <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
            <button onclick="alert('Downloading ${report.name}...')" style="background: #10b981; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Download Full Report</button>
            <button onclick="window.print()" style="background: #3b82f6; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Print Preview</button>
            <button onclick="window.close()" style="background: #6b7280; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Close</button>
          </div>
        </div>
      </div>
    `;
    
    const newWindow = window.open('', '_blank', 'width=900,height=700,scrollbars=yes');
    if (newWindow) {
      newWindow.document.write(reportHtml);
      newWindow.document.title = `${report.name} - Preview`;
    }
  };

  const handleDownloadReport = (reportId: number) => {
    const report = recentReports.find(r => r.id === reportId);
    if (!report) return;
    
    // Simulate PDF download
    const reportContent = `Report: ${report.name}\nType: ${report.type}\nGenerated: ${report.date}\nSize: ${report.size}\nDownloads: ${report.downloads}`;
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${report.name.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'processing':
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
          <h1 className="text-2xl font-bold text-gray-900">System Reports</h1>
          <p className="text-gray-600">Generate and manage comprehensive system reports and analytics.</p>
        </div>
        <button
          onClick={handleGenerateReport}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          <FileText className="h-4 w-4" />
          <span>Generate Report</span>
        </button>
      </div>

      {/* System Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Reports</p>
              <p className="text-2xl font-bold text-blue-600">{systemMetrics.totalReports}</p>
            </div>
            <FileText className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">This Month</p>
              <p className="text-2xl font-bold text-green-600">{systemMetrics.thisMonth}</p>
            </div>
            <Calendar className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Downloads</p>
              <p className="text-2xl font-bold text-purple-600">{systemMetrics.avgDownloads}</p>
            </div>
            <TrendingUp className="h-8 w-8 text-purple-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">System Uptime</p>
              <p className="text-2xl font-bold text-orange-600">{systemMetrics.systemUptime}%</p>
            </div>
            <BarChart3 className="h-8 w-8 text-orange-500" />
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
              <option value="current-semester">Current Semester</option>
              <option value="previous-semester">Previous Semester</option>
              <option value="current-year">Current Year</option>
              <option value="previous-year">Previous Year</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
            <select
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="pdf">PDF</option>
              <option value="excel">Excel</option>
              <option value="csv">CSV</option>
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
              <div className="flex items-start space-x-3">
                <type.icon className={`h-6 w-6 mt-1 ${
                  selectedReportType === type.id ? 'text-blue-600' : 'text-gray-400'
                }`} />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">{type.name}</h4>
                  <p className="text-xs text-gray-600 mt-1">{type.description}</p>
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
              <option>Enrollment</option>
              <option>Academic Performance</option>
              <option>Attendance</option>
              <option>Financial</option>
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
                  Downloads
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {report.downloads}
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

      {/* System Health Alert */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <BarChart3 className="h-6 w-6 text-green-500 mt-0.5" />
          <div>
            <h3 className="text-lg font-medium text-green-900">System Health Status</h3>
            <p className="text-green-700 mt-1">
              All reporting systems are operational. System uptime is at {systemMetrics.systemUptime}% 
              with all automated reports generating successfully.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}