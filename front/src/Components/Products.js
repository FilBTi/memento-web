import React from "react";
import img1 from "../assets/image 8.png";
import img2 from "../assets/image 9.png"
import img3 from "../assets/CardMedia.png"
import SendIcon from '@mui/icons-material/Send';
import {Button} from '@mui/material';

export default function Products () {
    return (
        <div className="container_d">
            <div className="title">Наши продукты</div>
            <div className="card__wrapper">
                <div className="item">
                    <img src={img1}></img>
                    <Button variant="contained" size="large" endIcon={<SendIcon />} >
                    Try memento WEB
                    </Button>
                </div>
                <div className="item">
                    <img src={img2}></img>
                    <Button variant="contained" size="large" endIcon={<SendIcon />} >
                    Try memento WEB
                    </Button>
                </div>
                <div className="item">
                    <img src={img3}></img>
                    <Button variant="contained" size="medium" endIcon={<SendIcon />} >
                    Try memento WEB
                    </Button>
                </div>
            </div>
        </div>
    )
}

