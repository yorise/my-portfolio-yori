export function generateGalleryBlocks(items) {
  if (!items || items.length === 0) return [];

  const isEven = items.length % 2 === 0;
  const blocks = [];
  let i = 0;

  if (items.length === 1) {
    // single photo → display full width
    blocks.push({ type: "one", items: [items[0]] });
  } else if (isEven) {
    // even → always 2 column
    while (i < items.length) {
      blocks.push({ type: "two", items: [items[i], items[i + 1]] });
      i += 2;
    }
  } else {
    // odd → 2-1-2-1 pattern
    while (i < items.length) {
      if (i + 2 < items.length) {
        blocks.push({ type: "two", items: [items[i], items[i + 1]] });
        blocks.push({ type: "one", items: [items[i + 2]] });
        i += 3;
      } else {
        // 2 left at the end
        blocks.push({ type: "two", items: [items[i], items[i + 1]] });
        i += 2;
      }
    }
  }

  return blocks;
}
