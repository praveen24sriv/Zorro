import React from 'react';
import { LayoutDashboard, FileText, Settings, ChevronDown, Plus, X } from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-72 bg-[#F3F4F6] flex flex-col gap-6 p-4 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Mobile Close Button */}
        <button onClick={onClose} className="lg:hidden absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm">
          <X size={20} />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2 px-2 pt-2 mb-2">
          <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg">C</div>
          <span className="font-bold text-lg tracking-tight">Codename.com</span>
          <ChevronDown size={16} className="text-gray-400" />
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1 flex-1 overflow-y-auto no-scrollbar">
          {['Starred', 'Recent', 'Sales list', 'Goals'].map((item) => (
             <NavItem key={item} label={item} />
          ))}
          
          <div className="mt-6">
            <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active />
            {/* Sub-items */}
            <div className="pl-11 text-sm text-gray-500 space-y-3 mt-3 font-medium">
              <p className="cursor-pointer hover:text-black transition-colors">Codename</p>
              <div className="flex justify-between items-center cursor-pointer hover:text-black transition-colors">
                <p>Shared with me</p>
                <ChevronDown size={14} />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex justify-between px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              <span>Reports</span>
              <Plus size={16} className="cursor-pointer hover:text-black" />
            </div>
            <NavItem icon={<FileText size={20} />} label="New report" textActive />
            <NavItem icon={<div className="w-5" />} label="Analytics" badge="7" />
          </div>
        </nav>

        {/* Bottom User Actions */}
        <div className="px-2 pb-2 mt-auto space-y-6">
           <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-pink-100 border border-pink-200 flex items-center justify-center relative">
                 <div className="w-3.5 h-3.5 bg-[#F43F5E] rounded-full absolute"></div>
              </div>
              <div className="flex flex-col">
                 <span className="text-sm font-bold">Notifications</span>
                 <span className="text-xs text-gray-500">2 unread</span>
              </div>
           </div>
           <button className="flex items-center gap-3 text-gray-400 hover:text-gray-600 transition-colors">
              <Settings size={22} />
              <span className="font-medium">Settings</span>
           </button>
        </div>
      </aside>
    </>
  );
};

// Internal Helper Component
const NavItem = ({ icon, label, active, textActive, badge }) => (
  <div className={`
    flex items-center justify-between px-4 py-3 rounded-full cursor-pointer transition-all duration-200 group
    ${active ? 'bg-white shadow-sm' : 'hover:bg-gray-200/50'}
  `}>
    <div className={`flex items-center gap-3.5 ${active || textActive ? 'text-[#F43F5E] font-bold' : 'text-gray-500 font-medium group-hover:text-gray-700'}`}>
      {icon ? icon : <div className="w-5" />}
      <span className="text-sm">{label}</span>
    </div>
    {badge && <span className="bg-[#F43F5E] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm">{badge}</span>}
  </div>
);

export default Sidebar;