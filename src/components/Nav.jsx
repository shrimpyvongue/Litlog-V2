import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav text-blue-accent">
      <div className="flex items-center space-x-4">
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
        <Link href="/signup">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Nav;
