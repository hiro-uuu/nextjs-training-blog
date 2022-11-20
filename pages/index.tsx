

import Link from 'next/link';
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
    <div>
     {blog.map((blogelment: any) => (
      <li key = {blogelment.id}>
        <Link href={ `/blog/${blogelment.id}`} >
          <div>{blogelment.title}</div>
        {/* <a href=''> {blog.title}</a> */}
        </Link>
      </li>
     ))}
  </div>
  
  
  
  )
}
