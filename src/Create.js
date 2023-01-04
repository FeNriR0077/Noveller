import { useState } from "react";



const Create = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [contents, setContents] = useState('')
    const [preview, setPreview] = useState('')


    const handleSubmit = () => {
        const novels = { title, author, preview, contents}

        fetch("http://localhost:8000/novels", {
            method: 'POST',
            headers: {"Content-Type": "Application/JSON"},
            body: JSON.stringify(novels)
        }).then(() => {
            console.log('Your novel has been added')
        }).catch((err) => {
            console.log('There has been an erro in adding your novel')
            console.log(err.message);
        })
    }



    return (
        <div className="createcontainer">
            <div className="createheading">
                <h1>Write Your Own Novel</h1>
            </div>

            <div className="writingnovel">
                <form onSubmit={handleSubmit}>
                    <div className="titleauthor">
                        <div className="title">
                            <label htmlFor="title">Title: </label>
                            <input value={title} 
                            type="text" 
                            id="title" 
                            required 
                            onChange={(e) => setTitle(e.target.value)}/>
                        </div>

                        <div className="author">
                            <label htmlFor="author">Author: </label>
                            <input 
                            type="text" 
                            id="author" 
                            required 
                            value={author} 
                            onChange={(e) => setAuthor(e.target.value)}/>
                        </div>
                        
                    </div>
                    
                    <div className="noveltext">
                        <div className="novelwriting">
                            <label  htmlFor="novel">Novel: </label>
                            <textarea 
                            required 
                            name="novel" 
                            id="novel" 
                            cols="30" 
                            rows="30"
                            value={contents}
                            onChange={(e) => setContents(e.target.value)}></textarea>
                        </div>
                        <div className="novelscreen">
                            <label >A Short Description: </label>
                            <textarea 
                            required 
                            name="description" 
                            id="description" 
                            cols="30" 
                            rows="10"
                            value={preview}
                            onChange={(e) => setPreview(e.target.value)}></textarea>
                            
                        </div>
                    </div>

                    <div className="submitbtn">
                        <button type="submit">Publish</button>
                    </div>
                </form>


            </div>
        </div>
    );
}
 
export default Create;