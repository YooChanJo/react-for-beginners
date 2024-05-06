function Movie({coverImage, title, summary, genres}) {
    return (
    <div>{
        <div>
          <h2>{title}</h2>
          <p>{summary}</p>
          <ul>
            {genres.map(g => <li key={g}>{g}</li>)}
          </ul>
          <img src={coverImage} />
        </div>
    }</div>
    );
}
export default Movie;