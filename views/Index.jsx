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
    justifyContent: 'center',
    alignItems: 'center'
}

const listStyle = {
    lineHeight: '5vh'
}

class Index extends React.Component {
    render() {
        const { pokemon } = this.props
        return (
            <div style={containerStyle}>
                <h1 style={myStyle}>See All The Pokemon!</h1>
                <ul style={listStyle}>
                    {pokemon.map((poke, i) => {
                        return (
                            <li>
                                {poke.name}
                            </li>
                        )
                    })}
                </ul>
            </div>
            
        )
    }
}

module.exports = Index