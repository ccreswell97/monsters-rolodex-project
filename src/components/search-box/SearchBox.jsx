import './SearchBox.css'

export const SearchBox = ({placeholder, onChange}) => {
    return (
        <input type='search' className='search'
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}