export default function MainRoom() {
return (
    <div>
    
    <form id='messenger' method="POST" action="/chat">
    <input type='text'name='username' placeholder="enter username" ></input>
    <input type='text' name='message' placeholder="type here"></input>
    <button>send</button>
    <button>refresh</button>
    </form>
    </div>
    
)};
