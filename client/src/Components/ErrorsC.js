import React from 'react'
import { Alert } from 'react-bootstrap'
import {useSelector} from 'react-redux'
function ErrorsC() {
    const errorsH = useSelector(state=>state.ErrorReeducer)
    return(
        <div>
            {
          errorsH.map(el =>
          <Alert variant={'danger'}>
          {el.msg}
        </Alert>)
        }
        </div>
    )
}

export default ErrorsC