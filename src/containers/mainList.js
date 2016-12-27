import React,{Component} from 'react';

import MainList from '../components/mainList'

class main extends React.Component {
    render() {
        return (
            <div>
                <MainList {...this.props} />
            </div>
        );
    }
}

export  default main;