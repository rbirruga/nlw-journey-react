import { CircleDashed, UserCog2 } from "lucide-react";

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">
              Rodrigo Dulizio
            </span>
            <span className="block text-sm text-zinc-400 truncate">
              rodrigo@email.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 size-5" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">
              Rodrigo José Antonio da Silva
            </span>
            <span className="block text-sm text-zinc-400 truncate">
              rodrigodasilva@email.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 size-5" />
        </div>
      </div>

      <button className="bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg h-11 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
        <UserCog2 className="size-5" />
        Gerenciar convidados
      </button>
    </div>
  );
}
