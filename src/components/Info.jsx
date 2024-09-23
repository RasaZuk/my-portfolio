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
            <p>If you are interested in my services or willing to contact me, please press the link or send me an email: </p>
            <div className="connection">
                <img src="#" alt="LinkedIn" />
                <a href="#">LinkedIn</a>
                <img src="#" alt="Letter" />
                <p>rasa.zukauskaite@gmail.com</p>
            </div>

        </div>        
        </>
    );
}