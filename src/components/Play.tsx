import { FaRandom } from 'react-icons/fa'
import { TfiLoop } from 'react-icons/tfi'
import { AiOutlinePause } from 'react-icons/ai'
import { IoIosPlay, IoIosSkipBackward, IoIosSkipForward } from 'react-icons/io'


type playProps = {
    onPlayChange: () => void ,
    playing: boolean
}
export const Play = ({onPlayChange = Function, playing = false}:
    playProps) => {

    const handlePlay = (): void => {
        onPlayChange()
    }

    return (
        <div className='flex flex-row justify-between items-center w-9/12 mx-auto mt-14'>
            <FaRandom size={22} style={{ color: "#919293", cursor: "pointer" }} />
            <div className='flex flex-row items-center gap-4'>
                <IoIosSkipBackward size={46}
                    style={{ cursor: "pointer" }} />

                {playing ? 
                    <AiOutlinePause size={80}
                    onClick={handlePlay}
                    style={{ border: "solid 1.5px white", borderRadius: "50%", cursor: "pointer" }} />
                : 
                    <IoIosPlay size={80}
                    onClick={handlePlay}
                    style={{ border: "solid 1.5px white", borderRadius: "50%", cursor: "pointer" }} />
                }
               
                
                <IoIosSkipForward size={46}
                    style={{ cursor: "pointer" }} />
            </div>
            <TfiLoop size={25} style={{ color: "#919293", cursor: "pointer" }} />
        </div>
    )
}

export default Play