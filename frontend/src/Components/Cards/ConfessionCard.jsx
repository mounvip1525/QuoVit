import React,{useState} from 'react'
import emoji1 from './img/emoji1.png'
import emoji2 from './img/emoji2.png'
import emoji3 from './img/emoji3.png'
import emoji4 from './img/emoji4.png'
import emoji5 from './img/emoji5.png'
import './css/ConfessionsCard.css'

export default function ConfessionCard({id,confession,date,index}) {
    const [emoji,setEmoji] = useState(-1);
    const emojis = [emoji1,emoji2,emoji3,emoji4,emoji5];
    return (
        <div className="confession-card">
            <p className="c-date">{date}</p>
            <p className="c-text">{confession}</p>
            <div className="c-emojis">
                {emojis.map((e,index)=>(
                    <div onClick={()=>setEmoji(index)} className={index === emoji ? "emoji-selected" : ""}>
                        <img src={e} alt="emoji" style={{cursor:"pointer"}}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
