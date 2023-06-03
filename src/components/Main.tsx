import { useEffect, useState, useRef } from 'react'
import { BsPlusLg, BsThreeDots } from 'react-icons/bs'

import { Play } from './Play'

import imgMusic from '../assets/Skærmbillede 2016-12-08 kl. 10.49.01 AM.png'
import musica from '../assets/My_Curse_256k.mp3'



export const Main = () => {
    const audioMusic = useRef<HTMLAudioElement>(null)
    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState<number | undefined>(0)
    const [startTime, setStartTime] = useState<string>("0:00")
    const [durationAudio, setDurationAudio] = useState<string>("0:00")


    const handlePlayChange = (): void => {
        setPlaying(!playing);
    };
   

    useEffect(() => {
        setInterval(() => {
            setProgress(Math.floor(((audioMusic.current?.currentTime || 0) / (audioMusic.current?.duration || 0)) * 100))

            const currentTime = Math.floor(audioMusic?.current?.currentTime || 0)
            const duration = Math.floor(audioMusic?.current?.duration || 0)

            const secondForMin = (second = 0) => {
                const campoMinutos = String(Math.floor(second / 60));
                let campoSegundos = String(second % 60);
                if (Number(campoSegundos) < 10){
                    campoSegundos = '0' + campoSegundos
                }
            
                return campoMinutos+':'+campoSegundos
            }
            
            setDurationAudio(secondForMin(duration))
            setStartTime(secondForMin(currentTime))
        }, 1000)
    }, )


    useEffect(() => {
        if(playing === true){
            audioMusic.current?.play()
        }else{
            audioMusic.current?.pause()
        }
    }, )





    return (
        <main className='flex flex-col justify-center mt-14 w-full'>
            <img
                className='w-9/12 object-center mx-auto border-8 border-[#151214]'
                src={imgMusic}
                alt="nota de musica"
            />

            <div className='flex flex-row justify-between items-center w-[87%] mt-10 mx-auto '>
                <BsPlusLg size={28} style={{ color: "#919293", cursor: "pointer" }} />
                <h2 className='flex flex-col text-center text-2xl font-semibold'>
                    Black and White
                    <span className='font-light'>Boxinlion</span>
                </h2>
                <BsThreeDots size={28} style={{ color: "#919293", cursor: "pointer" }} />
            </div>

            <div className='w-11/12 mx-auto'>
                <div className='flex justify-between tracking-widest text-[#afb0b0]'>
                    <span >{startTime ? startTime : "0:00"}</span>
                    <span >{durationAudio}</span>
                </div>

                <div className="mb-1 text-base font-medium text-white"></div>
                <div className="w-full bg-[#202125] rounded-full h-1 mb-4">
                    <div className="h-1 rounded-full bg-white relative
                    before:absolute before:right-0 before:-top-[6px] before:bg-white before:w-4 before:h-4 
                    before:rounded-full"
                       style={{width: `${progress + "%"}`}} ></div>
                </div>
            </div>

            <Play playing={playing} onPlayChange={handlePlayChange} />

            <audio src={musica} ref={audioMusic} ></audio>
        </main>
    )
}
