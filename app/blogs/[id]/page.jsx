'use client'
import { blog_data } from '@/assets/assets';
import React from 'react'
import { use } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'


const page = ({params}) => {
    const {id}=use(params);
   const [data,setData]=useState(null);
   const fetchBlogData=()=>{
        for (let i = 0; i < blog_data.length; i++) {
            if(Number(id)===blog_data[i].id){
                setData(blog_data[i]);               
                console.log(blog_data[i]);
                 break;
            }
            
        }
   }
   useEffect(()=>{
    fetchBlogData();
   },[])
  return (
    <div>
        
    </div>
  )
}

export default page