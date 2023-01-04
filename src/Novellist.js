


const Novellist = ({data, handleDelete}) => {

    return (
        <div className="novellistcontainer">
            <div className="listofnovels">
                Popular Novels:
            </div>
            {data.map((deet) => (
                <div className="novelpreview" key={deet.id}>
                    <h1>{deet.title}</h1>
                    <h2>Author: {deet.author}</h2>
                    <p>{deet.preview}</p>
                    <button onclick={() => handleDelete(deet.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}
 
export default Novellist;