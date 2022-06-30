import Titulo from "./Titulo";
import Container from "./Container";

function App(){

	const titulo = [
		{
			titulo: "Mais Lidas",
		},
	];

	const conteiner = [
		{
			num: "1",
			texto: "Funcionaria que denunciou procurador diz que agressor 'desprezava mulheres e teme sair na rua: 'Muito medo'",
			
		},
		{
			num: "2",
			texto: "Imposto de Renda 2022: Receita abre consultas ao 2° lote de restituição nessa quinta; veja se você está no grupo ",
			
		},
		{
			num: "3",
			texto: "Governo opera para evitar CPI do MEC, que ganhou força após prisão de Milton Ribeiro",
			
		},
    {
			num: "4",
			texto: "Em Itajubá, assaltantes armados atacam agência da Caixa Econômica Federal; 7 ficam feridos",
			
		},
		{
			num: "5",
			texto: "Almir Sater é 'parado em blitz' e policiais tietam cantor: 'o senhor é o dono dessa chalana?'",
			
		},
	];

	return(
		<div>
			{
				titulo.map((cons) => {
					return <Titulo 
							titulo={cons.titulo}
						/>;
				})
			}
		
		<div className="cont"> 
			{
			conteiner.map((cont, res) => {
					return <Container key={res}
							num={cont.num}
							texto={cont.texto}
						/>;
				})
			}
	        </div>
			</div>
	);
}

export default App;