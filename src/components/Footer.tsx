import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-violet-950 to-purple-950 border-t border-violet-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center text-center mb-12">
          {/* Brand Section */}
          <Link to="/" className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight leading-none">
                Rainmaker<span className="text-violet-400">VC</span>
              </h3>
            </div>
          </Link>
          <p className="text-gray-300 text-sm font-light leading-relaxed mb-4 max-w-md">
            An upcoming Venture Capital Fund. Discovering and investing in the most promising technologies at the forefront of the technology revolution.
          </p>
          <p className="text-gray-400 text-sm font-light">
            Email: <a href="mailto:sergo.vashakmadze@rainmaker.partners" className="text-violet-400 hover:text-violet-300 transition-colors">sergo.vashakmadze@rainmaker.partners</a>
          </p>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-violet-800/30">
          <p className="text-center text-base font-semibold text-gray-300 mb-2">
            Built with love by{' '}
            <a
              href="https://www.linkedin.com/in/sergovashakmadze/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-violet-400"
            >
              Sergo Vashakmadze
            </a>
          </p>
          <p className="text-center text-sm text-gray-500 font-light">
            &copy; {currentYear} Rainmaker VC. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
