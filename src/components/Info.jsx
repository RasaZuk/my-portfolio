
export function Info() {
    return (
        <>
        <div className="about">
            <h1>About me</h1>
            <p>Welcome to my portfolio.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam officia beatae atque quis, nobis perspiciatis a dicta in, eum, exercitationem commodi animi? Obcaecati commodi enim temporibus cum ullam omnis quos.</p> 
        </div>
        <div className="creations">
            <h1>Creations</h1>
            <a href="#">Project1</a>
            <a href="#">Project2</a>
            <a href="#">Project3</a>
            <a href="#">Project4</a>
        </div>

        <div className="contacts">
            <h1>Contacts</h1>
            <p>Please contact me via:</p> 
                <div className="connection">
                    <p>LinkedIn</p>
                    <p>http://www.linkedin.com/in/rasa-zukauskaite-15ba90a1</p>
                </div>
                <div className="connection">
                    <p>rasa.zukauskaite@gmail.com</p>
                </div>
                <div className="connection">
                    <p>or visit my Github page</p> 
                </div>

        </div>        
        </>
    );
}