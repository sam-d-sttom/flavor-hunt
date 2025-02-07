import Button from "./Button";

const SearchBar = () => {
  return (
    <form className="flex justify-between items-center w-2/5 hidden md:flex">
      <input
        type="text"
        placeholder="Search recipes"
        className="text-black text-sm grow border-2 border-border-color border-solid rounded-l-lg py-2 px-4 focus:outline-none border-r-0 h-[35px]"
      />
      <Button
        text="Search"
        hasBorderRadiusBothSides={false}
        hasOnlyRightBorderRadius={true}
      />
    </form>
  )
}

export default SearchBar;