const React = require('react')

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

const containerStyle = {
    width: '100%',
    height: '98vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

class Show extends React.Component {
    render() {
        const { pokemon } = this.props

        return (
            <div style={containerStyle}>
                <h1 style={myStyle}>Gotta Catch 'Em All</h1>
                <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                <br/>
                <img src={`${pokemon.img}.jpg`}/>
                <a style={{marginTop: '2vh'}} href={`/pokemon`}>Back</a>
            </div>
            
        )
    }
}

module.exports = Show