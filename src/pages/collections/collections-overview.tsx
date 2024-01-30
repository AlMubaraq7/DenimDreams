import {
  Container,
  Boxes,
  TopTitle,
  BottomTitle,
} from "./collections-overview.styles"
import { OVERVIEW_DATA } from "../../data/collections-overview.data"
import { useLocation, useNavigate } from "react-router-dom"
import { filterCategory } from "../../redux/collections/collectionSlice"
import { useAppDispatch } from "../../app/hooks"

const CollectionsOverview = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const dispatch = useAppDispatch()
  const navigateToSelectedPage = (route: string) => {
    navigate(`${pathname}/${route}`)
    dispatch(filterCategory(route))
  }

  return (
    <Container>
      {OVERVIEW_DATA.map(({ id, imageURL, title, route, placement }) => (
        <Boxes
          key={id}
          $imageUrl={imageURL}
          onClick={() => navigateToSelectedPage(route)}
        >
          {placement ? (
            <BottomTitle>{title}</BottomTitle>
          ) : (
            <TopTitle>{title}</TopTitle>
          )}
        </Boxes>
      ))}
    </Container>
  )
}

export default CollectionsOverview
