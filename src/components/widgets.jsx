import React from 'react';
import PropTypes from 'prop-types';
import { ChevronDown } from 'lucide-react';

export const StatBadge = ({ label, highlight }) => (
  <div 
    className={`flex items-center gap-2 text-xs font-bold px-1 flex-shrink-0 cursor-pointer transition-colors ${highlight ? 'text-blue-500' : 'text-gray-500 hover:text-gray-700'}`}
    role="button"
    aria-label={`Statistic: ${label}`}
  >
    <div className={`w-7 h-7 rounded-full flex items-center justify-center ${highlight ? 'bg-blue-100' : 'bg-gray-200'}`}>
       <div className={`w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-gray-300`}></div> 
    </div>
    {label}
  </div>
);

StatBadge.propTypes = {
  label: PropTypes.string.isRequired,
  highlight: PropTypes.bool,
};

export const KPICard = ({ label, value, change, active }) => {
  const isPositive = change.includes('+') || !change.includes('-');
  return (
    <div className={`flex-1 rounded-[20px] p-4 flex flex-col justify-between items-center transition-all duration-300 hover:-translate-y-1 ${active ? 'bg-white border-2 border-pink-100 shadow-lg shadow-pink-100/50' : 'bg-gray-50 hover:bg-white hover:shadow-sm'}`}>
      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{label}</span>
      <span className={`text-xl font-black ${active ? 'text-[#F43F5E]' : 'text-gray-800'}`}>{value}</span>
      <span 
        className="text-[10px] font-bold text-gray-400 flex items-center"
        aria-label={`${change} ${isPositive ? 'increase' : 'decrease'}`}
      >
         {isPositive ? '↑' : '↓'} {change}
      </span>
    </div>
  );
};

KPICard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export const ListItem = ({ icon, name, val, pct, color }) => (
  <div className="flex items-center justify-between group cursor-pointer" role="listitem">
    <div className="flex items-center gap-4">
      <div 
        className={`w-9 h-9 rounded-full bg-white flex items-center justify-center text-sm shadow-sm font-bold ${color} group-hover:scale-110 transition-transform`}
        aria-hidden="true"
      >
        {icon}
      </div>
      <span className="text-sm font-bold text-gray-700 group-hover:text-black transition-colors">{name}</span>
    </div>
    <div className="text-right">
       <div className="text-sm font-bold text-gray-800">{val}</div>
       <div className="text-xs font-medium text-gray-400">{pct}</div>
    </div>
  </div>
);

ListItem.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  val: PropTypes.string.isRequired,
  pct: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export const SalesRow = ({ name, rev, leads, kpi, active }) => (
  <div className={`grid grid-cols-5 items-center py-2.5 px-3 rounded-2xl mb-1 cursor-pointer transition-colors ${active ? 'bg-gray-50 shadow-sm' : 'hover:bg-gray-50'}`}>
     <div className="col-span-2 flex items-center gap-3">
       <div className="w-7 h-7 rounded-full bg-gray-300 border border-gray-100"></div>
       <span className="text-xs font-bold text-gray-700">{name}</span>
     </div>
     <div className="text-right text-xs font-bold text-gray-800">{rev}</div>
     <div className="text-right text-xs font-bold bg-gray-900 text-white rounded px-1.5 py-0.5 w-fit ml-auto">{leads}</div>
     <div className="text-right text-xs font-bold text-gray-500">{kpi}</div>
  </div>
);

SalesRow.propTypes = {
  name: PropTypes.string.isRequired,
  rev: PropTypes.string.isRequired,
  leads: PropTypes.string.isRequired,
  kpi: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export const Bar = ({ height, label, highlight }) => (
  <div className="flex flex-col items-center gap-2 w-full group cursor-pointer" role="img" aria-label={`Chart bar for ${label || 'period'}`}>
    {highlight && <div className="bg-[#F43F5E] text-white text-[10px] font-bold px-2 py-1 rounded mb-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0 duration-200">$11k</div>}
    <div className={`w-full ${height} rounded-t-lg border-x border-t border-dashed relative transition-all duration-300 ${highlight ? 'bg-gray-200 border-gray-300 group-hover:bg-[#F43F5E]/20' : 'bg-white border-gray-200 group-hover:h-[110%]'} `}></div>
    <span className="text-[10px] font-bold text-gray-400 h-4 uppercase">{label}</span>
  </div>
);

Bar.propTypes = {
  height: PropTypes.string.isRequired,
  label: PropTypes.string,
  highlight: PropTypes.bool,
};