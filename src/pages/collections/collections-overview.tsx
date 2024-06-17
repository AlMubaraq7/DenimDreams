import {
  Container,
  Boxes,
  TopTitle,
  BottomTitle,
} from "./collections-overview.styles"
import { getCategory } from "../../redux/items/item.slice"
import { useLocation, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import Loading from "../../components/loading/Loading.component"

const CollectionsOverview = () => {
  const { items, isFetching } = useAppSelector((state) => state.items)
  const itemsCollection = items
  let itemsArray
  if (itemsCollection) {
    // Converts object to array and then sorts by id
    itemsArray = Object.entries(itemsCollection).sort(
      (a, b) => a[1].id - b[1].id,
    )
  }
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const navigateToSelectedPage = (route: unknown) => {
    navigate(`${pathname}/${route}`)
    dispatch(getCategory(route))
  }

  return (
    <>
      {isFetching ? (
        <Loading />
      ) : (
        <Container>
          {itemsArray?.map((innerArr: any) => {
            return (
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
            )
          })}
        </Container>
      )}
    </>
  )
}

export default CollectionsOverview
// {itemsArray?.map((innerArr: any) => (
//   <Boxes
//     key={innerArr[1]?.id}
//     $imageUrl={innerArr[1]?.imageUrl}
//     onClick={() => navigateToSelectedPage(innerArr[1]?.route)}
//   >
//     {innerArr[1]?.placement ? (
//       <BottomTitle>{innerArr[1]?.category}</BottomTitle>
//     ) : (
//       <TopTitle>{innerArr[1]?.category}</TopTitle>
//     )}
//   </Boxes>
// ))}
