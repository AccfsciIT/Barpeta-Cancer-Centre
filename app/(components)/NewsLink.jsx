import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { East } from '@mui/icons-material';
import { MyAddress } from './Global';

export default function NewsLink() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`${MyAddress}News/news.jpg`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            News & Events
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Find the latest news about our work and achievements
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <East sx={{marginLeft:"5"}}/>
      </CardActions>
    </Card>
  );
}
