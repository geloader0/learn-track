import React from 'react';

export function ClassPerformanceChart() {
  const classes = [
    { name: 'Grade 8-A', average: 88, students: 32 },
    { name: 'Grade 8-B', average: 85, students: 30 },
    { name: 'Grade 8-C', average: 91, students: 31 },
    { name: 'Grade 8-D', average: 87, students: 31 },
  ];

  return (
    <div className="space-y-4">
      {classes.map((cls) => (
        <div key={cls.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <div className="text-sm font-medium text-gray-900">{cls.name}</div>
            <div className="text-xs text-gray-600">{cls.students} students</div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-20 bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(cls.average / 100) * 100}%` }}
              ></div>
            </div>
            <span className="text-sm font-bold text-gray-900 w-8">{cls.average}</span>
          </div>
        </div>
      ))}
    </div>
  );
}