import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends React.Component {
    render(){
        return (
            <header role="banner" className="heading">
                <h1>X-O</h1>
                <p>a tic-tac-toe game</p>
            </header>
        );
    }
}

ReactDOM.render(
    <Header />,
    document.getElementById('root')
);

export default Header;