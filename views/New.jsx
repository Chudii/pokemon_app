const React = require('react')

const containerStyle = {
    width: '100%',
    height: '98vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const myStyle = {
    height: '5vh',
    width: '25%',
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '2vh',
    color: '#ffffff',
    backgroundColor: '#000000',
}

const formStyle = {
    height: '10vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
}

class New extends React.Component {
    render() {
        return (
            <div style={containerStyle}>
                <h1 style={myStyle}>Add to The Pokedex</h1>
                <form action="/pokemon" method="POST" style={formStyle}>
                    Name: <input type="text" name="name"/><br/>
                    <input type="submit" name="" value="Add Pokemon"/>
                </form>
            </div>
        )
    }
}

module.exports = New