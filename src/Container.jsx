import "./Container.css";

function Container({title, subtitle}){
	
	return( 
		<div className='Principal'>
		<p className='numerador'>{title}</p>
		 <h5 className='subtitulo'>{subtitle}</h5>
		 </div>
	);
}

export default Container;
