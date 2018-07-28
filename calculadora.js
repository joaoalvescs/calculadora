var n1;
var n2; 
var op;

print(" 1 - SOMAR DOIS NÚMEROS. ");
print(" 2 - MULTIPLICAR DOIS NÚMEROS. ");
print(" 3 - DIVIDIR DOIS NÚMEROS. ");
print(" 4 - SUBTRAIR DOIS NÚMEROS. ");
op;

switch(op){
	case 1:
		soma(n1,n2);
		print(soma(n1,n2));
	break;
	case 2:
		multiplicacao(n1,n2);
		print(multiplicacao(n1,n2));
	break;
	case 3:
		divisao(n1,n2);
		print(divisao(n1,n2));
	break;
	case 4:
		subtracao(n1,n2);
		print(subtracao(n1,n2));
	break;
	default:
		print(" ¡ADIÓS, AMIGOS! ")

}

function soma(n1, n2){
	return n1+n2;
}

function multiplicacao(n1, n2){
	return n1*n2;
}

function divisao(n1, n2){
	return n1/n2;
}

function subtracao(n1, n2){
	return n1-n2;
}