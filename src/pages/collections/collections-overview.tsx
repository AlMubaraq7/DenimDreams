import {
  Container,
  Boxes,
  TopTitle,
  BottomTitle,
} from "./collections-overview.styles"
import { getCategory } from "../../redux/items/item.slice"
import { useLocation, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks"

const CollectionsOverview = () => {
  const itemsCollection = useAppSelector((state) => state.items.items)
  let itemsArray
  if (itemsCollection) {
    itemsArray = Object.entries(itemsCollection)
  }
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const navigateToSelectedPage = (route: string | undefined) => {
    navigate(`${pathname}/${route}`)
    dispatch(getCategory(route))
  }

  return (
    <Container>
      {itemsArray?.map((innerArr: any) => (
        <Boxes
          key={innerArr[1]?.id}
          $imageUrl={innerArr[1]?.imageUrl}
          onClick={() => navigateToSelectedPage(innerArr[1]?.route)}
        >
          {innerArr[1]?.placement ? (
            <BottomTitle>{innerArr[1]?.category}</BottomTitle>
          ) : (
            <TopTitle>{innerArr[1]?.category}</TopTitle>
          )}
        </Boxes>
      ))}
    </Container>
  )
}

export default CollectionsOverview
