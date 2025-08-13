function Article (prop) {
    return (
    <>
    <article>
    <h3>{prop.title}</h3>
    <small>{prop.date || "January 1, 1970"}</small>
    <p>{prop.preview}</p>
    </article>
    </>
    )
}
export default Article
