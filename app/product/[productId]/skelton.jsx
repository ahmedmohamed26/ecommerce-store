import React from "react";

export const SkeltonProduct = () => {
  return (
    <div class="rounded-md p-4 h-[500px] w-full  ">
      <div class="animate-pulse grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8">
        <div class="rounded-md bg-slate-200 h-[350px] w-full"></div>
        <div class="flex-1 space-y-6 py-1">
          <div class="space-y-3">
            <div class="h-3 w-[300px] bg-slate-200 rounded"></div>
            <div class="h-3 w-[250px] bg-slate-200 rounded"></div>
            <div class="h-3 w-[200px] bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
