import './SearchBox.css'

export const SearchBox = (props) => {
    return (
        <input type='search' className='search'
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    )
}