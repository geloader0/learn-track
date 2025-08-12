import React from 'react';
import { BookOpen, TrendingUp, TrendingDown } from 'lucide-react';

export function RecentGrades() {
  const recentGrades = [
    { subject: 'Mathematics', grade: 92, trend: 'up', date: 'Nov 15' },
    { subject: 'Science', grade: 94, trend: 'up', date: 'Nov 14' },
    { subject: 'English', grade: 87, trend: 'down', date: 'Nov 13' },
    { subject: 'Filipino', grade: 85, trend: 'up', date: 'Nov 12' },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900">Recent Grades</h3>
        <BookOpen className="h-5 w-5 text-gray-400" />
      </div>
      <div className="space-y-4">
        {recentGrades.map((item) => (
          <div key={item.subject} className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">{item.subject}</p>
              <p className="text-xs text-gray-500">{item.date}</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">{item.grade}</span>
              {item.trend === 'up' ? (
                <TrendingUp className="h-4 w-4 text-green-500" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-500" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}