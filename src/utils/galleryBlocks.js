// utils/galleryBlocks.js
export function generateGalleryBlocks(items) {
  if (!items || items.length === 0) return [];

  const blocks = [];
  let i = 0;
  let toggle = true; // true = 2 kolom, false = 1 kolom

  while (i < items.length) {
    if (toggle) {
      // block 2 kolom
      blocks.push({
        type: "two",
        items: [items[i], items[i + 1] || null],
      });
      i += 2;
    } else {
      // block 1 kolom
      blocks.push({
        type: "full",
        items: [items[i]],
      });
      i += 1;
    }
    toggle = !toggle;
  }

  // Cek kalau block terakhir hasilnya "two" tapi cuma ada 1 foto
  const lastBlock = blocks[blocks.length - 1];
  const isSingleLeft =
    lastBlock?.type === "two" && lastBlock.items.filter(Boolean).length === 1;

  if (isSingleLeft) {
    // Rebuild semua jadi pola 2-2-2
    const fixedBlocks = [];
    for (let j = 0; j < items.length; j += 2) {
      fixedBlocks.push({
        type: "two",
        items: [items[j], items[j + 1] || null],
      });
    }
    return fixedBlocks;
  }

  return blocks;
}
