let TextInput = () => {
    let style = {
        width: 200,
        height: 20,
        margin: 10
    }
    return <input style={style} type='text'></input>
}

let YesNoRadio = () => {
    let style={
        display: "inline-block",
        paddingLeft: 10
    }
    return <div style={style}>
        <input name="yes" type="radio" />
        <lable>YES </lable>
        <input name="no" type="radio" />
        <lable>NO</lable>
    </div>
}

let SubmitButton = () => {
    let style={
        backgroundColor: 'green',
        color: 'white',
        padding: 10,
        marginTop: 20
    }
    return <div>
        <button style={style} type="submit">SUBMIT</button>
    </div>
}

let Form = () => {
    let style={
        textAlign: 'center'
    }
    return <div style={style}>
        <h1>DA FORM</h1>
        <form>
            What is your fave restaurant?
            <TextInput /> <br />
            How much licks til you get to the center of a Tootsie Pop?
            <TextInput /> <br />
            Who's the GOAT?
            <TextInput /> <br />
            Is food the best thing ever? 
            <YesNoRadio /> <br />
            Are you a good boi? 
            <YesNoRadio /> <br />
            <SubmitButton />
        </form>
    </div>

    {/* <span>Make this Component render a form tag with 3 text inputs, two yes/no radio buttons, and a submit button </span> */}
}


ReactDOM.render(<Form />, document.getElementById('root'))