import { useSelector } from "react-redux";

const Counter = ()=>{
  const count = useSelector(state => state.count); //Hook para acceder al estado de la tienda
    return(
        <div>
            Counter:{count}
        </div>
    )
}

export default Counter;
