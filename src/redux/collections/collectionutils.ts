export const filterCat = (collections: any[], route: string) => {
  const item = collections.find((item) => item.category === route)
  return Object(item)
}
