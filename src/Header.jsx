

function Header (props) {

    return (
        <div id="site-header">
            <nav>
                <ul>
                    <li onClick={() => props.switch(1)} >About</li>
                    <li onClick={() => props.switch(2)}>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;