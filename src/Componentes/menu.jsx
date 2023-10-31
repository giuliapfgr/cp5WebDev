function menu(){
    const menu = {
        background: '#B3B5B7',
        display: 'flex',
        justifyContent: 'center'
    }
    const link = {
        display: 'inlineBlock',
        textDecoration: 'none',
        padding: '20px',
        color: '#010114',
        fontSize: '15px'
    }
    return (
        <>
            <nav style={menu}>
                <ul style={{ display: 'flex', listStyle: 'none' }}>
                    <li><a href='/' style={link}>HOME</a> </li>
                    <li><a href='/sobre' style={link}>SOBRE</a></li>
                    <li><a href='/cep' style={link}>CEP</a></li>
                    <li><a href='/fontes' style={link}>FONTES</a></li>
                </ul>
            </nav>
        </>
    )
}

export default menu;