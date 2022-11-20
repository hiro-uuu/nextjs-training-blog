import {client} from '../../libs/cliant'

import {
    GetStaticProps,
  } from "next";

// type Props = {
//     params:any
// }

export const getStaticProps: GetStaticProps = async (context) => {

    //@ts-ignore
    const id = context.params.id;
    //@ts-ignore
    const data = await client.get({endpoint: 'blog', contentId:id})

    return{
        props:{
            blog:data,
        }
    }
}

export const getStaticPaths = async ()=>{
    
    const data = await client.get({endpoint: "blog"});
    const paths = data.contents.map((content:any)=> `/blog/${content.id}`); 
    return{
        paths,
        fallback: false
};
} 

export default function BlogId ({blog}:{blog:any}){

    return(
        <main>
            <h1> {blog.title}</h1>
            <p>{blog.publishedAt}</p>
            <div dangerouslySetInnerHTML={{
        __html: blog.boby
      }}
    />


        </main>
    )
} 