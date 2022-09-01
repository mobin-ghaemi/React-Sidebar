const Nav = ({single , setSingle}) => {
    return <header>
        <nav>
            <ul>
                <li onClick={() => setSingle(1)} className={single === 1 ? "active" : null}>
                    حسابداری
                </li>
                <li onClick={() => setSingle(2)} className={single === 2 ? "active" : null}>
                    فرم ها
                </li>
                <li onClick={() => setSingle(3)} className={single === 3 ? "active" : null}>
                    گزارش ها
                </li>
            </ul>
        </nav>
    </header>;
}
 
export default Nav;