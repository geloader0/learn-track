import React, { useState } from 'react';
import { BookOpen, Download, Filter, Search, Eye, TrendingUp, TrendingDown, Award } from 'lucide-react';

export function ParentGrades() {
  const [selectedQuarter, setSelectedQuarter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const grades = [
    {
      subject: 'Mathematics',
      teacher: 'Ms. Rodriguez',
      q1: { written: 88, performance: 90, quarterly: 89 },
      q2: { written: 92, performance: 94, quarterly: 93 },
      q3: { written: 85, performance: 88, quarterly: 87 },
      q4: { written: 0, performance: 0, quarterly: 0 },
      final: 90,
      status: 'Excellent',
      trend: 'up'
    },
    {
      subject: 'English',
      teacher: 'Mr. Thompson',
      q1: { written: 85, performance: 87, quarterly: 86 },
      q2: { written: 87, performance: 89, quarterly: 88 },
      q3: { written: 82, performance: 85, quarterly: 84 },
      q4: { written: 0, performance: 0, quarterly: 0 },
      final: 86,
      status: 'Good',
      trend: 'stable'
    },
    {
      subject: 'Science',
      teacher: 'Dr. Martinez',
      q1: { written: 90, performance: 92, quarterly: 91 },
      q2: { written: 94, performance: 96, quarterly: 95 },
      q3: { written: 88, performance: 90, quarterly: 89 },
      q4: { written: 0, performance: 0, quarterly: 0 },
      final: 92,
      status: 'Excellent',
      trend: 'up'
    },
    {
      subject: 'Filipino',
      teacher: 'Mrs. Santos',
      q1: { written: 82, performance: 84, quarterly: 83 },
      q2: { written: 85, performance: 87, quarterly: 86 },
      q3: { written: 80, performance: 82, quarterly: 81 },
      q4: { written: 0, performance: 0, quarterly: 0 },
      final: 84,
      status: 'Good',
      trend: 'up'
    },
    {
      subject: 'Social Studies',
      teacher: 'Mr. Garcia',
      q1: { written: 87, performance: 89, quarterly: 88 },
      q2: { written: 89, performance: 91, quarterly: 90 },
      q3: { written: 85, performance: 87, quarterly: 86 },
      q4: { written: 0, performance: 0, quarterly: 0 },
      final: 88,
      status: 'Good',
      trend: 'stable'
    },
    {
      subject: 'Physical Education',
      teacher: 'Coach Williams',
      q1: { written: 95, performance: 97, quarterly: 96 },
      q2: { written: 96, performance: 98, quarterly: 97 },
      q3: { written: 94, performance: 96, quarterly: 95 },
      q4: { written: 0, performance: 0, quarterly: 0 },
      final: 96,
      status: 'Excellent',
      trend: 'stable'
    }
  ];

  const filteredGrades = grades.filter(grade =>
    grade.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    grade.teacher.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDownloadReport = () => {
    const csvContent = [
      ['Subject', 'Teacher', 'Q1', 'Q2', 'Q3', 'Final Grade', 'Status'],
      ...filteredGrades.map(grade => [
        grade.subject,
        grade.teacher,
        grade.q1.quarterly,
        grade.q2.quarterly,
        grade.q3.quarterly || 'N/A',
        grade.final,
        grade.status
      ])
    ].map(row => row.join(',')).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `john_smith_grades_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const handleViewDetails = (subject: string) => {
    const grade = grades.find(g => g.subject === subject);
    if (!grade) return;
    
    const detailsHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1f2937; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
          ${subject} - Detailed Grade Report
        </h2>
        <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #374151;"><strong>Student:</strong> John Smith</p>
          <p style="margin: 5px 0 0 0; color: #374151;"><strong>Teacher:</strong> ${grade.teacher}</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 30px 0;">
          <div style="background: #dbeafe; padding: 20px; border-radius: 8px; text-align: center;">
            <h3 style="color: #1e40af; margin: 0 0 10px 0;">1st Quarter</h3>
            <p style="font-size: 2em; font-weight: bold; color: #1e40af; margin: 0;">${grade.q1.quarterly}</p>
            <p style="color: #1e40af; margin: 5px 0 0 0; font-size: 0.9em;">W: ${grade.q1.written} | P: ${grade.q1.performance}</p>
          </div>
          <div style="background: #dcfce7; padding: 20px; border-radius: 8px; text-align: center;">
            <h3 style="color: #166534; margin: 0 0 10px 0;">2nd Quarter</h3>
            <p style="font-size: 2em; font-weight: bold; color: #166534; margin: 0;">${grade.q2.quarterly}</p>
            <p style="color: #166534; margin: 5px 0 0 0; font-size: 0.9em;">W: ${grade.q2.written} | P: ${grade.q2.performance}</p>
          </div>
          <div style="background: #fef3c7; padding: 20px; border-radius: 8px; text-align: center;">
            <h3 style="color: #92400e; margin: 0 0 10px 0;">3rd Quarter</h3>
            <p style="font-size: 2em; font-weight: bold; color: #92400e; margin: 0;">${grade.q3.quarterly || '--'}</p>
            <p style="color: #92400e; margin: 5px 0 0 0; font-size: 0.9em;">W: ${grade.q3.written || '--'} | P: ${grade.q3.performance || '--'}</p>
          </div>
          <div style="background: #fce7f3; padding: 20px; border-radius: 8px; text-align: center;">
            <h3 style="color: #be185d; margin: 0 0 10px 0;">Final Grade</h3>
            <p style="font-size: 2em; font-weight: bold; color: #be185d; margin: 0;">${grade.final}</p>
            <p style="color: #be185d; margin: 5px 0 0 0; font-size: 0.9em;">${grade.status}</p>
          </div>
        </div>
        
        <div style="margin: 30px 0;">
          <h3 style="color: #374151; border-bottom: 1px solid #d1d5db; padding-bottom: 10px;">Performance Analysis</h3>
          <div style="background: ${grade.trend === 'up' ? '#f0fdf4' : grade.trend === 'down' ? '#fef2f2' : '#f3f4f6'}; padding: 20px; border-radius: 8px;">
            <div style="display: flex; align-items: center; margin-bottom: 15px;">
              <span style="font-size: 1.5em; margin-right: 10px;">
                ${grade.trend === 'up' ? '📈' : grade.trend === 'down' ? '📉' : '➡️'}
              </span>
              <h4 style="margin: 0; color: ${grade.trend === 'up' ? '#166534' : grade.trend === 'down' ? '#dc2626' : '#374151'};">
                ${grade.trend === 'up' ? 'Improving Performance' : grade.trend === 'down' ? 'Declining Performance' : 'Stable Performance'}
              </h4>
            </div>
            <p style="color: ${grade.trend === 'up' ? '#166534' : grade.trend === 'down' ? '#dc2626' : '#374151'}; margin: 0;">
              ${grade.trend === 'up' ? 'John is showing consistent improvement in this subject. Keep up the good work!' : 
                grade.trend === 'down' ? 'There has been a slight decline in performance. Consider additional support or study time.' : 
                'John is maintaining steady performance in this subject.'}
            </p>
          </div>
        </div>
        
        <div style="margin: 30px 0;">
          <h3 style="color: #374151; border-bottom: 1px solid #d1d5db; padding-bottom: 10px;">Recent Assignments</h3>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px;">
            <div style="display: grid; gap: 10px;">
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background: white; border-radius: 6px;">
                <span style="color: #374151;">Quiz 2 - Geometry</span>
                <span style="color: #10b981; font-weight: bold;">92/100</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background: white; border-radius: 6px;">
                <span style="color: #374151;">Project Presentation</span>
                <span style="color: #10b981; font-weight: bold;">95/100</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background: white; border-radius: 6px;">
                <span style="color: #374151;">Midterm Exam</span>
                <span style="color: #3b82f6; font-weight: bold;">88/100</span>
              </div>
            </div>
          </div>
        </div>
        
        <div style="background: #eff6ff; padding: 20px; border-radius: 8px; margin: 30px 0;">
          <h4 style="color: #1e40af; margin: 0 0 10px 0;">Teacher's Comments</h4>
          <p style="color: #1e40af; margin: 0; font-style: italic;">
            "John has shown excellent progress this quarter. His problem-solving skills have improved significantly, 
            and he actively participates in class discussions. Keep up the great work!"
          </p>
          <p style="color: #1e40af; margin: 10px 0 0 0; font-size: 0.9em;">
            - ${grade.teacher}
          </p>
        </div>
        
        <div style="text-align: center; margin-top: 30px;">
          <button onclick="window.print()" style="background: #3b82f6; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; margin-right: 10px;">Print Report</button>
          <button onclick="window.close()" style="background: #6b7280; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer;">Close</button>
        </div>
      </div>
    `;
    
    const newWindow = window.open('', '_blank', 'width=800,height=700,scrollbars=yes');
    if (newWindow) {
      newWindow.document.write(detailsHtml);
      newWindow.document.title = `${subject} - Grade Details`;
    }
  };

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

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">John's Grades</h1>
          <p className="text-gray-600">Track your child's academic performance across all subjects.</p>
        </div>
        <button
          onClick={handleDownloadReport}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          <Download className="h-4 w-4" />
          <span>Download Report</span>
        </button>
      </div>

      {/* Student Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="text-lg font-medium text-blue-900 mb-2">Student Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-blue-700">
          <p><strong>Name:</strong> John Smith</p>
          <p><strong>Grade & Section:</strong> Grade 8-A</p>
          <p><strong>Student ID:</strong> STU001</p>
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
                placeholder="Search subjects or teachers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <select
              value={selectedQuarter}
              onChange={(e) => setSelectedQuarter(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Quarters</option>
              <option value="q1">1st Quarter</option>
              <option value="q2">2nd Quarter</option>
              <option value="q3">3rd Quarter</option>
              <option value="q4">4th Quarter</option>
            </select>
          </div>
        </div>
      </div>

      {/* Overall Performance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">3.85</div>
            <div className="text-sm text-gray-600">Overall GPA</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">89.2</div>
            <div className="text-sm text-gray-600">Average Grade</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">12/45</div>
            <div className="text-sm text-gray-600">Class Rank</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">4/6</div>
            <div className="text-sm text-gray-600">Excellent Subjects</div>
          </div>
        </div>
      </div>

      {/* Detailed Grades Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Current Semester - Grade 8</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Teacher
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  1st Quarter
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  2nd Quarter
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  3rd Quarter
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Final Grade
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredGrades.map((grade) => (
                <tr key={grade.subject} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <BookOpen className="h-5 w-5 text-gray-400 mr-3" />
                      <div className="text-sm font-medium text-gray-900">{grade.subject}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {grade.teacher}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-900">{grade.q1.quarterly}</span>
                      {getTrendIcon(grade.trend)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {grade.q2.quarterly}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {grade.q3.quarterly || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                    {grade.final}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        grade.status === 'Excellent'
                          ? 'bg-green-100 text-green-800'
                          : grade.status === 'Good'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {grade.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleViewDetails(grade.subject)}
                      className="text-blue-600 hover:text-blue-900 flex items-center space-x-1"
                    >
                      <Eye className="h-4 w-4" />
                      <span>Details</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Grade Breakdown Legend */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Grading System</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">90-100</div>
            <div className="text-sm text-green-700">Excellent</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">85-89</div>
            <div className="text-sm text-blue-700">Very Good</div>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">80-84</div>
            <div className="text-sm text-yellow-700">Good</div>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <div className="text-2xl font-bold text-red-600">75-79</div>
            <div className="text-sm text-red-700">Satisfactory</div>
          </div>
        </div>
      </div>
    </div>
  );
}