import React from 'react';
import { Grid, Grid2, Typography } from "@mui/material";

const App = () => {
  return (
    <Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1" color="primary">
            Welcome to My App
          </Typography>
        </Grid>
        <Grid item xs={6}>
          asdfasdfasdfasd 
        </Grid>
      </Grid>
    </Grid>
  )
}

export default App;