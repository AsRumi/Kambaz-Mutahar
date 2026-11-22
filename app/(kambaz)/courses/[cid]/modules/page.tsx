"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import Module from "./Module";
import ModulesControls from "./ModulesControls";
import { useModulesStore } from "../../../store/modulesStore";
import * as client from "../../client";

export default function Modules() {
  const { cid } = useParams();
  const modules = useModulesStore((state) => state.modules);
  const setModules = useModulesStore((state) => state.setModules);
  useEffect(() => {
    client.findModulesForCourse(String(cid)).then(setModules);
  }, [cid, setModules]);
  return (
    <div>
      <ModulesControls />
      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules.map((module) => (
          <Module key={module._id} module={module} />
        ))}
      </ul>
    </div>
  );
}
