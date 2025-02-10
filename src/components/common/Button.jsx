

const Button = ({ text = "foody", hasBorderRadiusBothSides = true, hasOnlyLeftBorderRadius = false, hasOnlyRightBorderRadius = false, height = "h-full", icon }) => {
    return (
        <button
            className={`${height} cursor-pointer bg-button-bg hover:bg-button-hover-bg px-4 ${hasBorderRadiusBothSides && "rounded-lg"} ${hasOnlyLeftBorderRadius && "rounded-l-lg"} ${hasOnlyRightBorderRadius && "rounded-r-lg"} text-primary-color`}
        >
            <span>{text}</span>
            {icon && icon}
        </button>
    )
}

export default Button;