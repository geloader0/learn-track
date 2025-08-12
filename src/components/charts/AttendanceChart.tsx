import React from 'react';

export function AttendanceChart() {
  const months = ['Aug', 'Sep', 'Oct', 'Nov'];
  const attendanceData = [92, 95, 89, 94];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-end h-40">
        {months.map((month, index) => (
          <div key={month} className="flex flex-col items-center space-y-2">
            <div className="w-8 bg-gray-200 rounded-t flex flex-col justify-end" style={{ height: '120px' }}>
              <div
                className="bg-green-500 rounded-t transition-all duration-700"
                style={{ height: `${(attendanceData[index] / 100) * 120}px` }}
              ></div>
            </div>
            <div className="text-xs text-gray-600">{month}</div>
            <div className="text-sm font-semibold text-gray-900">{attendanceData[index]}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}