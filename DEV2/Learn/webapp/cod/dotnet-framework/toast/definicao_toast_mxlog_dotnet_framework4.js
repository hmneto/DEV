function ResultRoteiroFailure(msg, tempo,titulo) {
    if (!tempo) {
        tempo = 800
    }

    if (!titulo) {
        titulo = 'Atenção'
    }

    $.pnotify({
        title: titulo,
        text: msg,
        history: false,
        hide: true,
        delay: tempo,
        type: 'error'
    });
};

function ResultRoteiroSuccess(msg, tempo, titulo) {
    
    if (!tempo) {
        tempo = 800
    }

    if (!titulo) {
        titulo = 'Atenção'
    }

    $.pnotify({
        title: titulo,
        text: msg,
        history: false,
        hide: true,
        delay: tempo,
        type: 'success'
    });
};
