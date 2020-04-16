import React from 'react'
import Grid from '../templates/grid'
import IconButton from '../templates/icon-button'

export default props => (
  <div role='form' className='todoForm'>
    <Grid cols='12 9 10'>
      <input placeholder='Add a task' id="description" className="form-control"/>
    </Grid>
    <Grid cols='12 3 2'>
      <IconButton style='primary' icon='plus'></IconButton> 
    </Grid>
  </div>
)