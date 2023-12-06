import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className="flex flex-row p-3 bg-gray-400">
      <ul>
        <li>
          <Link
            href="/dashboard"
            className="text-blue-600 hover:text-blue-800 p-2"
          >
            {" "}
            Dashboard
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link
            href="/settings"
            className="text-blue-600 hover:text-blue-800 p-2"
          >
            {" "}
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
