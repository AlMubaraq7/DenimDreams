import Hero from "./Hero/Hero.component"
import Trending from "./Trending/Trending.component"
import { useEffect } from "react"
// import clothingCategories from "./data/clothing-categories.data"
import { fetchCollectionStart } from "../../redux/items/item.slice"
import { useAppDispatch } from "../../app/hooks"
import { Helmet } from "react-helmet-async"
import { routeVariants } from "../../animation"
import { motion } from "framer-motion"
// import { addCollectionsAndItems } from "./firebase/firebase.utils"
const Homepage = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    // addCollectionsAndItems("collections", clothingCategories)
    dispatch(fetchCollectionStart())
  }, [])
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      exit="exit"
    >
      <Helmet>
        <title>DenimDreams | Embrace the Denim Lifestyle</title>
        <meta
          property="og:title"
          content="DenimDreams | Embrace the Denim Lifestyle"
        />
        <meta
          property="og:description"
          content="  Discover the latest trends in fashion with our Denim collections for
          men and women. Shop unique styles in denim and create your perfect
          outfit with ease!"
        />
        <meta property="og:image" content="../../assets/meta/homepage.png" />
      </Helmet>
      <Hero />
      <Trending />
    </motion.div>
  )
}

export default Homepage
