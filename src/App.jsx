import './App.css'
import React, {useState , useEffect} from 'react';

import Navbar from './components/Nav-bar/navber.jsx';
import HeroSection from "./components/hero/hero.jsx";
import Footer from './components/Footer_Area/Footer.jsx';
import Tickets from './components/tickets/tickets.jsx';
import { toast } from 'react-toastify';
import { ToastContainer} from 'react-toastify';
function App() {

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
  
    const discressInprogressNumber = () =>{
      setInProgressCounter(prev => Math.max(prev - 1, 0));
    };


    const handleComplateTask = (ticket)=> {


       setTickets(prev => prev.filter(t => t.id !== ticket.id));
        setResolvedTickets(prev => prev.filter(t => t.id !== ticket.id));
        setInResolvedCounter(prev => prev + 1);
        setInProgressCounter(prev => Math.max(prev - 1, 0)); 
         toast(`Your "${ticket.title}" task has been completed!`);
    }


  return (
    <>
        <Navbar></Navbar>
        <HeroSection inProgressCounter={inProgressCounter} inResolvedCounter={inResolvedCounter} ></HeroSection>
        <Tickets onTicketClick={() => setInProgressCounter(inProgressCounter + 1)}
        increaseResolvedNumber = {() => setInResolvedCounter(inResolvedCounter + 1)}

        onProggressCount={(ticket) => setResolvedTickets([...resolvedTickets, ticket])}
        resolvedTickets={resolvedTickets}
        tickets={tickets}
        handleComplateTask ={handleComplateTask}
        discressInprogressNumber={discressInprogressNumber}/>
        <Footer></Footer>
        <ToastContainer/>
        
    </>
  )
}

export default App
