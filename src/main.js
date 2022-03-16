
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './images/mistlogo.jpg';
import video from './images/rick.mp4';
import ReactPlayer from 'react-player';


const Main=()=>

{

    

    const Click=()=>
    {
        document.getElementById('player').style.display='block';

        document.getElementById('text').style.display='none';
        document.getElementById('input').style.display='none';
        document.getElementById('button').style.display='none';
        document.getElementById('phish').style.display='block';
        
    }

   
    return(

        <section className="main bg-dark position-absolute" style={{minHeight:"100%", minWidth:"100%"}}>
            <div className="main bg-dark position-relative">
            <Nav/>

            

            </div>

            <div class="container">
  <div class="row d-flex position-absolute m-0 p-0" style={{top:"50%",left:"10%"}}>
    <div class="col" id='col1' style={{display:'block'}}>
    <h4 className="email text-white" id='text' style={{top:"53%", left:"27%", fontWeight:"bold",display:'block'}}>Learner-id  : </h4>
   
    </div>
    <div className="col" id='col2' style={{display:'block'}}>
    <input type="email" id='input' className="form-control " style={{top:"58%",left:"35%", width:"100%",display:'block'}} aria-describedby="emailHelp"/>
    </div>
    <div className="col" id='col3' style={{display:'block'}}>
    <button type="submit" id='button' onClick={Click} className="btn btn-dark " style={{top:"68%",left:"38%",fontWeight:"bold", background:"black",display:'block'}}>Sign In</button>
    </div>
  
  </div>


  <ReactPlayer className='px-5 py-3 position-relative' id="player" style={{display:'none',left:'20%'}}
  url="https://www.youtube.com/watch?v=iik25wqIuFo"
  playing={true}
  width="50vw"
  height="50vh"
  muted="true"
/>





 
</div>
            

          

            <h3 className="email text-white py-3" id='phish' style={{top:"80%", left:"27%", fontWeight:"bold", display:'none'}}>You have been Phished, be careful next time ;)</h3>

           

            
        </section>

    );
}


const Nav=()=>{
    return(
        <nav class="navbar navbar-light d-flex" style={{background:"black"}}>
  <div class="container-fluid d-flex" >
    <a class="navbar-brand d-flex px-5" href="#">
      <img src={logo} alt=""  className="image" width="70px" height="70px" style={{borderRadius:"90%"}}/>
      <h2 className="cyber text-white py-3 px-2" style={{fontWeight:"bold"}}>CyberManipal</h2>
    </a>
  </div>
</nav>

    );
}



export default Main;