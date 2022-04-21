import './beans.scss';
import beansGerl from '../img/Beans/beans_gerl.jpg';
import cofe from '../img/Beans/cofe.svg';

const Beans = () => {
    return(
        <section className='beans'>
            <div className='container'>

                <div className='beans_wrapper'>

                    <div className='beans_wrapper-ph'><img src={beansGerl}/></div>

                    <div className='beans_wrapper_text'>
                        <h2 className='beans_wrapper_text-title'>About our beans</h2>
                        <div className='logo'>
                            <div className='logo_line_left'></div>
                            <img src={cofe}/>
                            <div className='logo_line_right'></div>
                        </div>
                        <p className='beans_wrapper_text-extremity'>
                          Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        </p>
                        <p className='beans_wrapper_text-afraid'>
                            Afraid at highly months do things on at. Situation recommend objection do intention<br/> so questions<br/>.
                            As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                            met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
                            is song that held help face.
                        </p>
                    </div>  

                </div>

                <hr/>

            </div>
        </section>
    )
}

export default Beans;