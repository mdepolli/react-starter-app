import React from 'react'
import { Box, Container } from '@material-ui/core'
import MyComponent from 'components/MyComponent'

function App() {
  return (
    <Container>
      <Box
        my={20}
        display='flex'
        justifyContent='center'
        alignItems='left'
        flexDirection='column'
      >
        <MyComponent />
      </Box>
    </Container>
  );
}

export default App;
