import Crafts from "../components/Crafts";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar"


function Home() {
    return (
        <>
        
        <Navbar />
        <Hero 
        cName="hero"
        heroImg="https://i.ytimg.com/vi/Rb1A2wYQWIc/maxresdefault.jpg"
        title="Welcome to Crafted"
        text="Your one-stop shop for all things beautifully made"
        buttonText="See Products"
        url="/products"
        btnClass="show"
        />
        <Crafts />
        </>
    )
}



export default Home;