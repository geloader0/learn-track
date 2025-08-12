import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Award, Target, BookOpen, BarChart3, Calendar, AlertTriangle, Star } from 'lucide-react';
import { GradeChart } from '../charts/GradeChart';
import { StatCard } from '../common/StatCard';

export function ParentPerformance() {
  const [selectedPeriod, setSelectedPeriod] = useState('semester');
  const [selectedSubject, setSelectedSubject] = useState('all');

  const performanceData = {
    strengths: [
      { subject: 'Science', score: 92, trend: 'up', improvement: '+4 points' },
      { subject: 'Physical Education', score: 96, trend: 'stable', improvement: 'Consistent' },
      { subject: 'Mathematics', score: 90, trend: 'up', improvement: '+2 points' }
    ],
    improvements: [
      { subject: 'English', score: 86, trend: 'down', improvement: '-1 point' },
      { subject: 'Filipino', score: 84, trend: 'up', improvement: '+2 points' }
    ],
    recommendations: [
      {
        type: 'strength',
        title: 'Maintain Excellence in Science',
        description: 'John continues to excel in laboratory work and theoretical understanding.',
        action: 'Consider advanced science projects or competitions'
      },
      {
        type: 'improvement',
        title: 'Focus on English Writing Skills',
        description: 'Reading comprehension is strong, but essay writing needs attention.',
        action: 'Practice daily writing exercises at home'
      },
      {
        type: 'opportunity',
        title: 'Leadership Potential',
        description: 'John shows leadership qualities and helps classmates.',
        action: 'Encourage participation in student activities'
      }
    ]
  };

  const subjectAnalysis = [
    {
      subject: 'Mathematics',
      currentGrade: 90,
      trend: 'improving',
      strengths: ['Problem solving', 'Algebra'],
      weaknesses: ['Geometry', 'Word problems'],
      nextAssessment: 'Nov 20, 2024',
      teacherComment: 'John has shown excellent progress this quarter. His problem-solving skills have improved significantly.'
    },
    {
      subject: 'English',
      currentGrade: 86,
      trend: 'stable',
      strengths: ['Reading comprehension', 'Vocabulary'],
      weaknesses: ['Essay writing', 'Grammar'],
      nextAssessment: 'Nov 18, 2024',
      teacherComment: 'Good participation in class discussions. Needs to focus on writing structure.'
    },
    {
      subject: 'Science',
      currentGrade: 92,
      trend: 'improving',
      strengths: ['Laboratory work', 'Scientific method'],
      weaknesses: ['Physics concepts'],
      nextAssessment: 'Nov 22, 2024',
      teacherComment: 'Outstanding performance in lab activities. Shows genuine interest in scientific inquiry.'
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
      case 'improving':
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'down':
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      default:
        return <BarChart3 className="h-4 w-4 text-blue-500" />;
    }
  };

  const getRecommendationIcon = (type: string) => {
    switch (type) {
      case 'strength':
        return <Award className="h-5 w-5 text-green-500" />;
      case 'improvement':
        return <Target className="h-5 w-5 text-orange-500" />;
      case 'opportunity':
        return <Star className="h-5 w-5 text-blue-500" />;
      default:
        return <BookOpen className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">John's Performance Analytics</h1>
        <p className="text-gray-600">Comprehensive analysis of your child's academic progress and development.</p>
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

      {/* Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="Overall Trend"
          value="Improving"
          icon={TrendingUp}
          color="green"
          subtitle="+2.3% this quarter"
        />
        <StatCard
          title="Class Rank"
          value="12/45"
          icon={Award}
          color="blue"
          subtitle="Top 27%"
        />
        <StatCard
          title="Study Hours"
          value="24h"
          icon={BookOpen}
          color="purple"
          subtitle="This week"
        />
        <StatCard
          title="Next Goal"
          value="3.9 GPA"
          icon={Target}
          color="orange"
          subtitle="Target for semester"
        />
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-gray-400" />
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="semester">This Semester</option>
              <option value="quarter">This Quarter</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <BookOpen className="h-4 w-4 text-gray-400" />
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Subjects</option>
              <option value="mathematics">Mathematics</option>
              <option value="english">English</option>
              <option value="science">Science</option>
              <option value="filipino">Filipino</option>
              <option value="social-studies">Social Studies</option>
              <option value="pe">Physical Education</option>
            </select>
          </div>
        </div>
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Subject Performance Trends</h3>
          <GradeChart />
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Performance Insights</h3>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="flex items-start space-x-3">
                <Award className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-green-900">Top Performer</p>
                  <p className="text-sm text-green-700">John is in the top 30% of his class</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start space-x-3">
                <TrendingUp className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-blue-900">Consistent Improvement</p>
                  <p className="text-sm text-blue-700">Grades have improved by 5% this quarter</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-orange-50 rounded-lg">
              <div className="flex items-start space-x-3">
                <Target className="h-5 w-5 text-orange-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-orange-900">Focus Area</p>
                  <p className="text-sm text-orange-700">English writing skills need attention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strengths and Areas for Improvement */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <Award className="h-5 w-5 text-green-500 mr-2" />
            John's Strengths
          </h3>
          <div className="space-y-3">
            {performanceData.strengths.map((strength, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  {getTrendIcon(strength.trend)}
                  <div>
                    <p className="text-sm font-medium text-gray-900">{strength.subject}</p>
                    <p className="text-sm text-gray-600">{strength.improvement}</p>
                  </div>
                </div>
                <span className="text-lg font-bold text-green-600">{strength.score}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <Target className="h-5 w-5 text-orange-500 mr-2" />
            Areas for Improvement
          </h3>
          <div className="space-y-3">
            {performanceData.improvements.map((improvement, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  {getTrendIcon(improvement.trend)}
                  <div>
                    <p className="text-sm font-medium text-gray-900">{improvement.subject}</p>
                    <p className="text-sm text-gray-600">{improvement.improvement}</p>
                  </div>
                </div>
                <span className="text-lg font-bold text-orange-600">{improvement.score}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Subject Analysis */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Detailed Subject Analysis</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {subjectAnalysis.map((subject, index) => (
            <div key={index} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-5 w-5 text-gray-400" />
                  <h4 className="text-lg font-medium text-gray-900">{subject.subject}</h4>
                  {getTrendIcon(subject.trend)}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{subject.currentGrade}</div>
                  <div className="text-sm text-gray-600">Current Grade</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h5 className="text-sm font-medium text-green-700 mb-2">Strengths</h5>
                  <ul className="space-y-1">
                    {subject.strengths.map((strength, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="text-sm font-medium text-orange-700 mb-2">Areas to Improve</h5>
                  <ul className="space-y-1">
                    {subject.weaknesses.map((weakness, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        {weakness}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="h-4 w-4 text-blue-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-blue-900">Teacher's Comment</p>
                    <p className="text-sm text-blue-700 mt-1">{subject.teacherComment}</p>
                    <p className="text-xs text-blue-600 mt-2">Next assessment: {subject.nextAssessment}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Parent Recommendations */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Recommendations for Parents</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {performanceData.recommendations.map((rec, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start space-x-3">
                {getRecommendationIcon(rec.type)}
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">{rec.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{rec.description}</p>
                  <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    {rec.action}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Study Tips for Parents */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Study Tips for Parents</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">At Home Support</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Create a dedicated study space</li>
              <li>• Establish consistent study schedule</li>
              <li>• Review homework together</li>
              <li>• Encourage reading for 30 minutes daily</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">Communication</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Ask about daily school activities</li>
              <li>• Attend parent-teacher conferences</li>
              <li>• Monitor progress regularly</li>
              <li>• Celebrate achievements and improvements</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}