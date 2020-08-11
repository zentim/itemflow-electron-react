import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      color: '#0A77F0',
    },
    nested: {
      paddingLeft: theme.spacing(9),
      color: '#7A7E87',
    },
  })
);

export default function NestedList(props: { menu: any }) {
  const { menu } = props;
  const classes = useStyles();

  const handleClick = () => {
    console.log('click!');
  };

  return (
    <div>
      <ListItem button onClick={handleClick} className={classes.main}>
        <ListItemIcon>
          <FolderOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary={menu.text} />
      </ListItem>
    </div>
  );
}
