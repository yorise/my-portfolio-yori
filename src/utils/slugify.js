export function slugify(text) {
  if (!text) return "";

  return text
    .toString()
    .toLowerCase() // semua huruf kecil
    .trim() // hapus spasi di awal/akhir
    .replace(/[^a-z0-9]+/g, "-") // spasi & simbol jadi "-"
    .replace(/^-+|-+$/g, ""); // hapus dash di awal/akhir
}
