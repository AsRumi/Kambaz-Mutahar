"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useAccountContext } from "./AccountContext";
import * as client from "./client";

export default function Session({ children }: { children: ReactNode }) {
  const [pending, setPending] = useState(true);
  const { setCurrentUser } = useAccountContext();
  useEffect(() => {
    client
      .profile()
      .then(setCurrentUser)
      .catch(() => setCurrentUser(null))
      .finally(() => setPending(false));
  }, [setCurrentUser]);
  if (pending) {
    return null;
  }
  return children;
}
