import {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getUsers } from '../Redux/Actions/AuthAction'
import CardUsers from './CardUsers'
const ListUsers=()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getUsers())
        
    },[])

    const users = useSelector(state => state.AuthReducer.users)
    return(
        <div>
        {   users &&
            <div className='pro'>
            {
                users.map(el => <CardUsers key={el._id} el={el}/>)
            }
            </div>
        }
        </div>
    )
}


export default ListUsers 