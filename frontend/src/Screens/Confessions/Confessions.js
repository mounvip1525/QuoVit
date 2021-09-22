import React,{useState,useEffect} from 'react'
import ConfessionCard from '../../Components/Cards/ConfessionCard'
import MainLayout from '../../Components/Structure/Main'
import './css/Confessions.css'

export default function Confessions() {
    const confessions = [
        {
            id:1,
            date:"25 July",
            confession:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus quisque pulvinar ullamcorper lectus nibh eu, at cursus. Leo purus viverra quis adipiscing ultricies arcu. Tincidunt et nam egestas odio. Sagittis odio pellentesque nisl vitae."
        },
        {
            id:2,
            date:"23 July",
            confession:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus quisque pulvinar ullamcorper lectus nibh eu, at cursus. Leo purus viverra quis adipiscing ultricies arcu. Tincidunt et nam egestas odio. Sagittis odio pellentesque nisl vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus quisque pulvinar ullamcorper lectus nibh eu, at cursus. Leo purus viverra quis adipiscing ultricies arcu. Tincidunt et nam egestas odio. Sagittis odio pellentesque nisl vitae. Tincidunt et nam egestas odio. Sagittis odio pellentesque nisl vitae."
        },
        {
            id:3,
            date:"23 July",
            confession:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus quisque pulvinar ullamcorper lectus nibh eu, at cursus. Leo purus viverra quis adipiscing ultricies arcu. Tincidunt et nam egestas odio. Sagittis odio pellentesque nisl vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus quisque pulvinar ullamcorper lectus nibh eu, at cursus. Leo purus viverra quis adipiscing ultricies arcu. Tincidunt et nam egestas odio. Sagittis odio pellentesque nisl vitae. Tincidunt et nam egestas odio. Sagittis odio pellentesque nisl vitae."
        },
        {
            id:4,
            date:"25 July",
            confession:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus quisque pulvinar ullamcorper lectus nibh eu, at cursus. Leo purus viverra quis adipiscing ultricies arcu. Tincidunt et nam egestas odio. Sagittis odio pellentesque nisl vitae."
        },
        {
            id:5,
            date:"23 July",
            confession:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus quisque pulvinar ullamcorper lectus nibh eu, at cursus. Leo purus viverra quis adipiscing ultricies arcu. Tincidunt et nam egestas odio. Sagittis odio pellentesque nisl vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus quisque pulvinar ullamcorper lectus nibh eu, at cursus. Leo purus viverra quis adipiscing ultricies arcu. Tincidunt et nam egestas odio. Sagittis odio pellentesque nisl vitae. Tincidunt et nam egestas odio. Sagittis odio pellentesque nisl vitae."
        },
        {
            id:6,
            date:"25 July",
            confession:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus quisque pulvinar ullamcorper lectus nibh eu, at cursus. Leo purus viverra quis adipiscing ultricies arcu. Tincidunt et nam egestas odio. Sagittis odio pellentesque nisl vitae."
        },
        {
            id:7,
            date:"25 July",
            confession:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus quisque pulvinar ullamcorper lectus nibh eu, at cursus. Leo purus viverra quis adipiscing ultricies arcu. Tincidunt et nam egestas odio. Sagittis odio pellentesque nisl vitae."
        },
        {
            id:8,
            date:"23 July",
            confession:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus quisque pulvinar ullamcorper lectus nibh eu, at cursus. Leo purus viverra quis adipiscing ultricies arcu. Tincidunt et nam egestas odio. Sagittis odio pellentesque nisl vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus quisque pulvinar ullamcorper lectus nibh eu, at cursus. Leo purus viverra quis adipiscing ultricies arcu. Tincidunt et nam egestas odio. Sagittis odio pellentesque nisl vitae. Tincidunt et nam egestas odio. Sagittis odio pellentesque nisl vitae."
        }
    ]
    const [left,setLeft] = useState([]);
    const [right,setRight]=useState([]);
    useEffect(()=>{
        confessions.map((c,index)=>{
            index % 2 === 0 ? setLeft(left=>[...left,c]) : setRight(right=>[...right,c])
        })
    },[])
    return (
            <MainLayout>
                <div className="confessions-cont">
                <div className="c-1">
                {left.map((confession,index)=>(
                    <ConfessionCard date={confession.date} confession={confession.confession} id={confession.id} index={index}/>
                ))}
                </div>
                <div className="c-2">
                {right.map((confession,index)=>(
                    <ConfessionCard date={confession.date} confession={confession.confession} id={confession.id} index={index}/>
                ))}
                </div>
                </div>
            </MainLayout>
    )
}
