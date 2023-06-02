import { RxHamburgerMenu } from "react-icons/rx"


export const Header = () => {
    return (
        <header className="max-w-full">
            <div className="min-w-[290px] ml-[35%] flex flex-row justify-between items-center mt-5">
                <h1 className="flex flex-col text-center tracking-widest font-normal text-[#bbbbbb]">
                    Tocando do album
                    <span>Músicas</span>
                </h1>
                <div className="mr-4">
                   <RxHamburgerMenu size={24} style={{color: "#919293", cursor: "pointer"}}/>
                </div>
            </div>
        </header>
    )
}
