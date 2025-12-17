import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-base-100 border-t border-base-200 pt-16 pb-8 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
         <div className="space-y-5">
          <h2 className="text-2xl font-black italic tracking-tighter text-primary">
            LEARN STACK
          </h2>
          <p className="text-sm text-base-content/70 leading-relaxed">
            Empowering students worldwide with industry-standard tech skills. Build your future with us.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-base-200 rounded-full hover:bg-primary hover:text-white transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 bg-base-200 rounded-full hover:bg-primary hover:text-white transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="p-2 bg-base-200 rounded-full hover:bg-primary hover:text-white transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 bg-base-200 rounded-full hover:bg-primary hover:text-white transition-all">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

         <div>
          <h4 className="font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm text-base-content/70">
            <li><a href="#" className="hover:text-primary transition-colors">All Courses</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Become an Instructor</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Success Stories</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
          </ul>
        </div>

         <div>
          <h4 className="font-bold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-3 text-sm text-base-content/70 mb-6">
            <li className="flex items-center gap-2">
              <Mail size={16} /> support@learnstack.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +880 1234-567890
            </li>
          </ul>
          
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Join our Newsletter</span>
            </label>
            <div className="join w-full">
              <input 
                className="input input-bordered join-item w-full focus:outline-none focus:border-primary text-sm" 
                placeholder="email@example.com" 
              />
              <button className="btn btn-primary join-item px-6">Join</button>
            </div>
          </div>
        </div>

      </div>
      <div className="border-t border-base-200 pt-8 text-center">
        <p className="text-xs text-base-content/50">
          © {new Date().getFullYear()} <span className="font-bold">Learn Stack LMS</span>. All rights reserved. 
          <br className="md:hidden" /> Made with ❤️ for developers.
        </p>
      </div>
    </footer>
  );
};

export default Footer;