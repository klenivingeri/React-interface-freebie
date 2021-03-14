import '../styles/pedidos.scss'
export function Pedidos(){

    return(
        <aside className="pedidos">
            <h1> Contact Form</h1>

        <form className="form-pedidos">
            <label className="label-pedidos">Your E-mail</label><br/>
            <input placeholder="Write your email" /><br/>
           
            <label className="label-pedidos">Name</label><br/>
            <input placeholder="Write your name" /><br/>
            
            <label className="label-pedidos">Subject</label><br/>
            <select name="how" id="how">
                <option value="how to fry chicken">how to fry chicken</option>
                <option value="how to fry chicken">how to fry chicken</option>
                <option value="how to fry chicken">how to fry chicken</option>
                <option value="how to fry chicken">how to fry chicken</option>
            </select>
            <label className="label-pedidos">Message</label><br/>

            <div className="editor">
                <div className="editor-textarea">
                    <span>B</span>
                    <span>|</span>
                    <span>U</span>
                </div>
                <textarea id="story" name="story">
                    It was a dark and stormy night...
                </textarea>
            </div>
            
        </form>
        </aside>
    )
}