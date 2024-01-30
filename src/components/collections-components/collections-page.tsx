import { useAppSelector } from "../../app/hooks"
import {
  SubCategoryNav,
  SubCategoryLink,
  Container,
} from "./collections-page.styles"
import { useParams } from "react-router-dom"

const CollectionsPage = () => {
  const { id } = useAppSelector((state) => state.collection)
  console.log(id)
  const { categoryId } = useParams()

  return (
    <>
      <SubCategoryNav>
        <SubCategoryLink></SubCategoryLink>
        <SubCategoryLink></SubCategoryLink>
        <SubCategoryLink></SubCategoryLink>
      </SubCategoryNav>
      <Container>{categoryId}</Container>
    </>
  )
}
export default CollectionsPage
