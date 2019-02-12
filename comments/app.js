let ProfilePic = (props) => {
    let style={
        width: 150,
        height: 150,
    }
    return <img style={style} src= {props.img} />
}

let CommentBody = (props) => {
    let style={
        textAlign: 'center',
        paddingBottom: 30

    }
    return <div style={style}>
        <b>{props.username}</b><br></br>
        {props.message}
    </div>
}

let Comment = (props) => {

    return <div>
        <ProfilePic img={props.img}/>
        <CommentBody username={props.username} message={props.message} />
    </div>
}

let Comments = () => {

    let data = [{
        username: 'Harry',
        img: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Ftimedotcom.files.wordpress.com%2F2014%2F07%2F301386_full1.jpg&w=750&c=sc&poi=face&q=85',
        message: 'I solemnly swear that I am up to no good 🤪'
    },{
        username: 'Ron',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi1oelPfiO8i3SiOnMKvHUmWQOaCInHvzK5AuwWfk6vJ8sK9u_-g',
        message: "We can't let these muggles get us down!! 💪🏻"
    },{
        username: 'Hermoine',
        img: 'https://vignette.wikia.nocookie.net/hpmor/images/f/fe/Hermione_granger_2.jpg/revision/latest?cb=20150202010710',
        message: "You're saying it wrong!! It's leviOsa, not levioSA! 🙄"
    }]

    let comments = data.map(comment => 
        <Comment key={data.indexOf(comment)}
        img={comment.img}
        username={comment.username}
        message={comment.message} />
        )

    return (
    <ul style={{textAlign:'center'}}>{comments}</ul> 
    )
}

ReactDOM.render(<Comments />, document.getElementById('root'))