import React, {useState , useEffect} from 'react';
import leftImg from '../../assets/bg1.png';
import rightImg from '../../assets/bg2.png';
import Tickets from '../tickets/tickets';


export default function Hero() {
  const [ inProgressCounter , setInProgressCounter]= useState(0);
  const [ inResolvedCounter , setInResolvedCounter]= useState(0);
  const [resolvedTickets, setResolvedTickets] = useState([]);
   const [tickets , setTickets] = useState([]); 
   useEffect(()=>{
           fetch("/ticket.json")
           .then((data)=>data.json())
           .then((userTicket)=>{
               setTickets(userTicket)
               
           })
       }, []);


  const removedResolvedTask = (id) =>{
    setResolvedTickets(prev =>prev.filter(ticket => ticket.id !==id));
    setTickets(prev =>prev.filter(ticket => ticket.id !==id));
  };

  const discressInprogressNumber = () =>{
    setInProgressCounter(prev => Math.max(prev - 1, 0));
  };

  return (
    <div className='bg-[#f5f5f5] pt-20 p-4'>
        <div className='max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between gap-6 boxes-area'>
            <div className="colLeft p-[67px] text-center text-white flex-1 rounded-lg hover:shadow-2xl transition-all duration-300"
            style={{
                backgroundImage: `url(${leftImg}), url(${rightImg}), linear-gradient(to right, #632EE3, #9F62F2)`,
                backgroundRepeat: "no-repeat, no-repeat, no-repeat",
                backgroundPosition: "left center, right center, center",
                backgroundSize: "auto, auto, cover"}}>
                <p className='text-2xl'>In-Progress</p>
                <span className="text-[60px] counter-span-number">{inProgressCounter}</span>
            </div>
            <div className="colRight p-[67px] text-center text-white flex-1 rounded-lg bg-no-repeat bg-center bg-cover hover:shadow-2xl transition-all duration-300" style={{
                backgroundImage: `url(${leftImg}), url(${rightImg}), linear-gradient(to right, #54CF68, #00827A)`,
                backgroundRepeat: "no-repeat, no-repeat, no-repeat",
                backgroundPosition: "left center, right center, center",
                backgroundSize: "auto, auto, cover"}}>
                  <p className='text-2xl'>Resolved</p>
                  <span className="text-[60px]">{inResolvedCounter}</span>
            </div>
        </div>
        <Tickets onTicketClick={() => setInProgressCounter(inProgressCounter + 1)}
        increaseResolvedNumber = {() => setInResolvedCounter(inResolvedCounter + 1)}


        onProggressCount={(ticket) => setResolvedTickets([...resolvedTickets, ticket])}
        resolvedTickets={resolvedTickets}
        tickets={tickets}
        removedResolvedTask={removedResolvedTask}
        discressInprogressNumber={discressInprogressNumber}/>
    </div>
  )
}