import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <div>
                    {this.props.children}
                </div>

                <Footer />
            </div>
        );
    }
}
