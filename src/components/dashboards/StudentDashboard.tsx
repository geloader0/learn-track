import React from 'react';
import { BookOpen, Calendar, TrendingUp, Award, Clock, Target } from 'lucide-react';
import { NavigationItem } from '../Dashboard';
import { StatCard } from '../common/StatCard';
import { GradeChart } from '../charts/GradeChart';
import { AttendanceChart } from '../charts/AttendanceChart';
import { RecentGrades } from '../common/RecentGrades';
import { UpcomingEvents } from '../common/UpcomingEvents';
import { StudentGrades } from '../pages/StudentGrades';
import { StudentAttendance } from '../pages/StudentAttendance';
import { StudentPerformance } from '../pages/StudentPerformance';

interface StudentDashboardProps {
  activeTab: NavigationItem;
}

export function StudentDashboard({ activeTab }: StudentDashboardProps) {
  if (activeTab === 'overview') {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, John!</h1>
          <p className="text-gray-600">Here's your academic overview for this semester.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Overall GPA"
            value="3.85"
            icon={Award}
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
            title="Assignments Due"
            value="3"
            icon={Clock}
            color="orange"
            subtitle="This week"
          />
          <StatCard
            title="Class Rank"
            value="12/45"
            icon={Target}
            color="purple"
            subtitle="Top 27%"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Grade Trends</h3>
            <GradeChart />
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Attendance Overview</h3>
            <AttendanceChart />
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentGrades />
          <UpcomingEvents />
        </div>
      </div>
    );
  }

  if (activeTab === 'grades') {
    return <StudentGrades />;
  }

  if (activeTab === 'attendance') {
    return <StudentAttendance />;
  }

  if (activeTab === 'performance') {
    return <StudentPerformance />;
  }

  return (
    <div className="text-center py-12">
      <h2 className="text-xl text-gray-600">Select a section from the sidebar</h2>
    </div>
  );
}