
import React, { useState } from 'react';
import { Search, Menu, Plus, ChevronDown, MoreHorizontal, ArrowUpRight, Filter, Download, Share2 } from 'lucide-react';
import Sidebar from './components/sideBar';
import { StatBadge, KPICard, ListItem, SalesRow, Bar } from './components/widgets';
import { kpiData, platformStats, salesData } from './data';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F3F4F6] font-sans text-slate-800 p-2 md:p-4 overflow-hidden relative">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <main className="flex-1 bg-white rounded-[40px] shadow-sm overflow-y-auto h-[calc(100vh-32px)] relative p-4 md:p-8 no-scrollbar">
        {/* Header */}
        <header className="flex flex-col-reverse md:flex-row justify-between md:items-center gap-4 mb-8">
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pink-500 transition-colors" size={20} />
            <input type="text" placeholder='Try searching "insights"' className="w-full bg-gray-50 hover:bg-gray-100 focus:bg-white rounded-full py-3 pl-12 pr-4 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-gray-100 focus:shadow-md"/>
          </div>
          <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto">
             <button className="p-2 md:hidden rounded-full hover:bg-gray-100" onClick={() => setIsSidebarOpen(true)}><Menu size={24} /></button>
            <div className="flex items-center gap-4">
              <div className="flex items-center -space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white shadow-sm"></div>
                <div className="w-10 h-10 rounded-full bg-blue-200 border-2 border-white shadow-sm"></div>
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-xs border-2 border-white font-bold shadow-sm">C</div>
              </div>
              <button className="hidden md:block p-3 rounded-full hover:bg-gray-100 transition-colors"><Menu size={20} /></button>
              <button className="w-10 h-10 rounded-full bg-[#F43F5E] text-white flex items-center justify-center shadow-lg shadow-pink-200 hover:scale-110 transition-transform"><Plus size={20} /></button>
            </div>
          </div>
        </header>

        {/* Title Row */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-10">
          <div>
            <div className="flex gap-2 mb-4">
               {["Armin A.", "Eren Y."].map(name => (
                 <span key={name} className="bg-gray-50 border border-gray-100 rounded-full px-4 py-1.5 text-xs font-bold text-gray-600 flex items-center gap-2 cursor-pointer hover:bg-white hover:shadow-sm transition-all">
                   <div className="w-5 h-5 rounded-full bg-gray-300"></div> {name}
                 </span>
               ))}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">New report</h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
             <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-white hover:shadow-sm transition-all">
               <div className="w-8 h-4 bg-gray-800 rounded-full relative"><div className="absolute right-1 top-1 w-2 h-2 bg-white rounded-full"></div></div>
               <span className="text-gray-500 font-medium">Timeframe</span><span className="font-bold ml-2">Sep 1 - Nov 30, 2023</span><ChevronDown size={14} />
             </div>
             <button className="p-2.5 rounded-full border border-gray-100 hover:bg-gray-50 transition-colors text-gray-600"><Share2 size={18} /></button>
             <button className="p-2.5 rounded-full border border-gray-100 hover:bg-gray-50 transition-colors text-gray-600"><Download size={18} /></button>
          </div>
        </div>

        {/* --- DASHBOARD GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 pb-8">
          {/* 1. Revenue Card */}
          <div className="col-span-1 md:col-span-2 lg:col-span-5 flex flex-col justify-between min-h-[180px]">
             <div>
               <h3 className="font-bold text-gray-800 mb-2">Revenue</h3>
               <div className="flex flex-wrap items-baseline gap-3 mb-2">
                 <span className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">$528,976.82</span>
                 <div className="flex gap-2"><span className="bg-pink-100 text-[#F43F5E] px-2 py-0.5 rounded-full text-xs font-extrabold flex items-center"><ArrowUpRight size={12} className="mr-1 stroke-[3]"/> 7.9%</span><span className="bg-[#F43F5E] text-white px-2 py-0.5 rounded-full text-xs font-bold">$27,335.09</span></div>
               </div>
               <p className="text-xs font-medium text-gray-400">vs prev. $501,641.73 Jun 1 - Aug 31, 2023</p>
             </div>
             <div className="flex gap-4 mt-6 overflow-x-auto pb-2"><StatBadge label="$209,633" /><StatBadge label="$156,841" highlight /><StatBadge label="$117,115" /></div>
          </div>

          {/* 2. Top Sales */}
          <div className="col-span-1 lg:col-span-2 bg-white border border-gray-100 rounded-3xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-default group">
            <p className="text-xs font-bold text-gray-400 mb-1">Top sales</p>
            <h3 className="text-2xl font-black mb-6 group-hover:scale-105 transition-transform origin-left">72</h3>
            <div className="flex justify-between items-center bg-gray-50 rounded-full p-1.5 pr-3 cursor-pointer hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-full bg-blue-400 border-2 border-white"></div><span className="text-xs font-bold">Mikasa</span></div><ChevronDown size={14} className="text-gray-400" />
            </div>
          </div>

          {/* 3. Best Deal (Dark) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-[#0F172A] text-white rounded-3xl p-6 shadow-xl relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-gray-800 rounded-full opacity-50 blur-2xl group-hover:bg-pink-900 transition-colors duration-500"></div>
            <div className="flex justify-between items-start mb-2 relative z-10"><p className="text-xs font-medium text-gray-400">Best deal</p><div className="text-xs text-gray-500 border border-gray-700 rounded p-1">★</div></div>
            <h3 className="text-3xl font-bold mb-1 relative z-10">$42,300</h3><p className="text-sm text-gray-400 mb-4 font-medium relative z-10">Rolf Inc.</p>
            <button className="bg-white text-black rounded-xl p-1.5 absolute bottom-5 right-5 hover:bg-gray-200 transition-colors z-10"><ChevronDown size={18}/></button>
          </div>

          {/* 4. KPI Columns */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-row lg:flex-col gap-4">{kpiData.map((kpi, index) => <KPICard key={index} {...kpi} />)}</div>

          {/* 5. Filters List */}
          <div className="col-span-1 md:col-span-1 lg:col-span-4 bg-gray-50 rounded-3xl p-6 hover:bg-gray-100/50 transition-colors">
            <div className="flex justify-between items-center mb-6"><div className="p-2.5 bg-white rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:border-gray-300 transition-colors"><MoreHorizontal size={18}/></div><button className="flex items-center gap-1.5 text-xs font-bold bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 hover:shadow-md transition-all">Filters <Filter size={12}/></button></div>
            <div className="space-y-5">{platformStats.map((stat, index) => <ListItem key={index} {...stat} />)}</div>
          </div>

          {/* 6. Bar Chart */}
          <div className="col-span-1 md:col-span-1 lg:col-span-4 bg-gray-50 rounded-3xl p-6 relative flex flex-col hover:bg-gray-100/50 transition-colors">
             <div className="flex justify-between items-center mb-auto"><div className="p-2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity"><div className="w-5 h-5 border-l-2 border-b-2 border-gray-400"></div></div><button className="flex items-center gap-1.5 text-xs font-bold bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 hover:shadow-md transition-all">Filters <Filter size={12}/></button></div>
             <div className="flex justify-center items-end gap-3 sm:gap-6 h-48 mb-4">
               <div className="w-12 bg-white rounded-t-xl h-[40%] flex justify-center pt-3 text-[#1769FF] font-black text-sm shadow-sm hover:h-[45%] transition-all cursor-pointer">Be</div>
               <div className="w-12 bg-white rounded-t-xl h-[60%] flex justify-center pt-3 text-[#EA4C89] font-black text-sm shadow-sm hover:h-[65%] transition-all cursor-pointer">🏀</div>
               <div className="w-12 bg-white rounded-t-xl h-[80%] flex justify-center pt-3 text-[#EA4C89] font-black text-sm shadow-sm relative hover:h-[85%] transition-all cursor-pointer group">
                  <div className="absolute -top-10 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">$142k</div>G <div className="absolute top-8 bg-white p-1 rounded-full shadow-md"><div className="w-2.5 h-2.5 rounded-full bg-green-500"></div></div>
               </div>
               <div className="w-12 bg-white rounded-t-xl h-[50%] flex justify-center pt-3 text-[#E4405F] font-black text-sm shadow-sm hover:h-[55%] transition-all cursor-pointer">📷</div>
             </div>
             <p className="text-xs font-medium text-gray-500 mt-2 text-center leading-relaxed">Deals amount <br/> by referrer category <ChevronDown size={10} className="inline"/></p>
          </div>

          {/* 7. Sales/Revenue List */}
          <div className="col-span-1 lg:col-span-4 bg-white p-2 flex flex-col gap-2">
             <div className="grid grid-cols-5 text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1 px-3"><div className="col-span-2">Sales</div><div className="text-right">Revenue</div><div className="text-right">Leads</div><div className="text-right">KPI</div></div>
             {salesData.map((data, index) => <SalesRow key={index} {...data} />)}
             <div className="flex gap-2 mt-4 mb-2 flex-wrap"><span className="bg-gray-50 px-3 py-1.5 rounded-full text-xs font-bold text-gray-600 border border-transparent hover:border-gray-200 cursor-pointer transition-all">Top sales 👍</span><span className="bg-gray-50 px-3 py-1.5 rounded-full text-xs font-bold text-gray-600 border border-transparent hover:border-gray-200 cursor-pointer transition-all">Sales streak 🔥</span></div>
             <div className="mt-4 p-5 rounded-3xl bg-gradient-to-br from-pink-50 via-white to-pink-50 border border-pink-100 relative shadow-sm group hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-8"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-lg">🏀</div><div><p className="font-bold text-sm">Dribbble</p></div></div><span className="bg-[#F43F5E] text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-pink-200 shadow-md">+$156,841</span></div>
                <h2 className="text-4xl font-bold text-gray-300 mb-1 flex items-baseline gap-2">45.3% <span className="text-xl text-gray-400 font-semibold">$71,048</span></h2>
                <div className="h-16 w-full mt-6 flex items-end gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                   <div className="w-full h-[20%] bg-pink-200 rounded-t-sm"></div><div className="w-full h-[40%] bg-pink-300 rounded-t-sm"></div><div className="w-full h-[30%] bg-pink-200 rounded-t-sm"></div><div className="w-full h-[60%] bg-[#F43F5E] rounded-t-sm shadow-lg shadow-pink-200"></div><div className="w-full h-[45%] bg-pink-300 rounded-t-sm"></div><div className="w-full h-[55%] bg-pink-300 rounded-t-sm"></div>
                </div>
             </div>
          </div>
          
          {/* 8. Bottom Left Red Card */}
          <div className="col-span-1 md:col-span-1 lg:col-span-4 bg-[#F43F5E] rounded-3xl p-6 text-white flex flex-col justify-between shadow-xl shadow-pink-200 hover:scale-[1.01] transition-transform">
              <div className="flex justify-between items-center text-pink-100 text-xs font-medium"><span>Average monthly</span><span className="bg-white/10 px-2 py-1 rounded-full backdrop-blur-sm">Platform value</span></div>
              <div className="mt-6 space-y-5">
                 <div className="group cursor-pointer"><p className="text-xs text-pink-200 font-medium group-hover:text-white transition-colors">Revenue</p><p className="font-black text-2xl tracking-tight">$18,552</p></div><div className="w-full h-[1px] bg-white/10"></div>
                 <div className="group cursor-pointer"><p className="text-xs text-pink-200 font-medium group-hover:text-white transition-colors">Leads</p><p className="font-black text-2xl tracking-tight flex items-baseline gap-2">373 <span className="text-sm font-medium opacity-60">97/276</span></p></div><div className="w-full h-[1px] bg-white/10"></div>
                 <div className="group cursor-pointer"><p className="text-xs text-pink-200 font-medium group-hover:text-white transition-colors">Win/lose</p><p className="font-black text-2xl tracking-tight flex items-baseline gap-2">16% <span className="text-sm font-medium opacity-60">51/318</span></p></div>
              </div>
          </div>

          {/* 9. Bottom Middle Chart */}
          <div className="col-span-1 md:col-span-1 lg:col-span-8 bg-gray-50 rounded-3xl p-6 relative">
             <div className="flex gap-2 justify-end mb-8"><span className="bg-black text-white px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wide cursor-pointer hover:bg-gray-800 transition-colors">Revenue</span><span className="text-gray-400 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide cursor-pointer hover:text-gray-600 transition-colors">Leads</span><span className="text-gray-400 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide cursor-pointer hover:text-gray-600 transition-colors">W/L</span></div>
             <div className="flex items-end justify-between h-40 gap-2 sm:gap-4 px-2 sm:px-4"><Bar height="h-20" label="Sep" /><Bar height="h-28" label="" highlight /><Bar height="h-14" label="Oct" /><Bar height="h-32" label="" highlight /><Bar height="h-24" label="" /><Bar height="h-20" label="Nov" /><Bar height="h-12" label="" /><Bar height="h-16" label="" /><Bar height="h-28" label="" highlight/></div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Dashboard;