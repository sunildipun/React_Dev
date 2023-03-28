import React from "react";
import ReactDOM from "react-dom/client";

// Header //Body // Footer

const restaurantList = [
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "229832",
        "name": "Khanna's",
        "uuid": "ececad40-123f-4ba9-ac75-80286d6c844c",
        "city": "1",
        "area": "Brookefield",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "oy1fu3a6ztlv9mqpeq5u",
        "cuisines": [
          "North Indian",
          "Punjabi",
          "Tandoor"
        ],
        "tags": [],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "slaString": "30 MINS",
        "lastMileTravel": 4.699999809265137,
        "slugs": {
          "restaurant": "homms-desi-marathahalli-marathahalli",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "5/2, Ground Floor, Vyjayanthi Mala complex, Varthur main road, Behind Swiggy Marathali Hub and Apollo Clinic, Bangalore-560066",
        "locality": "BEML Layout",
        "parentId": 14519,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
          "header": "10% off",
          "shortDescriptionList": [
            {
              "meta": "10% off on all orders",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "10% off on all orders",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "10% OFF",
          "shortDescriptionList": [
            {
              "meta": "",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "10% off on all orders",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6147923~p=1~eid=00000187-1e38-8a53-416f-884200be0148",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "4.6 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "229832",
          "deliveryTime": 30,
          "minDeliveryTime": 30,
          "maxDeliveryTime": 30,
          "lastMileTravel": 4.699999809265137,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.2",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "221738",
        "name": "Meghana Foods",
        "uuid": "106f4556-6804-4554-8c68-ee875d6acf65",
        "city": "1",
        "area": "Brookefield",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "aqsnrylokzpn45qhg1pb",
        "cuisines": [
          "Biryani",
          "Andhra",
          "South Indian",
          "North Indian",
          "Chinese",
          "Seafood"
        ],
        "tags": [],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "slaString": "28 MINS",
        "lastMileTravel": 6.5,
        "slugs": {
          "restaurant": "meghana-foods-mahadevpura-mahadevpura",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "Raj Pinnacle, Mahadevapura, Bengaluru, Karnataka, India",
        "locality": "Mahadevpura",
        "parentId": 635,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 6200,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 6200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "6200",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "6.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "221738",
          "deliveryTime": 28,
          "minDeliveryTime": 28,
          "maxDeliveryTime": 28,
          "lastMileTravel": 6.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "553412",
        "name": "Call Me Chow",
        "uuid": "c8a4d1b1-f122-4b24-8136-b01bf3562769",
        "city": "1",
        "area": "Whitefield",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "vsstinwz8l5pfbtdau7w",
        "cuisines": [
          "Chinese",
          "Pan-Asian"
        ],
        "tags": [],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "slaString": "28 MINS",
        "lastMileTravel": 2.5999999046325684,
        "slugs": {
          "restaurant": "call-me-chow-whitefield-whitefield",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "2nd Floor, A.P. Arcade, Nagondanahalli, Immadihalli Main Road, Whitefield, Bangalore, B.B.M.P East, Karnataka-560066",
        "locality": "Nagondanahalli",
        "parentId": 18560,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
          "header": "40% off",
          "shortDescriptionList": [
            {
              "meta": "40% off | Use SPECIALS",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹80 on select items | Use code SPECIALS",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "40% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use SPECIALS",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹80 on select items | Use code SPECIALS",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6260060~p=4~eid=00000187-1e38-8a53-416f-884300be045f",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "2.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "553412",
          "deliveryTime": 28,
          "minDeliveryTime": 28,
          "maxDeliveryTime": 28,
          "lastMileTravel": 2.5999999046325684,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.1",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "1221",
        "name": "Biryani Day",
        "uuid": "1dec917e-3f4b-479b-b4db-f7095248bbd8",
        "city": "1",
        "area": "Marathahalli",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "ucpbuzrvhg0ire3h9hwu",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Andhra",
          "Biryani"
        ],
        "tags": [],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 36,
        "minDeliveryTime": 36,
        "maxDeliveryTime": 36,
        "slaString": "36 MINS",
        "lastMileTravel": 7.5,
        "slugs": {
          "restaurant": "biryani-day-thulsi-theater-road-marathahalli",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "No 389/2, 7th Cross, Thulsi Theater Road, Marathalli",
        "locality": "Thulsi Theater Road",
        "parentId": 2635,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
          "header": "20% off",
          "shortDescriptionList": [
            {
              "meta": "20% off | Use SWIGGYIT",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "20% off up to ₹50 | Use code SWIGGYIT",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "20% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use SWIGGYIT",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "20% off up to ₹50 | Use code SWIGGYIT",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 7000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 7000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "7000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "7.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "1221",
          "deliveryTime": 36,
          "minDeliveryTime": 36,
          "maxDeliveryTime": 36,
          "lastMileTravel": 7.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.7",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "262167",
        "name": "Hotel Empire",
        "uuid": "c087d70f-5cff-49ec-8b8a-e8b1a07a1977",
        "city": "1",
        "area": "Brookefields",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "weuqdjwzk3azoijehnel",
        "cuisines": [
          "North Indian",
          "Kebabs",
          "Biryani"
        ],
        "tags": [],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 36,
        "minDeliveryTime": 36,
        "maxDeliveryTime": 36,
        "slaString": "36 MINS",
        "lastMileTravel": 5.5,
        "slugs": {
          "restaurant": "hotel-empire-marathahalli-marathahalli",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "EMPIRE RESTAURANT ASK TOWERS,NO 7/3 OF THOOBARAHALLI VILLAGE,VARTHUR VILLAGE,VARTHOOR HOBLI 560037",
        "locality": "",
        "parentId": 475,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
          "header": "10% off",
          "shortDescriptionList": [
            {
              "meta": "10% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "10% off up to ₹40 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "10% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "10% off up to ₹40 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 5400,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 5400,
          "message": "",
          "title": "Delivery Charge",
          "amount": "5400",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "5.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "262167",
          "deliveryTime": 36,
          "minDeliveryTime": 36,
          "maxDeliveryTime": 36,
          "lastMileTravel": 5.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "65769",
        "name": "Burger King",
        "uuid": "c2d3afba-d787-4526-8fd6-8f72b35a5051",
        "city": "1",
        "area": "Whitefield",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "e64zxjsxfycc7azhs0wd",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "tags": [],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "slaString": "24 MINS",
        "lastMileTravel": 3.5999999046325684,
        "slugs": {
          "restaurant": "burger-king-ascends-park-square-itpl-whitefield",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "Unit.no. G-9 &G-10,Ground Floor, Ascends Park Square, ITPL, Whitefield Road, Bangalore,-560066",
        "locality": "ITPL Main Road",
        "parentId": 166,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
          "header": "Get every item under 129",
          "shortDescriptionList": [
            {
              "meta": "Get every item under 129",
              "discountType": "FinalPrice",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "Get every item under 129",
              "discountType": "FinalPrice",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "",
          "shortDescriptionList": [
            {
              "meta": "",
              "discountType": "FinalPrice",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "Get every item under 129",
              "discountType": "FinalPrice",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6264079~p=7~eid=00000187-1e38-8a53-416f-884400be075a",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "3.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "65769",
          "deliveryTime": 24,
          "minDeliveryTime": 24,
          "maxDeliveryTime": 24,
          "lastMileTravel": 3.5999999046325684,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.2",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "690129",
        "name": "Kritunga restaurant",
        "uuid": "5bc1017a-12af-44d0-946f-3a0d9a6d6137",
        "city": "1",
        "area": "Whitefield",
        "totalRatingsString": "50+ ratings",
        "cloudinaryImageId": "a58675e8e5968e4ec50cfbfdc6648728",
        "cuisines": [
          "North Indian",
          "Indian"
        ],
        "tags": [],
        "costForTwo": 60000,
        "costForTwoString": "₹600 FOR TWO",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "slaString": "21 MINS",
        "lastMileTravel": 3,
        "slugs": {
          "restaurant": "kritunga-restaurant-whitefield-whitefield-2",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "5, Whitefield, Vijayanagar, EPIP Zone, Bengaluru, Karnataka 560066, India",
        "locality": "Vijayanagar",
        "parentId": 20088,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "690129",
          "deliveryTime": 21,
          "minDeliveryTime": 21,
          "maxDeliveryTime": 21,
          "lastMileTravel": 3,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.4",
        "totalRatings": 50,
        "new": true
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "424658",
        "name": "Asha Tiffins",
        "uuid": "d79cd5d9-7158-45f1-a198-e563f0e46406",
        "city": "1",
        "area": "Aecs Layout",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "hpncnz3sfv3gigsukkts",
        "cuisines": [
          "South Indian"
        ],
        "tags": [],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "slaString": "34 MINS",
        "lastMileTravel": 6.5,
        "slugs": {
          "restaurant": "asha-tiffins-marathahalli-marathahalli",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "#551,AECS Layout main road, 'B' Block AECS Layout,Opp.BBMP ward office,Marathahalli,Bangalore - 560037",
        "locality": "B Block",
        "parentId": 236243,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
          "header": "30% off",
          "shortDescriptionList": [
            {
              "meta": "30% off | Use MISSEDYOU-XL",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "30% off upto ₹80 | Use MISSEDYOU-XL",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "30% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use MISSEDYOU-XL",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "30% off upto ₹80 | Use MISSEDYOU-XL",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 6200,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 6200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "6200",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "6.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "424658",
          "deliveryTime": 34,
          "minDeliveryTime": 34,
          "maxDeliveryTime": 34,
          "lastMileTravel": 6.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.4",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "180801",
        "name": "Roj ka Khana(Daily Meals)",
        "uuid": "8229676e-e3d9-42de-8ecb-5fa57ef7f004",
        "city": "1",
        "area": "Whitefield",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "qhoos6xnxp43r8gwvcry",
        "cuisines": [
          "North Indian"
        ],
        "tags": [],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "slaString": "25 MINS",
        "lastMileTravel": 2,
        "slugs": {
          "restaurant": "roj-ka-khanadaily-meals-whitefield-whitefield",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "SY No 166, Mann Food Court, Ak Gopalan Colony Road, Near Hope Farm, Whitefield Bangalore - 560066",
        "locality": "Ak Gopalan Colony Road",
        "parentId": 170637,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
          "header": "20% off",
          "shortDescriptionList": [
            {
              "meta": "20% off | Use MISSEDYOU",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "20% off up to ₹50 | Use code MISSEDYOU",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "20% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use MISSEDYOU",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "20% off up to ₹50 | Use code MISSEDYOU",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6243225~p=10~eid=00000187-1e38-8a53-416f-884500be0a46",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "180801",
          "deliveryTime": 25,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 25,
          "lastMileTravel": 2,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.1",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "28608",
        "name": "Imperio Restaurant",
        "uuid": "98d8f107-8184-4d7c-8de1-5f57ac4ad01f",
        "city": "1",
        "area": "Whitefield",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "vt2h8fyxtcezqfusppdo",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Biryani",
          "South Indian",
          "Beverages"
        ],
        "tags": [],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 1,
        "slugs": {
          "restaurant": "imperio-restaurant-whitefield-whitefield",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "Hagadur main road,near value forum mall, brookbond whitefiled-560066",
        "locality": "Value forum mall",
        "parentId": 5610,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
          "header": "20% off",
          "shortDescriptionList": [
            {
              "meta": "20% off | Use MISSEDYOU",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "20% off up to ₹50 | Use code MISSEDYOU",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "20% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use MISSEDYOU",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "20% off up to ₹50 | Use code MISSEDYOU",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "1 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "28608",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 1,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.8",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "1530",
        "name": "A2B - Adyar Ananda Bhavan",
        "uuid": "7061e28c-da15-4b1d-a5e0-2619854ee1eb",
        "city": "1",
        "area": "Whitefield",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "ogivavhnvivnw1hv9nty",
        "cuisines": [
          "South Indian",
          "North Indian",
          "Sweets",
          "Chinese"
        ],
        "tags": [],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "slaString": "26 MINS",
        "lastMileTravel": 2.5999999046325684,
        "slugs": {
          "restaurant": "a2b-veg-in-hope-faram-cicle-whitefield",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "Nos.12/2 and 13/1B, Pattandur Agrahara Village, K.R. Puram Hobli, Bangalore East Taluk, White field, Bangalore - 560 066",
        "locality": "Pattandur Agrahara Village",
        "parentId": 22,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
          "header": "20% off",
          "shortDescriptionList": [
            {
              "meta": "20% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "20% off up to ₹50 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "20% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "20% off up to ₹50 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6262702~p=13~eid=00000187-1e38-8a53-416f-884600be0d32",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "2.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "1530",
          "deliveryTime": 26,
          "minDeliveryTime": 26,
          "maxDeliveryTime": 26,
          "lastMileTravel": 2.5999999046325684,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.2",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "372897",
        "name": "Pizza Hut",
        "uuid": "71f9b172-6a82-4099-844d-d3641d1e0339",
        "city": "1",
        "area": "Whitefield",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "ojy6sgmwbzmxeu9ksp4n",
        "cuisines": [
          "Pizzas"
        ],
        "tags": [],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "slaString": "28 MINS",
        "lastMileTravel": 2.0999999046325684,
        "slugs": {
          "restaurant": "pizza-hut-ramangondanhalli-whitefield",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "640/ 557, Ground Floor, Ramangondanhalli Village, Varthur Hobli, East taluk, Bangalore 560066",
        "locality": "Ramagondanahalli",
        "parentId": 721,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "372897",
          "deliveryTime": 28,
          "minDeliveryTime": 28,
          "maxDeliveryTime": 28,
          "lastMileTravel": 2.0999999046325684,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "418",
        "name": "Ande Ka Funda",
        "uuid": "80f87c90-b6f4-48ef-b110-9bbfad549b39",
        "city": "1",
        "area": "Kadubeesanahalli",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "hwnvirxf8oxaubiflcag",
        "cuisines": [
          "North Indian"
        ],
        "tags": [],
        "costForTwo": 10000,
        "costForTwoString": "₹100 FOR TWO",
        "deliveryTime": 44,
        "minDeliveryTime": 44,
        "maxDeliveryTime": 44,
        "slaString": "44 MINS",
        "lastMileTravel": 7,
        "slugs": {
          "restaurant": "ande-ka-funda-shymala-reddy-dental-college-road-marathahalli",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "6, Shymala Reddy Dental College Road, Marathahalli",
        "locality": "Munnekolala",
        "parentId": 15677,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
          "header": "10% off",
          "shortDescriptionList": [
            {
              "meta": "10% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "10% off up to ₹40 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "10% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "10% off up to ₹40 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 7000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 7000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "7000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "7 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "418",
          "deliveryTime": 44,
          "minDeliveryTime": 44,
          "maxDeliveryTime": 44,
          "lastMileTravel": 7,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.6",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "313792",
        "name": "Brahmins Tiffin Centre",
        "uuid": "bb9699d2-e40b-4449-83c4-0277b842d9cf",
        "city": "1",
        "area": "Marathahalli",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "mrlswuzobj1fb3umy4iq",
        "cuisines": [
          "South Indian"
        ],
        "tags": [],
        "costForTwo": 10000,
        "costForTwoString": "₹100 FOR TWO",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "slaString": "32 MINS",
        "lastMileTravel": 5.699999809265137,
        "slugs": {
          "restaurant": "brahmins-tiffin-center-marathahalli-marathahalli",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "320/321, Spice Garden Layout, Lakshminarayana Pura, Varthur Main Road, Whitefield, Bengaluru",
        "locality": "Silver Spring Layout",
        "parentId": 20078,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
          "header": "40% off",
          "shortDescriptionList": [
            {
              "meta": "40% off | Use GUILTFREE",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹100 | Use code GUILTFREE",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "40% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use GUILTFREE",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹100 | Use code GUILTFREE",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 5400,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 5400,
          "message": "",
          "title": "Delivery Charge",
          "amount": "5400",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6259198~p=16~eid=00000187-1e38-8a53-416f-884700be1024",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "5.6 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "313792",
          "deliveryTime": 32,
          "minDeliveryTime": 32,
          "maxDeliveryTime": 32,
          "lastMileTravel": 5.699999809265137,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.3",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "420659",
        "name": "Sri Lakshmi Biryani",
        "uuid": "eb227257-1596-441a-9c84-8265417d2d19",
        "city": "1",
        "area": "Marathahalli",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "n7pn6ilfponvcatp0n73",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Snacks"
        ],
        "tags": [],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "slaString": "32 MINS",
        "lastMileTravel": 6.199999809265137,
        "slugs": {
          "restaurant": "sri-lakshmi-biryani-kadubeesanahalli-kadubeesanahalli",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "No 15&16 Srinivasa Reddy building, Lakshmi Narayana temple road, manunatha layout, munnekoll Bangalore 560037",
        "locality": "Manunatha Layout",
        "parentId": 193940,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
          "header": "FLAT125 off",
          "shortDescriptionList": [
            {
              "meta": "FLAT125 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT125 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "₹125 OFF",
          "shortDescriptionList": [
            {
              "meta": "Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT125 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 6200,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 6200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "6200",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "6.1 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "420659",
          "deliveryTime": 32,
          "minDeliveryTime": 32,
          "maxDeliveryTime": 32,
          "lastMileTravel": 6.199999809265137,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.7",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    }
]



const Header = () => {
    return (
        <nav className="navbar">
            <h1>MotaBhai</h1>
            <ul>
                <li>Home </li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart 🛒</li>
            </ul>
        </nav>
    )
};

//config driven UI

const Cards = (props) => {
    const {name, cuisines, avgRating, cloudinaryImageId} = props.restaurant.data;
    return (
        <div className="cards">
            <img alt="food" className="image" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}/> 
            <h1>{name}</h1>
            <h3>{cuisines.join(', ')}</h3>
            <h2>{avgRating} stars</h2>
        </div>
    )
}

const Body = () => {
    return (
        <div className="cards-container">
            {
                restaurantList.map(item => 
                    <Cards restaurant={item} key={item.data.uuid}/>
                )
            }



        </div>
    )
};

const Container = () => {
    return (
        /**
         * <Header />
         * <Body />
         * <Footer />
         */
        <>
        <Header />
        <Body />
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);
root.render(<Container />)