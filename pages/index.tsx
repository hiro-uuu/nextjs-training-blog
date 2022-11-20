

import Link from 'next/link';
// import * from 'react';
import React from 'react';
import { client } from '../libs/cliant'



//SSG
//htmlを事前に用意しておく
//動的でないサイトに有効的（早くなる）
//頻繁に更新される場合はSSR
export const getStaticProps =  async () => {
  const data = await client.get({endpoint: "blog"});

  console.log(data)

 
  return{
    props: {
      blog:data.contents,
    }
   
}}

export default function Home({blog}: {blog:any}) {
  return (
    <React.Fragment>
    <h3>ブログ</h3>
     {blog.map((blogelment: any) => (
      <li key = {blogelment.id}>
        <Link href={ `/blog/${blogelment.id}`} >
          {blogelment.title}
        {/* <a href=''> {blog.title}</a> */}
        </Link>
      </li>
     ))}

  </React.Fragment>
  
  
  
  )
}
