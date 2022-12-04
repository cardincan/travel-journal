import Earth from "./../assets/Earth.svg"

export default function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={Earth} width="26" />
            <h3 className="header__title">my travel journal</h3>
        </header>
    )
}