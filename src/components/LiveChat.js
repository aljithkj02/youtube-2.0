import React, { useEffect } from 'react'
import { ChatMessage } from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../redux/chatSlice';
import messagesData from '../utils/messages.json'
import { generateNumber } from '../utils';

export const LiveChat = () => {
    const messages = useSelector(store => store.chat.messages);
    const dispatch = useDispatch();

    useEffect(() => {
        const intervalId = setInterval(() => {
            fetchMessages();
        }, 500);

        return () => clearInterval(intervalId);
    }, [])

    const fetchMessages = async () => {
        const index = generateNumber(0, messagesData.length-1);
        dispatch(addMessage(messagesData[index]))
    }

    return (
        <div className='shadow-xl rounded-md border border-gray-300'>
            <div className='bg-white py-2 px-4 rounded-t-md border border-b-gray-200'>
                <p>Top chat</p>
            </div>
            <div className='py-2 px-3 h-[560px] bg-gray-200 flex gap-1 overflow-y-scroll flex-col-reverse'>
                { messages.map((item, i) => {
                    return <ChatMessage key={`${i}${item.id}`} name={item.name} message={item.message} />
                })}
            </div>
        </div>
    )
}
