import './about.scss';
import coffeBlack from '../img/cofe.svg'
 
const About = () => {
    return(
        <section className='beans'>
        <div className='container'>

            <div className='beans_wrapper'>
                <div className='beans_wrapper_text'>
                    <h2 className='beans_wrapper_text-title'>About our beans</h2>
                    <div className='logo'>
                        <div className='logo_line_left'></div>
                        <img src={coffeBlack}/>
                        <div className='logo_line_right'></div>
                    </div>
                    <p className='beans_wrapper_text-extremity'>
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </p>
                    <p className='beans_wrapper_text-afraid'>
                        Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now.
                    </p>
                </div>  
            </div>
        </div>
    </section>
    )
}

export default About;