import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import {changeFilter, selectNameFilter} from '../../redux/filters/filtersSlice'

const SearchBox = () =>{

    const dispatch = useDispatch();
   
    const filter = useSelector(selectNameFilter);

    const handleFilterChange = (e) =>{
        const name = e.target.value.trim();
        dispatch(changeFilter(name))
    }

    return(
        <div>
            <p>Find contacts by name or number</p>
            <input className={css.input}type="text" value={filter} onChange={handleFilterChange}/>
        </div>
    )
}

export default SearchBox;