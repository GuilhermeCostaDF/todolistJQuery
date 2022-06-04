let index = 0;

$('button').on('click', function () {

    if($('#tarefa').val()){
        $('.tarefas').addClass('displayFlex');
    
        let novaTarefa = $(`
                    <div class="container-tarefa">
                        <div id="tarefa-info">
                            <label for="tarefaAdd${index}"><p>${$('#tarefa').val()}</p></label>
                        </div>
                            <div>
                                <button class="btnFeito">Feito</button>
                                <button id="btnExcluir">Excluir</button>
                            </div>
                    </div>                
                `)
    
        $('.tarefas').append(novaTarefa);
        $('#tarefa').val('');
        $('#tarefa').focus();
        index++;
    }

});

$(document).on('click', '#btnExcluir', function (e) {
    $(this).parent().parent().fadeToggle();
})

$(document).on('click', '.btnFeito', function (e) {
    $(this).parent().parent().toggleClass('feito');
    $(this).toggleClass('btnFeitoClicado');
})