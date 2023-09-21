import arsenalHome from "../../public/pics/epl/arsenal/home.jpg";
import arsenalAway from "../../public/pics/epl/arsenal/away.jpg";
import arsenalAlternate from "../../public/pics/epl/arsenal/alternate.jpg";
import astonVillaHome from "../../public/pics/epl/astonVilla/home.jpg";
import astonVillaAway from "../../public/pics/epl/astonVilla/away.jpg";
import astonVillaAlternate from "../../public/pics/epl/astonVilla/alternate.jpg";
const epl = [{
    arsenal: {
        id:"price_1NpmeXSFBpPxZJjNlBsVVhoS",
        title: "Arsenal 2023/24",
        price: 500.00,
        rating: 4,
        description: "Offical kit for arsenal 2023-24, the wait is over as our club has collaborated with adidas to get kits.",
        color: {
            home: "#ff5757",
            away: "#bbb7b6",
            alternate: "#383830",
        },
        kitImage: {
            home: arsenalHome, away: arsenalAway, alternate: arsenalAlternate,
        },
        size:{
            small:"S", medium:"M", large:"L", extraLarge:"XL",extraExtraLarge:"XXL"
        },
        featured:true,
    },
    astonVilla: {
        id:"price_1NpmgHSFBpPxZJjNfOYHKvrr",
        title: "Aston Villa 2023/24",
        price: 400.00,
        rating: 4,
        description: "Offical kit for Aston Villa fc 2023-24, this season we play with BK8 on our chest.",
        color: {
            home: "#670E36",
            away: "#bbb7b6",
            alternate: "#413430",
        },
        kitImage: {
            home: astonVillaHome,
            away: astonVillaAway,
            alternate: astonVillaAlternate,
        },
        size:{
            small:"S", medium:"M", large:"L", extraLarge:"XL", extraExtraLarge:"XXL"
        }
    }
}];

export default epl;
