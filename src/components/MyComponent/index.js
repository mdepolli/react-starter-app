import React, { useState } from 'react';
import { List, ListItem, ListItemText, TextField } from '@material-ui/core';

function TodoForm({ addItem }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addItem(value);
    setValue("");
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField id="outlined-basic" variant="outlined" />
    </form>
  )
}

function MyComponent () {
  const [items, setItems] = useState([
    { text: "Finish Skillhire test" },
    { text: "Don't neglect wife in the process" },
    { text: "Pet cat" }
  ]);

  const addItem = text => {
    const newItems = [...items, { text }];
    setItems(newItems);
  };

  return (
    <React.Fragment>
      <TodoForm addItem={addItem} />

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
