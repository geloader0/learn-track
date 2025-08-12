import React, { useState } from 'react';
import { BookOpen, Download, Filter, Search, Eye } from 'lucide-react';

export function StudentGrades() {
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
      status: 'Excellent'
    },
    {
      subject: 'English',
      teacher: 'Mr. Thompson',
      q1: { written: 85, performance: 87, quarterly: 86 },
      q2: { written: 87, performance: 89, quarterly: 88 },
      q3: { written: 82, performance: 85, quarterly: 84 },
      q4: { written: 0, performance: 0, quarterly: 0 },
      final: 86,
      status: 'Good'
    },
    {
      subject: 'Science',
      teacher: 'Dr. Martinez',
      q1: { written: 90, performance: 92, quarterly: 91 },
      q2: { written: 94, performance: 96, quarterly: 95 },
      q3: { written: 88, performance: 90, quarterly: 89 },
      q4: { written: 0, performance: 0, quarterly: 0 },
      final: 92,
      status: 'Excellent'
    },
    {
      subject: 'Filipino',
      teacher: 'Mrs. Santos',
      q1: { written: 82, performance: 84, quarterly: 83 },
      q2: { written: 85, performance: 87, quarterly: 86 },
      q3: { written: 80, performance: 82, quarterly: 81 },
      q4: { written: 0, performance: 0, quarterly: 0 },
      final: 84,
      status: 'Good'
    },
    {
      subject: 'Social Studies',
      teacher: 'Mr. Garcia',
      q1: { written: 87, performance: 89, quarterly: 88 },
      q2: { written: 89, performance: 91, quarterly: 90 },
      q3: { written: 85, performance: 87, quarterly: 86 },
      q4: { written: 0, performance: 0, quarterly: 0 },
      final: 88,
      status: 'Good'
    },
    {
      subject: 'Physical Education',
      teacher: 'Coach Williams',
      q1: { written: 95, performance: 97, quarterly: 96 },
      q2: { written: 96, performance: 98, quarterly: 97 },
      q3: { written: 94, performance: 96, quarterly: 95 },
      q4: { written: 0, performance: 0, quarterly: 0 },
      final: 96,
      status: 'Excellent'
    }
  ];

  const filteredGrades = grades.filter(grade =>
    grade.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    grade.teacher.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDownloadReport = () => {
    alert('Grade report download initiated. This would generate a PDF report.');
  };

  const handleViewDetails = (subject: string) => {
    alert(`Viewing detailed breakdown for ${subject}. This would open a detailed view with all assignments, quizzes, and exams.`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Grades</h1>
          <p className="text-gray-600">Track your academic performance across all subjects.</p>
        </div>
        <button
          onClick={handleDownloadReport}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          <Download className="h-4 w-4" />
          <span>Download Report</span>
        </button>
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                    {grade.q1.quarterly}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                    {grade.q2.quarterly}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
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