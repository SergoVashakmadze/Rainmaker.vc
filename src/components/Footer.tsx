import { Link } from 'react-router-dom';
import { Twitter, Linkedin } from 'lucide-react';

const socialLinks = [
  { name: 'Twitter (X)', href: 'https://x.com/RainmakerVC', icon: Twitter },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/rainmaker-vc/', icon: Linkedin },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-violet-950 to-purple-950 border-t border-violet-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
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
              Venture Capital Investment Platform. Discovering and investing in the most promising technologies at the forefront of the technology revolution.
            </p>
            <p className="text-gray-400 text-sm font-light">
              Email: <a href="mailto:info@rainmaker.vc" className="text-violet-400 hover:text-violet-300 transition-colors">info@rainmaker.vc</a>
            </p>
          </div>

          {/* Rainmaker Partners Ltd */}
          <div>
            <h4 className="text-sm font-semibold text-violet-400 mb-4 tracking-wide">Rainmaker Partners Ltd</h4>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Registered in<br />
              England & Wales No. 09532555<br />
              VAT: GB 219928082
            </p>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-sm font-semibold text-violet-400 mb-4 tracking-wide">Follow Us</h4>
            <ul className="space-y-3 text-sm">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-violet-400 transition-colors font-light flex items-center gap-2"
                  >
                    <social.icon className="h-4 w-4" />
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
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
            &copy; 2015-{currentYear} Rainmaker Partners Ltd. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
