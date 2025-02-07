

const Button = ({ text = "foody", hasBorderRadiusBothSides = true, hasOnlyLeftBorderRadius = false, hasOnlyRightBorderRadius = false, icon }) => {
    return (
        <button
            className={`h-full cursor-pointer bg-button-bg hover:bg-button-hover-bg px-4 ${hasBorderRadiusBothSides && "rounded-lg"} ${hasOnlyLeftBorderRadius && "rounded-l-lg"} ${hasOnlyRightBorderRadius && "rounded-r-lg"}`}
        >
            <span>{text}</span>
            {icon && icon}
        </button>
    )
}

export default Button;