const clothingCategories = {
  mens: {
    id: 1,
    category: "mens",
    imageUrl:
      "https://images.pexels.com/photos/6764015/pexels-photo-6764015.jpeg?auto=compress&cs=tinysrgb&w=600",
    route: "mens",
    placement: false,
    subcategories: [
      {
        name: "Tops",
        route: "tops",
        items: [
          {
            id: 1,
            name: "Denim Bowling Shirt",
            price: 30,
            imageUrl:
              "https://bloomingdales.com.kw/dw/image/v2/BDSP_PRD/on/demandware.static/-/Sites-bloomingdales-master-catalog/default/dw2de00eee/images/hi-res/BLM/Dsquared/216836296/216836296_PK.jpg?sw=435&sh=650&q=100?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 2,
            name: "Denim Black Shirt",
            price: 40,
            imageUrl:
              "https://static.miinto.net/64288d09f9fe935ecf88ea6506b03de1.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 3,
            name: "Denim Vintage Shirt",
            price: 35,
            imageUrl:
              "https://i.ebayimg.com/images/g/VcYAAOSwuNlg8D7F/s-l1600.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 4,
            name: "Denim Flannel Shirt",
            price: 40,
            imageUrl:
              "https://diamu.com.bd/wp-content/uploads/2023/12/Indigo-Denim-Shirt-%E2%80%93-13.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 5,
            name: "Denim Overshirt",
            price: 30,
            imageUrl:
              "https://bloomingdales.ae/dw/image/v2/BDSP_PRD/on/demandware.static/-/Sites-bloomingdales-master-catalog/default/dw3e3f875b/images/hi-res/BLM/Apc/215602094/215602094_PK.jpg?sw=435&sh=650&q=100?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 6,
            name: "Denim Baseball Jersey",
            price: 70,
            imageUrl:
              "https://d3nt9em9l1urz8.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/b/a/baabdenbas-1.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 7,
            name: "Denim Patchwork Shirt",
            price: 100,
            imageUrl:
              "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/z/01/14c4179d-4bea-4d34-b091-fa050ef54ecd.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 8,
            name: "Denim Grandad Shirt",
            price: 35,
            imageUrl:
              "https://www.cottontraders.com/dw/image/v2/BCDM_PRD/on/demandware.static/-/Sites-cotton-master-catalog/default/dw2389fe98/images/original/AB11637_AW18_LIGHT_STONEWASH_AMZ1_20180822144550575.jpg?sw=549?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          // Add more items as needed
        ],
      },
      {
        name: "Bottoms",
        route: "bottoms",
        items: [
          {
            id: 9,
            name: "Denim Bootcut Jeans",
            price: 50,
            imageUrl:
              "https://www.sportsdirect.com/images/imgzoom/65/65197920_xxl.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 10,
            name: "Denim Shorts",
            price: 35,
            imageUrl:
              "https://nz.lionessfashion.com/cdn/shop/files/20_12_23_LIONESS_GM_JAN2024_GhostMannequin_JAN_113copy_504x733.jpg?v=1711432992?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 11,
            name: "Denim Cargo Jeans",
            price: 75,
            imageUrl:
              "https://d1flfk77wl2xk4.cloudfront.net/Assets/32/332/XL_p0199033232.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 12,
            name: "Denim Baggy Jeans",
            price: 70,
            imageUrl:
              "https://global.diesel.com/on/demandware.static/-/Sites-diesel-master-catalog/default/dw5602f1a1/images/large/A11598_09H57_01_I.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 13,
            name: "Denim Cargo Shorts",
            price: 50,
            imageUrl:
              "https://i.ebayimg.com/thumbs/images/g/YCQAAOSwz3pmKM8d/s-l1200.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 14,
            name: "Denim Hip-Hop Jeans",
            price: 100,
            imageUrl:
              "https://ae01.alicdn.com/kf/HTB1TF5qXu6sK1RjSsrbq6xbDXXaN.jpg_640x640Q90.jpg_.webp?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 15,
            name: "Denim Jogger Jeans",
            price: 70,
            imageUrl:
              "https://img.tatacliq.com/images/i7/437Wx649H/MP000000011544101_437Wx649H_202112222357121.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 16,
            name: "Denim Patchwork Jeans M",
            price: 100,
            imageUrl:
              "https://remygirlreworks.com/cdn/shop/products/PhotoRoom_20220128_133535_grande.jpg?v=1643396011?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
        ],
      },
    ],
  },
  womens: {
    id: 2,
    category: "womens",
    imageUrl:
      "https://images.pexels.com/photos/6765182/pexels-photo-6765182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&lazy=load",
    route: "womens",
    placement: false,
    subcategories: [
      {
        name: "Tops",
        route: "tops",
        items: [
          {
            id: 17,
            name: "Denim Ruffled Top",
            price: 45,
            imageUrl:
              "https://mobile.yoox.com/images/items/10/10320353LK_14_f.jpg?impolicy=crop&width=387&height=490?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 18,
            name: "Denim Tunic Dress  ",
            price: 30,
            imageUrl:
              "https://www.zimmermann.com/media/catalog/product/1/_/1.7073dss231.mid.midnight.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 19,
            name: "Denim Shirt Dress",
            price: 45,
            imageUrl:
              "https://www.kekale.fi/media/catalog/product/cache/7d7423905dcbbcb3c01eb06654d598bd/p/i/pieces-naisten-farkkumekko-namir-ls-denim-shirt-dress-indigo-1.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 20,
            name: "Denim Corset",
            price: 35,
            imageUrl:
              "https://images.showpo.com/dw/image/v2/BDPQ_PRD/on/demandware.static/-/Sites-sp-master-catalog/default/dwc3c8ac8b/images/kendra-top-denim-bustier-corset-top-ST23080013/GHOST_KENDRA-TOP_DARK-WASH.png?sw=1563&sh=2500?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 21,
            name: "Denim Off-shoulder Jumpsuit",
            price: 75,
            imageUrl:
              "https://cdn.shopify.com/s/files/1/0909/7886/products/DilliGrey96484_2035.jpg?v=1666097087?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 22,
            name: "Denim Crop Top",
            price: 40,
            imageUrl:
              "https://img.mytheresa.com/1094/1238/100/jpeg/catalog/product/bb/P00484248.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 23,
            name: "Denim Halter Top",
            price: 45.0,
            imageUrl:
              "https://www.sagestudio.co.uk/wp-content/uploads/2020/07/TZGZ18072DB.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 24,
            name: "Denim Pinafore Dress",
            price: 30,
            imageUrl:
              "https://www.babeandbabble.com/cdn/shop/products/denimdress3.png?v=1604346795&width=1946?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
        ],
      },
      {
        name: "Bottoms",
        route: "bottoms",
        items: [
          {
            id: 25,
            name: "Denim Mini Skirt",
            price: 55,
            imageUrl:
              "https://www.gigibelle.com/cdn/shop/files/Tahlia-Denim-Mini-Skirt-Ghost_700x_a6988e2c-7024-4cd3-bf38-22528f6b8846_800x.webp?v=1698805999?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 26,
            name: "Denim Flare Jeans",
            price: 80,
            imageUrl:
              "https://images.squarespace-cdn.com/content/v1/6436e68b3e41f224b8b0a966/1681319648653-VI60MVZ9PZ2ADB7CIAOE/2707-CAMBRIDGE_4500-min.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 27,
            name: "Denim Boyfriend Jeans",
            price: 70,
            imageUrl:
              "https://www.rowiethelabel.com/cdn/shop/files/Molly-Classic-Jeans-Classic-Wash-AW24-ROWIE.jpg?v=1714959920&width=2000?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 28,
            name: "Denim Two-Toned Jeans",
            price: 85,
            imageUrl:
              "https://previews.123rf.com/images/padabed/padabed2005/padabed200500081/147179875-women-s-jeans-with-one-leg-of-the-indigo-color-and-the-other-leg-of-the-material-inside-out-isolated.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 29,
            name: "Denim Mom Jeans",
            price: 55,
            imageUrl:
              "https://thumbs.dreamstime.com/b/blue-jeans-1055770.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 30,
            name: "Denim Patchwork Jeans W",
            price: 100,
            imageUrl:
              "https://i.ebayimg.com/images/g/p~4AAOSwLRNlRom-/s-l1200.webp?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 31,
            name: "Denim Flared Skirt",
            price: 60,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/22/04/97/11/22049711_51857672_600.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 32,
            name: "Denim Long Skirt",
            price: 85,
            imageUrl:
              "https://images.thebestshops.com/product_images/original/SL12263-015_01-76e885.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
        ],
      },
    ],
  },
  outerwears: {
    id: 3,
    category: "outerwears",
    imageUrl:
      "https://barneyandfleur.com/cdn/shop/products/A0725_L-Denim-Trench-Coat-INDIGO_5_1024x_563cff63-d443-4527-96a5-93c5e55e716f_1024x1024@2x.webp?v=1678081610?auto=compress&cs=tinysrgb&w=600",
    route: "outerwears",
    placement: true,
    subcategories: [
      {
        name: "Jackets",
        route: "jackets",
        items: [
          {
            id: 33,
            name: "Classic Denim Jacket",
            price: 60,
            imageUrl:
              "https://images.garmentory.com/images/6667506/large/Dimitri-Denim-Jacket-20220216223128.jpg?1645050690?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 34,
            name: "Distressed Denim Jacket  ",
            price: 75,
            imageUrl:
              "https://mobile.yoox.com/images/items/16/16330616UR_14_f.jpg?impolicy=crop&width=387&height=490?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 35,
            name: "Sherpa-Lined Denim Jacket",
            price: 90,
            imageUrl:
              "https://m.media-amazon.com/images/I/71-0y6bKuNL._AC_SX569_.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 36,
            name: "Cropped Denim Jacket",
            price: 65,
            imageUrl:
              "https://i.etsystatic.com/30934006/r/il/352957/6100593992/il_570xN.6100593992_6ce4.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 37,
            name: "Denim Varsity Jacket",
            price: 100,
            imageUrl:
              "https://xlarge.com.au/cdn/shop/products/XL035503_LBL_1_xzrdr8.jpg?v=1681688619?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 38,
            name: "Denim Baseball Jacket",
            price: 80,
            imageUrl:
              "https://m.media-amazon.com/images/I/61sGMKThktL._AC_SX466_.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 39,
            name: "Hooded Denim Bomber",
            price: 60,
            imageUrl:
              "https://thepremierstore.com/cdn/shop/products/6-6-22-Dime-Hooded-Bomber-Blue-1_1500x.jpg?v=1654522137?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 40,
            name: "Oversized Denim Jacket",
            price: 70,
            imageUrl:
              "https://cdn.shopify.com/s/files/1/2440/9807/files/8519636418891-PP-PB-01-NJA.jpg?v=1688561613?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
        ],
      },
      {
        name: "Coats",
        route: "coats",
        items: [
          {
            id: 41,
            name: "Denim Trench Coat",
            price: 120,
            imageUrl:
              "https://cdna.lystit.com/1040/1300/n/photos/harrods/58b86d8c/jw-anderson-grey-Wool-blend-Trench-Coat.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 42,
            name: "Denim Cape",
            price: 100,
            imageUrl:
              "https://cdna.lystit.com/400/500/tr/photos/thebs/d7853bf1/sacai-Blue-Denim-Cape.jpeg?v=1704281850?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 43,
            name: "Denim Duster Coat",
            price: 130,
            imageUrl:
              "https://i5.walmartimages.com/asr/73e36db9-7fed-49b3-a748-ff8f191f2e78.6d1371e65e600a64ff6a782f49c7e8de.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 44,
            name: "Denim Blazer",
            price: 170,
            imageUrl:
              "https://images.nexusapp.co/assets/76/58/e4/494787555.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 45,
            name: "Denim Quilted Coat",
            price: 140,
            imageUrl:
              "https://www.gap.com/webcontent/0014/774/488/cn14774488.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 46,
            name: "Denim Mac Coat",
            price: 160,
            imageUrl:
              "https://assets.digitalcontent.marksandspencer.app/image/upload/q_auto,f_auto/SD_01_T49_5065_QQ_X_EC_94?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 47,
            name: "Denim Car Coat",
            price: 150,
            imageUrl:
              "https://m.someone-life.com/web/product/big/202202/1f4c5486c5b5a6c686e6a47b9c567713.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 48,
            name: "Denim Swing Coat",
            price: 135,
            imageUrl:
              "https://www.rubyroomlifestyle.co.uk/images/jxelza-worker-denim-jacket-p9342-30629_image.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
        ],
      },
    ],
  },
  accessories: {
    id: 4,
    category: "accessories",
    imageUrl:
      "https://primedia.primark.com/i/primark/denim-acc-topimg?auto=compress&cs=tinysrgb&w=600",
    route: "accessories",
    placement: true,
    subcategories: [
      {
        name: "Head",
        route: "head",
        items: [
          {
            id: 49,
            name: "Denim Baseball Cap",
            price: 50,
            imageUrl:
              "https://i.ebayimg.com/images/g/6NUAAOSwxnFgo0Kb/s-l1200.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 50,
            name: "Denim Distressed Cap",
            price: 70,
            imageUrl:
              "https://i.ebayimg.com/images/g/28QAAOSwmktfq6Mm/s-l400.jpg?v=1704281850?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 51,
            name: "Denim Bucket Hat",
            price: 65,
            imageUrl:
              "https://theprolificshop.com/cdn/shop/products/FCP_0039.jpg?v=1602443856?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 52,
            name: "Denim Beret",
            price: 50,
            imageUrl:
              "https://ae01.alicdn.com/kf/S6b3b89b95f2d46a28c2f3c2d58eaa3d5S.jpg_640x640Q90.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 53,
            name: "Denim Headband",
            price: 40,
            imageUrl:
              "https://www.lelesadoughi.com/cdn/shop/files/lele-sadoughi-headbands-os-light-denim-headband-36650702241954_600x.jpg?v=1707347570?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 54,
            name: "Denim Visor",
            price: 70,
            imageUrl:
              "https://www.capwholesalers.com/shop/images/th2_q.39232.0-p_65235_1-4029_d_den.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 55,
            name: "Denim Beanie",
            price: 80,
            imageUrl:
              "https://ae01.alicdn.com/kf/S80577a3fdbfe44f0a540fdbbcabc2e554/Denim-Brimless-Beanie-Hat-Adjustable-Jeans-Docker-Hat-Embroidery-Street-Wear-H7EF.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 56,
            name: "Denim Fedora Hat",
            price: 100,
            imageUrl:
              "https://m.media-amazon.com/images/I/81zyiXqHvRL._AC_UY1100_.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
        ],
      },
      {
        name: "Body",
        route: "body",
        items: [
          {
            id: 57,
            name: "Denim Belt",
            price: 40,
            imageUrl:
              "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/n/02/1b223ab6-cbdd-4eaa-ab7b-a6396c6ae908.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 58,
            name: "Denim Ankle Boots",
            price: 70,
            imageUrl:
              "https://www.hlorenzo.com/cdn/shop/products/SHOE000681-DENIM-10195_grande.jpg?v=1675968518?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 59,
            name: "Denim Messenger Bag",
            price: 65,
            imageUrl:
              "https://messenger-bags.com/cdn/shop/products/Denim-Messenger-Bag-front_grande.jpg?v=1675008801?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 60,
            name: "Denim Backpack",
            price: 80,
            imageUrl:
              "https://i5.walmartimages.com/seo/Light-Blue-Denim-Backpack-Casual-Retro-Multifunctional-Storage-Bag-Student-Satchel-Bag-Large-Capacity-Rucksack-for-Students-Girls_149c4387-3581-4ce6-9578-9886a6397a7d.77267e321531a924514fbe161ff8d0e2.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 61,
            name: "Denim Choker",
            price: 35,
            imageUrl:
              "https://ae01.alicdn.com/kf/S4946c85a541d47e99b9e6206e453c611X/Boho-Style-Blue-Denim-Choker-for-Women-Necklace-with-Star-Pattern-Vintage-Ethnic-Handmade-Chocker-Necklaces.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 62,
            name: "Denim Brooch",
            price: 70,
            imageUrl:
              "https://cdn.shopify.com/s/files/1/0023/1512/4788/products/50751921.jpg?v=1569273347?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 63,
            name: "Denim Kimono",
            price: 100,
            imageUrl:
              "https://verseas.co/cdn/shop/products/Full_Body_Denim_Kimono_VAPOUR_BLUE_AW_22_COLLECTION_FASHION_29.jpg?v=1666359699&width=1920?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
          {
            id: 64,
            name: "Denim Shrug",
            price: 100,
            imageUrl:
              "https://i.ebayimg.com/images/g/4RcAAOSwPmhiMDAn/s-l1200.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          },
        ],
      },
    ],
  },
}

export default clothingCategories
