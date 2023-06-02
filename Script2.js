
$(function () {
    // pour tous les liens sur la page
    // je vais executer une fonction
    $('a').each(function () {

        // lorsque le lien est clique'
        $(this).click(function (e) {
            // afficher un message simple
            alert("Entrer de ce connecter");

            // empêcher le lien d'afficher un site
            // web dans ce cas facebook
            e.preventDefault();
        });
    })
});

