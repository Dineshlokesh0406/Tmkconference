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
    { event: 'Camera-ready Submission', date: '10th Sep 2025' },
    { event: 'Conference Dates', date: '26th & 27th Sep 2025' }
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
                <h3 className="text-xl font-bold text-white dark:text-black dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">NCEAMBT 2025</h3>
                <p className="text-sm text-gray-200 dark:text-black dark:drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]">AICTE Sponsored Conference</p>
              </div>
            </div>
            <p className="text-gray-200 dark:text-black dark:drop-shadow-[0_0_4px_rgba(255,255,255,0.5)] leading-relaxed mb-6">
              Exploring AI and ML for Better Tomorrow - A two-day national conference bringing together researchers, academicians, and industry experts.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Calendar size={16} className="text-cyan-400 dark:text-blue-600" />
                <span className="text-gray-200 dark:text-black dark:drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]">26th - 27th September 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-cyan-400 dark:text-blue-600" />
                <span className="text-gray-200 dark:text-black dark:drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]">Tumakuru, Karnataka</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white dark:text-black dark:drop-shadow-[0_0_6px_rgba(255,255,255,0.7)] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-200 dark:text-black dark:drop-shadow-[0_0_3px_rgba(255,255,255,0.4)] hover:text-cyan-400 dark:hover:text-blue-600 transition-colors duration-200 text-sm flex items-center space-x-1"
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
            <h4 className="text-lg font-semibold text-white dark:text-black dark:drop-shadow-[0_0_6px_rgba(255,255,255,0.7)] mb-4">Important Dates</h4>
            <div className="space-y-3">
              {importantDates.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-sm">
                  <span className="text-gray-200 dark:text-black dark:drop-shadow-[0_0_3px_rgba(255,255,255,0.4)]">{item.event}</span>
                  <span className="text-cyan-400 dark:text-blue-600 font-mono">{item.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-white dark:text-black dark:drop-shadow-[0_0_6px_rgba(255,255,255,0.7)] mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-cyan-400 dark:text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-200 dark:text-black dark:drop-shadow-[0_0_3px_rgba(255,255,255,0.4)]">
                  Sree Siddaganga College of Arts, Science & Commerce<br />
                  B.H. Road, Tumakuru, Karnataka - 572102
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-cyan-400 dark:text-blue-600" />
                <a
                  href="mailto:sscasc.cs.conference@gmail.com"
                  className="text-gray-200 dark:text-black dark:drop-shadow-[0_0_3px_rgba(255,255,255,0.4)] hover:text-cyan-400 dark:hover:text-blue-600 transition-colors"
                >
                  sscasc.cs.conference@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-cyan-400 dark:text-blue-600" />
                <span className="text-gray-200 dark:text-black dark:drop-shadow-[0_0_3px_rgba(255,255,255,0.4)]">+91 9632246106</span>
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
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="text-center lg:text-left flex-1">
              <p className="text-gray-300 dark:text-black dark:drop-shadow-[0_0_4px_rgba(255,255,255,0.5)] text-sm">
                © 2025 NCEAMBT - Dept of MCA, SIT, Tumkur. All rights reserved.
              </p>
            </div>
            <div className="text-center flex-1">
              <p className="text-gray-300 dark:text-black dark:drop-shadow-[0_0_4px_rgba(255,255,255,0.5)] text-sm">
                Developed by <a
                  href="https://www.linkedin.com/in/dineshlokesh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 dark:text-blue-600 font-semibold hover:text-cyan-300 dark:hover:text-blue-800 transition-colors"
                >
                  Dinesh, MCA student, SIT
                </a>
              </p>
            </div>
            <div className="text-center lg:text-right flex-1">
              <p className="text-gray-300 dark:text-black dark:drop-shadow-[0_0_4px_rgba(255,255,255,0.5)] text-sm">
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