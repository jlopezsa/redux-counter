import { useDispatch } from 'react-redux';
import { add } from '../store/actions'

const ButtonAdd = () =>{
  const dispatch = useDispatch(); // constante creada como dispatch
  const handleAdd = () => {
    dispatch(add()); // disparará la acción add()
  }
    return(
        <button type='button' onClick={handleAdd}>
            +1
        </button>
    )
}

export default ButtonAdd;
