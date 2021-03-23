import { Button, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import React, { FC, useState } from 'react'
import FormDialog from './FormDialog';
import NoteCard from './NoteCard';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'sticky',
            top: 0,
            marginRight: 'auto',
        },
        circleBtn: {
            padding: '1rem',
            borderRadius: '5rem',
        },
        flex: {
            display: 'flex',
            justifyContent: 'flex-end'
        }
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
            <div className={classes.flex}>
                <Button color="primary" variant="contained" className={classes.circleBtn} onClick={handleClickOpen}>
                    <Typography variant="h5" component="h5">
                        +
                    </Typography>
                </Button>
                <FormDialog handleClose={handleClose} open={open} setCardList={props.setCardList} />
            </div>
        </div>
    );
}

export default CircleButton;