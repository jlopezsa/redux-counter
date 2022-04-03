import { useDispatch } from 'react-redux';
import { add } from '../store/actions'

const ButtonAdd = () =>{
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(add());
  }
    return(
        <button type='button' onClick={handleAdd}>
            +1
        </button>
    )
}

export default ButtonAdd;
