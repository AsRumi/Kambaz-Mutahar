"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccountContext } from "./AccountContext";

export default function AccountNavigation() {
  const { currentUser } = useAccountContext();
  const pathname = usePathname() ?? "";

  let links = [
    ["Signin", "/account/signin"],
    ["Signup", "/account/signup"],
  ];
  if (currentUser) {
    links = [["Profile", "/account/profile"]];
  }

  return (
    <div id="wd-account-navigation" className="wd list-group rounded-none">
      {links.map(([label, href]) => (
        <Link
          key={href}
          href={href}
          className={
            pathname === href
              ? "list-group-item active border-0"
              : "list-group-item border-0 text-red-600"
          }
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
