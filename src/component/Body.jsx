import React from 'react'

export default function Body(props) {
  return (
    <div>
        <table style={{backgroundColor :props.backgroundColor }}>
          <p>{props.task1}</p>
          <p>{props.day1}</p>
        </table>
    </div>
  )
}
