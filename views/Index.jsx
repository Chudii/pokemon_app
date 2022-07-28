const React = require('react')

const myStyle = {
    width: '25%',
    display: 'flex',
    justifyContent: 'center',
    color: '#ffffff',
    backgroundColor: '#000000',
}

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

class Index extends React.Component {
    render() {
        return (
            <div style={containerStyle}>
                <div style={myStyle}>
                    <h1>See All The Pokemon!</h1>
                </div>
            </div>
            
        )
    }
}

module.exports = Index