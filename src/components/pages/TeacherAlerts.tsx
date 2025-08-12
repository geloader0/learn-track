import React, { useState } from 'react';
import { AlertTriangle, Bell, CheckCircle, XCircle, Clock, MessageCircle, User, Calendar } from 'lucide-react';

export function TeacherAlerts() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');

  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: 'academic',
      priority: 'high',
      student: 'Michael Brown',
      studentId: 'STU003',
      title: 'Grade Below Passing',
      message: 'Student has a grade of 72 in Mathematics - below the 75 passing mark',
      timestamp: '2024-11-15T10:30:00',
      status: 'unread',
      actionRequired: true,
      subject: 'Mathematics'
    },
    {
      id: 2,
      type: 'attendance',
      priority: 'medium',
      student: 'Sarah Wilson',
      studentId: 'STU004',
      title: 'Consecutive Absences',
      message: 'Student has been absent for 3 consecutive days without notification',
      timestamp: '2024-11-15T09:15:00',
      status: 'unread',
      actionRequired: true,
      subject: 'All Subjects'
    },
    {
      id: 3,
      type: 'behavioral',
      priority: 'low',
      student: 'James Johnson',
      studentId: 'STU005',
      title: 'Late Submission',
      message: 'Assignment submitted 2 days after deadline',
      timestamp: '2024-11-14T16:45:00',
      status: 'read',
      actionRequired: false,
      subject: 'English'
    },
    {
      id: 4,
      type: 'parent',
      priority: 'medium',
      student: 'Emma Davis',
      studentId: 'STU002',
      title: 'Parent Conference Request',
      message: 'Parent has requested a meeting to discuss academic progress',
      timestamp: '2024-11-14T14:20:00',
      status: 'unread',
      actionRequired: true,
      subject: 'General'
    },
    {
      id: 5,
      type: 'academic',
      priority: 'high',
      student: 'Lisa Garcia',
      studentId: 'STU006',
      title: 'Significant Grade Drop',
      message: 'Grade dropped from 88 to 76 in the last two weeks',
      timestamp: '2024-11-13T11:30:00',
      status: 'read',
      actionRequired: true,
      subject: 'Science'
    }
  ]);

  const alertStats = {
    total: alerts.length,
    unread: alerts.filter(a => a.status === 'unread').length,
    high: alerts.filter(a => a.priority === 'high').length,
    actionRequired: alerts.filter(a => a.actionRequired).length
  };

  const filteredAlerts = alerts.filter(alert => {
    const typeMatch = selectedFilter === 'all' || alert.type === selectedFilter;
    const priorityMatch = selectedPriority === 'all' || alert.priority === selectedPriority;
    return typeMatch && priorityMatch;
  });

  const handleMarkAsRead = (alertId: number) => {
    setAlerts(prev => 
      prev.map(alert => 
        alert.id === alertId ? { ...alert, status: 'read' } : alert
      )
    );
  };

  const handleMarkAllAsRead = () => {
    setAlerts(prev => 
      prev.map(alert => ({ ...alert, status: 'read' }))
    );
  };

  const handleTakeAction = (alert: any) => {
    switch (alert.type) {
      case 'academic':
        alert(`Taking action for academic alert: ${alert.title}. This would open intervention planning tools, allow you to schedule tutoring, or contact parents about academic concerns.`);
        break;
      case 'attendance':
        alert(`Taking action for attendance alert: ${alert.title}. This would allow you to contact parents, mark excused absences, or schedule make-up work.`);
        break;
      case 'parent':
        alert(`Taking action for parent request: ${alert.title}. This would open the scheduling system to arrange a parent-teacher conference.`);
        break;
      default:
        alert(`Taking action for ${alert.type} alert: ${alert.title}`);
    }
  };

  const handleContactParent = (alert: any) => {
    alert(`Contacting parent of ${alert.student}. This would open the communication system to send messages or schedule calls with the parent.`);
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
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'attendance':
        return <Calendar className="h-5 w-5 text-yellow-500" />;
      case 'behavioral':
        return <User className="h-5 w-5 text-blue-500" />;
      case 'parent':
        return <MessageCircle className="h-5 w-5 text-green-500" />;
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
          <h1 className="text-2xl font-bold text-gray-900">Student Alerts</h1>
          <p className="text-gray-600">Monitor and respond to important student notifications.</p>
        </div>
        <button
          onClick={handleMarkAllAsRead}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          <CheckCircle className="h-4 w-4" />
          <span>Mark All Read</span>
        </button>
      </div>

      {/* Alert Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Alerts</p>
              <p className="text-2xl font-bold text-blue-600">{alertStats.total}</p>
            </div>
            <Bell className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Unread</p>
              <p className="text-2xl font-bold text-orange-600">{alertStats.unread}</p>
            </div>
            <XCircle className="h-8 w-8 text-orange-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">High Priority</p>
              <p className="text-2xl font-bold text-red-600">{alertStats.high}</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Action Required</p>
              <p className="text-2xl font-bold text-green-600">{alertStats.actionRequired}</p>
            </div>
            <Clock className="h-8 w-8 text-green-500" />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700">Type:</label>
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Types</option>
              <option value="academic">Academic</option>
              <option value="attendance">Attendance</option>
              <option value="behavioral">Behavioral</option>
              <option value="parent">Parent Requests</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700">Priority:</label>
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

      {/* Alerts List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">
            Alerts ({filteredAlerts.length})
          </h3>
        </div>
        <div className="divide-y divide-gray-200">
          {filteredAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-6 hover:bg-gray-50 transition duration-200 ${
                alert.status === 'unread' ? 'bg-blue-50 border-l-4 border-blue-500' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="flex-shrink-0">
                    {getTypeIcon(alert.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="text-sm font-medium text-gray-900">{alert.title}</h4>
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full border ${getPriorityColor(alert.priority)}`}>
                        {alert.priority}
                      </span>
                      {alert.status === 'unread' && (
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                      <span className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{alert.student} ({alert.studentId})</span>
                      </span>
                      <span>{alert.subject}</span>
                      <span>{formatTimestamp(alert.timestamp)}</span>
                    </div>
                    <p className="text-sm text-gray-700">{alert.message}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  {alert.status === 'unread' && (
                    <button
                      onClick={() => handleMarkAsRead(alert.id)}
                      className="text-blue-600 hover:text-blue-800 p-1 rounded"
                      title="Mark as Read"
                    >
                      <CheckCircle className="h-4 w-4" />
                    </button>
                  )}
                  <button
                    onClick={() => handleContactParent(alert)}
                    className="text-green-600 hover:text-green-800 p-1 rounded"
                    title="Contact Parent"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </button>
                  {alert.actionRequired && (
                    <button
                      onClick={() => handleTakeAction(alert)}
                      className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition duration-200"
                    >
                      Take Action
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Alert Summary by Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Alerts by Type</h3>
          <div className="space-y-3">
            {['academic', 'attendance', 'behavioral', 'parent'].map(type => {
              const count = alerts.filter(a => a.type === type).length;
              const percentage = alerts.length > 0 ? (count / alerts.length) * 100 : 0;
              
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
            {alerts.slice(0, 5).map(alert => (
              <div key={alert.id} className="flex items-center space-x-3 text-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <span className="text-gray-900">{alert.student}</span>
                  <span className="text-gray-600"> - {alert.title}</span>
                </div>
                <span className="text-gray-500">{formatTimestamp(alert.timestamp)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}