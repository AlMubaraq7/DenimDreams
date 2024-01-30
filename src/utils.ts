export interface ClothingCategory {
  id: number
  route: string
  category: string
  subcategories: Subcategory[]
}

interface Subcategory {
  name: string
  items: ClothingItem[]
}

interface ClothingItem {
  id: number
  name: string
  price: number
  imageUrl: string
}
