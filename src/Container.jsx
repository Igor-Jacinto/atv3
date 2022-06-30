import "./Container.css";

function Container({title, subtitle}){
	
	return( 
		<div className='Principal'>
		<p className='numerador'>{title}</p>
		 <h3 className='subtitulo'>{subtitle}</h3>
		 </div>
	);
}

export default Container;
