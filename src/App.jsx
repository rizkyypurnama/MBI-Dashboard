import { useState } from 'react';
import DashboardContent from './components/dashboardContent';
import Sidebar from './components/sidebar';
import Topbar from './components/topbar';

function App() {
    const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar
        showSidebar={showSidebar}
        onClose={() => setShowSidebar(false)}
      />      <div className="md:ml-64">
        <Topbar onToggleSidebar={() => setShowSidebar(prev => !prev)} />
        <main className="pt-[72px] px-4">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
}

export default App;
