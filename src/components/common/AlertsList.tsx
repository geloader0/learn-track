import React from 'react';
import { AlertTriangle, User, Clock } from 'lucide-react';

export function AlertsList() {
  const alerts = [
    {
      student: 'Michael Brown',
      issue: 'Grade below 75 in Mathematics',
      severity: 'high',
      time: '2 hours ago'
    },
    {
      student: 'Emma Davis',
      issue: 'Missed 3 consecutive classes',
      severity: 'medium',
      time: '1 day ago'
    },
    {
      student: 'James Wilson',
      issue: 'Assignment overdue',
      severity: 'low',
      time: '2 days ago'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900">Student Alerts</h3>
        <AlertTriangle className="h-5 w-5 text-red-400" />
      </div>
      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <div key={index} className="border-l-4 border-red-400 bg-red-50 p-3 rounded">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-2">
                <User className="h-4 w-4 text-red-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-red-800">{alert.student}</p>
                  <p className="text-sm text-red-700">{alert.issue}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <Clock className="h-3 w-3 text-red-600" />
                    <span className="text-xs text-red-600">{alert.time}</span>
                  </div>
                </div>
              </div>
              <span
                className={`px-2 py-1 text-xs font-semibold rounded ${
                  alert.severity === 'high'
                    ? 'bg-red-100 text-red-800'
                    : alert.severity === 'medium'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-blue-100 text-blue-800'
                }`}
              >
                {alert.severity}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}