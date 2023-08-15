import React,{useState} from 'react'
import moment from 'moment'
import './css/ConfessionsCard.css'
import emoji1 from './img/emoji1.png'
import emoji2 from './img/emoji2.png'
import emoji3 from './img/emoji3.png'
import emoji4 from './img/emoji4.png'
import emoji5 from './img/emoji5.png'

export default function ConfessionCard({confession,date}) {
    const [emoji,setEmoji] = useState(-1);
    const emojis = [emoji1,emoji2,emoji3,emoji4,emoji5];
    var date = moment(date);
    return (
        <div className="confession-card">
            <p className="c-date">{date.format('DD MMM')}</p>
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
