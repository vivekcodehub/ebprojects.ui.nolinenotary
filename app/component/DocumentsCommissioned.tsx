"use client";

import { useState } from "react";
import { TABS } from "../lib/data/mock-data";
import { cn } from "@/lib/utils";

export default function DocumentsCommissioned() {
  const [activeId, setActiveId] = useState(TABS[0].id);
  const active = TABS.find((tab) => tab.id === activeId) ?? TABS[0];
 
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="maxContainer">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="title36 text-primary-black text-balance">
            What Documents Can Be Commissioned Online in Ontario?
          </h2>
          <p className="mt-4 text-neutral-600 text-pretty">
            Many commonly used affidavits and statutory declarations can be
            commissioned remotely in Ontario. <br/> We can assist with eligible
            documents including:
          </p>
        </div>
 
        {/* Tab list */}
        <div
          role="tablist"
          aria-label="Document categories"
          className="scrollbar-none flex gap-2 justify-between overflow-x-auto border-b border-neutral-200 [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {TABS.map((tab) => {
            const isActive = tab.id === activeId;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setActiveId(tab.id)}
                className={cn(
                  "shrink-0 cursor-pointer border-b-2 px-4 py-3 body18 whitespace-nowrap transition-colors",
                  isActive
                    ? "border-primary-yellow text-primary-black"
                    : "border-transparent text-neutral-10 hover:text-primary-black",
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
 
        {/* Tab panel */}
        <div
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          className="bg-neutral-off-white mt-8 rounded-xl p-8 md:p-14"
        >
          <h3 className="title24 text-primary-black mb-4">{active.heading}</h3>
 
          {active.intro && (
            <p className="mb-4 text-primary-black">{active.intro}</p>
          )}
 
          <ul className="grid list-disc grid-cols-1 gap-x-8 gap-y-2 pl-5 md:grid-cols-2">
            {active.items.map((item) => (
              <li key={item} className="text-primary-black">
                {item}
              </li>
            ))}
          </ul>
 
          {active.outro && (
            <p className="mt-6 text-primary-black">{active.outro}</p>
          )}
        </div>
      </div>
    </section>
  );
}