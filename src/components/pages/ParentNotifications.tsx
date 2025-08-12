import React, { useState } from 'react';
import { Bell, AlertTriangle, CheckCircle, Info, Calendar, MessageCircle, Download, Filter } from 'lucide-react';

export function ParentNotifications() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'academic',
      priority: 'medium',
      title: 'Math Assignment Overdue',
      message: 'John has not submitted his Math homework that was due yesterday. Please check with him.',
      timestamp: '2024-11-15T14:30:00',
      status: 'unread',
      teacher: 'Ms. Rodriguez',
      subject: 'Mathematics'
    },
    {
      id: 2,
      type: 'achievement',
      priority: 'low',
      title: 'Excellent Science Test Score',
      message: 'John scored 94 on his Science test - great improvement from last time!',
      timestamp: '2024-11-14T10:15:00',
      status: 'read',
      teacher: 'Dr. Martinez',
      subject: 'Science'
    },
    {
      id: 3,
      type: 'attendance',
      priority: 'high',
      title: 'Absence Notification',
      message: 'John was marked absent from English class today. Please confirm if this was excused.',
      timestamp: '2024-11-14T09:00:00',
      status: 'unread',
      teacher: 'Mr. Thompson',
      subject: 'English'
    },
    {
      id: 4,
      type: 'event',
      priority: 'medium',
      title: 'Parent-Teacher Conference',
      message: 'Reminder: Your scheduled conference with Ms. Rodriguez is tomorrow at 2:00 PM.',
      timestamp: '2024-11-13T16:00:00',
      status: 'read',
      teacher: 'Ms. Rodriguez',
      subject: 'General'
    },
    {
      id: 5,
      type: 'behavioral',
      priority: 'low',
      title: 'Positive Behavior Recognition',
      message: 'John helped a classmate with their assignment today. Great teamwork!',
      timestamp: '2024-11-12T11:30:00',
      status: 'read',
      teacher: 'Mr. Garcia',
      subject: 'Social Studies'
    },
    {
      id: 6,
      type: 'academic',
      priority: 'medium',
      title: 'Grade Update',
      message: 'John\'s quarterly grade for Filipino has been updated to 86. Well done!',
      timestamp: '2024-11-11T15:45:00',
      status: 'read',
      teacher: 'Mrs. Santos',
      subject: 'Filipino'
    }
  ]);

  const notificationStats = {
    total: notifications.length,
    unread: notifications.filter(n => n.status === 'unread').length,
    high: notifications.filter(n => n.priority === 'high').length,
    today: notifications.filter(n => {
      const today = new Date().toDateString();
      const notifDate = new Date(n.timestamp).toDateString();
      return today === notifDate;
    }).length
  };

  const filteredNotifications = notifications.filter(notification => {
    const typeMatch = selectedFilter === 'all' || notification.type === selectedFilter;
    const priorityMatch = selectedPriority === 'all' || notification.priority === selectedPriority;
    return typeMatch && priorityMatch;
  });

  const handleMarkAsRead = (notificationId: number) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === notificationId ? { ...notification, status: 'read' } : notification
      )
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, status: 'read' }))
    );
  };

  const handleDownloadReport = () => {
    const csvContent = [
      ['Date', 'Type', 'Priority', 'Title', 'Teacher', 'Subject', 'Message'],
      ...filteredNotifications.map(notification => [
        new Date(notification.timestamp).toLocaleDateString(),
        notification.type,
        notification.priority,
        notification.title,
        notification.teacher,
        notification.subject,
        notification.message
      ])
    ].map(row => row.join(',')).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `john_smith_notifications_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const handleReplyToTeacher = (notification: any) => {
    const replyHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1f2937; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
          Reply to ${notification.teacher}
        </h2>
        <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #374151;"><strong>Original Message:</strong> ${notification.title}</p>
          <p style="margin: 5px 0 0 0; color: #6b7280; font-style: italic;">"${notification.message}"</p>
        </div>
        <form style="margin: 20px 0;">
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Subject:</label>
            <input type="text" value="Re: ${notification.title}" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Message:</label>
            <textarea rows="6" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;" placeholder="Dear ${notification.teacher},&#10;&#10;Thank you for the notification about John...">Dear ${notification.teacher},

Thank you for the notification about John. 

${notification.type === 'academic' ? 'I will discuss this with John and ensure he completes his assignments on time.' : ''}
${notification.type === 'attendance' ? 'I can confirm that John was absent due to a medical appointment. I will provide a note.' : ''}
${notification.type === 'achievement' ? 'Thank you for recognizing John\'s efforts. We are very proud of his progress.' : ''}

Please let me know if there\'s anything else I can do to support John\'s learning.

Best regards,
Mr. Smith</textarea>
          </div>
          <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button type="button" onclick="window.close()" style="background: #6b7280; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Cancel</button>
            <button type="button" onclick="alert('Message sent to ${notification.teacher}!'); window.close();" style="background: #3b82f6; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Send Reply</button>
          </div>
        </form>
      </div>
    `;
    
    const newWindow = window.open('', '_blank', 'width=700,height=600,scrollbars=yes');
    if (newWindow) {
      newWindow.document.write(replyHtml);
      newWindow.document.title = `Reply to ${notification.teacher}`;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-100 border-red-200';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'low':
        return 'text-blue-600 bg-blue-100 border-blue-200';
      default:
        return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'academic':
        return <AlertTriangle className="h-5 w-5 text-orange-500" />;
      case 'attendance':
        return <Calendar className="h-5 w-5 text-red-500" />;
      case 'achievement':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'behavioral':
        return <Info className="h-5 w-5 text-blue-500" />;
      case 'event':
        return <Calendar className="h-5 w-5 text-purple-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
          <p className="text-gray-600">Stay updated on John's school activities and progress.</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={handleDownloadReport}
            className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200"
          >
            <Download className="h-4 w-4" />
            <span>Export</span>
          </button>
          <button
            onClick={handleMarkAllAsRead}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            <CheckCircle className="h-4 w-4" />
            <span>Mark All Read</span>
          </button>
        </div>
      </div>

      {/* Student Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="text-lg font-medium text-blue-900 mb-2">Student Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-blue-700">
          <p><strong>Name:</strong> John Smith</p>
          <p><strong>Grade & Section:</strong> Grade 8-A</p>
          <p><strong>Student ID:</strong> STU001</p>
        </div>
      </div>

      {/* Notification Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Notifications</p>
              <p className="text-2xl font-bold text-blue-600">{notificationStats.total}</p>
            </div>
            <Bell className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Unread</p>
              <p className="text-2xl font-bold text-orange-600">{notificationStats.unread}</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-orange-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">High Priority</p>
              <p className="text-2xl font-bold text-red-600">{notificationStats.high}</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Today</p>
              <p className="text-2xl font-bold text-green-600">{notificationStats.today}</p>
            </div>
            <Calendar className="h-8 w-8 text-green-500" />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Types</option>
              <option value="academic">Academic</option>
              <option value="attendance">Attendance</option>
              <option value="achievement">Achievement</option>
              <option value="behavioral">Behavioral</option>
              <option value="event">Events</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <select
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Priorities</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">
            Notifications ({filteredNotifications.length})
          </h3>
        </div>
        <div className="divide-y divide-gray-200">
          {filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-6 hover:bg-gray-50 transition duration-200 ${
                notification.status === 'unread' ? 'bg-blue-50 border-l-4 border-blue-500' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="flex-shrink-0">
                    {getTypeIcon(notification.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="text-sm font-medium text-gray-900">{notification.title}</h4>
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full border ${getPriorityColor(notification.priority)}`}>
                        {notification.priority}
                      </span>
                      {notification.status === 'unread' && (
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                      <span>{notification.teacher}</span>
                      <span>{notification.subject}</span>
                      <span>{formatTimestamp(notification.timestamp)}</span>
                    </div>
                    <p className="text-sm text-gray-700">{notification.message}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  {notification.status === 'unread' && (
                    <button
                      onClick={() => handleMarkAsRead(notification.id)}
                      className="text-blue-600 hover:text-blue-800 p-1 rounded"
                      title="Mark as Read"
                    >
                      <CheckCircle className="h-4 w-4" />
                    </button>
                  )}
                  <button
                    onClick={() => handleReplyToTeacher(notification)}
                    className="text-green-600 hover:text-green-800 p-1 rounded"
                    title="Reply to Teacher"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notification Summary by Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Notifications by Type</h3>
          <div className="space-y-3">
            {['academic', 'attendance', 'achievement', 'behavioral', 'event'].map(type => {
              const count = notifications.filter(n => n.type === type).length;
              const percentage = notifications.length > 0 ? (count / notifications.length) * 100 : 0;
              
              return (
                <div key={type} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {getTypeIcon(type)}
                    <span className="text-sm font-medium text-gray-900 capitalize">{type}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 w-8">{count}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {notifications.slice(0, 5).map(notification => (
              <div key={notification.id} className="flex items-center space-x-3 text-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <span className="text-gray-900">{notification.title}</span>
                  <span className="text-gray-600"> - {notification.teacher}</span>
                </div>
                <span className="text-gray-500">{formatTimestamp(notification.timestamp)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}