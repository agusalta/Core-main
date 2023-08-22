import React, { Fragment } from 'react'
import Animation from './loading.gif'
import './spinner.css'

function Loading() {
  return (
    <Fragment>
        <img alt='' src={Animation} className='spinner'></img>
    </Fragment>
  )
}

export default Loading