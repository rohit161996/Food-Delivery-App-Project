const User = (prop)=>{
    return(
        <div className="user-card">
            <h1>Name: {prop.name}</h1>
            <h2>Location: {prop.location}</h2>
            <h4>Contact: {prop.contact}</h4>
        </div>
    )
}

export default User;