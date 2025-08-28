import { Calendar, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import aiLogo from '@/assets/ai-illustration.jpg';

const Footer = () => {
  const quickLinks = [
    { label: 'Call for Papers', href: '#call-for-papers' },
    { label: 'Conference Tracks', href: '#tracks' },
    { label: 'Registration', href: '#registration' },
    { label: 'Guidelines', href: '#guidelines' },
    { label: 'Committee', href: '#committee' },
    { label: 'Contact', href: '#contact' }
  ];

  const importantDates = [
    { event: 'Paper Submission', date: '25th Aug 2025' },
    { event: 'Acceptance Notification', date: '30th Aug 2025' },
    { event: 'Camera-ready Submission', date: '1st Sep 2025' },
    { event: 'Conference Dates', date: '5th Sep 2025' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Conference Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={aiLogo}
                alt="AI Conference Logo"
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold text-white dark:text-gray-900">NCEAMBT 2025</h3>
                <p className="text-sm text-gray-200 dark:text-gray-700">AICTE Sponsored Conference</p>
              </div>
            </div>
            <p className="text-gray-200 dark:text-gray-700 leading-relaxed mb-6">
              Exploring AI and ML for Better Tomorrow - A two-day national conference bringing together researchers, academicians, and industry experts.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Calendar size={16} className="text-cyan-400 dark:text-blue-600" />
                <span className="text-gray-200 dark:text-gray-800">5th September 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-cyan-400 dark:text-blue-600" />
                <span className="text-gray-200 dark:text-gray-800">Tumakuru, Karnataka</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white dark:text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-200 dark:text-gray-700 hover:text-cyan-400 dark:hover:text-blue-600 transition-colors duration-200 text-sm flex items-center space-x-1"
                  >
                    <span>{link.label}</span>
                    <ExternalLink size={12} />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Dates */}
          <div>
            <h4 className="text-lg font-semibold text-white dark:text-gray-900 mb-4">Important Dates</h4>
            <div className="space-y-3">
              {importantDates.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-sm">
                  <span className="text-gray-200 dark:text-gray-700">{item.event}</span>
                  <span className="text-cyan-400 dark:text-blue-600 font-mono">{item.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-white dark:text-gray-900 mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-cyan-400 dark:text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-200 dark:text-gray-700">
                  Sree Siddaganga College of Arts, Science & Commerce<br />
                  B.H. Road, Tumakuru, Karnataka - 572102
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-cyan-400 dark:text-blue-600" />
                <a
                  href="mailto:sscasc.cs.conference@gmail.com"
                  className="text-gray-200 dark:text-gray-700 hover:text-cyan-400 dark:hover:text-blue-600 transition-colors"
                >
                  sscasc.cs.conference@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-cyan-400 dark:text-blue-600" />
                <span className="text-gray-200 dark:text-gray-700">+91 9632246106</span>
              </div>
              <div className="pt-2">
                <a
                  href="https://www.sscasc.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 dark:text-blue-600 hover:text-cyan-300 dark:hover:text-blue-800 transition-colors flex items-center space-x-1"
                >
                  <span>Visit our website</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-gray-300 dark:text-gray-600 text-sm">
                © 2025 NCEAMBT - Sree Siddaganga College of Arts, Science & Commerce. All rights reserved.
              </p>
            </div>
            <div className="text-center">
              <div className="text-gray-300 dark:text-gray-600 text-sm">
                {/* Mobile: Two separate lines */}
                <div className="block sm:hidden space-y-1">
                  <p>
                    In association with <a
                      href="http://www.sit.ac.in/html/department.php?deptid=15"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 dark:text-blue-600 font-semibold hover:text-cyan-300 dark:hover:text-blue-800 transition-colors"
                    >
                      Dept of MCA , SIT
                    </a>
                  </p>
                  <p>
                    Developed by <a
                      href="https://www.linkedin.com/in/dineshlokesh/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 dark:text-blue-600 font-semibold hover:text-cyan-300 dark:hover:text-blue-800 transition-colors"
                    >
                      Dinesh L, Dept of MCA, SIT
                    </a>
                  </p>
                </div>

                {/* Desktop: Single line */}
                <p className="hidden sm:block">
                  In association with <a
                    href="http://www.sit.ac.in/html/department.php?deptid=15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 dark:text-blue-600 font-semibold hover:text-cyan-300 dark:hover:text-blue-800 transition-colors"
                  >
                    Dept of MCA , SIT
                  </a> · Developed by <a
                    href="https://www.linkedin.com/in/dineshlokesh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 dark:text-blue-600 font-semibold hover:text-cyan-300 dark:hover:text-blue-800 transition-colors"
                  >
                    Dinesh L, Dept of MCA, SIT
                  </a>
                </p>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-gray-300 dark:text-gray-600 text-sm">
                Sponsored by <a
                  href="https://www.aicte.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 dark:text-blue-600 font-semibold hover:text-cyan-300 dark:hover:text-blue-800 transition-colors"
                >
                  AICTE
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
