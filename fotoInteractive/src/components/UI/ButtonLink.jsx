import { Link } from "react-router";

export const ButtonLink = ({ to, children }) => (
    <Link to={to} className="bg-indigo-500 px-4 py-1 rounded-md text-white">
        {children}
    </Link>
);