// import React, { useState, useEffect } from 'react'
// import "./Navbar.css"

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", onScroll);

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//     };
//   }, []);

//   return (
//     <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
//       <div className="navbar_container">
//         <div className="navbar_logo">
//           <h3><span>H</span>ose Cleaning</h3>
//         </div>
//         <div className="navbar_links">
//           <div className="navbar_link">
//             <ul>
//               <li>Home</li>
//               <li>About</li>
//               <li>Services</li>
//               <li>Blog</li>
//               <li>Contact</li>
//             </ul>
//           </div>
//         </div>
//         <div className="navbar_btn">
//           BOOK NOW
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react'
import "./Navbar.css"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Section detection
      const sections = ["home", "about", "services", "blog", "contact"];
      let current = "Home";

      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) { 
            current = sectionId.charAt(0).toUpperCase() + sectionId.slice(1); // Capitalize
          }
        }
      });

      setActiveLink(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar_container">
        <div className="navbar_logo">
          <h3><span>H</span>ose Cleaning</h3>
        </div>

        <div className="navbar_links">
          <div className="navbar_link">
            <ul>
              {["Home", "About", "Services", "Blog", "Contact"].map((link) => (
                <li
                  key={link}
                  className={activeLink === link ? "active" : ""}
                  onClick={() => handleLinkClick(link)}
                >
                  <a href={`#${link.toLowerCase()}`} className="nav_link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="navbar_btn">
          BOOK NOW
        </div>
      </div>
    </div>
  );
};

export default Navbar;
