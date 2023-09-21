import bayernMunichHome from "../../public/pics/bundesliga/bayernMunich/home.jpg"
import bayernMunichAway from "../../public/pics/bundesliga/bayernMunich/away.jpg"
import bayernMunichAlternate from "../../public/pics/bundesliga/bayernMunich/alternate.jpg"

import borussiaDortmundHome from "../../public/pics/bundesliga/borussiaDortmund/home.jpg";
import borussiaDortmundAway from "../../public/pics/bundesliga/borussiaDortmund/away.jpg";



const bundesliga = [{
    bayernMunich: {
        id:"price_1Nsl0BSFBpPxZJjNmy2EfPgB",
        title: "Bayern Munich 2023/24",
        price: 500.00,
        rating: 4,
        description: "Offical kit for FC Bayern Munchen 2023-24, the wait is over as our club has collaborated with adidas to get kits.",
        color: {
            home: "#ff5757",
            away: "#1DD7FB",
            alternate: "#383830",
        },
        kitImage: {
            home: bayernMunichHome,
             away: bayernMunichAway, 
             alternate: bayernMunichAlternate,
        },
        size:{
            small:"S", medium:"M", large:"L", extraLarge:"XL",extraExtraLarge:"XXL"
        },
        featured:true,
    },
    borussiaDortmund: {
        id:"price_1Nsl1RSFBpPxZJjNy1zkr7cz",
        title: "Borussia Dortmund 2023/24",
        price: 400.00,
        rating: 4,
        description: "Offical kit for BVDM FC  fc 2023-24, this season we play with BK8 on our chest.",
        color: {
            home: "#EFFB1D",
            away: "#bbb7b6",
        },
        kitImage: {
            home: borussiaDortmundHome,
            away: borussiaDortmundAway,
        },
        size:{
            small:"S", medium:"M", large:"L", extraLarge:"XL", extraExtraLarge:"XXL"
        }
    }
}];

export default bundesliga;
