import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home as HomeIcon, Briefcase, FileText, BarChart3, Calculator, MessageSquare } from 'lucide-react';

// Pages
import HomePage from './pages/Home';
import ProfessionImpact from './pages/ProfessionImpact';
import BudgetLaws from './pages/BudgetLaws';
import ComparativeAnalysis from './pages/ComparativeAnalysis';
import TaxCalculator from './pages/TaxCalculator';

// Components
import Chatbot from './components/Chatbot';

function App() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Summary', icon: <HomeIcon size={18} /> },
    { path: '/professions', label: 'Professions', icon: <Briefcase size={18} /> },
    { path: '/laws', label: 'Laws & Tax', icon: <FileText size={18} /> },
    { path: '/analysis', label: 'Analysis', icon: <BarChart3 size={18} /> },
    { path: '/calculator', label: 'Calculator', icon: <Calculator size={18} /> },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="nav-logo">
            <span style={{ color: 'var(--accent-1)' }}>B</span>udget<span style={{ color: 'var(--accent-2)' }}>26</span>
          </Link>
          <div className="nav-links">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`flex items-center gap-1 nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.icon} {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className="page-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/professions" element={<ProfessionImpact />} />
          <Route path="/laws" element={<BudgetLaws />} />
          <Route path="/analysis" element={<ComparativeAnalysis />} />
          <Route path="/calculator" element={<TaxCalculator />} />
        </Routes>
      </main>

      <Chatbot />
    </>
  );
}

export default App;
