import Link from "next/link";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-gray-800 text-white p-4 text-center w-full">
      <p>© {year} Le Jardin des Mystères</p>
      <p>Développé par Virginie GROLLEAU</p>
    </footer>
  );
};

export default Footer;
