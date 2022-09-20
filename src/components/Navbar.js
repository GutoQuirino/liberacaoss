import Logo from '../img/logo.webp'

const Navbar = () => {
    return (
        <nav>
            <div className='logo'>
                <img src={Logo}/>
                <div>
                    <h1>Santsystem</h1>
                    <p>Sistema Integrado</p>
                </div>
            </div>
            <h2>Liberacao do Sistema</h2>
        </nav>
    )
}

export default Navbar;