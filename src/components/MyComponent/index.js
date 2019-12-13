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
    <form onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        variant="outlined"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}

function MyComponent () {
  const [items, setItems] = useState([
    {
      text: "Finish Skillhire test",
      isDone: false
    },
    {
      text: "Don't neglect wife in the process",
      isDone: false
    },
    {
      text: "Pet cat",
      isDone: false
    }
  ]);

  const addItem = text => {
    const newItems = [...items, { text }];
    setItems(newItems);
  };

  const toggleDone = index => {
    const newItems = [...items];
    newItems[index].isDone = !newItems[index].isDone;
    setItems(newItems);
  };

  return (
    <React.Fragment>
      <TodoForm addItem={addItem} />

      <List component="nav" aria-label="main">
        {items.map((item, index) => (
          <ListItem key={index} onClick={() => toggleDone(index)} button>
            <ListItemText
              style={{ textDecoration: item.isDone ? "line-through" : "" }}
              primary={item.text}
            />
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  )
}

export default MyComponent;
