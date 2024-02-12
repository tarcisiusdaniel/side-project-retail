import logo from './logo.svg';
import './App.css';

function Trial() {
    function trialFunc() {
        return -1;
    }
    return (
        <div>
            <h1>
                Hello, World! {trialFunc() === -1 ? 
                <span>It is -1 degree</span>
                :
                <span>It is not -1 degree</span>
                }
            </h1>
        </div>
    )
}

export default Trial;