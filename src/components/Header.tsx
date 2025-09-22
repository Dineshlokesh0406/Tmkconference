import { useState, useEffect } from 'react';
import { Menu, Download, Sun, Moon, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import aiLogo from '@/assets/ai-illustration.jpg';
import brochurePdf from '@/assets/brochure.pdf';
import posterPdf from '@/assets/Poster.pdf';
import popup1Image from '@/assets/popup1.jpg';
import popup2Image from '@/assets/popup2.jpg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const shouldBeDark = savedTheme === 'dark';

    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Call for Papers', href: '#call-for-papers' },
    { label: 'Tracks', href: '#tracks' },
    { label: 'Committee', href: '#committee' },
    { label: 'Registration', href: '#registration' },
    { label: 'Guidelines', href: '#guidelines' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="w-full px-4 max-w-full">
        <div className="flex items-center justify-between h-16 lg:h-20 w-full max-w-full">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <img
              src={aiLogo}
              alt="AI Conference Logo"
              className="hidden md:block h-10 w-10 lg:h-12 lg:w-12 rounded-full"
            />
            <div>
              <h1 className={`text-lg lg:text-xl font-bold ${isScrolled ? 'text-primary' : 'text-yellow-400'}`}>NCEAMBT 2025</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  isScrolled
                    ? 'text-foreground hover:text-primary'
                    : 'text-white hover:text-yellow-400'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-primary' : 'bg-yellow-400'
                }`}></span>
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? 'border-border hover:bg-accent text-foreground'
                  : 'border-white bg-white/90 text-black hover:bg-white hover:text-black'
              }`}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className={`space-x-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                    isScrolled
                      ? 'border-border hover:bg-accent text-foreground'
                      : 'border-white bg-white/90 text-black hover:bg-white hover:text-black'
                  }`}
                >
                  <Download size={16} />
                  <span>Downloads</span>
                  <ChevronDown size={14} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem
                  onClick={() => window.open(brochurePdf, '_blank')}
                  className="cursor-pointer"
                >
                  <Download size={16} className="mr-2" />
                  Conference Brochure
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => window.open(posterPdf, '_blank')}
                  className="cursor-pointer"
                >
                  <Download size={16} className="mr-2" />
                  Conference Poster
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => window.open(popup1Image, '_blank')}
                  className="cursor-pointer"
                >
                  <Download size={16} className="mr-2" />
                  Valediction
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => window.open(popup2Image, '_blank')}
                  className="cursor-pointer"
                >
                  <Download size={16} className="mr-2" />
                  Inauguration
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`transition-colors duration-300 mr-0 ${
                    isScrolled
                      ? 'text-foreground hover:bg-accent'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-sm">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="flex items-center space-x-3 pb-4 border-b">
                  <img
                    src={aiLogo}
                    alt="AI Conference Logo"
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <h2 className="text-lg font-bold text-yellow-400">NCEAMBT 2025</h2>
                  </div>
                </div>

                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>

                <div className="flex flex-col space-y-3 pt-4 border-t">
                  <Button 
                    variant="outline" 
                    onClick={toggleTheme}
                    className="space-x-2 justify-start"
                  >
                    {isDark ? <Sun size={16} /> : <Moon size={16} />}
                    <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="space-x-2 justify-start"
                    onClick={() => window.open(brochurePdf, '_blank')}
                  >
                    <Download size={16} />
                    <span>Conference Brochure</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="space-x-2 justify-start"
                    onClick={() => window.open(posterPdf, '_blank')}
                  >
                    <Download size={16} />
                    <span>Conference Poster</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="space-x-2 justify-start"
                    onClick={() => window.open(popup1Image, '_blank')}
                  >
                    <Download size={16} />
                    <span>Valediction</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="space-x-2 justify-start"
                    onClick={() => window.open(popup2Image, '_blank')}
                  >
                    <Download size={16} />
                    <span>Inauguration</span>
                  </Button>

                </div>
              </div>
            </SheetContent>
          </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;