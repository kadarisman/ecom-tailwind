const Li = (props) => {
    return(
<li className={props.bg} onClick={(e)=> getAllProduct(e)} id="all">All
            </li> 
    )
}

export default Li;