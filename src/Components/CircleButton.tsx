import { Button, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import React, { FC, useState } from 'react'
import FormDialog from './FormDialog';
import NoteCard from './NoteCard';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'absolute',
            bottom: 25,
            right: 25,
        },
        circleBtn: {
            padding: '1rem',
            borderRadius: '5rem',
        },
    })
);

interface CircleButtonProps {
    setCardList: React.Dispatch<React.SetStateAction<NoteCard[]>>
}


const CircleButton: FC<CircleButtonProps> = props => {
    const classes = useStyles()

     const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Button color="primary" variant="contained" className={classes.circleBtn} onClick={handleClickOpen}>
                <Typography variant="h5" component="h5">
                    +
                </Typography>
            </Button>
            <FormDialog handleClose={handleClose} open={open} setCardList={props.setCardList} />
        </div>
    );
}

export default CircleButton;