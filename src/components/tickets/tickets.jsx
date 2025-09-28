import React from 'react';
import { toast } from 'react-toastify';

const Tickets = ({onTicketClick, onProggressCount, resolvedTickets  ,tickets , handleComplateTask }) => {
    return (
       <div className='bg-[#F5F5F5] py-20 px-4'>
            <div className='max-w-[1440px] mx-auto'>
                    <div className="flex flex-col md:flex-row md:gap-6 gap-10">
                    <div className="left flex-1">
                    <h3 className='mb-3 text-2xl font-semibold'>Customer Tickets</h3>
                    <ul  className="grid md:grid-cols-2 grid-cols-1 gap-3 ">
                        {tickets.map((ticket) => (
                            <div key={ticket.id} className="column p-4 rounded-lg shadow-sm space-y-3"onClick={() => {
                                onTicketClick(ticket);
                                onProggressCount(ticket);
                                toast(`Ticket "${ticket.title}" clicked!`);
                            }}>
                        <div className="titleandBtn flex justify-between items-center ">
                            <h2 className="title font-medium text-lg">
                                {ticket.title}
                            </h2>
                            <span className={`flex justify-between items-center gap-1 bg-[#B9F8CF] px-3 rounded-[20px] font-bold text-[#0B5E06] w-full max-w-[fit-content] ${ticket.status === "In Progress" ? "bg-[#F8F3B9] text-[#9C7700]" :""} `}>
                            <p className={`w-[15px] h-[15px] bg-[#02A53B] rounded-[50%] ${ticket.status === "In Progress" ? "bg-[#FEBB0C]" :""}`}></p> {ticket.status}
                            </span>
                        </div>
                        <p className="text">
                            {ticket.description}
                        </p>
                        <div className="text-boxes flex justify-between text-sm">
                            <div className="left flex justify-between gap-2">
                                <span className="text-[#627382]">{ticket.number}</span>
                                <h3 className={`${ticket.priority.toUpperCase() === "MEDIUM PRIORITY" ? "text-[#FEBB0C]" : ""}
                                ${ticket.priority.toUpperCase() === " LOW PRIORITY " ? "text-[#02A53B]" : "text-[#F83044]"}`}>
                                    {ticket.priority.toUpperCase()}
                                </h3>
                            </div>
                            <div className="right flex justify-between gap-2 text-[#627382]">
                                <span>{ticket.customer}</span>
                                <h3 className="time"> <i className="fa-solid fa-calendar"></i> {ticket.createdAt} </h3>
                            </div>
                        </div>
                    </div>
                        
                        ))}
                    </ul>
                </div>
                        <div className="right resolved-area max-w-[360px]">
                            <div className="title-area mb-10">
                                <h3 className='mb-3 text-2xl font-semibold'>Task Status</h3>
                                <p className='text-[#627382]'>Select a ticket to add to Task Status</p>
                            </div>
                            <div className="resolved-section">
                                <h3 className='mb-3 text-2xl font-semibold'>Resolved Task</h3>
                                {resolvedTickets.length === 0 ? (<p className='text-[#627382]'>No resolved tasks yet.</p>) :  <ul className="space-y-3">
                                {resolvedTickets.map((ticket) => (
                                    <li key={ticket.id} className="p-3 rounded bg-white shadow">
                                    <h4 className="font-medium mb-2 text-lg">{ticket.title}</h4>
                                    <button onClick={()=>{
                                        handleComplateTask(ticket)
                                    }} className='btn bg-[#02A53B] w-full border-0'>Complete</button>
                                    </li>
                                ))}
                                </ul>}
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};




export default Tickets;

