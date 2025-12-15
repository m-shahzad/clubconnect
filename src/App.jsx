import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Search, 
  Ticket, 
  User, 
  BarChart3, 
  Calendar, 
  Users, 
  Wallet, 
  Bell, 
  ChevronRight, 
  MapPin, 
  Clock, 
  QrCode,
  CheckCircle2,
  LogOut
} from 'lucide-react';

// --- MOCK DATA ---
const EVENTS = [
  {
    id: 1,
    title: "NUST Music Festival '25",
    society: "NUST Music Society",
    date: "Dec 20, 2025",
    time: "18:00 PM",
    location: "Concordia 1",
    price: 1500,
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=800",
    category: "Music"
  },
  {
    id: 2,
    title: "Tech Summit Keynote",
    society: "NUST ACM Student Chapter",
    date: "Dec 22, 2025",
    time: "14:00 PM",
    location: "Jinnah Auditorium",
    price: 500,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
    category: "Tech"
  },
  {
    id: 3,
    title: "Winter Recruitment Drive",
    society: "NUST Community Service Club",
    date: "Jan 10, 2026",
    time: "09:00 AM",
    location: "SADA Ground",
    price: 0,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    category: "Recruitment"
  }
];

const SOCIETIES = [
  { id: 1, name: "NUST Music Society", category: "Arts", members: 120 },
  { id: 2, name: "NUST Science Society", category: "Science", members: 85 },
  { id: 3, name: "NUST Adventure Club", category: "Sports", members: 200 },
  { id: 4, name: "NUST Debating Society", category: "Literature", members: 50 },
];

const KPIS = [
  { label: "Total Revenue", value: "PKR 450K", change: "+12%", icon: Wallet, color: "text-emerald-500" },
  { label: "Active Members", value: "1,240", change: "+5%", icon: Users, color: "text-indigo-500" },
  { label: "Tickets Sold", value: "3,500", change: "+18%", icon: Ticket, color: "text-rose-500" },
  { label: "Event Rating", value: "4.8/5.0", change: "+0.2", icon: CheckCircle2, color: "text-amber-500" },
];

// --- COMPONENTS ---

