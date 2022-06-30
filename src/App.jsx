import Titulo from "./Titulo";
import Container from "./Container";

function App(){

	const titulo = [
		{
			ti: "Mais lidas",
		},
	];

	const conteiner = [
		{
			title: "1",
			subtitle: "Funcionaria que denunciou procurador diz que agressor 'desprezava mulheres e teme sair na rua: 'Muiro medo'",
			
		},
		{
			title: "2",
			subtitle: "Imposto de Renda 2022: Receita abre consultas ao 2° lote de restituição nessa quinta; veja se você está no grupo ",
			
		},
		{
			title: "3",
			subtitle: "Governo opera para evitar CPI do MEC, que ganhou força após prisão de Milton Ribeiro",
			
		},
    {
			title: "4",
			subtitle: "Em Itajubá, assaltantes armados atacam agência da Caixa Econômica Federal; 7 ficam feridos",
			
		},
		{
			title: "5",
			subtitle: "Almir Sater é 'parado em blitz' e policiais tietam cantor: 'o senhor é o dono dessa chalana?'",
			
		},
	];

	return(
		<div>
			{
				titulo.map((cons) => {
					return <Titulo 
							ti={cons.ti}
						/>;
				})
			}
		
		<div className="cont"> 
			{
			conteiner.map((cont, a) => {
					return <Container key={a}
							title={cont.title}
							subtitle={cont.subtitle}
						/>;
				})
			}
	        </div>
			</div>
	);
}

export default App;