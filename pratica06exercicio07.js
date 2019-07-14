function somar () {
				var fahrenheit = document.getElementById ("primeiroNumero").value;
				//var n2 = document.getElementById ("segundoNumero").value;
				fahrenheit = parseInt (fahrenheit);
				


				
				if (isNaN(fahrenheit)) {   // OBSERVAÇÃO: Para que eu a condição de verificar se é número funcione é necessário dar-se um parseInt antes da análise, como fiz na linha acima!!
					alert('Você deve digitar apenas valores numéricos');
				} else {
					//fahrenheit = parseInt (fahrenheit);
					var celsius = (5 / 9) * (fahrenheit - 32);
					celsiusArred = celsius.toFixed(2);
					document.getElementById("soma").innerHTML = 'A temperatura de ' + fahrenheit + '°F' + ' equivale a temperatura de ' + celsiusArred + '°C.';
					//console.log(celsius);
					}
				
			}