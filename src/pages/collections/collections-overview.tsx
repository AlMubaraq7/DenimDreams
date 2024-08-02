import {
  Container,
  Boxes,
  TopTitle,
  BottomTitle,
  NotFoundContainer,
  NotFoundText,
  NotFoundBtn,
} from "./collections-overview.styles"
import { fetchCollectionStart, getCategory } from "../../redux/items/item.slice"
import { useLocation, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import Loading from "../../components/loading/Loading.component"
import { Helmet } from "react-helmet-async"
import { routeVariants } from "../../animation"
import { motion } from "framer-motion"
import { useMemo } from "react"

const CollectionsOverview = () => {
  const { items, isFetching } = useAppSelector((state) => state.items)
  const itemsCollection = items
  const itemsArray = useMemo(
    () =>
      itemsCollection &&
      Object.entries(itemsCollection).sort((a, b) => a[1]?.id - b[1]?.id),
    [itemsCollection],
  )
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const navigateToSelectedPage = (route: unknown) => {
    navigate(`${pathname}/${route}`)
    dispatch(getCategory(route))
  }
  const renderLoading = () => {
    return <Loading />
  }
  const renderCollections = () => {
    return (
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
    )
  }
  const renderError = () => {
    return (
      <NotFoundContainer>
        <NotFoundText>Collections not found</NotFoundText>
        <NotFoundBtn onClick={() => dispatch(fetchCollectionStart())}>
          Try again
        </NotFoundBtn>
      </NotFoundContainer>
    )
  }
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      exit="exit"
      transition={routeVariants.transition}
    >
      <Helmet>
        <title>
          Explore Our Collections | Trendy Denim Fashion for Men and Women
        </title>
        <meta
          property="og:title"
          content="Explore Our Collections | Trendy Denim Fashion for Men and Women"
        />
        <meta
          property="og:description"
          content="Browse our curated collections of fashionable clothing for men and women. From Denim tops to bottoms to accessories, find the perfect pieces to mix and match your unique style."
        />
        <meta property="og:image" content="../../assets/meta/collections.png" />
      </Helmet>
      {isFetching
        ? renderLoading()
        : items && Object.keys(items).length !== 0
        ? renderCollections()
        : renderError()}
    </motion.div>
  )
}

export default CollectionsOverview
// (
//   <Container>
//     {itemsArray?.map((innerArr: any) => {
//       return (
//         <Boxes
//           key={innerArr[1]?.id}
//           $imageUrl={innerArr[1]?.imageUrl}
//           onClick={() => navigateToSelectedPage(innerArr[1]?.route)}
//         >
//           {innerArr[1]?.placement ? (
//             <BottomTitle>{innerArr[1]?.category}</BottomTitle>
//           ) : (
//             <TopTitle>{innerArr[1]?.category}</TopTitle>
//           )}
//         </Boxes>
//       )
//     })}
//   </Container>
// )
