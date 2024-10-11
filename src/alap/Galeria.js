import Kartya from './Kartya';
import './Galeria.css';

export default function Galeria(props){
    function kattKez(adat){
        props.kattKez(adat)
    }
    return(
        <div className='galeria'>
        {props.lista.map((elem, index) => {
            return <Kartya obj={elem} key={index} kattKez={kattKez}/>
        })}
    </div>
    );
};
