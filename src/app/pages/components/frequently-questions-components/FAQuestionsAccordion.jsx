"use client"
import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa"




export default function FAQuestionsAccordion() {


    let [faqGrp, setFaqGrp] = useState('');


    let faqArr = [
        {
            id: '1',
            ques: 'Mauris congue euismod purus at semper. Morbi et vulputate massa?',
            ans: 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem'
        },
        {
            id: '2',
            ques: 'Donec mattis finibus elit ut tristique?',
            ans: 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem'
        },
        {
            id: '3',
            ques: 'Aenean elit orci, efficitur quis nisl at, accumsan?',
            ans: 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem'
        },
        {
            id: '4',
            ques: 'Pellentesque habitant morbi tristique senectus et netus?',
            ans: 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem'
        },
        {
            id: '5',
            ques: 'Nam pellentesque aliquam metus?',
            ans: 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem'
        },
        {
            id: '6',
            ques: 'Aenean elit orci, efficitur quis nisl at?',
            ans: 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem'
        },
        {
            id: '7',
            ques: 'Morbi gravida, nisi id fringilla ultricies, elit lorem?',
            ans: 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem'
        },
        {
            id: '8',
            ques: 'Aenean elit orci, efficitur quis nisl at, accumsan?',
            ans: 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem'
        },
    ];



    return (
        <div>
            {faqArr.map((item, index) => {
                const isActive = faqGrp === item.id

                return (
                    <div className='mb-5' key={index}>
                        <h1
                            onClick={() => setFaqGrp(isActive ? '' : item.id)}
                            className={`
                                relative bg-[#F7F7F7] font-bold text-[18px] h-[45px] pl-5 flex justify-start items-center cursor-pointer
                                ${isActive ? 'border border-[#c09578] text-[#c09578]' : 'text-black'}
                                `}
                        >
                            {item.ques}
                            <span className='absolute top-[50%] right-4 translate-y-[-50%]'>
                                {isActive ? <FaMinus /> : <FaPlus />}
                            </span>
                        </h1>

                        <div
                            className={
                                `transition-all duration-500 overflow-hidden text-[14px] text-[#5a5a5a] border-r border-l border-b border-[#c09578] px-5
                                ${isActive ? 'max-h-[500px] py-5 opacity-100' : 'max-h-0 py-0 opacity-0'}`
                            }
                        >
                            {item.ans}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}