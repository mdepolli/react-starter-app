import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

const MyComponent = () => (
  <List component="nav" aria-label="main mailbox folders">
    <ListItem button>
      <ListItemText primary="Todo 1" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Todo 2" />
    </ListItem>
  </List>
)

export default MyComponent;
