import Lesson from "./Lesson";
import ModuleControlButtons from "./ModuleControlButtons";
import { useModulesStore, type CourseModule } from "../../../store/modulesStore";
import * as client from "../../client";

export default function Module({ module }: { module: CourseModule }) {
  const updateModule = useModulesStore((state) => state.updateModule);
  const onUpdateModule = async () => {
    const saved = await client.updateModule({ ...module, editing: false });
    updateModule(saved);
  };
  return (
    <li className="wd-module mb-5 overflow-hidden border border-neutral-400 p-0">
      <div className="wd-title flex items-center justify-between bg-neutral-200 p-3 font-semibold">
        {module.editing ? (
          <input
            className="w-1/2 rounded border border-neutral-300 bg-white px-2 py-1 text-base"
            defaultValue={module.name}
            onChange={(e) => updateModule({ ...module, name: e.target.value })}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onUpdateModule();
              }
            }}
          />
        ) : (
          <span>{module.name}</span>
        )}
        <ModuleControlButtons moduleId={module._id} />
      </div>
      <ul className="wd-lessons m-0 list-none p-0">
        {module.lessons?.map((lesson) => (
          <Lesson key={lesson._id} title={lesson.name} />
        ))}
      </ul>
    </li>
  );
}
