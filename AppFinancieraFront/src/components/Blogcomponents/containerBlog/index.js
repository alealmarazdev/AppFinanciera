import React from 'react';

import PrincipalCardLeft from '../PrincipalCardLeft/index'
import ExampleBlogCard from '../exampleBlogCard/index'
import MiniExampleBlogCard from '../minExampleBlogCard'


function ContainerBlog () {
    return (
    <div> 
        <div className="d-flex m-5">      
        <PrincipalCardLeft />
        <div> 
            <ExampleBlogCard />
            <ExampleBlogCard />
        </div>
        <PrincipalCardLeft />
        </div>
        <hr/>
        <div className="d-flex m-5">
            <aside className="w-75">
                <ExampleBlogCard />
                <ExampleBlogCard />
                
            </aside>
            <aside className="w-25">
                <h3 /* className="text-center" */>Populares</h3>
                <hr/>
                <MiniExampleBlogCard />
                <MiniExampleBlogCard />
            </aside>
        </div>
     </div>
   )
}

export default ContainerBlog;