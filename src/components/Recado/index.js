import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { CardActionArea, CardMedia, makeStyles } from '@material-ui/core';

const cardStyles = makeStyles({
    media: {
      height: 140,
    },
});

export default function Recado(props) {
    const cardClasses = cardStyles();

    return (
        <Grid item key={props.scrap.title} xs={12} sm={12} md={6}>
            <Card className={cardClasses.root}>
                <CardActionArea>
                    <CardMedia
                        className={cardClasses.media}
                        image="https://lh3.googleusercontent.com/proxy/g9aLczi-jvCLEqbqCm3GLf3ntfuCSwuKijFoHLoLb_oer9EVWjWBG1GHFynYDBhpc1_gZvI6syA-1eRj_QWAGuGfizOHXiHVMjDjNxBf2iTwRydeBCc5T2tq1Y8Hjxd7cbRstmJCc0TXlCYg6HpAIBKB6seB_Nc9"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.scrap.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.scrap.longText}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Editar
                </Button>
                    <Button size="small" color="primary">
                        Excluir
                </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}