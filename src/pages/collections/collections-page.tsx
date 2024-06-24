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
import { useNavigate } from "react-router-dom"
const containerVariants = {
  initial: { opacity: 0 },
  final: {
    opacity: 1,
  },
}
const itemVariants = {
  initial: { x: "-50%", opacity: 0 },
  final: { x: "0%", opacity: 1 },
}

const CollectionsPage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const user = useAppSelector((state) => state.user.user)
  const selectedCat = useAppSelector((state) => state.items.selectedItem)
  const [link, setLink] = useState<string>("")
  useEffect(() => {
    if (selectedCat) {
      setLink(selectedCat.subcategories[0].name)
    }
  }, [])

  return (
    <>
      <SubCategoryNav>
        {selectedCat?.subcategories.map((item: Subcategory) => (
          <SubCategoryLink key={item.name} onClick={() => setLink(item.name)}>
            {item.name}
          </SubCategoryLink>
        ))}
      </SubCategoryNav>

      <ItemContainer
        variants={containerVariants}
        initial="initial"
        animate="final"
      >
        {selectedCat?.subcategories.map((subcat: Subcategory) => {
          if (subcat.name === link) {
            return subcat.items.map((item: ClothingItem) => (
              <ItemBox key={item.id} variants={itemVariants}>
                <ItemImg
                  style={{
                    backgroundImage: `url(${item.imageUrl})`,
                  }}
                />
                <ItemName>{item.name}</ItemName>
                <ItemPrice>${item.price}</ItemPrice>
                <AddToCart
                  onClick={() =>
                    user ? dispatch(addItemToCart(item)) : navigate("/sign-in")
                  }
                >
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
