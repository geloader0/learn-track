import React from 'react';
import { BookOpen, Calendar, TrendingUp, AlertTriangle } from 'lucide-react';
import { NavigationItem } from '../Dashboard';
import { StatCard } from '../common/StatCard';
import { GradeChart } from '../charts/GradeChart';
import { AttendanceChart } from '../charts/AttendanceChart';

interface ParentDashboardProps {
  activeTab: NavigationItem;
}

export function ParentDashboard({ activeTab }: ParentDashboardProps) {
  if (activeTab === 'overview') {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome, Mr. Smith!</h1>
          <p className="text-gray-600">Here's your child's academic progress overview.</p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-medium text-blue-900 mb-2">Student: John Smith</h3>
          <p className="text-blue-700">Grade 8 - Section A | Student ID: STU001</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Overall GPA"
            value="3.85"
            icon={BookOpen}
            color="blue"
            subtitle="Above average"
          />
          <StatCard
            title="Attendance Rate"
            value="94%"
            icon={Calendar}
            color="green"
            subtitle="Excellent"
          />
          <StatCard
            title="Progress Trend"
            value="+5%"
            icon={TrendingUp}
            color="green"
            subtitle="Improving"
          />
          <StatCard
            title="Alerts"
            value="1"
            icon={AlertTriangle}
            color="orange"
            subtitle="Needs attention"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Academic Performance</h3>
            <GradeChart />
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Attendance Overview</h3>
            <AttendanceChart />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Notifications</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-900">Math Assignment Overdue</p>
                <p className="text-sm text-gray-600">Assignment due date was yesterday. Please check with John.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
              <TrendingUp className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-900">Improved Science Grade</p>
                <p className="text-sm text-gray-600">John scored 94 on the latest Science test - great improvement!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center py-12">
      <h2 className="text-xl text-gray-600">Select a section from the sidebar</h2>
    </div>
  );
}