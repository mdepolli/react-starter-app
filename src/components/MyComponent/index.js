import React, { useState } from 'react';
import { List, ListItem, ListItemText, TextField } from '@material-ui/core';

function MyComponent () {
  const [items, setItems] = useState([
    { text: "Finish Skillhire test" },
    { text: "Don't neglect wife in the process" },
    { text: "Pet cat" }
  ]);

  return (
    <React.Fragment>
      <form noValidate autoComplete="off">
        <TextField id="outlined-basic" variant="outlined" />
      </form>

      <List component="nav" aria-label="main">
        {items.map((item, index) => (
          <ListItem key={index} button>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  )
}

export default MyComponent;
