import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from '../../redux/filters/filtersSlice'
import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment } from '@mui/material';

const SearchBox = () =>{

    const dispatch = useDispatch();
   
    const filter = useSelector(selectNameFilter);

    const handleFilterChange = (e) =>{
        const name = e.target.value.trim();
        dispatch(changeFilter(name))
    }

    return(
        <div>
            <p>Find contacts by name or number:</p>
            <TextField
                variant="outlined"
                margin="dense"
                size="small"
                value={filter}
                onChange={handleFilterChange}
                slotProps={{
                input: {
                    startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                    ),
                },
                }} 
            />
        </div>
    )
}

export default SearchBox;