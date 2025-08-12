import React, { useState } from 'react';
import { Sidebar } from './layout/Sidebar';
import { Header } from './layout/Header';
import { StudentDashboard } from './dashboards/StudentDashboard';
import { TeacherDashboard } from './dashboards/TeacherDashboard';
import { ParentDashboard } from './dashboards/ParentDashboard';
import { AdminDashboard } from './dashboards/AdminDashboard';
import { useUser } from '../context/UserContext';

export type NavigationItem = 
  | 'overview'
  | 'grades'
  | 'attendance'
  | 'performance'
  | 'students'
  | 'classes'
  | 'reports'
  | 'alerts'
  | 'settings'
  | 'users';

export function Dashboard() {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState<NavigationItem>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!user) return null;

  const renderDashboard = () => {
    switch (user.role) {
      case 'student':
        return <StudentDashboard activeTab={activeTab} />;
      case 'teacher':
        return <TeacherDashboard activeTab={activeTab} />;
      case 'parent':
        return <ParentDashboard activeTab={activeTab} />;
      case 'administrator':
        return <AdminDashboard activeTab={activeTab} />;
      default:
        return <div>Unknown role</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        userRole={user.role}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header setSidebarOpen={setSidebarOpen} />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          <div className="container mx-auto px-6 py-8">
            {renderDashboard()}
          </div>
        </main>
      </div>
    </div>
  );
}