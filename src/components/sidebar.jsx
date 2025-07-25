import {
  ChevronDown,
  ChevronRight,
  FileText,
  Users,
  BarChart2,
  Calendar,
  Layers,
  Building,
  User,
  Briefcase,
  ClipboardList,
  LayoutDashboard,
  ListChecks,
  BanknoteIcon,
  X
} from "lucide-react";
import { useState } from "react";

export default function Sidebar({ showSidebar = false, onClose = () => {} }) {
  const [openMenus, setOpenMenus] = useState({
    finance: true,
    technical: true,
    hr: false,
    legal: false,
    strategy: true,
  });

  const toggleMenu = (key) => {
    setOpenMenus({ ...openMenus, [key]: !openMenus[key] });
  };

  return (
    <>
      {/* ==== MOBILE SIDEBAR ==== */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-200 md:hidden ${
          showSidebar ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-slate-900 text-white shadow-md text-xs transition-transform duration-300 transform md:hidden ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header mobile */}
    <div className="px-6 py-6 text-xl font-bold border-b border-slate-700 h-[72px] flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src="/assets/menu.png" alt="Menu Icon" className="w-5 h-5" />
        <span>
          EURASTROY <span className="text-xs text-gray-400 ml-1">V 1.0</span>
        </span>
      </div>
      <button onClick={onClose}>
        <X size={20} className="text-gray-400" />
      </button>
    </div>

        <SidebarContent openMenus={openMenus} toggleMenu={toggleMenu} />
      </aside>

    {/* ==== DESKTOP SIDEBAR ==== */}
    <aside className="hidden md:flex flex-col w-64 bg-slate-900 text-white h-screen fixed top-0 left-0 shadow-md text-xs">
      <div className="px-6 py-6 text-xl border-b border-slate-700 h-[72px] flex items-center gap-2">
        <img src="/assets/menu.png" alt="Menu Icon" className="w-5 h-5" />
        <span>
          EURASTROY <span className="text-xs text-gray-400 ml-1">V 1.0</span>
        </span>
      </div>
      <SidebarContent openMenus={openMenus} toggleMenu={toggleMenu} />
    </aside>

    </>
  );
}

function SidebarContent({ openMenus, toggleMenu }) {
  return (
    <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
      {/* Финансовый Департамент */}
      <div>
        <SectionHeader
          title="ФИНАНСОВЫЙ ДЕПАРТАМЕНТ"
          open={openMenus.finance}
          onClick={() => toggleMenu("finance")}
        />
        {openMenus.finance && (
          <div className="mt-2 space-y-1">
            <NavItem icon={<FileText size={16} />} label="Транзакции" />
            <NavItem icon={<BanknoteIcon size={16} />} label="Прямые расходы / доходы" active />
            <NavItem icon={<Briefcase size={16} />} label="Операционные расходы" />
            <NavItem icon={<Calendar size={16} />} label="Календарь отчетов" />
          </div>
        )}
      </div>

      {/* Технический Департамент */}
      <div>
        <SectionHeader
          title="ТЕХНИЧЕСКИЙ ДЕПАРТАМЕНТ"
          open={openMenus.technical}
          onClick={() => toggleMenu("technical")}
        />
        {openMenus.technical && (
          <div className="mt-2 space-y-1">
            <NavItem icon={<Users size={16} />} label="Управление проектами" />
            <NavItem icon={<Layers size={16} />} label="Проекты" />
            <NavItem icon={<ClipboardList size={16} />} label="Склад" />
            <NavItem icon={<Building size={16} />} label="Поставщики" />
            <NavItem icon={<User size={16} />} label="Рабочие" />
            <NavItem icon={<BarChart2 size={16} />} label="BAST" />
            <NavItem icon={<ListChecks size={16} />} label="PBG / SLF / HGB" />
          </div>
        )}
      </div>

      {/* HR */}
      <div>
        <SectionHeader
          title="HR ДЕПАРТАМЕНТ"
          open={openMenus.hr}
          onClick={() => toggleMenu("hr")}
        />
      </div>

      {/* Legal */}
      <div>
        <SectionHeader
          title="ЮРИДИЧЕСКИЙ ДЕПАРТАМЕНТ"
          open={openMenus.legal}
          onClick={() => toggleMenu("legal")}
        />
      </div>

      {/* Strategy */}
      <div>
        <SectionHeader
          title="ОПЕРАЦИОННАЯ СТРАТЕГИЯ"
          open={openMenus.strategy}
          onClick={() => toggleMenu("strategy")}
        />
        {openMenus.strategy && (
          <div className="mt-2 space-y-1">
            <NavItem icon={<LayoutDashboard size={16} />} label="Панель руководителя" />
            <NavItem icon={<BarChart2 size={16} />} label="Финансовый обзор" />
            <NavItem icon={<Calendar size={16} />} label="Хронология проекта" />
            <NavItem icon={<User size={16} />} label="Статус сотрудников" />
          </div>
        )}
      </div>
    </nav>
  );
}

function NavItem({ icon, label, active = false }) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 cursor-pointer transition-colors
        ${active ? "bg-blue-600 text-white" : "hover:bg-slate-800 text-gray-300"}`}
    >
      {icon}
      <span className="text-xs">{label}</span>
    </div>
  );
}

function SectionHeader({ title, open, onClick }) {
  return (
    <div
      className="flex items-center justify-between text-gray-400 text-xs font-semibold cursor-pointer select-none"
      onClick={onClick}
    >
      <span>{title}</span>
      {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
    </div>
  );
}
