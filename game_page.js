//Crie a função check
???
{
	get_answer = document.getElementById("input_check_box").value;
//Utilize o código 'toLowerCase' para deixar as letras todas minusculas
	answer = get_answer.???();
//Adicione o codigo que mostra o texto no console
	???("resposta em letras minúsculas - " + answer);
//Programe que...
//Se answer for igual a word
	???	
	{
		if(answer_turn == "player1")
		{
			player1_score = player1_score +1;
		    document.getElementById("player1_score").innerHTML = player1_score;
		}
		else 
		{
			//Nas linhas acima, está programdo que...
		       //A pontuação do primeiro jogador será adiconada em +1
		       //Além disso, a pontuação do primeiro jogador está sendo mostrada no id 'player1_score'
		      //Faça o mesmo com o segundo jogador
		}
	}
	if(question_turn == "player1")
	{
		question_turn = "player2"
		document.getElementById("player_question").innerHTML = "Turno de Perguntas - " + player2_name ;
	}
	else 
	{
		question_turn = "player1"
		document.getElementById("player_question").innerHTML = "Turno de Perguntas - " + player1_name ;
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2"
		document.getElementById("player_answer").innerHTML = "Turno de Respostas - " + player2_name ;
	}
	else 
	{
		answer_turn = "player1"
		document.getElementById("player_answer").innerHTML = "Turno de Respostas - " + player1_name ;
	}

    document.getElementById("output").innerHTML = "";
}
