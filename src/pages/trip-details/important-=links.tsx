import { Link2, PlusCircle } from "lucide-react";

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">
              Reserva do AirBnB
            </span>
            <a
              href="https://ge.globo.com/"
              className="block text-xs text-zinc-400 hover:text-zinc-200 truncate"
            >
              https://ge.globo.com/3123213213131646464d64fa6s4d6f4a6sd4f6a4sd6f4a6sd4f6a
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">
              Reserva do AirBnB
            </span>
            <a
              href="https://ge.globo.com/"
              className="block text-xs text-zinc-400 hover:text-zinc-200 truncate"
            >
              https://ge.globo.com/3123213213131646464d64fa6s4d6f4a6sd4f6a4sd6f4a6sd4f6a
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5" />
        </div>
      </div>

      <button className="bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg h-11 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
        <PlusCircle className="size-5" />
        Cadastrar novo link
      </button>
    </div>
  );
}
