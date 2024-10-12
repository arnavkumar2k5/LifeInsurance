import React, { useState } from "react";

function Header() {
  const [selectedHeading, setSelectedHeading] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    individual: false,
    commercial: false,
    support: false,
  });

  const headingClick = (heading) => {
    setSelectedHeading(heading);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (menu) => {
    setDropdowns({
      individual: false,
      commercial: false,
      support: false,
      [menu]: !dropdowns[menu],
    });
  };

  const navItems = [
    {
      name: "Home",
      navPage: "/",
    },
    {
      name: "Individual",
      subMenu: [
        { name: "Life", description: "Protect your loved ones", link: "/life" },
        { name: "Automobile", description: "Protect your vehicle", link: "/auto" },
        { name: "Home", description: "Protect your dream home", link: "/home" },
      ],
    },
    {
      name: "Commercial",
      subMenu: [
        { name: "Auto", description: "For your Fleet", link: "/auto" },
        { name: "General Liability", description: "Travel around the world care free", link: "/vehicles" },
        { name: "Warehouse", description: "Protect your warehouse", link: "/warehouse" },
        { name: "Restaurants", description: "Protect your food business", link: "/restaurants" },
      ],
    },
    {
      name: "Travel",
      navPage: "#",
    },
    {
      name: "Support",
      subMenu: [
        { name: "Contact us", description: "We've got your back", link: "/contact" },
        { name: "About us", description: "Why you matter", link: "/aboutus" },
        { name: "How it works", description: "How we do things", link: "/how" },
        { name: "FAQs", description: "General topics", link: "/faq" },
        { name: "Blog", description: "Insurance Knowledge Resource", link: "/blog" },
      ],
    },
  ];

  return (
    <header className="bg-white shadow-sm">
      <nav className="flex justify-between md:justify-center items-center p-2">
        <div className="md:hidden md:ml-5 flex justify-start w-1/3">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
        <div className="md:w-1/3  md:flex justify-center md:pl-[7rem]">
          <img src="logo.png" alt="logo" className="h-10 md:h-16" />
        </div>
        <div className="md:w-2/3 flex justify-center items-center md:pr-28 gap-5">
          <ul className="flex gap-10 items-center text-xl">
            {navItems.map((item) => (
              <li className="text-lg relative hidden md:flex" key={item.name}>
                <a
                  href={item.navPage}
                  className={`cursor-pointer ${
                    selectedHeading === item.name ? "font-semibold" : ""
                  }`}
                  onClick={() => {
                    headingClick(item.name);
                    if (item.subMenu) {
                      toggleDropdown(item.name.toLowerCase()); 
                    }
                  }}
                >
                  {item.name}
                </a>
                {selectedHeading === item.name &&
                  item.name !== "Get a Quote" && (
                    <div className="absolute h-[3px] bg-blue-500 w-full bottom-[-27px] left-0"></div>
                  )}

                {item.subMenu && dropdowns[item.name.toLowerCase()] && (
                  <div className="absolute top-[4rem] w-[13vw] left-0 bg-white shadow-lg p-4 rounded-lg">
                    {item.subMenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.link}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        <strong>{subItem.name}</strong>
                        <p className="text-sm text-gray-500">
                          {subItem.description}
                        </p>
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
            <a href="#" className="md:flex hidden">
              <li
                className="bg-cyan-400 text-white p-3 pl-7 pr-7 rounded-xl"
                onClick={() => headingClick("Get a Quote")}
              >
                Get a Quote
              </li>
            </a>
          </ul>
          <div className="md:border-l-4 border-[#e5e7eb] pl-4 ml-10 md:ml-0">
            <img
              src="search1.png"
              alt="Search"
              className="h-5 md:h-7"
            />
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg mt-2">
          <ul className="flex flex-col items-center gap-5 text-sm p-4">
            {navItems.map((item) => (
              <li className="relative" key={item.name}>
                <a
                  href={item.navPage}
                  className="block w-full text-center py-2"
                  onClick={() => {
                    headingClick(item.name);
                    setIsOpen(false);
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <a href="#">
              <li
                className="bg-cyan-400 text-white p-3 text-center rounded-xl"
                onClick={() => {
                  headingClick("Get a Quote");
                  setIsOpen(false);
                }}
              >
                Get a Quote
              </li>
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