const Navigation = ({ activeTab, setActiveTab, userType }) => {
  const tabs = userType === 'student' 
    ? [
        { id: 'home', icon: Home, label: 'Home' },
        { id: 'explore', icon: Search, label: 'Explore' },
        { id: 'tickets', icon: Ticket, label: 'My Tickets' },
        { id: 'profile', icon: User, label: 'Profile' },
      ]
    : [
        { id: 'dashboard', icon: BarChart3, label: 'Dashboard' },
        { id: 'events', icon: Calendar, label: 'Events' },
        { id: 'members', icon: Users, label: 'Members' },
        { id: 'profile', icon: User, label: 'Profile' },
      ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe pt-2 px-6 flex justify-between items-center z-50 h-20 shadow-[0_-5px_10px_rgba(0,0,0,0.02)]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex flex-col items-center justify-center space-y-1 w-16 transition-all duration-200 ${
            activeTab === tab.id ? 'text-indigo-600 transform scale-105' : 'text-gray-400'
          }`}
        >
          <tab.icon size={24} strokeWidth={activeTab === tab.id ? 2.5 : 2} />
          <span className="text-[10px] font-medium">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

// --- SCREENS ---

const WelcomeScreen = ({ onLogin }) => (
  <div className="h-screen bg-gradient-to-br from-indigo-600 to-indigo-800 text-white flex flex-col justify-end p-8">
    <div className="mb-auto mt-20 text-center">
      <div className="w-20 h-20 bg-white rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-xl">
        <span className="text-4xl">🔗</span>
      </div>
      <h1 className="text-4xl font-bold mb-2 tracking-tight">ClubConnect</h1>
      <p className="text-indigo-200 text-lg">One App. One Campus.</p>
    </div>

    <div className="space-y-4 mb-10">
      <button 
        onClick={() => onLogin('student')}
        className="w-full bg-white text-indigo-700 font-bold py-4 rounded-xl shadow-lg active:scale-95 transition-transform flex items-center justify-center space-x-2"
      >
        <User size={20} />
        <span>Continue as Student</span>
      </button>
      <button 
        onClick={() => onLogin('executive')}
        className="w-full bg-indigo-900/50 backdrop-blur-sm border border-indigo-400/30 text-white font-semibold py-4 rounded-xl active:scale-95 transition-transform flex items-center justify-center space-x-2"
      >
        <BarChart3 size={20} />
        <span>Login as Society Executive</span>
      </button>
    </div>
  </div>
);

const StudentHome = ({ onBook }) => (
  <div className="p-4 pb-24 space-y-6">
    <div className="flex justify-between items-center">
      <div>
        <p className="text-gray-500 text-sm font-medium">Good Morning,</p>
        <h2 className="text-2xl font-bold text-gray-800">Muhammad Anas</h2>
      </div>
      <div className="p-2 bg-gray-100 rounded-full relative">
        <Bell size={24} className="text-gray-600" />
        <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white"></span>
      </div>
    </div>

    {/* Featured Banner */}
    <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
      <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Featured" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4 text-white">
        <span className="bg-rose-500 text-xs font-bold px-2 py-1 rounded w-fit mb-2">Featured</span>
        <h3 className="text-xl font-bold">NUST Olympiad '25</h3>
        <p className="text-sm text-gray-200">Starting in 2 days</p>
      </div>
    </div>

    {/* Feed */}
    <div>
      <h3 className="text-lg font-bold text-gray-800 mb-4">Upcoming Events</h3>
      <div className="space-y-4">
        {EVENTS.map(event => (
          <div key={event.id} className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 flex gap-4">
            <img src={event.image} className="w-24 h-24 rounded-lg object-cover bg-gray-200" alt={event.title} />
            <div className="flex-1 flex flex-col justify-between py-1">
              <div>
                <span className="text-indigo-600 text-xs font-bold uppercase tracking-wider">{event.category}</span>
                <h4 className="font-bold text-gray-800 leading-tight mt-1">{event.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{event.society}</p>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm font-bold text-gray-900">{event.price === 0 ? 'Free' : `PKR ${event.price}`}</span>
                <button 
                  onClick={() => onBook(event)}
                  className="bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg active:bg-indigo-700 transition-colors"
                >
                  Book
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ExecutiveDashboard = () => (
  <div className="p-4 pb-24 space-y-6">
    <div className="flex justify-between items-center">
      <div>
        <p className="text-gray-500 text-sm font-medium">Executive Dashboard</p>
        <h2 className="text-2xl font-bold text-gray-800">NUST Music Society</h2>
      </div>
      <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold">
        NM
      </div>
    </div>

    {/* KPI Grid */}
    <div className="grid grid-cols-2 gap-3">
      {KPIS.map((kpi, idx) => (
        <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-2">
            <div className={`p-2 rounded-lg bg-gray-50 ${kpi.color}`}>
              <kpi.icon size={20} />
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">{kpi.change}</span>
          </div>
          <p className="text-xs text-gray-500 font-medium">{kpi.label}</p>
          <h4 className="text-xl font-bold text-gray-900">{kpi.value}</h4>
        </div>
      ))}
    </div>

    {/* Simple Chart Visualization */}
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
      <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
        <BarChart3 size={18} className="text-indigo-500" />
        Monthly Ticket Sales
      </h3>
      <div className="flex items-end justify-between h-40 gap-2">
        {[40, 65, 34, 78, 95, 50].map((h, i) => (
          <div key={i} className="w-full bg-indigo-50 rounded-t-lg relative group">
            <div 
              style={{ height: `${h}%` }} 
              className="absolute bottom-0 w-full bg-indigo-500 rounded-t-lg transition-all duration-500 group-hover:bg-indigo-600"
            ></div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-2 text-xs text-gray-400">
        <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
      </div>
    </div>

    {/* Recent Activity */}
    <div>
      <h3 className="font-bold text-gray-800 mb-3">Recent Activity</h3>
      <div className="bg-white rounded-xl border border-gray-100 divide-y divide-gray-100">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="p-4 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">New member registration</p>
              <p className="text-xs text-gray-400">2 minutes ago</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TicketScreen = ({ bookedEvents }) => (
  <div className="p-4 pb-24 space-y-6 h-full flex flex-col">
    <h2 className="text-2xl font-bold text-gray-800">My Tickets</h2>
    
    {bookedEvents.length === 0 ? (
      <div className="flex-1 flex flex-col items-center justify-center text-center p-8 text-gray-400">
        <Ticket size={64} className="mb-4 opacity-20" />
        <p>No tickets yet.</p>
        <button className="mt-4 text-indigo-600 font-bold text-sm">Browse Events</button>
      </div>
    ) : (
      <div className="space-y-6">
        {bookedEvents.map((event, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden relative">
            {/* Ticket Header */}
            <div className="bg-indigo-600 p-4 text-white flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">{event.title}</h3>
                <p className="text-indigo-200 text-sm">{event.society}</p>
              </div>
              <div className="bg-white/20 p-1.5 rounded-lg backdrop-blur-sm">
                <span className="font-mono font-bold">#TK-{8492 + index}</span>
              </div>
            </div>
            
            {/* Ticket Body */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold mb-1">Date</p>
                  <p className="font-medium text-gray-800 flex items-center gap-1"><Calendar size={14} /> {event.date}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold mb-1">Time</p>
                  <p className="font-medium text-gray-800 flex items-center gap-1"><Clock size={14} /> {event.time}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold mb-1">Gate</p>
                  <p className="font-medium text-gray-800 flex items-center gap-1"><MapPin size={14} /> C1</p>
                </div>
              </div>
              
              <div className="border-t border-dashed border-gray-300 py-6 flex flex-col items-center justify-center space-y-3">
                <div className="bg-white p-2 border border-gray-100 rounded-lg shadow-inner">
                  <QrCode size={120} className="text-gray-800" />
                </div>
                <p className="text-xs text-center text-gray-400">Scan this code at the entrance</p>
              </div>
            </div>

            {/* Ticket Rip Decorations */}
            <div className="absolute top-[88px] -left-3 w-6 h-6 bg-gray-50 rounded-full"></div>
            <div className="absolute top-[88px] -right-3 w-6 h-6 bg-gray-50 rounded-full"></div>
          </div>
        ))}
      </div>
    )}
  </div>
);

const ProfileScreen = ({ userType, onLogout }) => (
  <div className="p-4 pb-24">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Profile</h2>
    
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 mb-6">
      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
        {userType === 'student' ? '👨‍🎓' : '👔'}
      </div>
      <div>
        <h3 className="font-bold text-lg">{userType === 'student' ? 'Muhammad Anas' : 'Club President'}</h3>
        <p className="text-gray-500 text-sm">{userType === 'student' ? 'BS A&F - 2024' : 'NUST Music Society'}</p>
      </div>
    </div>

    <div className="space-y-2">
      {[
        { icon: User, label: 'Edit Profile' },
        { icon: Bell, label: 'Notifications' },
        { icon: Wallet, label: 'Payment Methods' },
        { icon: CheckCircle2, label: 'Help & Support' },
      ].map((item, i) => (
        <button key={i} className="w-full bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between active:scale-[0.99] transition-transform">
          <div className="flex items-center gap-3 text-gray-700">
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </div>
          <ChevronRight size={18} className="text-gray-400" />
        </button>
      ))}

      <button onClick={onLogout} className="w-full bg-rose-50 p-4 rounded-xl border border-rose-100 flex items-center justify-between mt-6 text-rose-600">
        <div className="flex items-center gap-3">
          <LogOut size={20} />
          <span className="font-medium">Log Out</span>
        </div>
      </button>
    </div>
  </div>
);

// --- MAIN APP COMPONENT ---

export default function App() {
  const [userType, setUserType] = useState(null); // 'student' | 'executive' | null
  const [activeTab, setActiveTab] = useState('home');
  const [bookedEvents, setBookedEvents] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleLogin = (type) => {
    setUserType(type);
    setActiveTab(type === 'student' ? 'home' : 'dashboard');
  };

  const handleLogout = () => {
    setUserType(null);
    setBookedEvents([]);
  };

  const handleBooking = (event) => {
    setBookedEvents([...bookedEvents, event]);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
    setActiveTab('tickets');
  };

  // Mock Notification of Success
  const Notification = () => (
    <div className="fixed top-4 left-4 right-4 bg-emerald-500 text-white p-4 rounded-xl shadow-2xl z-[60] flex items-center gap-3 animate-bounce">
      <div className="bg-white/20 p-1 rounded-full"><CheckCircle2 size={20} /></div>
      <div>
        <p className="font-bold text-sm">Success!</p>
        <p className="text-xs text-emerald-100">Ticket booked successfully.</p>
      </div>
    </div>
  );

  if (!userType) return <WelcomeScreen onLogin={handleLogin} />;

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-900 mx-auto max-w-md shadow-2xl overflow-hidden relative">
      {/* Mobile Frame Container (optional, handled by max-w-md) */}
      
      {showConfetti && <Notification />}

      <main className="h-full overflow-y-auto no-scrollbar">
        {userType === 'student' && (
          <>
            {activeTab === 'home' && <StudentHome onBook={handleBooking} />}
            {activeTab === 'explore' && (
              <div className="p-4 pb-24 space-y-4">
                <h2 className="text-2xl font-bold mb-4">Explore Clubs</h2>
                {SOCIETIES.map(soc => (
                  <div key={soc.id} className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-600">
                        {soc.name.substring(0, 2)}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">{soc.name}</h4>
                        <p className="text-xs text-gray-500">{soc.category} • {soc.members} members</p>
                      </div>
                    </div>
                    <button className="text-indigo-600 font-bold text-xs bg-indigo-50 px-3 py-1.5 rounded-lg">Join</button>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'tickets' && <TicketScreen bookedEvents={bookedEvents} />}
            {activeTab === 'profile' && <ProfileScreen userType={userType} onLogout={handleLogout} />}
          </>
        )}

        {userType === 'executive' && (
          <>
            {activeTab === 'dashboard' && <ExecutiveDashboard />}
            {activeTab === 'events' && (
              <div className="p-4 flex items-center justify-center h-[80vh] text-gray-400 flex-col">
                <Calendar size={48} className="mb-4 opacity-50" />
                <p>Event Management Module</p>
              </div>
            )}
            {activeTab === 'members' && (
               <div className="p-4 flex items-center justify-center h-[80vh] text-gray-400 flex-col">
               <Users size={48} className="mb-4 opacity-50" />
               <p>Member Directory Module</p>
             </div>
            )}
            {activeTab === 'profile' && <ProfileScreen userType={userType} onLogout={handleLogout} />}
          </>
        )}
      </main>

      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} userType={userType} />
    </div>
  );
}
