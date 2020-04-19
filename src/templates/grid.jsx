import React, { Component } from 'react';

export default class Grid extends Component {
  
  toCssClass(numbers) {
    const cols = numbers ? numbers.split(' ') : []
    let classes = ''
    let h = ['xs', 'sm', 'md', 'lg' ]
    
    cols.forEach((col, i) => {
      col ? classes += `col-${h[i]}-${col} ` : ''
    })
    return classes
  }
  
  render() {
    const gridClasses = this.toCssClass(this.props.cols || 12);
    return (
      <div className={gridClasses}>
        {this.props.children}
      </div>
    )
  }
}