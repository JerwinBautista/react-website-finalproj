import "./TriviaStyles.css"
import TriviaData from "./TriviaData";
import Trivia1 from "../assets/Trivia1.jpg"
import Trivia2 from "../assets/Trivia2.jpg"
import Trivia3 from "../assets/Trivia3.jpg"

function Trivia() {
    return (
        <div className="trivia">
            <h1>Why You Should Buy Local Handmade Products?</h1>
            <p>There are many reasons to buy local handmade products. </p>
            <div className="triviacard">
                <TriviaData 
                image={Trivia1}
                heading="Unique and authentic products"
                text="Handmade products are one-of-a-kind, 
                and you can be sure that you are owning 
                something that is truly special. Each product 
                is made with care and attention to detail, 
                and you can see the passion and creativity of the 
                artisan in every stitch, stroke, and design."
                />
                <TriviaData 
                image={Trivia2}
                heading="Sustainable and environmentally friendly practices"
                text="Handmade products are often made from sustainably sourced materials 
                and produced using eco-friendly methods. This means that you are making a 
                conscious choice to support businesses that are committed to reducing their 
                environmental impact."
                />
                <TriviaData 
                image={Trivia3}
                heading="Supporting local businesses and communities"
                text="When you buy local handmade products, you are directly supporting the 
                people who created them. This means that your money is going back into the 
                community and helping to create jobs and economic growth. It also means that 
                you are helping to preserve local traditions and culture."
                />
            </div>
        </div>
    )
}

export default Trivia;