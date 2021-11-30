import React, { useRef, useState } from 'react';
import './List.scss';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import ListItem from '../listItem/ListItem';

const List = () => {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true)

        let distance = listRef.current.getBoundingClientRect().x - 50;
        console.log(distance);

        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if (direction === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    };

    return (        
        <div className="list">
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosNewSharpIcon  className="sliderArrow left" onClick = {() => handleClick("left")}
                style = {{ display: !(isMoved && (slideNumber !== 0)) && "none" }}
                />
                <div className="container" ref = {listRef}>
                    <ListItem index = {0}/>
                    <ListItem index = {1}/>
                    <ListItem index = {2}/> 
                    <ListItem index = {3}/>
                    <ListItem index = {4}/>
                    <ListItem index = {5}/>
                    <ListItem index = {6}/>
                    <ListItem index = {7}/>
                    <ListItem index = {8}/>
                    <ListItem index = {9}/>
                </div>
                <ArrowForwardIosSharpIcon className="sliderArrow right" onClick = {() => handleClick("right")}/>
            </div>
        </div>
    )
}

export default List
