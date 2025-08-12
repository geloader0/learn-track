import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, Calendar, Target, AlertTriangle, Download, Filter, RefreshCw } from 'lucide-react';
import { StatCard } from '../common/StatCard';

export function AdminAnalytics() {
  const [selectedPeriod, setSelectedPeriod] = useState('current-semester');
  const [selectedMetric, setSelectedMetric] = useState('all');
  const [refreshing, setRefreshing] = useState(false);

  const analyticsData = {
    overview: {
      totalStudents: 1247,
      totalTeachers: 45,
      avgPerformance: 86.7,
      systemUptime: 99.8,
      parentEngagement: 78.5,
      attendanceRate: 94.2
    },
    trends: {
      enrollment: { current: 1247, previous: 1149, change: 8.5 },
      performance: { current: 86.7, previous: 83.2, change: 4.2 },
      attendance: { current: 94.2, previous: 91.8, change: 2.6 },
      engagement: { current: 78.5, previous: 72.1, change: 8.9 }
    },
    classPerformance: [
      { class: 'Grade 8-A', students: 32, avgGrade: 88.5, attendance: 95.2, trend: 'up' },
      { class: 'Grade 8-B', students: 30, avgGrade: 85.8, attendance: 93.8, trend: 'stable' },
      { class: 'Grade 8-C', students: 31, avgGrade: 86.2, attendance: 94.1, trend: 'up' }
    ],
    subjectPerformance: [
      { subject: 'Mathematics', avgGrade: 84.2, improvement: 3.1, status: 'improving' },
      { subject: 'English', avgGrade: 87.5, improvement: 1.8, status: 'stable' },
      { subject: 'Science', avgGrade: 89.1, improvement: 4.5, status: 'improving' },
      { subject: 'Filipino', avgGrade: 83.7, improvement: -0.5, status: 'declining' },
      { subject: 'Social Studies', avgGrade: 86.8, improvement: 2.3, status: 'improving' },
      { subject: 'Physical Education', avgGrade: 92.4, improvement: 1.2, status: 'stable' }
    ],
    teacherMetrics: [
      { name: 'Ms. Johnson', subject: 'Mathematics', classAvg: 88.5, studentSatisfaction: 4.6, efficiency: 92 },
      { name: 'Mr. Thompson', subject: 'English', classAvg: 87.2, studentSatisfaction: 4.4, efficiency: 89 },
      { name: 'Dr. Martinez', subject: 'Science', classAvg: 89.8, studentSatisfaction: 4.8, efficiency: 95 },
      { name: 'Mrs. Santos', subject: 'Filipino', classAvg: 83.7, studentSatisfaction: 4.2, efficiency: 87 }
    ]
  };

  const handleRefreshData = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const handleExportAnalytics = () => {
    const csvContent = [
      ['Metric', 'Current Value', 'Previous Value', 'Change %'],
      ['Total Students', analyticsData.overview.totalStudents, '1149', '8.5%'],
      ['Average Performance', analyticsData.overview.avgPerformance, '83.2', '4.2%'],
      ['Attendance Rate', analyticsData.overview.attendanceRate, '91.8%', '2.6%'],
      ['Parent Engagement', analyticsData.overview.parentEngagement, '72.1%', '8.9%']
    ].map(row => row.join(',')).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `analytics_export_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
      case 'improving':
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'down':
      case 'declining':
        return <TrendingUp className="h-4 w-4 text-red-500 transform rotate-180" />;
      default:
        return <div className="h-4 w-4 bg-blue-500 rounded-full"></div>;
    }
  };

  const getChangeColor = (change: number) => {
    if (change > 0) return 'text-green-600';
    if (change < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  const getPerformanceColor = (grade: number) => {
    if (grade >= 90) return 'text-green-600';
    if (grade >= 85) return 'text-blue-600';
    if (grade >= 80) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">System Analytics</h1>
          <p className="text-gray-600">Comprehensive analytics and insights for school performance.</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={handleRefreshData}
            disabled={refreshing}
            className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-200 disabled:opacity-50"
          >
            <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
          <button
            onClick={handleExportAnalytics}
            className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200"
          >
            <Download className="h-4 w-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-gray-400" />
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="current-semester">Current Semester</option>
              <option value="previous-semester">Previous Semester</option>
              <option value="current-year">Current Year</option>
              <option value="last-30-days">Last 30 Days</option>
              <option value="last-90-days">Last 90 Days</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <select
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Metrics</option>
              <option value="academic">Academic Performance</option>
              <option value="attendance">Attendance</option>
              <option value="engagement">Engagement</option>
              <option value="system">System Usage</option>
            </select>
          </div>
        </div>
      </div>

      {/* Key Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <StatCard
          title="Total Students"
          value={analyticsData.overview.totalStudents.toString()}
          icon={Users}
          color="blue"
          subtitle={`+${analyticsData.trends.enrollment.change}% from last period`}
        />
        <StatCard
          title="Total Teachers"
          value={analyticsData.overview.totalTeachers.toString()}
          icon={Users}
          color="green"
          subtitle="Active faculty"
        />
        <StatCard
          title="Avg Performance"
          value={analyticsData.overview.avgPerformance.toString()}
          icon={BarChart3}
          color="purple"
          subtitle={`+${analyticsData.trends.performance.change}% improvement`}
        />
        <StatCard
          title="Attendance Rate"
          value={`${analyticsData.overview.attendanceRate}%`}
          icon={Calendar}
          color="orange"
          subtitle={`+${analyticsData.trends.attendance.change}% from last period`}
        />
        <StatCard
          title="Parent Engagement"
          value={`${analyticsData.overview.parentEngagement}%`}
          icon={Target}
          color="red"
          subtitle={`+${analyticsData.trends.engagement.change}% increase`}
        />
        <StatCard
          title="System Uptime"
          value={`${analyticsData.overview.systemUptime}%`}
          icon={TrendingUp}
          color="green"
          subtitle="Excellent reliability"
        />
      </div>

      {/* Performance Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Performance Trends</h3>
          <div className="space-y-4">
            {Object.entries(analyticsData.trends).map(([key, data]) => (
              <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  {getTrendIcon(data.change > 0 ? 'up' : data.change < 0 ? 'down' : 'stable')}
                  <div>
                    <div className="text-sm font-medium text-gray-900 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    <div className="text-xs text-gray-600">Current: {data.current}{key === 'enrollment' ? '' : '%'}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-sm font-bold ${getChangeColor(data.change)}`}>
                    {data.change > 0 ? '+' : ''}{data.change}%
                  </div>
                  <div className="text-xs text-gray-500">vs previous</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Class Performance Analysis</h3>
          <div className="space-y-4">
            {analyticsData.classPerformance.map((cls, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  {getTrendIcon(cls.trend)}
                  <div>
                    <div className="text-sm font-medium text-gray-900">{cls.class}</div>
                    <div className="text-xs text-gray-600">{cls.students} students</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-sm font-bold ${getPerformanceColor(cls.avgGrade)}`}>
                    {cls.avgGrade}
                  </div>
                  <div className="text-xs text-gray-500">{cls.attendance}% attendance</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subject Performance */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Subject Performance Analysis</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Average Grade
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Improvement
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trend
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {analyticsData.subjectPerformance.map((subject, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {subject.subject}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm font-bold ${getPerformanceColor(subject.avgGrade)}`}>
                      {subject.avgGrade}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm font-medium ${getChangeColor(subject.improvement)}`}>
                      {subject.improvement > 0 ? '+' : ''}{subject.improvement}%
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      subject.status === 'improving' ? 'bg-green-100 text-green-800' :
                      subject.status === 'declining' ? 'bg-red-100 text-red-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {subject.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getTrendIcon(subject.status)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Teacher Performance Metrics */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Teacher Performance Metrics</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Teacher
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Class Average
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student Satisfaction
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Efficiency Score
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {analyticsData.teacherMetrics.map((teacher, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {teacher.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {teacher.subject}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm font-bold ${getPerformanceColor(teacher.classAvg)}`}>
                      {teacher.classAvg}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900">{teacher.studentSatisfaction}/5.0</span>
                      <div className="ml-2 flex">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-2 w-2 rounded-full mr-1 ${
                              i < Math.floor(teacher.studentSatisfaction) ? 'bg-yellow-400' : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${teacher.efficiency}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{teacher.efficiency}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Insights and Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Key Insights</h3>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="flex items-start space-x-3">
                <TrendingUp className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-green-900">Strong Performance Growth</p>
                  <p className="text-sm text-green-700">Overall academic performance has improved by 4.2% this semester.</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start space-x-3">
                <Users className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-blue-900">Increased Enrollment</p>
                  <p className="text-sm text-blue-700">Student enrollment has grown by 8.5% compared to last year.</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <div className="flex items-start space-x-3">
                <Target className="h-5 w-5 text-orange-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-orange-900">Parent Engagement Rising</p>
                  <p className="text-sm text-orange-700">Parent engagement has increased by 8.9% this semester.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recommendations</h3>
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-yellow-900">Focus on Filipino Subject</p>
                  <p className="text-sm text-yellow-700">Filipino shows a slight decline. Consider additional support programs.</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <div className="flex items-start space-x-3">
                <BarChart3 className="h-5 w-5 text-purple-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-purple-900">Expand Successful Programs</p>
                  <p className="text-sm text-purple-700">Science and Mathematics show strong improvement. Scale successful teaching methods.</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-indigo-50 rounded-lg">
              <div className="flex items-start space-x-3">
                <TrendingUp className="h-5 w-5 text-indigo-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-indigo-900">Teacher Development</p>
                  <p className="text-sm text-indigo-700">Continue professional development programs to maintain high teaching standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}