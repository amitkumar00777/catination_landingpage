// src/app/components/DashboardMockup.js
import Image from 'next/image';

export default function DashboardMockup() {
  return (
    <div className="relative">
      {/* Desktop Dashboard */}
      <div className="bg-gradient-to-br from-[#2d1b3d] to-[#1a0f2e] rounded-2xl p-4 md:p-6 shadow-2xl border border-purple-500/20">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 md:mb-6 pb-3 md:pb-4 border-b border-purple-500/20">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="relative w-20 h-6 md:w-24 md:h-8">
              <Image
                src="/catination-logo.png"
                alt="Catination Logo"
                width={96}
                height={32}
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <span className="text-white/60 text-xs md:text-sm">Hello</span>
            <div className="w-6 h-6 md:w-8 md:h-8 bg-purple-600 rounded-full"></div>
          </div>
        </div>

        {/* Sidebar and Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {/* Sidebar */}
          <div className="flex md:flex-col gap-2 md:gap-0 md:space-y-3 overflow-x-auto pb-2 md:pb-0">
            <div className="text-purple-400 text-xs md:text-sm whitespace-nowrap">Dashboard</div>
            <div className="text-white/60 text-xs md:text-sm whitespace-nowrap">Clients</div>
            <div className="text-white/60 text-xs md:text-sm whitespace-nowrap">Email</div>
            <div className="text-white/60 text-xs md:text-sm whitespace-nowrap">Properties</div>
            <div className="text-white/60 text-xs md:text-sm whitespace-nowrap">Employees</div>
            <div className="text-white/60 text-xs md:text-sm whitespace-nowrap">Contacts</div>
            <div className="text-white/60 text-xs md:text-sm whitespace-nowrap">Referrals</div>
          </div>

          {/* Main Content */}
          <div className="col-span-1 md:col-span-3 space-y-4 md:space-y-6">
            {/* Agent Performance Chart */}
            <div>
              <h3 className="text-white text-xs md:text-sm mb-2 md:mb-4">Agent Performance</h3>
              <div className="bg-[#1a0f2e]/50 rounded-lg p-3 md:p-4 h-24 md:h-32 relative">
                <svg className="w-full h-full" viewBox="0 0 300 100">
                  <path 
                    d="M 10,80 Q 50,40 100,50 Q 150,30 200,45 Q 250,25 290,35" 
                    stroke="url(#gradient)" 
                    strokeWidth="2" 
                    fill="none"
                    className="md:stroke-width-3"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="50%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#c084fc" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Open Tasks */}
            <div>
              <h3 className="text-white text-xs md:text-sm mb-2 md:mb-4">Open Tasks</h3>
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full"></div>
                  <span className="text-white/70 text-xs md:text-sm">Call with John Doe</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white/70 text-xs md:text-sm">Schedule property tour</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Preview - Hidden on small screens, shown on medium and up */}
      <div className="hidden md:block absolute -bottom-8 -right-4 w-48 bg-gradient-to-br from-[#2d1b3d] to-[#1a0f2e] rounded-2xl p-4 shadow-2xl border border-purple-500/20">
        <div className="bg-[#1a0f2e] rounded-xl p-3">
          <div className="text-white text-xs mb-3">View Clients</div>
          <div className="space-y-2">
            <div className="text-white/60 text-xs">Contacts</div>
            <div className="text-white/60 text-xs">Call with John</div>
            <div className="text-white/60 text-xs">Schedule property tour</div>
            <div className="text-white/60 text-xs">Follow up with client</div>
          </div>
        </div>
      </div>
    </div>
  )
}