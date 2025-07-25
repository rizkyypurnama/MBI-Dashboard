import { MoreHorizontal } from "lucide-react";

export default function Card() {
  return (
<div className="flex flex-wrap lg:flex-nowrap gap-3">
  <div className="w-[360px] rounded-md overflow-hidden shadow-sm bg-white">
      {/* Header */}
      <div className="bg-[#1D2939] px-6 py-4 flex items-center justify-between">
        <h2 className="text-white text-base">
          PT Alex Estate Production
        </h2>
        <MoreHorizontal className="text-white opacity-70" size={18} />
      </div>

      {/* Body */}
      <div className="">
        <div className="text-sm flex justify-between px-6 py-2">
          <span className="font-medium text-[#1D2939]">Контракт</span>
          <span className="text-[#1D2939] font-medium">001-06/IV/MBI-2025</span>
        </div>

        <div className="text-xs text-gray-500 flex justify-between pb-3 bg-[#F9FAFB] px-6 py-2">
          <span className="">Старт / завершение</span>
          <span>25.01.2024 - 25.01.2025</span>
        </div>

        {/* BAST Progress */}
        <div className="px-6 py-2">
          <div className="h-2 rounded-full bg-gray-100 mb-1 shadow-md">
            <div className="h-2 rounded-full bg-green-500" style={{ width: "28%" }} />
          </div>
          <div className="flex justify-between text-xs pt-1">
            <span className="text-[#1D2939] ">BAST</span>
            <span className="text-[#1D2939] ">28%</span>
          </div>
        </div>

        {/* Time Progress */}
        <div className="px-6 py-2">
          <div className="h-2 rounded-full bg-gray-100 mb-1 shadow-md">
            <div className="h-2 rounded-full bg-red-500" style={{ width: "58%" }} />
          </div>
          <div className="text-xs text-gray-500 flex justify-between">
            <span>Всего - прошло - осталось</span>
            <div className="flex gap-2">
                <span className="text-[#CBD5E1]">365</span>
                <span className="text-[#94A3B8]">215</span>
                <span className="text-[#1D2939] font-medium">150</span>
            </div>
          </div>
        </div>

        {/* Financial Rows */}
        <div className="pt-2 text-xs">
        <div className="flex justify-between text-gray-500 bg-[#F9FAFB] px-6 py-2 rounded">
            <div className="flex items-center">
                <img src="/assets/receipt-text.png" alt="Logo" className="w-5 h-5" />
                <span className="pl-3">Стоимость</span>
            </div>
            <span>5 000 000 000 Rp</span>
        </div>
        <div className="flex justify-between text-gray-500 bg-white px-6 py-2 rounded">
            <div className="flex items-center">
                <img src="/assets/banknote-arrow-up.png" alt="Logo" className="w-5 h-5" />
                <span className="pl-3">Оплачено</span>
            </div>
            <span>140 000 000 Rp</span>
        </div>
        <div className="flex justify-between text-gray-500 bg-[#F9FAFB] px-6 py-2 rounded">
            <div className="flex items-center">
                <img src="/assets/banknote-arrow-down.png" alt="Logo" className="w-5 h-5" />
                <span className="pl-3">Прямые расходы</span>
            </div>
            <span>3 500 000 000 Rp</span>
        </div>
        <div className="flex justify-between text-gray-500 bg-white px-6 py-2 rounded">
            <div className="flex items-center">
                <img src="/assets/hand-coins.png" alt="Logo" className="w-5 h-5" />
                <span className="pl-3">Валовая прибыль</span>
            </div>
            <span>1 500 000 000 Rp</span>
        </div>
        <div className="flex justify-between text-black bg-[#F9FAFB] px-6 py-2 rounded">
            <div className="flex items-center">
                <img src="/assets/banknote.png" alt="Logo" className="w-5 h-5" />
                <span className="pl-3">Баланс</span>
            </div>
            <span>-1 360 000 000 Rp</span>
        </div>
        <div className="flex justify-between text-black bg-white px-6 py-2 rounded">
            <div className="flex items-center">
                <img src="/assets/triangle-alert.png" alt="Logo" className="w-5 h-5" />
                <span className="pl-3">Штраф на сегодня</span>
            </div>
            <span>0 Rp</span>
        </div>
        <div className="flex justify-between text-gray-500 bg-[#F9FAFB] px-6 py-2 rounded">
            <div className="flex items-center">
                <img src="/assets/triangle-alert.png" alt="Logo" className="w-5 h-5" />
                <span className="pl-3">За 1 день просрочки</span>
            </div>
            <span>50 000 000 Rp</span>
        </div>
        <div className="flex justify-between text-gray-500 bg-white px-6 py-2 rounded">
            <div className="flex items-center">
                <img src="/assets/triangle-alert.png" alt="Logo" className="w-5 h-5" />
                <span className="pl-3">Максимально</span>
            </div>
            <span>500 000 000 Rp</span>
        </div>
        </div>
      </div>
    </div>

  <div className="w-[360px] rounded-md overflow-hidden shadow-sm bg-white">
      {/* Header */}
      <div className="bg-[#1D2939] px-6 py-4 flex items-center justify-between">
        <h2 className="text-white text-base">
          PT Amadeus Rock Reality
        </h2>
        <MoreHorizontal className="text-white opacity-70" size={18} />
      </div>

      {/* Body */}
      <div className="">
        <div className="text-sm flex justify-between px-6 py-2">
          <span className="font-medium text-[#1D2939]">Контракт</span>
          <span className="text-[#1D2939] font-medium">002-08/IV/MBI-2024</span>
        </div>

        <div className="text-xs text-gray-500 flex justify-between pb-3 bg-[#F9FAFB] px-6 py-2">
          <span className="">Старт / завершение</span>
          <span>25.03.2024 - 25.08.2024</span>
        </div>

        {/* BAST Progress */}
        <div className="px-6 py-2">
          <div className="h-2 rounded-full bg-gray-100 mb-1 shadow-md">
            <div className="h-2 rounded-full bg-green-500" style={{ width: "70%" }} />
          </div>
          <div className="flex justify-between text-xs pt-1">
            <span className="text-[#1D2939] ">BAST</span>
            <span className="text-[#1D2939] ">70%</span>
          </div>
        </div>

        {/* Time Progress */}
        <div className="px-6 py-2">
          <div className="h-2 rounded-full bg-gray-100 mb-1 shadow-md">
            <div className="h-2 rounded-full bg-green-500" style={{ width: "30%" }} />
          </div>
          <div className="text-xs text-gray-500 flex justify-between">
            <span>Всего - прошло - осталось</span>
            <div className="flex gap-2">
                <span className="text-[#CBD5E1]">180</span>
                <span className="text-[#94A3B8]">80</span>
                <span className="text-[#1D2939] font-medium">100</span>
            </div>
          </div>
        </div>

        {/* Financial Rows */}
        <div className="pt-2 text-xs">
        <div className="flex justify-between text-gray-500 bg-[#F9FAFB] px-6 py-2 rounded">
            <div className="flex items-center">
                <img src="/assets/receipt-text.png" alt="Logo" className="w-5 h-5" />
                <span className="pl-3">Стоимость</span>
            </div>
            <span>278 000 000 Rp</span>
        </div>
        <div className="flex justify-between text-gray-500 bg-white px-6 py-2 rounded">
            <div className="flex items-center">
                <img src="/assets/banknote-arrow-up.png" alt="Logo" className="w-5 h-5" />
                <span className="pl-3">Оплачено</span>
            </div>
            <span>180 000 000 Rp</span>
        </div>
        <div className="flex justify-between text-gray-500 bg-[#F9FAFB] px-6 py-2 rounded">
            <div className="flex items-center">
                <img src="/assets/banknote-arrow-down.png" alt="Logo" className="w-5 h-5" />
                <span className="pl-3">Прямые расходы</span>
            </div>
            <span>180 000 000 Rp</span>
        </div>
        <div className="flex justify-between text-gray-500 bg-white px-6 py-2 rounded">
            <div className="flex items-center">
                <img src="/assets/hand-coins.png" alt="Logo" className="w-5 h-5" />
                <span className="pl-3">Валовая прибыль</span>
            </div>
            <span>98 000 000 Rp</span>
        </div>
        <div className="flex justify-between text-black bg-[#F9FAFB] px-6 py-2 rounded">
            <div className="flex items-center">
                <img src="/assets/banknote.png" alt="Logo" className="w-5 h-5" />
                <span className="pl-3">Баланс</span>
            </div>
            <span>-98 000 000 Rp</span>
        </div>
        <div className="flex justify-between text-black bg-white px-6 py-2 rounded">
            <div className="flex items-center">
                <img src="/assets/triangle-alert.png" alt="Logo" className="w-5 h-5" />
                <span className="pl-3">Штраф на сегодня</span>
            </div>
            <span>0 Rp</span>
        </div>
        <div className="flex justify-between text-gray-500 bg-[#F9FAFB] px-6 py-2 rounded">
            <div className="flex items-center">
                <img src="/assets/triangle-alert.png" alt="Logo" className="w-5 h-5" />
                <span className="pl-3">За 1 день просрочки</span>
            </div>
            <span>278 000 Rp</span>
        </div>
        <div className="flex justify-between text-gray-500 bg-white px-6 py-2 rounded">
            <div className="flex items-center">
                <img src="/assets/triangle-alert.png" alt="Logo" className="w-5 h-5" />
                <span className="pl-3">Максимально</span>
            </div>
            <span>27 800 000 Rp</span>
        </div>
        </div>
      </div>
    </div>
      </div>

  )
}
