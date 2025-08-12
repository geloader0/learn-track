import React from 'react';

export function GradeChart() {
  const data = [
    { subject: 'Math', q1: 88, q2: 92 },
    { subject: 'English', q1: 85, q2: 87 },
    { subject: 'Science', q1: 90, q2: 94 },
    { subject: 'Filipino', q1: 82, q2: 85 },
    { subject: 'Social Studies', q1: 87, q2: 89 },
    { subject: 'PE', q1: 95, q2: 96 },
  ];

  return (
    <div className="space-y-4">
      {data.map((item) => (
        <div key={item.subject} className="flex items-center space-x-4">
          <div className="w-20 text-sm text-gray-600">{item.subject}</div>
          <div className="flex-1 flex items-center space-x-2">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(item.q1 / 100) * 100}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium text-gray-900 w-8">{item.q1}</span>
          </div>
          <div className="flex-1 flex items-center space-x-2">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(item.q2 / 100) * 100}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium text-gray-900 w-8">{item.q2}</span>
          </div>
        </div>
      ))}
      <div className="flex justify-center space-x-6 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          <span>1st Quarter</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-600 rounded-full"></div>
          <span>2nd Quarter</span>
        </div>
      </div>
    </div>
  );
}