import Link from "next/link";

const input =
  "mb-2 w-full rounded border border-neutral-300 px-3 py-2";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Sign up</h1>
      <input
        placeholder="username"
        defaultValue="ada"
        className={`wd-username ${input}`}
      />
      <input
        placeholder="password"
        type="password"
        defaultValue="123"
        className={`wd-password ${input}`}
      />
      <input
        placeholder="verify password"
        type="password"
        className={`wd-password-verify ${input}`}
      />
      <Link
        href="/account/profile"
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white no-underline"
      >
        Sign up
      </Link>
      <Link href="/account/signin">Sign in</Link>
    </div>
  );
}
