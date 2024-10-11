
import './Kartya.css';

function Kartya (props){
  function kattKez(adat) {
    props.kattKez(props.obj)
  }
  return (
    <div className="kartya">
      <img src={props.obj.kep} alt={props.obj.cim} className="kep"/>
      <h2>{props.obj.cim}</h2>
      <p>{props.obj.leiras}</p>
      <button onClick={()=>{kattKez()}}>Kiválaszt</button>
    </div>
  );
};
 export default Kartya;
