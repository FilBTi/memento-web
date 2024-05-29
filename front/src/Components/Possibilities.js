import React from "react";
import {Card, CardMedia, CardActionArea, CardContent, Typography} from '@mui/material';
import cardMedia from '../assets/CardMedia.png'

// const makeCards = (x) => {
//     for(let i=0; i>=x; i++){
//         return (<Card sx={{ maxWidth: 345 }}>
//             <CardActionArea>
//               <CardMedia
//                 component="img"
//                 height="140"
//                 image= {cardMedia} 
//                 alt="green iguana"
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                   Lizard
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Lizards are a widespread group of squamate reptiles, with over 6,000
//                   species, ranging across all continents except Antarctica
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//           </Card>
//           )
//     }
// }

function Possibilities () {
    return (
        <div className=" container_d">
            <div className="title">Возможности сервиса</div>
            <div className="card__wrapper">
                <Card sx={{ maxWidth: 276 }}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    src={cardMedia} 
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Создавай конспекты
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Составление списка вопросов и ответов по теме, чтобы в дальнейшем вы могли проверять свои знания
                    </Typography>
                </CardContent>
                </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 276 }}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    src={cardMedia}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Разделяй по папкам
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Создайте систему организации, в которой вы структурируете свои конспекты по категориям. Папки
                    <br/>
                    <br/>
                    <br/>
                    </Typography>
                </CardContent>
                </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 276 }}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    src={cardMedia}                    
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Соревнуйся с друзьями!
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Проходите тесты вместе с друзьями и сравнивайте результаты. Соревнуйтесь, изучайте, развивайтесь.
                    </Typography>
                </CardContent>
                </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 276 }}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    src={cardMedia}                    
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Что то про ИИ
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Проходите тесты вместе с друзьями и сравнивайте результаты. Соревнуйтесь, изучайте, развивайтесь.
                    </Typography>
                </CardContent>
                </CardActionArea>
                </Card>
            </div>
        </div>
    )
}

export default Possibilities