

const FormButton = ({
    text = "foody",
    hasBorderRadiusBothSides = true,
    hasOnlyLeftBorderRadius = false,
    hasOnlyRightBorderRadius = false,
    height = "h-full",
    icon,
    isFormSubmitted = false,
    width = "",

}) => {
    return (
        <button
            className={`${height} ${width} cursor-pointer bg-button-bg hover:bg-button-hover-bg px-4 ${hasBorderRadiusBothSides && "rounded-lg"} ${hasOnlyLeftBorderRadius && "rounded-l-lg"} ${hasOnlyRightBorderRadius && "rounded-r-lg"} text-primary-color flex justify-around items-center`}
        >
            {
                isFormSubmitted ?
                    <div className="h-5 w-5 my-2 rounded-full border-2 border-red-300 border-t-white animate-spin"></div>
                    :
                    <span>{text}</span>

            }
            {/* {icon && icon} */}

        </button>
    )
}

export default FormButton;