import { Box, Button, Card, CardContent, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import React, { FC, useState } from 'react';
import { Colors } from '../utils/constants';
import EditIcon from '@material-ui/icons/Edit';
import FormDialog from './FormDialog';
import EditDialog from './EditDialog';

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


const NoteCard: FC<NoteCardProps> = ({card, setCardList}) => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    const handleRemove = () => {
        setCardList(prev => {
            const filterCards = prev.filter(({date}) => new Date(date).getTime() !== new Date(card.date).getTime())
            localStorage.setItem('cardList', JSON.stringify(filterCards))
            return filterCards;
        })
        console.log('Card Removed!')
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false)
    };

    return (
        <Card className={classes.root} style={{backgroundColor: card.color}} onClick={handleClickOpen}>
            <CardContent>
                <Box className={classes.box}>
                    <Typography variant="h5" component="h5"  gutterBottom>
                        {card.title}
                    </Typography>
                    <div>
                        <Button onClick={handleClickOpen}>
                            <Typography variant="h5" component="h5"  gutterBottom>
                                <EditIcon className={classes.box} />
                            </Typography>
                        </Button>
                        <Button onClick={handleRemove}>
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
                    {(new Date(card.date)).toDateString()}
                </Typography>
           </CardContent>
            <EditDialog card={card} handleClose={handleClose} open={open} setCardList={setCardList} />
        </Card>
        );
    }
    
interface NoteCardProps {
    card: NoteCard;
    setCardList: React.Dispatch<React.SetStateAction<NoteCard[]>>

}

    interface NoteCard {
        title: string;
        content: string;
        color?: Colors;
        date: string;
    }
    
    // <Paper title={props.content} elevation={3} className={styles.Card}>
    //     {props.content || props.children}
    // </Paper>
    export default NoteCard;