import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { productStyle } from '../../../Context/ThemeProvider/ThemeCSS';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { themeContext } from '../../../Context/ThemeProvider/ThemeProvider';
import { useContext } from 'react';


export default function ShirtCard({shirtInfo}) {

     const {theme} = useContext(themeContext)
     const {model,company,price,imageData} = shirtInfo;

    return (
      <Card sx={{ maxWidth: 345, '&:hover':{ transform:'scale(1.03)'},transition:'all 0.5s'}} style={theme === 'light' ? productStyle.light : productStyle.dark}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {company[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={company}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={imageData}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {company} {model} This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Typography marginLeft="45%" color="primary">
            Price: {'₪' + price}
          </Typography>
        </CardActions>
      </Card>
    );              
}
