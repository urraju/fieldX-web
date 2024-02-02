import framOne from '../assets/all_img/Aven.png'
import framTwo from '../assets/all_img/Amara.png'
import framThree from '../assets/all_img/Circle.png'
import framFour from '../assets/all_img/Kyan.png'
import framFive from '../assets/all_img/Treva.png'
const IconSection = () => {
    return(
        <div className="max-w-screen-xl mx-auto py-20">
             <div>
                <p className="text-color font-semibold text-center text-2xl py-6">5,000+ high-impact teams rely on Fieldx</p>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-5 py-14">
                <img src={framOne} alt="" />
                <img src={framTwo} alt="" />
                <img src={framThree} alt="" />
                <img src={framFour} alt="" />
                <img src={framFive} alt="" />
             </div>
        </div>
    )}
export default IconSection;