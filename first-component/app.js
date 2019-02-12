let FirstComponent = () => {
    
    const colors = ["#ec6433", "#8DC740", "#46AFF0", "#F8C233"];

    let style ={
        width: 200,
        height: 200,
        display: 'inline-block',
        margin: 10
    }

    let squares = colors.map(c => <div key ={colors.indexOf(c)} style={{...style, backgroundColor: c}}></div>)
    return (
        <div>
            <div>{squares.slice(0,2)}</div>
            <div>{squares.slice(2)}</div>
        </div>
    )
}

ReactDOM.render(<FirstComponent />, document.getElementById('root'))