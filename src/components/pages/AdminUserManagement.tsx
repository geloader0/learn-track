import React, { useState } from 'react';
import { Users, Plus, Search, Filter, Edit, Trash2, Eye, UserCheck, UserX, Download } from 'lucide-react';

export function AdminUserManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Smith',
      email: 'student@sjcsi.edu',
      role: 'student',
      status: 'active',
      lastLogin: '2024-11-15T10:30:00',
      createdAt: '2024-08-15',
      class: 'Grade 8-A',
      studentId: 'STU001'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'teacher@sjcsi.edu',
      role: 'teacher',
      status: 'active',
      lastLogin: '2024-11-15T08:15:00',
      createdAt: '2024-07-01',
      department: 'Mathematics',
      employeeId: 'TCH001'
    },
    {
      id: 3,
      name: 'Michael Smith',
      email: 'parent@sjcsi.edu',
      role: 'parent',
      status: 'active',
      lastLogin: '2024-11-14T19:45:00',
      createdAt: '2024-08-15',
      children: ['John Smith (STU001)']
    },
    {
      id: 4,
      name: 'Dr. Maria Rodriguez',
      email: 'admin@sjcsi.edu',
      role: 'administrator',
      status: 'active',
      lastLogin: '2024-11-15T07:00:00',
      createdAt: '2024-06-01',
      department: 'Administration',
      employeeId: 'ADM001'
    },
    {
      id: 5,
      name: 'Emma Davis',
      email: 'emma.davis@sjcsi.edu',
      role: 'student',
      status: 'active',
      lastLogin: '2024-11-15T09:20:00',
      createdAt: '2024-08-15',
      class: 'Grade 8-A',
      studentId: 'STU002'
    },
    {
      id: 6,
      name: 'Robert Wilson',
      email: 'robert.wilson@sjcsi.edu',
      role: 'teacher',
      status: 'inactive',
      lastLogin: '2024-10-30T16:30:00',
      createdAt: '2024-07-15',
      department: 'Science',
      employeeId: 'TCH002'
    }
  ]);

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === 'all' || user.role === selectedRole;
    const matchesStatus = selectedStatus === 'all' || user.status === selectedStatus;
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  const userStats = {
    total: users.length,
    active: users.filter(u => u.status === 'active').length,
    students: users.filter(u => u.role === 'student').length,
    teachers: users.filter(u => u.role === 'teacher').length,
    parents: users.filter(u => u.role === 'parent').length,
    admins: users.filter(u => u.role === 'administrator').length
  };

  const handleAddUser = () => {
    const addUserHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1f2937; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
          Add New User
        </h2>
        <form style="margin: 20px 0;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">First Name:</label>
              <input type="text" required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
            </div>
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Last Name:</label>
              <input type="text" required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
            </div>
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Email:</label>
            <input type="email" required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Role:</label>
              <select required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
                <option value="">Select Role</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="parent">Parent</option>
                <option value="administrator">Administrator</option>
              </select>
            </div>
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Status:</label>
              <select required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Temporary Password:</label>
            <input type="password" required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: flex; align-items: center; color: #374151;">
              <input type="checkbox" style="margin-right: 8px;">
              Send welcome email with login credentials
            </label>
          </div>
          <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button type="button" onclick="window.close()" style="background: #6b7280; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Cancel</button>
            <button type="button" onclick="alert('User created successfully!'); window.close();" style="background: #10b981; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Create User</button>
          </div>
        </form>
      </div>
    `;
    
    const newWindow = window.open('', '_blank', 'width=700,height=600,scrollbars=yes');
    if (newWindow) {
      newWindow.document.write(addUserHtml);
      newWindow.document.title = 'Add New User';
    }
  };

  const handleEditUser = (user: any) => {
    const editUserHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1f2937; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
          Edit User - ${user.name}
        </h2>
        <form style="margin: 20px 0;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">First Name:</label>
              <input type="text" value="${user.name.split(' ')[0]}" required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
            </div>
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Last Name:</label>
              <input type="text" value="${user.name.split(' ')[1] || ''}" required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
            </div>
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Email:</label>
            <input type="email" value="${user.email}" required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Role:</label>
              <select required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
                <option value="student" ${user.role === 'student' ? 'selected' : ''}>Student</option>
                <option value="teacher" ${user.role === 'teacher' ? 'selected' : ''}>Teacher</option>
                <option value="parent" ${user.role === 'parent' ? 'selected' : ''}>Parent</option>
                <option value="administrator" ${user.role === 'administrator' ? 'selected' : ''}>Administrator</option>
              </select>
            </div>
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Status:</label>
              <select required style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
                <option value="active" ${user.status === 'active' ? 'selected' : ''}>Active</option>
                <option value="inactive" ${user.status === 'inactive' ? 'selected' : ''}>Inactive</option>
              </select>
            </div>
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #374151;">Last Login:</label>
            <input type="text" value="${new Date(user.lastLogin).toLocaleString()}" disabled style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px; background: #f9fafb;">
          </div>
          <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button type="button" onclick="window.close()" style="background: #6b7280; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Cancel</button>
            <button type="button" onclick="alert('User updated successfully!'); window.close();" style="background: #3b82f6; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Update User</button>
          </div>
        </form>
      </div>
    `;
    
    const newWindow = window.open('', '_blank', 'width=700,height=600,scrollbars=yes');
    if (newWindow) {
      newWindow.document.write(editUserHtml);
      newWindow.document.title = `Edit User - ${user.name}`;
    }
  };

  const handleViewUser = (user: any) => {
    const viewUserHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1f2937; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">
          User Profile - ${user.name}
        </h2>
        <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 30px; margin: 30px 0;">
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px;">
            <h3 style="color: #374151; margin: 0 0 15px 0;">Basic Information</h3>
            <div style="space-y: 10px;">
              <p style="margin: 8px 0; color: #6b7280;"><strong>Name:</strong> ${user.name}</p>
              <p style="margin: 8px 0; color: #6b7280;"><strong>Email:</strong> ${user.email}</p>
              <p style="margin: 8px 0; color: #6b7280;"><strong>Role:</strong> ${user.role.charAt(0).toUpperCase() + user.role.slice(1)}</p>
              <p style="margin: 8px 0; color: #6b7280;"><strong>Status:</strong> 
                <span style="color: ${user.status === 'active' ? '#10b981' : '#ef4444'};">${user.status.charAt(0).toUpperCase() + user.status.slice(1)}</span>
              </p>
              <p style="margin: 8px 0; color: #6b7280;"><strong>Created:</strong> ${new Date(user.createdAt).toLocaleDateString()}</p>
              <p style="margin: 8px 0; color: #6b7280;"><strong>Last Login:</strong> ${new Date(user.lastLogin).toLocaleString()}</p>
            </div>
          </div>
          <div>
            <h3 style="color: #374151; margin: 0 0 15px 0;">Role-Specific Information</h3>
            <div style="background: #f0fdf4; padding: 20px; border-radius: 8px;">
              ${user.role === 'student' ? `
                <p style="margin: 8px 0; color: #166534;"><strong>Student ID:</strong> ${user.studentId}</p>
                <p style="margin: 8px 0; color: #166534;"><strong>Class:</strong> ${user.class}</p>
              ` : ''}
              ${user.role === 'teacher' ? `
                <p style="margin: 8px 0; color: #166534;"><strong>Employee ID:</strong> ${user.employeeId}</p>
                <p style="margin: 8px 0; color: #166534;"><strong>Department:</strong> ${user.department}</p>
              ` : ''}
              ${user.role === 'parent' ? `
                <p style="margin: 8px 0; color: #166534;"><strong>Children:</strong></p>
                <ul style="margin: 8px 0; padding-left: 20px; color: #166534;">
                  ${user.children ? user.children.map((child: string) => `<li>${child}</li>`).join('') : '<li>No children assigned</li>'}
                </ul>
              ` : ''}
              ${user.role === 'administrator' ? `
                <p style="margin: 8px 0; color: #166534;"><strong>Employee ID:</strong> ${user.employeeId}</p>
                <p style="margin: 8px 0; color: #166534;"><strong>Department:</strong> ${user.department}</p>
              ` : ''}
            </div>
          </div>
        </div>
        <div style="background: #eff6ff; padding: 20px; border-radius: 8px; margin: 30px 0;">
          <h3 style="color: #1e40af; margin: 0 0 15px 0;">Account Activity</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
            <div style="text-align: center;">
              <div style="font-size: 1.5em; font-weight: bold; color: #1e40af;">24</div>
              <div style="color: #1e40af; font-size: 0.9em;">Days Active</div>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 1.5em; font-weight: bold; color: #1e40af;">156</div>
              <div style="color: #1e40af; font-size: 0.9em;">Total Logins</div>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 1.5em; font-weight: bold; color: #1e40af;">98%</div>
              <div style="color: #1e40af; font-size: 0.9em;">Uptime</div>
            </div>
          </div>
        </div>
        <div style="text-align: center; margin-top: 30px;">
          <button onclick="window.close()" style="background: #6b7280; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; font-size: 16px;">Close</button>
        </div>
      </div>
    `;
    
    const newWindow = window.open('', '_blank', 'width=800,height=700,scrollbars=yes');
    if (newWindow) {
      newWindow.document.write(viewUserHtml);
      newWindow.document.title = `User Profile - ${user.name}`;
    }
  };

  const handleToggleStatus = (userId: number) => {
    setUsers(prev => 
      prev.map(user => 
        user.id === userId 
          ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' }
          : user
      )
    );
  };

  const handleDeleteUser = (userId: number) => {
    if (confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
      setUsers(prev => prev.filter(user => user.id !== userId));
    }
  };

  const handleExportUsers = () => {
    const csvContent = [
      ['Name', 'Email', 'Role', 'Status', 'Last Login', 'Created Date'],
      ...filteredUsers.map(user => [
        user.name,
        user.email,
        user.role,
        user.status,
        new Date(user.lastLogin).toLocaleString(),
        user.createdAt
      ])
    ].map(row => row.join(',')).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `users_export_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const getStatusBadge = (status: string) => {
    return status === 'active' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-red-100 text-red-800';
  };

  const getRoleBadge = (role: string) => {
    const colors = {
      student: 'bg-blue-100 text-blue-800',
      teacher: 'bg-green-100 text-green-800',
      parent: 'bg-purple-100 text-purple-800',
      administrator: 'bg-orange-100 text-orange-800'
    };
    return colors[role as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
          <p className="text-gray-600">Manage system users, roles, and permissions.</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={handleExportUsers}
            className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200"
          >
            <Download className="h-4 w-4" />
            <span>Export</span>
          </button>
          <button
            onClick={handleAddUser}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            <Plus className="h-4 w-4" />
            <span>Add User</span>
          </button>
        </div>
      </div>

      {/* User Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{userStats.total}</div>
            <div className="text-sm text-gray-600">Total Users</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{userStats.active}</div>
            <div className="text-sm text-gray-600">Active</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{userStats.students}</div>
            <div className="text-sm text-gray-600">Students</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{userStats.teachers}</div>
            <div className="text-sm text-gray-600">Teachers</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{userStats.parents}</div>
            <div className="text-sm text-gray-600">Parents</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">{userStats.admins}</div>
            <div className="text-sm text-gray-600">Admins</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search users by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Roles</option>
              <option value="student">Students</option>
              <option value="teacher">Teachers</option>
              <option value="parent">Parents</option>
              <option value="administrator">Administrators</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">
            Users ({filteredUsers.length})
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Login
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Users className="h-8 w-8 text-gray-400 mr-3" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleBadge(user.role)}`}>
                      {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadge(user.status)}`}>
                      {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {new Date(user.lastLogin).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {user.createdAt}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleViewUser(user)}
                        className="text-blue-600 hover:text-blue-900 p-1 rounded"
                        title="View Details"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleEditUser(user)}
                        className="text-green-600 hover:text-green-900 p-1 rounded"
                        title="Edit User"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleToggleStatus(user.id)}
                        className={`p-1 rounded ${user.status === 'active' ? 'text-red-600 hover:text-red-900' : 'text-green-600 hover:text-green-900'}`}
                        title={user.status === 'active' ? 'Deactivate User' : 'Activate User'}
                      >
                        {user.status === 'active' ? <UserX className="h-4 w-4" /> : <UserCheck className="h-4 w-4" />}
                      </button>
                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        className="text-red-600 hover:text-red-900 p-1 rounded"
                        title="Delete User"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}