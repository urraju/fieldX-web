import AboutPage from "../Layout/AboutPage";
import Banner from "../Layout/Banner";
import Footer from "../Layout/Footer";
import IconSection from "../Layout/IconSection";
import ProductFeatures from "../Layout/ProductFeatures";
import QuestionAns from "../Layout/QuestionAns";

const Home = () => {
    return(
        <div>
             <Banner/>
             <ProductFeatures/>
             <AboutPage/>
             <QuestionAns/>
             <IconSection/>
              
        </div>
    )}
export default Home;