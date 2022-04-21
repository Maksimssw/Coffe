import { Component } from 'react';
import './look.scss';

class Look extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: ''
        }
    }

    onStart = (e) =>{
        const name = e.target.value;
        this.setState({name})
        this.props.onInput(name)
    }

    onForm = (e) => {
        e.preventDefault();
    }

    render(){
        return(
            <div className='look_wrapper'> 
                <h3 className='look_wrapper-text'>Lookiing for</h3>
                <form onSubmit={this.onForm}>
                    <input 
                        type="text"
                        className="look_wrapper-input" 
                        placeholder='start typing here...'
                        name='name'
                        onChange={this.onStart}/>
                </form>
            </div>
        )
    }
}

export default Look;