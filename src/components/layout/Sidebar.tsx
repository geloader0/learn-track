import React from 'react';
import { X, Home, BookOpen, Calendar, BarChart3, Users, FileText, AlertTriangle, Settings, GraduationCap } from 'lucide-react';
import { NavigationItem } from '../Dashboard';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  activeTab: NavigationItem;
  setActiveTab: (tab: NavigationItem) => void;
  userRole: string;
}

export function Sidebar({ isOpen, setIsOpen, activeTab, setActiveTab, userRole }: SidebarProps) {
  const getNavigationItems = () => {
    const commonItems = [
      { id: 'overview' as NavigationItem, label: 'Overview', icon: Home },
    ];

    switch (userRole) {
      case 'student':
        return [
          ...commonItems,
          { id: 'grades' as NavigationItem, label: 'My Grades', icon: BookOpen },
          { id: 'attendance' as NavigationItem, label: 'My Attendance', icon: Calendar },
          { id: 'performance' as NavigationItem, label: 'Performance', icon: BarChart3 },
        ];
      case 'teacher':
        return [
          ...commonItems,
          { id: 'students' as NavigationItem, label: 'Students', icon: Users },
          { id: 'grades' as NavigationItem, label: 'Grade Management', icon: BookOpen },
          { id: 'attendance' as NavigationItem, label: 'Attendance', icon: Calendar },
          { id: 'reports' as NavigationItem, label: 'Reports', icon: FileText },
          { id: 'alerts' as NavigationItem, label: 'Alerts', icon: AlertTriangle },
        ];
      case 'parent':
        return [
          ...commonItems,
          { id: 'grades' as NavigationItem, label: 'Child\'s Grades', icon: BookOpen },
          { id: 'attendance' as NavigationItem, label: 'Attendance', icon: Calendar },
          { id: 'performance' as NavigationItem, label: 'Performance', icon: BarChart3 },
          { id: 'alerts' as NavigationItem, label: 'Notifications', icon: AlertTriangle },
        ];
      case 'administrator':
        return [
          ...commonItems,
          { id: 'users' as NavigationItem, label: 'User Management', icon: Users },
          { id: 'teachers' as NavigationItem, label: 'Teachers', icon: GraduationCap },
          { id: 'students' as NavigationItem, label: 'Students', icon: GraduationCap },
          { id: 'reports' as NavigationItem, label: 'System Reports', icon: FileText },
          { id: 'performance' as NavigationItem, label: 'Analytics', icon: BarChart3 },
          { id: 'settings' as NavigationItem, label: 'Settings', icon: Settings },
        ];
      default:
        return commonItems;
    }
  };

  const navigationItems = getNavigationItems();

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:inset-0 transition duration-300 ease-in-out lg:transition-none`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">LEARNTRACK</h1>
              <p className="text-xs text-gray-500">SJCSI Junior High</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-600 hover:text-gray-900 lg:hidden"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-6 px-3">
          <div className="space-y-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out ${
                  activeTab === item.id
                    ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}