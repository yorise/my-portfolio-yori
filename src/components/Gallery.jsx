"use client";
import Image from "next/image";
import { useState } from "react";
import { generateGalleryBlocks } from "@/utils/galleryBlocks";
import PreviewModal from "./PreviewModal";

export default function Gallery({ items }) {
  if (!items || items.length === 0) return null;

  const blocks = generateGalleryBlocks(items);
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <section className="p-4 sm:p-6 md:p-8">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8">
          {blocks.map((block, bIdx) => {
            if (block.type === "two") {
              return (
                <div
                  key={bIdx}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                >
                  {block.items.map((item, idx) =>
                    item ? (
                      <div
                        key={`${bIdx}-${idx}`}
                        className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-md bg-gray-100 cursor-pointer"
                        onClick={() => setActiveIndex(items.indexOf(item))}
                      >
                        <Image
                          src={item.img}
                          alt={item.title || `Gallery`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div key={`${bIdx}-${idx}`} />
                    ),
                  )}
                </div>
              );
            }

            // block.type === "full"
            const item = block.items[0];
            return item ? (
              <div
                key={`${bIdx}-full`}
                className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-md bg-gray-100 cursor-pointer"
                onClick={() => setActiveIndex(items.indexOf(item))}
              >
                <Image
                  src={item.img}
                  alt={item.title || `Gallery full`}
                  fill
                  className="object-cover"
                />
              </div>
            ) : null;
          })}
        </div>
      </section>

      {activeIndex !== null && (
        <PreviewModal
          items={items}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onChange={setActiveIndex}
        />
      )}
    </>
  );
}
