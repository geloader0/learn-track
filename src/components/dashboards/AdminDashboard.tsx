import React from 'react';
import { Users, GraduationCap, TrendingUp, AlertTriangle, Settings, FileText } from 'lucide-react';
import { NavigationItem } from '../Dashboard';
import { StatCard } from '../common/StatCard';
import { SystemPerformanceChart } from '../charts/SystemPerformanceChart';
import { AdminUserManagement } from '../pages/AdminUserManagement';
import { AdminStudents } from '../pages/AdminStudents';
import { AdminSystemReports } from '../pages/AdminSystemReports';
import { AdminAnalytics } from '../pages/AdminAnalytics';
import { AdminSettings } from '../pages/AdminSettings';
import { AdminTeachers } from '../pages/AdminTeachers';

interface AdminDashboardProps {
  activeTab: NavigationItem;
}

export function AdminDashboard({ activeTab }: AdminDashboardProps) {
  if (activeTab === 'overview') {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">System Overview</h1>
          <p className="text-gray-600">SJCSI Junior High School - Administrative Dashboard</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Students"
            value="1,247"
            icon={GraduationCap}
            color="blue"
            subtitle="Active enrollment"
          />
          <StatCard
            title="Total Teachers"
            value="45"
            icon={Users}
            color="green"
            subtitle="Faculty members"
          />
          <StatCard
            title="System Alerts"
            value="12"
            icon={AlertTriangle}
            color="red"
            subtitle="Require attention"
          />
          <StatCard
            title="School Average"
            value="86.7"
            icon={TrendingUp}
            color="purple"
            subtitle="Overall performance"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">School Performance Trends</h3>
            <SystemPerformanceChart />
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-200">
                <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">User Management</div>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-200">
                <FileText className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">Generate Reports</div>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-200">
                <Settings className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">System Settings</div>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-200">
                <AlertTriangle className="h-6 w-6 text-red-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">View Alerts</div>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Recent System Activity</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {[
              {
                action: 'New student registered',
                user: 'Maria Santos',
                time: '2 hours ago',
                type: 'success'
              },
              {
                action: 'Grade report generated',
                user: 'Ms. Johnson',
                time: '4 hours ago',
                type: 'info'
              },
              {
                action: 'System backup completed',
                user: 'System',
                time: '6 hours ago',
                type: 'success'
              },
              {
                action: 'Failed login attempt detected',
                user: 'Unknown',
                time: '8 hours ago',
                type: 'warning'
              },
            ].map((activity, index) => (
              <div key={index} className="px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      activity.type === 'success'
                        ? 'bg-green-500'
                        : activity.type === 'warning'
                        ? 'bg-yellow-500'
                        : 'bg-blue-500'
                    }`}
                  ></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-600">By {activity.user}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-500">{activity.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (activeTab === 'users') {
    return <AdminUserManagement />;
  }

  if (activeTab === 'students') {
    return <AdminStudents />;
  }

  if (activeTab === 'reports') {
    return <AdminSystemReports />;
  }

  if (activeTab === 'performance') {
    return <AdminAnalytics />;
  }

  if (activeTab === 'settings') {
    return <AdminSettings />;
  }

  if (activeTab === 'teachers') {
    return <AdminTeachers />;
  }

  return (
    <div className="text-center py-12">
      <h2 className="text-xl text-gray-600">Select a section from the sidebar</h2>
    </div>
  );
}