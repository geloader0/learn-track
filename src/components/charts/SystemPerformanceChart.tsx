import React from 'react';

export function SystemPerformanceChart() {
  const quarters = ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024'];
  const performanceData = [82, 85, 87, 86];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-end h-40">
        {quarters.map((quarter, index) => (
          <div key={quarter} className="flex flex-col items-center space-y-2">
            <div className="w-12 bg-gray-200 rounded-t flex flex-col justify-end" style={{ height: '120px' }}>
              <div
                className="bg-purple-500 rounded-t transition-all duration-700"
                style={{ height: `${(performanceData[index] / 100) * 120}px` }}
              ></div>
            </div>
            <div className="text-xs text-gray-600">{quarter}</div>
            <div className="text-sm font-semibold text-gray-900">{performanceData[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}