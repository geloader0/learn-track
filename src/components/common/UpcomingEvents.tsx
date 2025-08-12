import React from 'react';
import { Calendar, Clock } from 'lucide-react';

export function UpcomingEvents() {
  const events = [
    { title: 'Math Quiz', date: 'Nov 18', time: '10:00 AM', type: 'quiz' },
    { title: 'Science Project Due', date: 'Nov 20', time: '11:59 PM', type: 'assignment' },
    { title: 'Parent-Teacher Conference', date: 'Nov 22', time: '2:00 PM', type: 'meeting' },
    { title: 'English Essay Submission', date: 'Nov 25', time: '11:59 PM', type: 'assignment' },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900">Upcoming Events</h3>
        <Calendar className="h-5 w-5 text-gray-400" />
      </div>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div
              className={`w-2 h-2 rounded-full mt-2 ${
                event.type === 'quiz'
                  ? 'bg-red-500'
                  : event.type === 'assignment'
                  ? 'bg-blue-500'
                  : 'bg-green-500'
              }`}
            ></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{event.title}</p>
              <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
                <Calendar className="h-3 w-3" />
                <span>{event.date}</span>
                <Clock className="h-3 w-3" />
                <span>{event.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}