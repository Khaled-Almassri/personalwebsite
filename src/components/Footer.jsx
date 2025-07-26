import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-c2 text-c4 py-5 px-6 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-col justify-between items-center gap-3">
        
        {/* Logo / Name */}
        

        
        <div className="flex space-x-3 text-[18px]">
          <Link to="/" className="hover:text-c1 transition">Home</Link>
          <Link to="/about" className="hover:text-c1 transition">About</Link>
          <Link to="/projects" className="hover:text-c1 transition">Projects</Link>
          <Link to="/contact" className="hover:text-c1 transition">Contact</Link>
          <Link to="/cv" className="hover:text-c1 transition">CV</Link>
        </div>

        
        <div className="flex space-x-4">
          <a href="https://github.com/Khaled-Almassri" target="_blank" rel="noopener noreferrer" className="hover:text-c1 transition">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/khaled-almassri/" target="_blank" rel="noopener noreferrer" className="hover:text-c1 transition">
            <Linkedin size={20} />
          </a>
          <a href="mailto:khalednaiel@gmail.com" className="hover:text-c1 transition">
            <Mail size={20} />
          </a>
          <a href="tel:+971505416228" className="hover:text-c1 transition">
            <Phone size={20} />
          </a>
        </div>

        <div className="text-lg font-semibold text-[20px]">© 2025 Khaled Almassri</div>
      </div>
    </footer>
  );
};

export default Footer;
