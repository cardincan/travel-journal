import Light from "./../assets/sun.svg"
import Dark from "./../assets/moon.svg"

export default function DarkTheme({ isDarkTheme, onClick }) {
    return (
        <button className="change-theme-button" type="button" onClick={() => onClick()}>
            <img src={isDarkTheme ? Light : Dark} width="25" />
        </button>
    )
}