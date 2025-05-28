$(document).ready(function () {
            $('#carousel-imagens').slick({
                autoplay:true
            })

            $('.menu-hamburguer').click(function(){
                $('nav').slideToggle(); /*slideToggle faz com que o menu apareça e desapareça*/
            })

            $("#num").mask("(00) 00000-0000", {
                placeholder: "(00) 00000-0000"
            }); /*mascara para telefone*/

            $('form').validate({
                rules: {
                    nome: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    telefone: {
                        required: true
                    },
                    veiculoInteresse: {
                        required: true
                    },
                    mensagem: {
                        required: false
                    }
                },
                messages: { /*mensagens de validação*/
                    nome: {
                        required: "Por favor, informe seu nome"
                    },
                    email: {
                        required: "Por favor, informe seu email",
                        email: "Por favor, informe um email válido"
                    },
                    telefone: {
                        required: "Por favor, informe seu telefone"
                    },
                    veiculoInteresse: {
                        required: "Por favor, informe o veículo de interesse"
                    }
                },
                submitHandler: function(form){ /*função que será executada ao enviar o formulário*/
                    console.log(form);
                },
                invalidHandler: function(evento, validador){ /*função de validação de campos e retorna quantos campos estao incorretos*/
                    let camposIncorretos = validador.numberOfInvalids(); 
                    if (camposIncorretos){
                        alert(`Existem (${camposIncorretos}) campos incorretos `);
                    }
                }
            })
            
            $('.lista-veiculos button').click(function(){
                const destino = $('#contato');

                const nomeVeiculo = $(this).parent().find('h3').text(); //pega o nome do veiculo e preenche automatiamente pós click

                $('#veiculo-interesse').val(nomeVeiculo); 

                $('html').animate({ //animar a rolagem da tela
                    scrollTop: destino.offset().top //scrollTop é a posição da tela que você quer que o scroll fique; offset é a posição do elemento em relação ao topo da página.
                }, 1000);
            })

        });