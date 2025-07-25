
    const images = [
        "./asset/image/image1.png",
        "./asset/image/image2.webp",
        "./asset/image/image3.webp"
    ];

    const textes = [
        {
            p1: "Comme souvent, cette histoire commence dans une auberge...",
            p2: "Celle-ci est miteuse, inquiétante, perdue au fin fond du marais sans retour."
        },
        {
            p1: "La crypte se cachait au fond de la cave et d'inquiètant murmures sans echappait",
            p2: "Prêts à en découdre, les aventuriers fourbirent leurs armes et grimoires."
        },
        {
            p1: "La créature surgie des enfers se dressait devant les héros, dernier obstacle devant le trésor du nécromancien",
            p2: "Le combat allait être sans merci!"
        }
    ];

    let i = 0;

    function changeImage() {
        const image = document.getElementById("image");
        const resultat = document.getElementById("resultat");
        const para1 = document.getElementById("para1");
        const para2 = document.getElementById("para2");

        // Passer à l'élément suivant
        i++;

        // Si on dépasse la fin, on revient au début
        if (i >= images.length) {
            i = 0;
        }

        // Mettre à jour l'image
        image.src = images[i];

        // Mettre à jour les paragraphes
        para1.textContent = textes[i].p1;
        para2.textContent = textes[i].p2;

    }