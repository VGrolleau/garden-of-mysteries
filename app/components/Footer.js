const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="text-gray-600 text-sm my-8 z-10">
      Le Jardin des Mystères © {year}
    </footer>
  );
};

export default Footer;
