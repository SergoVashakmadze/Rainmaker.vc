import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';

export function Header() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-[46px] left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16">
            {/* Logo - Left */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110 hover:shadow-xl">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="text-xl font-bold text-white">Rainmaker</span>
                  <span className="text-xl font-bold text-violet-400 ml-0.5">VC</span>
                </div>
                <span className="text-[10px] text-violet-400 -mt-0.5 uppercase tracking-wider font-bold">Coming Soon</span>
              </div>
            </Link>

            {/* Desktop Right Section */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={scrollToContact}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-sm font-medium transition-colors bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500"
              >
                <Clock className="w-4 h-4" />
                Get Notified
              </button>
            </div>

            {/* Mobile Right Section */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={scrollToContact}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-xs font-medium bg-gradient-to-r from-violet-600 to-purple-600"
              >
                <Clock className="w-3 h-3" />
                Notify
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
