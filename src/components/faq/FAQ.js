import React from 'react';

// import "./FAQ.css"
import FAQimage from '../../assets/images/faq.svg';

function FAQ(props){
    return(
        <div> 
            <div className="imageSet">
            <img src={FAQimage} />   
            </div>               
            <div className="position">
                <h3>1. Lorem ipsum dolor sit amet?</h3>
                <p className="styleanswer">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h3>2. Lorem ipsum dolor sit amet?</h3>
                <p className="styleanswer">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat.</p>
                <h3>3. Lorem ipsum dolor sit amet?</h3>
                <p className="styleanswer">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    );
}

export default FAQ;