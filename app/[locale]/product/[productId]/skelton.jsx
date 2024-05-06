import React from "react";

export const SkeltonProduct = () => {
  return (
    <div className="rounded-md p-4 h-[500px] w-full  ">
      <div className="animate-pulse grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="rounded-md bg-slate-200 h-[350px] w-full"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="space-y-3">
            <div className="h-3 w-[300px] bg-slate-200 rounded"></div>
            <div className="h-3 w-[250px] bg-slate-200 rounded"></div>
            <div className="h-3 w-[200px] bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
