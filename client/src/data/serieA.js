import interMilanHome from "../../public/pics/serieA/interMilan/home.jpg"
import interMilanAway from "../../public/pics/serieA/interMilan/away.jpg"
import interMilanAlternate from "../../public/pics/serieA/interMilan/alternate.jpg"
import romaHome from "../../public/pics/serieA/roma/home.jpg"
import romaAway from "../../public/pics/serieA/roma/away.jpg"
import romaAltrnate from "../../public/pics/serieA/roma/alternate.jpg"


const serieA = [{
    interMilan: {
        id:"price_1Npmh3SFBpPxZJjNSbZhrPYw",
        title: "Inter Milan 2023/24",
        price: 200.00,
        rating: 5,
        description: "Offical kit for Inter Milan 2023-24, the wait is over as our club has collaborated with adidas to get kits.",
        color: {
            home: "#203345",
            away: "#b7d1ce",
            alternate: "#ea6529",
        },
        kitImage: {
            home: interMilanHome, away: interMilanAway, alternate: interMilanAlternate,
        },
        size:{
            small:"S", medium:"M", large:"L", extraLarge:"XL",extraExtraLarge:"XXL"
        },
        featured:true,
    },
    asRoma: {
        id:"price_1NpmhhSFBpPxZJjNaXkjRymq",
        title: "AS Roma 2023/24",
        price: 300.00,
        rating: 2,
        description: "Offical kit for Roma fc 2023-24, this season we play with BK8 on our chest.",
        color: {
            home: "#9e1b32",
            away: "#e3ded1",
            alternate: "#4f493f",
        },
        kitImage: {
            home: romaHome,
            away: romaAway,
            alternate: romaAltrnate,
        },
        size:{
            small:"S", medium:"M", large:"L", extraLarge:"XL", extraExtraLarge:"XXL"
        }
    }
}];

export default serieA;
