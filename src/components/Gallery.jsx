"use client";
import Image from "next/image";
import { generateGalleryBlocks } from "@/utils/galleryBlocks";

export default function Gallery({ items }) {
  if (!items || items.length === 0) return null;

  const blocks = generateGalleryBlocks(items);

  return (
    <section className="p-4 sm:p-6 md:p-8">
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8">
        {blocks.map((block, bIdx) =>
          block.type === "two" ? (
            <div
              key={bIdx}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            >
              {block.items.map((item, idx) => (
                <div
                  key={`${bIdx}-${idx}`}
                  className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-md bg-gray-100"
                >
                  <Image
                    src={item.img}
                    alt={item.title || `Gallery ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div
              key={`${bIdx}-full`}
              className="relative w-full aspect-[16/9] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-md bg-gray-100 col-span-1"
            >
              <Image
                src={block.items[0].img}
                alt={block.items[0].title || `Gallery full`}
                fill
                className="object-cover"
              />
            </div>
          )
        )}
      </div>
    </section>
  );
}
