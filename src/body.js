import'./body.css'; 
const age = 25;
function body() {
  return (
    <div class="body">
        <h1>Registration Form</h1>
        <input type="text" placeholder="Enter your Name" />
        <input type="text" placeholder="Enter your Email"/>
        <input type="text" placeholder="Enter your Contact"/>
        <input type="text" placeholder="Enter your Course"/>
        <button onClick={() => alert("You're now Registered with us!")}>Register</button>
        <img src="logo192.png" alt="Logo"/>
    </div>
  );
}

export default body;
