
export const GifItem = ({title, url, id}) => {
 
  return (
    <div className="card">
        <img src={url} atl= {title}/>
        <p>{title}</p>
    </div>
  )

}


