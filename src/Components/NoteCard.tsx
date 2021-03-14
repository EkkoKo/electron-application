import { Box, Button, Card, CardContent, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { Colors, colorsArr } from '../utils/constants';
import styles from './css/NoteCard.module.css'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 345,
            margin: '2rem',
        },
        content: {
            paddingBottom: '1.5rem',
            paddingTop: '1.5rem',
        },
        box: {
            display: 'flex',
            justifyContent: 'space-between',
            height: '100%',
            alignItems: 'center',
            alignContent: 'center',
        }
    })
);


const NoteCard: FC<NoteCardProps> = ({card}) => {
    const classes = useStyles()
    return (
        <Card className={classes.root} style={{backgroundColor: card.color}}>
            <CardContent>
                <Box className={classes.box}>
                    <Typography variant="h5" component="h5"  gutterBottom>
                        {card.title}
                    </Typography>
                    <div>
                        <Button onClick={() => {console.log('edit')}}>
                            <Typography variant="h5" component="h5"  gutterBottom>
                                Edit
                            </Typography>
                        </Button>
                        <Button onClick={() => {console.log('delete')}}>
                            <Typography variant="h5" component="h5"  gutterBottom>
                                X
                            </Typography>
                        </Button>
                    </div>
                </Box>
                <hr />
                <Typography variant="body1" component="p" className={classes.content}>
                    {card.content}
                </Typography>
                <hr />
                <Typography color="textSecondary" component="p">
                    {card.date.toDateString()}
                </Typography>
           </CardContent>
        </Card>
        );
    }
    
interface NoteCardProps {
    card: NoteCard;
}

    interface NoteCard {
        title: string;
        content: string;
        color?: Colors;
        date: Date;
    }
    
    // <Paper title={props.content} elevation={3} className={styles.Card}>
    //     {props.content || props.children}
    // </Paper>
    export default NoteCard;