import React from 'react';
import { Users, BookOpen, Calendar, AlertTriangle, TrendingUp, Clock } from 'lucide-react';
import { NavigationItem } from '../Dashboard';
import { StatCard } from '../common/StatCard';
import { ClassPerformanceChart } from '../charts/ClassPerformanceChart';
import { AlertsList } from '../common/AlertsList';
import { TeacherStudents } from '../pages/TeacherStudents';
import { TeacherGrades } from '../pages/TeacherGrades';
import { TeacherAttendance } from '../pages/TeacherAttendance';
import { TeacherReports } from '../pages/TeacherReports';
import { TeacherAlerts } from '../pages/TeacherAlerts';

interface TeacherDashboardProps {
  activeTab: NavigationItem;
}

export function TeacherDashboard({ activeTab }: TeacherDashboardProps) {
  if (activeTab === 'overview') {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, Ms. Johnson!</h1>
          <p className="text-gray-600">Here's your teaching dashboard overview.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Students"
            value="124"
            icon={Users}
            color="blue"
            subtitle="Across 4 classes"
          />
          <StatCard
            title="Class Average"
            value="87.5"
            icon={TrendingUp}
            color="green"
            subtitle="Above target"
          />
          <StatCard
            title="At-Risk Students"
            value="8"
            icon={AlertTriangle}
            color="red"
            subtitle="Need attention"
          />
          <StatCard
            title="Assignments Due"
            value="15"
            icon={Clock}
            color="orange"
            subtitle="To be graded"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Class Performance</h3>
            <ClassPerformanceChart />
          </div>
          <AlertsList />
        </div>
      </div>
    );
  }

  if (activeTab === 'students') {
    return <TeacherStudents />;
  }

  if (activeTab === 'grades') {
    return <TeacherGrades />;
  }

  if (activeTab === 'attendance') {
    return <TeacherAttendance />;
  }

  if (activeTab === 'reports') {
    return <TeacherReports />;
  }

  if (activeTab === 'alerts') {
    return <TeacherAlerts />;
  }

  return (
    <div className="text-center py-12">
      <h2 className="text-xl text-gray-600">Select a section from the sidebar</h2>
    </div>
  );
}