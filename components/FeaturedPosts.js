import React from "react";
import SbEditable from "storyblok-react";
import Link from 'next/link'

const FeaturedPosts = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="py-28 mb-6 container mx-auto text-left" key={blok._uid}>
        <div className="relative">
          <h2 className="relative font-serif text-4xl z-10 text-primary">
            {blok.title}
          </h2>
         </div>
        <ul className="flex">
          {blok.posts.map((post) => {
            const lang = post.lang === "default" ? "/en" : `/${post.lang}`;
              console.log(post)
            return (
              <li key={post.slug} className="pr-8 w-1/3">
                <Link
                  href={`${lang}/blog/${post.slug}`}
                  className="py-16 block transition hover:opacity-50"
                >
                <div className='blogtotal'>
                <div className='imagecontent'>
                  <img src={post.content.image} className="  w-full" />
                  </div>
                  <div className='blogcontent'>
                  <p>{new Date(post.published_at).toLocaleString('default', { month: 'short' })} 
                  {' '+new Date(post.published_at).getDate()}, {new Date(post.published_at).getFullYear()} </p>
                  <h2 className="pb-6 text-lg font-bold">
                    {post.content.title}
                  </h2>

                 
                  </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </SbEditable>
  );
};

export default FeaturedPosts;
