export const fixExcerpt = (excerpt: string) => {
  return excerpt
    .split("!hidden")[0]
    .replaceAll(/\[(.*?)\]/g, (_match: string, group: string) => {
      if (group.includes("|")) {
        return group.split("|")[1].trim();
      } else {
        return group.trim();
      }
    })
    .replaceAll("[", "");
};
