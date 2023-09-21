import barcelonaHome from "../../public/pics/laliga/barcelona/home.jpg";
import barcelonaAway  from "../../public/pics/laliga/barcelona/away.jpg";
import barcelonaAlternate from "../../public/pics/laliga/barcelona/alternate.jpg";
import realMadridHome from "../../public/pics/laliga/realMadrid/home.jpg";
import realMadridAway from "../../public/pics/laliga/realMadrid/away.jpg";
import realMadridAlternate from "../../public/pics/laliga/realMadrid/alternate.jpg";

const laliga = [{
    barcelona: {
        id:"price_1NskzFSFBpPxZJjNiglZtqS7",
        title: "Barcelona 2023/24",
        price: 500.00,
        rating: 4,
        description: "Offical kit for Barcelona 2023-24, the wait is over as our club has collaborated with adidas to get kits.",
        color: {
            home: "#FB1D4C",
            away: "#383830",
            alternate: "#EEE561",
        },
        kitImage: {
            home: barcelonaHome, away: barcelonaAway, alternate: barcelonaAlternate,
        },
        size:{
            small:"S", medium:"M", large:"L", extraLarge:"XL",extraExtraLarge:"XXL"
        },
        featured:true,
    },
    realMadrid: {
        id:"price_1NskxcSFBpPxZJjNf99slSqh",
        title: "Real Madrid 2023/24",
        price: 400.00,
        rating: 4,
        description: "Offical kit for RM FC  fc 2023-24, this season we play with BK8 on our chest.",
        color: {
            home: "#F4F3F7",
            away: "#451A93",
            alternate: "#383830",
        },
        kitImage: {
            home: realMadridHome,
            away: realMadridAway,
            alternate: realMadridAlternate,
        },
        size:{
            small:"S", medium:"M", large:"L", extraLarge:"XL", extraExtraLarge:"XXL"
        }
    }
}];

export default laliga;
