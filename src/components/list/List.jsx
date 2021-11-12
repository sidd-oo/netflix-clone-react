import React from 'react';
import './List.scss';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import ListItem from '../listItem/ListItem';

const List = () => {
    return (
        <div className="list">
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosNewSharpIcon className="sliderArrow left"/>
                <div className="container">
                    <ListItem/>
                    <ListItem/>
                    <ListItem/> 
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                </div>
                <ArrowForwardIosSharpIcon className="sliderArrow right"/>
            </div>
        </div>
    )
}

export default List
