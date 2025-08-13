import blogData from "../data/blog"
import Article from "./Article"
function ArticleList(){
    const articleLoop = blogData.posts.map((posts) => {
        return(
            <Article
            key={posts.id}
            title={posts.title}
            date={posts.date}
            preview={posts.preview}                  
            /> 
                   
                           
            )
    })
    return(
    <main>
    {articleLoop}
       
    </main>
    )
    

}
export default ArticleList