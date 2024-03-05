window.onload =  function(){

    const config = {
        type: Phaser.AUTO,
        width: 900,
        height: 600,
        backgroundColor: "77ddf5",
        physics: {
            default: "arcade",
            arcade: {
                gravity:{y:200},  //gravidade 0 no eixo y (player não cai)
                debug: false,
            }
        },
        scene: [Scene00, Scene01, Scene02, SceneGameOver]
    }
    let game  = new Phaser.Game(config);
   
};