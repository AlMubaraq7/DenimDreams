import {
  SubCategoryNav,
  SubCategoryLink,
  ItemContainer,
  ItemBox,
  ItemImg,
  ItemName,
  ItemPrice,
  AddToCart,
} from "./collections-page.styles"

import { useEffect, useState } from "react"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { ClothingItem, Subcategory } from "../../utils"
import { addItemToCart } from "../../redux/cart/cart.slice"

const CollectionsPage = () => {
  const dispatch = useAppDispatch()
  const selectedCat = useAppSelector((state) => state.items.selectedItem)
  const [link, Setlink] = useState<string | undefined>("")
  useEffect(() => {
    Setlink(selectedCat?.subcategories[0].name)
  }, [])

  return (
    <>
      <SubCategoryNav>
        {selectedCat?.subcategories.map((item: Subcategory) => (
          <SubCategoryLink key={item.name} onClick={() => Setlink(item.name)}>
            {item.name}
          </SubCategoryLink>
        ))}
      </SubCategoryNav>
      <ItemContainer>
        {selectedCat?.subcategories.map((subcat: Subcategory) => {
          if (subcat.name === link) {
            return subcat.items.map((item: ClothingItem) => (
              <ItemBox key={item.id}>
                <ItemImg
                  style={{
                    backgroundImage: `url(${item.imageUrl})`,
                  }}
                />
                <ItemName>{item.name}</ItemName>
                <ItemPrice>${item.price}</ItemPrice>
                <AddToCart onClick={() => dispatch(addItemToCart(item))}>
                  Add to Cart
                </AddToCart>
              </ItemBox>
            ))
          }
        })}
      </ItemContainer>
    </>
  )
}
export default CollectionsPage
