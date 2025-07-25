export default function FinanceSummaryTable() {
  return (
    <div className="text-[#1A1A1A] text-xs">
      {/* Tabs */}
        <div className="flex justify-between items-center relative z-0 ml-1">
        {/* Tabs */}
        <div className="flex flex-wrap">
            <button className="bg-[#3B82F6] text-white font-medium px-1 md:px-6 py-2 rounded-tl-md">
            Расходы
            </button>
            <button className="bg-[#E5E7EB] text-[#9CA3AF] px-1 md:px-6 py-2">
            Пополнение
            </button>
            <button className="bg-[#E5E7EB] text-[#9CA3AF] px-1 py-2 md:px-6 rounded-tr-md">
            Создать проект
            </button>
        </div>

        {/* Eye Icon - desktop only */}
        <div className="hidden md:block  bg-white px-4 py-2 mr-6 border rounded-md">
            <button>
            <img src="/assets/eye.png" alt="View" className="w-5 h-5 opacity-70 hover:opacity-100 transition" />
            </button>
        </div>
        </div>


      {/* Grid Content */}
      <div className="bg-white p-4 rounded-xl shadow mt-0 md:mt-[-4px] relative z-10 overflow-x-auto">
        <div className="flex flex-wrap md:flex-nowrap gap-4 items-start min-w-full">
          {/* Column 1 */}
          <div className="w-full md:w-[27%] space-y-4">
            <Row icon="/assets/receipt-text.png" title="Всего контрактов на сумму" value="5 278 000 000 Rp" />
            <Row icon="/assets/banknote-arrow-up.png" title="Всего оплачено клиентами" value="320 000 000 Rp" />
            <Row icon="/assets/banknote-arrow-down.png" title="Всего прямых расходов" value="3 680 000 000 Rp" />
            <Row icon="/assets/hand-coins.png" title="Всего валовой прибыли" value="1 598 000 000 Rp" />
          </div>

          {/* Column 2 */}
          <div className="w-full md:w-[27%] space-y-4">
            <Row icon="/assets/banknote.png" title="Баланс клиентов" value="1 598 000 000 Rp" />
            <Row icon="/assets/banknote.png" title="Баланс компании" value="5 278 000 000 Rp" />
            <Row icon="/assets/banknote.png" title="Баланс компании и клиентов" value="6 876 000 000 Rp" />
            <Row icon="/assets/banknote.png" title="Баланс в банке" value="6 870 000 000 Rp" />
          </div>

          {/* Column 3 */}
          <div className="w-full md:w-[27%] space-y-4">
            <Row icon="/assets/target.png" title="Разница баланса" value="0 Rp" />
            <Row icon="/assets/activity.png" title="Выбрано на сумму" value="7 560 000 000 Rp" />
            <Row icon="/assets/funnel.png" title="Выбран фильтр на сумму" value="12 600 000 000 Rp" />
          </div>

          {/* Column 4 - Progress */}
          <div className="w-full md:w-[19%] space-y-2">
            <div className="flex items-start gap-2">
              <img src="/assets/chart.png" className="w-5 h-5 mt-1" />
              <div>
                <div className="">Выполненный объем</div>
                <div className="text-xs text-gray-400">по контрактам с клиентами</div>
              </div>
            </div>

            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 w-[25%]" />
            </div>

            <div className="flex justify-between text-xs text-gray-600">
              <span>1 319 500 000 Rp</span>
              <span>25%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ icon, title, value, arrow }) {
  return (
    <div className="flex justify-between items-center gap-2">
      <div className="flex items-center gap-2">
        <img src={icon} className="w-5 h-5" />
        <span>{title}</span>
      </div>
      <div className="flex items-center gap-1 text-right whitespace-nowrap">
        <span>{value}</span>
        {arrow && <span className="text-gray-400 text-lg">&gt;</span>}
      </div>
    </div>
  );
}
