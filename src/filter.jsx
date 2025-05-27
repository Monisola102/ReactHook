
function Filter({setTitleFilter, setRatingFilter}){
    return(
        <div className="search"> 
            <input type="text" placeholder="Search title"  onChange={(e) => setTitleFilter(e.target.value)}/>
            <input className="searchRating" type="number" placeholder="Enter rating"  onChange={(e) => setRatingFilter(Number(e.target.value))}/>
        </div>
    )
}
export default Filter
