import "./Container.css";

function Container({num, texto}){
	
	return( 
		<div className='Principal'>
		<p className='numerador'>{num}</p>
		 <h5 className='texto'>{texto}</h5>
		 </div>
	);
}

export default Container;
