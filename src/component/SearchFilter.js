import {Form} from 'react-bootstrap'
import './Pagination.css';

const SearchFilter=(props)=> {
    const {onSearch,inputSearch} = props;
    return (
        <>
           <Form.Control  
                ref={inputSearch}
                placeholder="Search..."  
                onChange={(event)=>onSearch(event.target.value)}
                className="position-relative search"
                type="text"
            />
            <i className="fas fa-search search-icon position-absolute"></i> 
        </>
    )    
}
export default SearchFilter;
