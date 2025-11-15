// src/app/components/DashboardMockup.js
import Image from 'next/image';

export default function DashboardMockup() {
  return (
    <div className="relative w-full max-w-[280px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[380px] xl:max-w-[400px] mx-auto">
      {/* Mobile Device Frame */}
      <div className="relative bg-gray-900 rounded-[40px] md:rounded-[50px] p-3 md:p-4 shadow-2xl border-2 md:border-4 border-gray-700">
        
        {/* Device Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 md:w-40 h-6 md:h-8 bg-gray-900 rounded-b-2xl md:rounded-b-3xl z-10 border-l-2 md:border-l-4 border-r-2 md:border-r-4 border-b-2 md:border-b-4 border-gray-700"></div>
        
        {/* Device Speakers */}
        <div className="absolute top-2 md:top-3 left-1/2 transform -translate-x-1/2 w-16 md:w-20 h-1 md:h-1.5 bg-gray-700 rounded-full z-20"></div>
        
        {/* Front Camera */}
        <div className="absolute top-3 md:top-4 right-20 md:right-24 w-2 md:w-3 h-2 md:h-3 bg-gray-800 rounded-full z-20 border border-gray-600"></div>
        
        {/* Mobile Screen Content */}
        <div className="bg-gradient-to-br from-[#2d1b3d] to-[#1a0f2e] rounded-[32px] md:rounded-[38px] overflow-hidden h-[600px] sm:h-[700px] md:h-[800px] lg:h-[900px] xl:h-[950px] relative border border-purple-500/30">
          
          {/* Mobile Status Bar */}
          <div className="flex justify-between items-center pt-8 md:pt-12 px-4 md:px-6 pb-2 md:pb-3">
            <span className="text-white text-xs md:text-sm font-medium">9:41</span>
            <div className="flex items-center gap-1 md:gap-2">
              <div className="w-3 md:w-4 h-2 md:h-3 bg-white/90 rounded-sm md:rounded-md"></div>
              <div className="w-3 md:w-4 h-2 md:h-3 bg-white/90 rounded-sm md:rounded-md"></div>
              <div className="w-6 md:w-8 h-2 md:h-3 bg-white/90 rounded-sm md:rounded-md"></div>
              <div className="w-3 md:w-4 h-3 md:h-4 bg-white/90 rounded-full flex items-center justify-center">
                <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-gray-900 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Content Container */}
          <div className="h-[520px] sm:h-[620px] md:h-[720px] lg:h-[800px] xl:h-[850px] pb-4 flex flex-col overflow-y-auto">
            {/* Mobile Header with Catination Logo */}
            <div className="flex items-center justify-between mb-6 md:mb-8 px-4 md:px-6">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                  <Image
                    src="/catination-logo.png"
                    alt="Catination CRM"
                    width={48}
                    height={48}
                    className="object-cover w-8 h-8 md:w-10 md:h-10"
                    priority
                  />
                </div>
                <div>
                  <h1 className="text-white text-lg md:text-xl font-bold">Catination CRM</h1>
                  <p className="text-purple-300 text-xs md:text-sm">Real Estate Dashboard</p>
                </div>
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-500/30 rounded-full flex items-center justify-center border border-purple-500/50">
                <div className="w-2 md:w-3 h-2 md:h-3 bg-purple-400 rounded-full"></div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8 px-4 md:px-6">
              <div className="bg-gradient-to-br from-purple-600/30 to-purple-700/20 rounded-2xl md:rounded-3xl p-3 md:p-4 border border-purple-500/30 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-white/70 text-xs md:text-sm">Total Leads</p>
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                    <span className="text-green-400 text-xs">↑</span>
                  </div>
                </div>
                <p className="text-white text-xl md:text-2xl font-bold">156</p>
                <p className="text-green-400 text-xs mt-1">+24 this week</p>
              </div>
              <div className="bg-gradient-to-br from-blue-600/30 to-blue-700/20 rounded-2xl md:rounded-3xl p-3 md:p-4 border border-blue-500/30 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-white/70 text-xs md:text-sm">Active Tasks</p>
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <span className="text-orange-400 text-xs">!</span>
                  </div>
                </div>
                <p className="text-white text-xl md:text-2xl font-bold">18</p>
                <p className="text-orange-400 text-xs mt-1">8 pending</p>
              </div>
            </div>

            {/* Additional Stats Row */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8 px-4 md:px-6">
              <div className="bg-gradient-to-br from-green-600/30 to-green-700/20 rounded-2xl md:rounded-3xl p-3 md:p-4 border border-green-500/30">
                <p className="text-white/70 text-xs md:text-sm">Meetings</p>
                <p className="text-white text-lg md:text-xl font-bold">12</p>
                <p className="text-green-400 text-xs">+5 scheduled</p>
              </div>
              <div className="bg-gradient-to-br from-red-600/30 to-red-700/20 rounded-2xl md:rounded-3xl p-3 md:p-4 border border-red-500/30">
                <p className="text-white/70 text-xs md:text-sm">Hot Leads</p>
                <p className="text-white text-lg md:text-xl font-bold">32</p>
                <p className="text-red-400 text-xs">Priority follow up</p>
              </div>
            </div>

            {/* Performance Chart */}
            <div className="bg-[#1a0f2e]/80 rounded-2xl md:rounded-3xl p-4 md:p-5 mb-6 md:mb-8 mx-4 md:mx-6 border border-purple-500/20 shadow-lg">
              <div className="flex justify-between items-center mb-4 md:mb-6">
                <h3 className="text-white text-base md:text-lg font-bold">Sales Performance</h3>
                <span className="text-purple-300 text-xs md:text-sm">Catination Analytics</span>
              </div>
              <div className="h-32 md:h-40 relative">
                <svg className="w-full h-full" viewBox="0 0 400 160">
                  {/* Grid Lines */}
                  <line x1="0" y1="30" x2="400" y2="30" stroke="#4B5563" strokeWidth="1.5" strokeDasharray="5" />
                  <line x1="0" y1="80" x2="400" y2="80" stroke="#4B5563" strokeWidth="1.5" strokeDasharray="5" />
                  <line x1="0" y1="130" x2="400" y2="130" stroke="#4B5563" strokeWidth="1.5" strokeDasharray="5" />
                  
                  {/* Performance Line */}
                  <path 
                    d="M 20,130 Q 60,100 100,120 Q 140,70 180,90 Q 220,40 260,60 Q 300,20 340,40 Q 380,15 390,25" 
                    stroke="url(#mobileGradient)" 
                    strokeWidth="3" 
                    fill="none"
                    strokeLinecap="round"
                  />
                  
                  {/* Fill under the line */}
                  <path 
                    d="M 20,130 Q 60,100 100,120 Q 140,70 180,90 Q 220,40 260,60 Q 300,20 340,40 Q 380,15 390,25 L 390,160 L 20,160 Z" 
                    fill="url(#mobileFill)" 
                    fillOpacity="0.3"
                  />

                  {/* Data Points */}
                  <circle cx="20" cy="130" r="3" fill="#8b5cf6" />
                  <circle cx="100" cy="120" r="3" fill="#a855f7" />
                  <circle cx="180" cy="90" r="3" fill="#a855f7" />
                  <circle cx="260" cy="60" r="3" fill="#c084fc" />
                  <circle cx="340" cy="40" r="3" fill="#c084fc" />
                  <circle cx="390" cy="25" r="3" fill="#e9d5ff" />
                  
                  <defs>
                    <linearGradient id="mobileGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="50%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#c084fc" />
                    </linearGradient>
                    <linearGradient id="mobileFill" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex justify-between mt-3 md:mt-4">
                <span className="text-white/60 text-xs">Mon</span>
                <span className="text-white/60 text-xs">Tue</span>
                <span className="text-white/60 text-xs">Wed</span>
                <span className="text-white/60 text-xs">Thu</span>
                <span className="text-white/60 text-xs">Fri</span>
                <span className="text-white/60 text-xs">Sat</span>
                <span className="text-white/60 text-xs">Sun</span>
              </div>
            </div>

            {/* Project Pipeline */}
            <div className="bg-[#1a0f2e]/80 rounded-2xl md:rounded-3xl p-4 md:p-5 mb-6 md:mb-8 mx-4 md:mx-6 border border-purple-500/20 shadow-lg">
              <div className="flex justify-between items-center mb-4 md:mb-6">
                <h3 className="text-white text-base md:text-lg font-bold">Project Pipeline</h3>
                <span className="text-purple-300 text-xs md:text-sm">Catination Projects</span>
              </div>
              <div className="space-y-3 md:space-y-4">
                {[
                  { project: "Sky Villas", progress: 75, leads: 45, value: "₹12.5Cr" },
                  { project: "Luxury Apartments", progress: 60, leads: 32, value: "₹8.2Cr" },
                  { project: "Green Valley", progress: 90, leads: 28, value: "₹15.8Cr" },
                  { project: "Ocean View", progress: 45, leads: 19, value: "₹6.7Cr" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white text-sm font-medium">{item.project}</span>
                        <span className="text-purple-300 text-xs">{item.value}</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5 md:h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-purple-600 h-1.5 md:h-2 rounded-full" 
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-white/60 text-xs">{item.progress}% sold</span>
                        <span className="text-white/60 text-xs">{item.leads} leads</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activities */}
            <div className="mb-6 md:mb-8 px-4 md:px-6">
              <div className="flex justify-between items-center mb-4 md:mb-6">
                <h3 className="text-white text-base md:text-lg font-bold">Recent Activities</h3>
                <span className="text-purple-300 text-xs md:text-sm">View all</span>
              </div>
              <div className="space-y-3 md:space-y-4">
                {[
                  { 
                    task: "Call with John Doe - Sky Villa", 
                    time: "10:00 AM", 
                    priority: "high",
                    type: "call",
                    status: "completed",
                    project: "Sky Villas"
                  },
                  { 
                    task: "Property tour scheduled", 
                    time: "2:00 PM", 
                    priority: "medium",
                    type: "tour",
                    status: "upcoming",
                    project: "Luxury Apartments"
                  },
                  { 
                    task: "Follow up with Sarah", 
                    time: "4:30 PM", 
                    priority: "high",
                    type: "followup",
                    status: "pending",
                    project: "Green Valley"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 md:gap-4 bg-white/5 rounded-2xl md:rounded-3xl p-3 md:p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                      item.priority === 'high' ? 'bg-red-400 shadow-lg shadow-red-400/25' : 
                      item.priority === 'medium' ? 'bg-yellow-400 shadow-lg shadow-yellow-400/25' : 
                      'bg-green-400 shadow-lg shadow-green-400/25'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-white text-sm md:text-base font-medium">{item.task}</p>
                      <div className="flex items-center gap-2 md:gap-3 mt-1">
                        <span className="text-white/60 text-xs">{item.time}</span>
                        <span className="text-purple-300 text-xs bg-purple-500/20 px-2 py-1 rounded-full">
                          {item.project}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          item.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                          item.status === 'upcoming' ? 'bg-blue-500/20 text-blue-400' :
                          item.status === 'pending' ? 'bg-orange-500/20 text-orange-400' :
                          'bg-purple-500/20 text-purple-400'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-500/30">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-400 rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="mb-6 md:mb-8 px-4 md:px-6">
              <div className="flex justify-between items-center mb-4 md:mb-6">
                <h3 className="text-white text-base md:text-lg font-bold">Upcoming Events</h3>
                <span className="text-purple-300 text-xs md:text-sm">See all</span>
              </div>
              <div className="space-y-3 md:space-y-4">
                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl md:rounded-3xl p-4 md:p-5 border border-purple-500/30">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-600/30 rounded-xl md:rounded-2xl flex items-center justify-center border border-purple-500/50">
                      <span className="text-purple-300 text-base md:text-lg">📅</span>
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm md:text-base">Team Meeting</p>
                      <p className="text-white/60 text-xs md:text-sm">Tomorrow, 11:00 AM</p>
                      <p className="text-purple-300 text-xs mt-1">Quarterly Review</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="mb-4 md:mb-6 px-4 md:px-6">
              <div className="flex justify-between items-center mb-3 md:mb-4">
                <h3 className="text-white text-base md:text-lg font-bold">Notifications</h3>
                <span className="text-purple-300 text-xs md:text-sm">3 new</span>
              </div>
              <div className="space-y-2 md:space-y-3">
                <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-2xl md:rounded-3xl p-3 md:p-4 border border-purple-500/20">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                      <span className="text-green-400 text-xs md:text-sm">✓</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">New Lead Assigned</p>
                      <p className="text-white/60 text-xs">From Catination Portal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="mb-4 md:mb-6 px-4 md:px-6">
              <div className="flex justify-between items-center mb-3 md:mb-4">
                <h3 className="text-white text-base md:text-lg font-bold">Performance Metrics</h3>
                <span className="text-purple-300 text-xs md:text-sm">This Month</span>
              </div>
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                <div className="bg-gradient-to-br from-purple-600/20 to-purple-700/10 rounded-xl md:rounded-2xl p-2 md:p-3 text-center border border-purple-500/20">
                  <p className="text-white text-base md:text-lg font-bold">78%</p>
                  <p className="text-white/60 text-xs">Conversion</p>
                </div>
                <div className="bg-gradient-to-br from-blue-600/20 to-blue-700/10 rounded-xl md:rounded-2xl p-2 md:p-3 text-center border border-blue-500/20">
                  <p className="text-white text-base md:text-lg font-bold">92%</p>
                  <p className="text-white/60 text-xs">Satisfaction</p>
                </div>
                <div className="bg-gradient-to-br from-green-600/20 to-green-700/10 rounded-xl md:rounded-2xl p-2 md:p-3 text-center border border-green-500/20">
                  <p className="text-white text-base md:text-lg font-bold">15</p>
                  <p className="text-white/60 text-xs">Deals Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="bg-[#1a0f2e] rounded-2xl md:rounded-3xl p-3 md:p-4 mx-4 md:mx-6 border border-purple-500/20 shadow-lg">
            <div className="grid grid-cols-5 gap-2 md:gap-3">
              {[
                { icon: "🏠", label: "Home", active: true },
                { icon: "👥", label: "Leads" },
                { icon: "📊", label: "Stats" },
                { icon: "📋", label: "Tasks" },
                { icon: "🔧", label: "CRM" }
              ].map((item, index) => (
                <button
                  key={index}
                  className={`flex flex-col items-center gap-1 p-2 md:p-3 rounded-xl md:rounded-2xl transition-all ${
                    item.active 
                      ? 'bg-gradient-to-r from-purple-600/40 to-purple-700/30 text-purple-400 shadow-lg shadow-purple-500/20' 
                      : 'text-white/60 hover:text-white/80 hover:bg-white/5'
                  }`}
                >
                  <span className="text-sm md:text-lg">{item.icon}</span>
                  <span className="text-xs font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Home Indicator */}
          <div className="flex justify-center mt-3 md:mt-4">
            <div className="w-32 md:w-40 h-1 md:h-2 bg-white/40 rounded-full"></div>
          </div>

          {/* Floating Action Button */}
          <div className="absolute bottom-24 md:bottom-28 lg:bottom-32 xl:bottom-36 left-1/2 transform -translate-x-1/2">
            <button className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-2xl shadow-purple-700/50 border border-purple-400/50 hover:scale-110 transition-transform duration-300">
              <span className="text-white text-base md:text-lg font-bold">C+</span>
            </button>
          </div>
        </div>

        {/* Device Buttons */}
        <div className="absolute -left-1 md:-left-2 top-32 md:top-40 lg:top-44 xl:top-52 h-16 md:h-20 w-1 md:w-2 bg-gray-700 rounded-l-sm md:rounded-l-md"></div>
        <div className="absolute -left-1 md:-left-2 top-44 md:top-52 lg:top-56 xl:top-68 h-16 md:h-20 w-1 md:w-2 bg-gray-700 rounded-l-sm md:rounded-l-md"></div>
        <div className="absolute -right-1 md:-right-2 top-32 md:top-40 lg:top-44 xl:top-52 h-20 md:h-24 lg:h-28 xl:h-32 w-1 md:w-2 bg-gray-700 rounded-r-sm md:rounded-r-md"></div>
      </div>

      {/* Reflection Effect */}
      <div className="absolute inset-0 rounded-[40px] md:rounded-[50px] pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-16 md:h-20 lg:h-24 bg-gradient-to-b from-white/10 to-transparent rounded-t-[40px] md:rounded-t-[50px]"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 md:h-20 lg:h-24 bg-gradient-to-t from-black/20 to-transparent rounded-b-[40px] md:rounded-b-[50px]"></div>
      </div>

      {/* Shadow Effect */}
      <div className="absolute -bottom-3 md:-bottom-4 left-1/2 transform -translate-x-1/2 w-48 md:w-56 lg:w-64 h-6 md:h-8 bg-purple-900/30 blur-xl md:blur-2xl rounded-full"></div>
    </div>
  );
}