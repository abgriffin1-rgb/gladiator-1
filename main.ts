namespace SpriteKind {
    export const play = SpriteKind.create()
    export const er = SpriteKind.create()
    export const killerperson = SpriteKind.create()
    export const enemy2 = SpriteKind.create()
    export const project = SpriteKind.create()
    export const player2 = SpriteKind.create()
    export const difficulty = SpriteKind.create()
    export const button1 = SpriteKind.create()
    export const button2 = SpriteKind.create()
    export const button3 = SpriteKind.create()
    export const button4back = SpriteKind.create()
    export const settings = SpriteKind.create()
    export const musiconone = SpriteKind.create()
    export const musicofftwo = SpriteKind.create()
    export const settingsbackbutton1 = SpriteKind.create()
    export const life1 = SpriteKind.create()
    export const life2 = SpriteKind.create()
    export const player2addonelife = SpriteKind.create()
    export const player2subbtractonelife = SpriteKind.create()
    export const player1subbtractonelife = SpriteKind.create()
    export const player1addonelife = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.killerperson, SpriteKind.Player, function (sprite, otherSprite) {
    if (canAttack == true && controller.A.isPressed()) {
        info.changeCountdownBy(-1)
    } else {
        sprites.destroyAllSpritesOfKind(SpriteKind.killerperson, effects.fire, 2000)
        info.changeLifeBy(-2)
        info.changeCountdownBy(-20)
        pause(1000)
    }
})
info.onScore(101, function () {
    myEnemy.follow(Gladiator, 35)
    myenemy2.follow(Gladiator, 45)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.difficulty, function (sprite5, otherSprite5) {
    scene.setBackgroundImage(img`
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffeeeeeeeee
        eeeeeeeeef7777777777777777777777777777777777feeeeeeeeeeeeeeeeeeef55555555555555555555555555555555555feeeeeeeeeeeeeeeef22222222222222222222222222222222feeeeeeeee
        eeeeeeeeef7777777777777777777777777777777777feeeeeeeeeeeeeeeeeeef55555555555555555555555555555555555feeeeeeeeeeeeeeeef22222222222222222222222222222222feeeeeeeee
        eeeeeeeeef7777777777777777777777777777777777feeeeeeeeeeeeeeeeeeef55555555555555555555555555555555555feeeeeeeeeeeeeeeef22222222222222222222222222222222feeeeeeeee
        eeeeeeeeef7777777777777777777777777777777777feeeeeeeeeeeeeeeeeeef55555555555555555555555555555555555feeeeeeeeeeeeeeeef22222222222222222222222222222222feeeeeeeee
        eeeeeeeeef7777ffff77fffff77ffff77f777f777777feeeeeeeeeeeeeeeeeeef555f555f5ff5fff55f5f5f5ff5ff5555555feeeeeeeeeeeeeeeef222f222f22fffff22fff22ffff222222feeeeeeeee
        eeeeeeeeef7777f77777f777f77f77777f777f777777feeeeeeeeeeeeeeeeeeef555ff55f5f55f55f5f5f5f5ff5ff5555555feeeeeeeeeeeeeeeef222f222f22f222f22f22f2f222f22222feeeeeeeee
        eeeeeeeeef7777f77777f777f77f77777f777f777777feeeeeeeeeeeeeeeeeeef555ff5ff5f55f55f5f5f5f5ff5ff5555555feeeeeeeeeeeeeeeef222f222f22f222f22f2f22f222f22222feeeeeeeee
        eeeeeeeeef7777fff777fffff777fff77fffff777777feeeeeeeeeeeeeeeeeeef555ff5ff5f55f55f5f5f5f5ff5ff5555555feeeeeeeeeeeeeeeef222f222f22f222f22ff222f222f22222feeeeeeeee
        eeeeeeeeef7777f77777f777f77777f777777f777777feeeeeeeeeeeeeeeeeeef555ff5ff5ff5f55f5f5f5f5ff5ff5555555feeeeeeeeeeeeeeeef222f222f22f222f22ff222f222f22222feeeeeeeee
        eeeeeeeeef7777f77777f777f77777f777777f777777feeeeeeeeeeeeeeeeeeef555ff5ff5f55f55f5f5f5f5ff5ff5555555feeeeeeeeeeeeeeeef222fffff22fffff22ff222f222f22222feeeeeeeee
        eeeeeeeeef7777f77777f777f77777f777777f777777feeeeeeeeeeeeeeeeeeef555f5fff5f55f55f5f5f5f5f5f5f5555555feeeeeeeeeeeeeeeef222f222f22f222f22f2f22f222f22222feeeeeeeee
        eeeeeeeeef7777ffff77f777f77ffff77fffff777777feeeeeeeeeeeeeeeeeeef555f555f5f55f55f5f5f5f5f5f5f5555555feeeeeeeeeeeeeeeef222f222f22f222f22f2f22f222f22222feeeeeeeee
        eeeeeeeeef7777777777777777777777777777777777feeeeeeeeeeeeeeeeeeef555f555f5ff5fff55f5fff5f555f5555555feeeeeeeeeeeeeeeef222f222f22f222f22f22f2f222f22222feeeeeeeee
        eeeeeeeeef7777777777777777777777777777777777feeeeeeeeeeeeeeeeeeef55555555555555555555555555555555555feeeeeeeeeeeeeeeef222f222f22f222f22f22f2f222f22222feeeeeeeee
        eeeeeeeeef7777777777777777777777777777777777feeeeeeeeeeeeeeeeeeef55555555555555555555555555555555555feeeeeeeeeeeeeeeef222f222f22f222f22f22f2ffff222222feeeeeeeee
        eeeeeeeeef7777777777777777777777777777777777feeeeeeeeeeeeeeeeeeef55555555555555555555555555555555555feeeeeeeeeeeeeeeef22222222222222222222222222222222feeeeeeeee
        eeeeeeeeeffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeef55555555555555555555555555555555555feeeeeeeeeeeeeeeef22222222222222222222222222222222feeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        `)
    easy1 = sprites.create(img`
        . . . . 6 6 6 6 6 6 6 . . . . 
        . . 6 6 7 7 7 7 7 7 7 6 6 . . 
        . 6 6 7 7 8 8 8 7 7 7 7 6 6 . 
        . 6 7 7 7 8 7 7 7 7 7 7 7 6 . 
        . c 7 7 7 8 8 8 8 7 7 7 7 c . 
        . c 9 7 7 8 7 7 7 7 7 7 9 c . 
        . c 9 9 7 8 8 8 8 8 7 9 9 c . 
        . c 6 6 9 9 9 9 9 9 9 6 6 c . 
        c c 6 6 6 6 6 6 6 6 6 6 6 c c 
        c d c c 6 6 6 6 6 6 6 c c d c 
        c d d d c c c c c c c d d d c 
        c c b d d d d d d d d d b c c 
        c c c c c b b b b b c c c c c 
        c c b b b b b b b b b b b c c 
        . c c b b b b b b b b b c c . 
        . . . c c c c c c c c c . . . 
        `, SpriteKind.button1)
    easy1.setPosition(35, 62)
    medium2 = sprites.create(img`
        . . . . 4 4 4 4 4 4 4 . . . . 
        . . 4 4 5 5 5 5 5 5 5 4 4 . . 
        . 4 4 5 5 5 4 5 4 5 5 5 4 4 . 
        . 4 5 5 5 5 4 5 4 5 5 5 5 4 . 
        . c 5 5 5 4 5 4 5 4 5 5 5 c . 
        . c e 5 5 4 5 4 5 4 5 5 e c . 
        . c e e 5 4 5 5 5 4 5 e e c . 
        . c 4 4 e e e e e e e 4 4 c . 
        c c 4 4 4 4 4 4 4 4 4 4 4 c c 
        c d c c 4 4 4 4 4 4 4 c c d c 
        c d d d c c c c c c c d d d c 
        c c b d d d d d d d d d b c c 
        c c c c c b b b b b c c c c c 
        c c b b b b b b b b b b b c c 
        . c c b b b b b b b b b c c . 
        . . . c c c c c c c c c . . . 
        `, SpriteKind.button2)
    medium2.setPosition(80, 62)
    hard3 = sprites.create(img`
        . . . . e e e e e e e . . . . 
        . . e e 2 2 2 2 2 2 2 e e . . 
        . e e 2 2 2 f 2 f 2 2 2 e e . 
        . e 2 2 2 f 2 2 2 f 2 2 2 e . 
        . c 2 2 f f f f f f f 2 2 c . 
        . c 4 f 2 2 2 2 2 2 2 f 4 c . 
        . c 4 4 2 2 2 2 2 2 2 4 4 c . 
        . c e e 4 4 4 4 4 4 4 e e c . 
        c c e e e e e e e e e e e c c 
        c d c c e e e e e e e c c d c 
        c d d d c c c c c c c d d d c 
        c c b d d d d d d d d d b c c 
        c c c c c b b b b b c c c c c 
        c c b b b b b b b b b b b c c 
        . c c b b b b b b b b b c c . 
        . . . c c c c c c c c c . . . 
        `, SpriteKind.button3)
    hard3.setPosition(125, 62)
    backbutton = sprites.create(img`
        ...................
        ...................
        ...................
        fffffffffffffffffff
        fffffffffffffffffff
        ff11ff111f111f1f1ff
        ff1f1f1f1f1fff1f1ff
        ff11ff111f1fff111ff
        ff1f1f1f1f1fff11fff
        ff1f1f1f1f1fff111ff
        ff1f1f1f1f1fff1f1ff
        ff11ff1f1f111f1f1ff
        fffffffffffffffffff
        fffffffffffffffffff
        ...................
        ...................
        `, SpriteKind.button4back)
    backbutton.setPosition(125, 100)
    difficulty1.setPosition(160, 160)
    Settings1.setPosition(160, 160)
    hard.setPosition(160, 160)
    easy.setPosition(160, 160)
    if (player2online == true) {
        gladiator_2.setPosition(23, 97)
    }
})
info.onScore(125, function () {
    info.startCountdown(30)
    bigboy = sprites.create(img`
        . . . . f f f f f f f f f . . . 
        . . . f 5 d 5 d 5 d 5 f 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 f . . 
        . . f b d d b d d d d d b f . . 
        . . f d d d b d b b d d d f . . 
        . f d d d b d d d d d d d d f . 
        . f d d d d b b b b d d d d f . 
        . f b b d b 2 e e 2 b d b b f . 
        . f b b e 1 2 4 4 2 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f d d d d f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e d d d d d d d d d d e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . f f f f b b f f f f . . . 
        `, SpriteKind.killerperson)
    bigboy.follow(Gladiator, 50)
    myEnemy.setPosition(160, 160)
    myEnemy.unfollow()
    myenemy2.setPosition(160, 160)
    myenemy2.unfollow()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Gladiator,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f d d d d f f . . . . 
        . . . f d d d f f d d d f . . . 
        . . f f f f f b b f f f f f . . 
        . . f f d b d b b d b d f f . . 
        . . f d b f b f f b f b d f . . 
        . . f f f b b d d b b f f f . . 
        . f f d f b f d d f b f d f f . 
        . f d d f f d d d d f d d d f . 
        . . f d d d d d d d d d d f . . 
        . . . f d d d d d d d d f . . . 
        . . d 4 f f f f f f f f 4 d . . 
        . . 4 d f d d d d d d f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f d d d d f f . . . . 
        . . . f d d d f f d d d f . . . 
        . . . f f f f b b f f f f . . . 
        . . f f d b d b b d b d f f . . 
        . . f d b f b b f f b f d f . . 
        . . f f f b f d d b b f f f . . 
        . . f d b f f d d b f d d f . . 
        . f f d f f d d d f d d d f f . 
        . f f d d d d d d d d d d f f . 
        . . . f d d d d d d d d f . . . 
        . . . d f f f f f f f f 4 d . . 
        . . . 4 f b b b b b d d d 4 . . 
        . . . d f f f f f f d d 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f d d d d f f . . . . 
        . . . f d d d f f d d d f . . . 
        . . f f f f f b b f f f f f . . 
        . . f f d b d b b d b d f f . . 
        . . f d b f b f f b f b d f . . 
        . . f f f b b d d b b f f f . . 
        . f f d f b f d d f b f d f f . 
        . f d d f f d d d d f d d d f . 
        . . f d d d d d d d d d d f . . 
        . . . f d d d d d d d d f . . . 
        . . d 4 f f f f f f f f 4 d . . 
        . . 4 d f b b b b b b f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f d d d d f f . . . . 
        . . . f d d d f f d d d f . . . 
        . . . f f f f b b f f f f . . . 
        . . f f d b d b b d b d f f . . 
        . . f d f b f f f b f b d f . . 
        . . f f f b b d d f b f f f . . 
        . . f d d f b d d f f b d f . . 
        . f f d d d f d d d f f d f f . 
        . f f d d d d d d d d d d f f . 
        . . . f d d d d d d d d f . . . 
        . . d 4 f f f f f f f f d . . . 
        . . 4 d d d b b b b b f 4 . . . 
        . . . 4 d d f f f f f f d . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.enemy2, SpriteKind.player2, function (sprite4, otherSprite4) {
    if (canattack4 == true && controller.player2.isPressed(ControllerButton.A)) {
        info.player2.changeScoreBy(1)
        myenemy2.setPosition(randint(5, 160), randint(5, 110))
    } else {
        info.player2.changeLifeBy(randint(0, -1))
        myenemy2.setPosition(randint(5, 160), randint(5, 110))
    }
})
sprites.onOverlap(SpriteKind.player2, SpriteKind.settingsbackbutton1, function (sprite10, otherSprite10) {
    scene.setBackgroundImage(img`
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffffffffff6666666666666
        66666666666666666ffffffffffffff66666fffff66666ffffffffffffffff66666ffffffffffffff66666fffffffff66666fffffffffffffffff666666666666666f2222222222222f6666666666666
        66666666666666666f222222222222f66666f222f66666f22222222222222f66666f222222222222f66666f2222222f66666f222222222222222f66666666666666f22222222222222f6666666666666
        66666666666666666f222222222222f66666f222f66666f22222222222222f66666f222222222222f66666f2222222f66666f222222222222222f66666666666666f22222222222222f6666666666666
        66666666666666666f222222222222f66666f222f66666f22222222222222f66666f222222222222f66666f2222222f66666f222222222222222f66666666666fff222222222222222f6666666666666
        66666666666666666f222ffffffffff66666f222f66666f222ffffffff222f66666f222222222222fff666fff222fff66666f222222222222222f6666666666f222222222222222222f6666666666666
        66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222fffffff222f66666f222f6666666f222222222222222f6666666666f222222222222222222f6666666666666
        66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222fffffff2222f66666666ff2222222222222222222f6666666666666
        66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f222222222222222222222f6666666666666
        66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f222222222222222222222f6666666666666
        66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f222222222222222222222f6666666666666
        66666666666666666f222f6666fffff66666f222f66666f222ffffffff222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f22222222fff2222222222f6666666666666
        66666666666666666f222f6666f222f66666f222f66666f22222222222222f66666f2222f66666f222f66666f222f6666666f2222fffffff2222f6666666f2222222f66f2222222222f6666666666666
        66666666666666666f222f6666f222f66666f222f66666f22222222222222f66666f2222f66666f222f66666f222f6666666f222222222222222f6666666f2222222f66f2222222222f6666666666666
        66666666666666666f222f6666f222f66666f222f66666f22222222222222f66666f2222f66666f222f66666f222f6666666f222222222222222f6666666f222222f666f2222222222f6666666666666
        66666666666666666f222ffffff222f66666f222f66666f222ffffffff222f66666f2222f66666f222f66666f222f6666666f222222222222222f6666666f22222ff666f2222222222f6666666666666
        66666666666666666f222222222222f66666f222fff666f222f666666f222f66666f2222fffffff2fff666fff222fff66666f222fffffffff222f6666666f2222f66666f2222222222f6666666666666
        66666666666666666f222222222222f66666f22222f666f222f666666f222f66666f222222222222f66666f2222222f66666f222f6666666f222f6666666f2222f66666f2222222222f6666666666666
        66666666666666666f222222222222f66666f22222f666f222f666666f222f66666f222222222222f66666f2222222f66666f222f6666666f222f6666666fffff666666f2222222222f6666666666666
        66666666666666666f222222222222f66666f22222f666f222f666666f222f66666f222222222222f66666f2222222f66666f222f6666666f222f666666666666666666f2222222222f6666666666666
        66666666666666666ffffffffffffff66666fffffff666fffff666666fffff66666ffffffffffffff66666fffffffff66666fffff6666666fffff666666666666666666f2222222222f6666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
        6666666666666666666666666666666666666666666666666666666666ffffffffffffffffff66666ffffffffffffffff6666ffffffffffffffff666666666666666666f2222222222f6666666666666
        6666666666666666666666666666666666666666666666666666666666f2222222222222222f66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        6666666666666666666666666666666666666666666666666666666666f2222222222222222f66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        6666666666666666666666666666666666666666666666666666666666f2222222222222222f66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        6666666666666666666666666666666666666666666666666666666666ffffffff222fffffff66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222ffffff2222f6666f2222ffffff2222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f6666f2222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f6666f2222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222ffffff2222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222fffff22222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f666f2222f6666666666666666666f2222222222f6666666666666
        666666666f666f666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f666f2222f6666666666666666666f2222222222ffffffffffff66
        66666666f66666f66666666666666666666666666666666666666666666666666f222f66666666666f2222ffffff2222f6666f2222f666fff22fff666666ffffffffffff22222222222222222222ff66
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f22222222222222f6666f2222f66666f2222f666666f2222222222222222222222222222222f666
        6666666666fff6666666ff6fff6fff666ff6f666f6fff6fff6ff6666666666666f222f66666666666f22222222222222f6666f2222f666666f222f666666f2222222222222222222222222222222f666
        6666666666f6f6666666f66f6f6f6f666f66f666f6f6f6f6f6f6f666666666666f222f66666666666f22222222222222f6666f2222f666666f222f666666f2222222222222222222222222222222f666
        6666666666fff6666666ff6f6f6ff66666f6f6f6f6f6f6ff66f6f666666666666fffff66666666666ffffffffffffffff6666ffffff666666fffff666666fff222222222222222222222222222fff666
        6666666666f6f6666666f66fff6f6f666ff6fffff6fff6f6f6ff6666666666666666666666666666666666666666666666666666666666666666666666666ff22222222222222222222fffffffff6666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222222222222222222f666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222222222222222222f666666666666
        66666666666666666666fff6fff6fff6ff6f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f22222222222fff2222222f666666666666
        66666666666666666666f6f66f666f66f66ff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffff2222222ff6ff222222f666666666666
        66666666666666666666fff66f666f66f66f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222ff666ffff2fff666666666666
        6666666666f66f666666f6f66f666f66ff6f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222ff666ffffff66666666666666
        666666666f6666f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2f222ff666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffff6666666666666666666666666
        66666666666f6f666666ff6fff6fff666f666fff6f666f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666f6666666f66f6f6f6f666ff66f6f6f666f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666f6666666ff6f6f6ff6666f6f6f6f6f6f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666666666f6f666666f66fff6f6f666ff66fff6fffff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666666666666666666fff6fff6fff6ff6f6f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666666666666666666f6f66f666f66f66ff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666666666666666666fff66f666f66f66f6f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666666666666666666f6f66f666f66ff6f6f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        `)
    easy.setPosition(85, 90)
    hard.setPosition(130, 90)
    Settings1.setPosition(35, 38)
    difficulty1.setPosition(35, 90)
    Gladiator.setPosition(119, 29)
    sprites.destroy(musicon)
    sprites.destroy(musicoff)
    sprites.destroy(player1_life1)
    sprites.destroy(player1_life12)
    sprites.destroy(player2_life1)
    sprites.destroy(player2_life12)
    sprites.destroy(player1life)
    sprites.destroy(player2life)
    sprites.destroy(settingsbackbutton)
    if (player2online == true) {
        gladiator_2.setPosition(120, 20)
    }
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (can_attack_3 == true) {
        projectile2 = sprites.create(assets.image`trident`, SpriteKind.project)
        projectile2.setPosition(gladiator_2.x, gladiator_2.y)
        projectile2.setVelocity(gladiator_2.vx * 2, gladiator_2.vy * 2)
    }
    if (projectile2.vx > 1) {
        animation.runImageAnimation(
        projectile2,
        [img`
            ..............................
            ..............................
            ............................6.
            ........................6666..
            .......................6......
            ......................6.......
            ......................6.......
            ....1fee11111111111116e.....6.
            6666eee666666666666666666666..
            ....1ee111111111111116e.....6.
            ......................6.......
            ......................6.......
            .......................6......
            ........................6666..
            ............................6.
            ..............................
            `,img`
            ..............................
            ..............................
            ............................6.
            ........................6666..
            .......................6......
            ......................6.......
            ......................6.......
            ....1fee11111111111116e.....6.
            6666eee666666666666666666666..
            ....1ee111111111111116e.....6.
            ......................6.......
            ......................6.......
            .......................6......
            ........................6666..
            ............................6.
            ..............................
            `],
        1000,
        true
        )
    } else if (projectile2.vx < 1) {
        animation.runImageAnimation(
        projectile2,
        [img`
            ..............................
            .6............................
            ..6666........................
            ......6.......................
            .......6......................
            .......6......................
            .6.....e611111111111111ee1....
            ..666666666666666666666eee6666
            .6.....e61111111111111eef1....
            .......6......................
            .......6......................
            ......6.......................
            ..6666........................
            .6............................
            ..............................
            ..............................
            `,img`
            ..............................
            .6............................
            ..6666........................
            ......6.......................
            .......6......................
            .......6......................
            .6.....e611111111111111ee1....
            ..666666666666666666666eee6666
            .6.....e61111111111111eef1....
            .......6......................
            .......6......................
            ......6.......................
            ..6666........................
            .6............................
            ..............................
            ..............................
            `],
        1000,
        true
        )
    } else if (projectile2.vy < 1) {
        animation.runImageAnimation(
        projectile2,
        [img`
            .......6........
            .......6........
            .......6........
            .......6........
            ......1e1.......
            ......eef.......
            ......eee.......
            ......16e.......
            ......161.......
            ......161.......
            ......161.......
            ......161.......
            ......161.......
            ......161.......
            ......161.......
            ......161.......
            ......161.......
            ......161.......
            ......161.......
            ......161.......
            ......161.......
            ......666.......
            ....66e6e66.....
            ...6...6...6....
            ..6....6....6...
            ..6....6....6...
            ..6....6....6...
            ..6....6....6...
            .6....6.6....6..
            ................
            `,img`
            .......6........
            .......6........
            .......6........
            .......6........
            ......1e1.......
            ......eef.......
            ......eee.......
            ......16e.......
            ......161.......
            ......161.......
            ......161.......
            ......161.......
            ......161.......
            ......161.......
            ......161.......
            ......161.......
            ......161.......
            ......161.......
            ......161.......
            ......161.......
            ......161.......
            ......666.......
            ....66e6e66.....
            ...6...6...6....
            ..6....6....6...
            ..6....6....6...
            ..6....6....6...
            ..6....6....6...
            .6....6.6....6..
            ................
            `],
        1000,
        true
        )
    } else {
        animation.runImageAnimation(
        projectile2,
        [img`
            ................
            ..6....6.6....6.
            ...6....6....6..
            ...6....6....6..
            ...6....6....6..
            ...6....6....6..
            ....6...6...6...
            .....66e6e66....
            .......666......
            .......161......
            .......161......
            .......161......
            .......161......
            .......161......
            .......161......
            .......161......
            .......161......
            .......161......
            .......161......
            .......161......
            .......161......
            .......161......
            .......e61......
            .......eee......
            .......fee......
            .......1e1......
            ........6.......
            ........6.......
            ........6.......
            ........6.......
            `,img`
            ................
            ..6....6.6....6.
            ...6....6....6..
            ...6....6....6..
            ...6....6....6..
            ...6....6....6..
            ....6...6...6...
            .....66e6e66....
            .......666......
            .......161......
            .......161......
            .......161......
            .......161......
            .......161......
            .......161......
            .......161......
            .......161......
            .......161......
            .......161......
            .......161......
            .......161......
            .......161......
            .......e61......
            .......eee......
            .......fee......
            .......1e1......
            ........6.......
            ........6.......
            ........6.......
            ........6.......
            `],
        1000,
        true
        )
    }
    can_attack_3 = false
    pause(1000)
    sprites.destroy(projectile2)
})
sprites.onOverlap(SpriteKind.player2, SpriteKind.settings, function (sprite13, otherSprite13) {
    info.setLife(3)
    if (player2online == true) {
        info.player2.setLife(3)
        gladiator_2.setPosition(73, 75)
    }
    scene.setBackgroundImage(assets.image`settings1`)
    Gladiator.setPosition(73, 74)
    musicon = sprites.create(assets.image`on1`, SpriteKind.musiconone)
    musicoff = sprites.create(assets.image`off1`, SpriteKind.musicofftwo)
    settingsbackbutton = sprites.create(img`
        ...................
        ...................
        ...................
        fffffffffffffffffff
        fffffffffffffffffff
        ff11ff111f111f1f1ff
        ff1f1f1f1f1fff1f1ff
        ff11ff111f1fff111ff
        ff1f1f1f1f1fff11fff
        ff1f1f1f1f1fff111ff
        ff1f1f1f1f1fff1f1ff
        ff11ff1f1f111f1f1ff
        fffffffffffffffffff
        fffffffffffffffffff
        ...................
        ...................
        `, SpriteKind.settingsbackbutton1)
    player1life = sprites.create(img`
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ......222...222........222...222........222...222...........
        .....2bbb2.2bbb2......2bbb2.2bbb2......2bbb2.2bbb2..........
        ....2bdddb2bddcb2....2bdddb2bddcb2....2bdddb2bddcb2.........
        ...2bdddddbddbccb2..2bdddddbddbccb2..2bdddddbddbccb2........
        ...2bdddddddbbccb2..2bdddddddbbccb2..2bdddddddbbccb2........
        ...2bddddddbbcccb2..2bddddddbbcccb2..2bddddddbbcccb2........
        ....2bddddbbcccb2....2bddddbbcccb2....2bddddbbcccb2.........
        .....2bbdbbcccb2......2bbdbbcccb2......2bbdbbcccb2..........
        ......2bcccccb2........2bcccccb2........2bcccccb2...........
        .......2bcccb2..........2bcccb2..........2bcccb2............
        ........2bcb2............2bcb2............2bcb2.............
        .........2b2..............2b2..............2b2..............
        ..........2................2................2...............
        ............................................................
        ............................................................
        ............................................................
        `, SpriteKind.life1)
    player1life.setPosition(128, 38)
    player2life = sprites.create(img`
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ......222...222........222...222........222...222...........
        .....2bbb2.2bbb2......2bbb2.2bbb2......2bbb2.2bbb2..........
        ....2bdddb2bddcb2....2bdddb2bddcb2....2bdddb2bddcb2.........
        ...2bdddddbddbccb2..2bdddddbddbccb2..2bdddddbddbccb2........
        ...2bdddddddbbccb2..2bdddddddbbccb2..2bdddddddbbccb2........
        ...2bddddddbbcccb2..2bddddddbbcccb2..2bddddddbbcccb2........
        ....2bddddbbcccb2....2bddddbbcccb2....2bddddbbcccb2.........
        .....2bbdbbcccb2......2bbdbbcccb2......2bbdbbcccb2..........
        ......2bcccccb2........2bcccccb2........2bcccccb2...........
        .......2bcccb2..........2bcccb2..........2bcccb2............
        ........2bcb2............2bcb2............2bcb2.............
        .........2b2..............2b2..............2b2..............
        ..........2................2................2...............
        ............................................................
        ............................................................
        ............................................................
        `, SpriteKind.life2)
    player2_life12 = sprites.create(assets.image`p2-1`, SpriteKind.player2addonelife)
    player2_life1 = sprites.create(assets.image`p2--1`, SpriteKind.player2subbtractonelife)
    player1_life1 = sprites.create(assets.image`p1--2`, SpriteKind.player1subbtractonelife)
    player1_life12 = sprites.create(assets.image`p1--0`, SpriteKind.player1addonelife)
    player1_life1.setPosition(155, 64)
    player1_life12.setPosition(155, 81)
    player2_life1.setPosition(155, 98)
    player2_life12.setPosition(155, 115)
    player2life.setPosition(128, 55)
    settingsbackbutton.setPosition(80, 100)
    musicon.setPosition(25, 55)
    musicoff.setPosition(25, 75)
    hard.setPosition(160, 160)
    easy.setPosition(160, 160)
    difficulty1.setPosition(160, 160)
    Settings1.setPosition(160, 160)
    if (musicon123 == true) {
        animation.runImageAnimation(
        musicon,
        [img`
            f f f f f f f f f f f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 f f f f f f f f f f f f 5 f 
            f 5 f 5 5 5 5 f 5 5 5 5 5 f 5 f 
            f 5 f 5 f f 5 f 5 f f f 5 f 5 f 
            f 5 f 5 f f 5 f 5 f f f 5 f 5 f 
            f 5 f 5 f f 5 f 5 f f f 5 f 5 f 
            f 5 f 5 f f 5 f 5 f f f 5 f 5 f 
            f 5 f 5 f f 5 f 5 f f f 5 f 5 f 
            f 5 f 5 f f 5 f 5 f f f 5 f 5 f 
            f 5 f 5 f f 5 f 5 f f f 5 f 5 f 
            f 5 f 5 f f 5 f 5 f f f 5 f 5 f 
            f 5 f 5 5 5 5 f 5 f f f 5 f 5 f 
            f 5 f f f f f f f f f f f f 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f f f f f f f f f f f f f f f f 
            `],
        500,
        true
        )
    } else if (musicon123 == false) {
        animation.runImageAnimation(
        musicoff,
        [img`
            f f f f f f f f f f f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 f f f f f f f f f f f f 5 f 
            f 5 f 5 5 5 f 5 5 5 5 5 5 f 5 f 
            f 5 f 5 f 5 f 5 f f 5 f f f 5 f 
            f 5 f 5 f 5 f 5 f f 5 f f f 5 f 
            f 5 f 5 f 5 f 5 5 f 5 5 f f 5 f 
            f 5 f 5 f 5 f 5 f f 5 f f f 5 f 
            f 5 f 5 f 5 f 5 f f 5 f f f 5 f 
            f 5 f 5 f 5 f 5 f f 5 f f f 5 f 
            f 5 f 5 f 5 f 5 f f 5 f f f 5 f 
            f 5 f 5 f 5 f 5 f f 5 f f f 5 f 
            f 5 f 5 5 5 f 5 f f 5 f f f 5 f 
            f 5 f f f f f f f f f f f f 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f f f f f f f f f f f f f f f f 
            `],
        500,
        true
        )
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Can_attack_2 == true) {
        projectile = sprites.create(assets.image`trident`, SpriteKind.Projectile)
        projectile.setPosition(Gladiator.x, Gladiator.y)
        projectile.setVelocity(Gladiator.vx * 2, Gladiator.vy * 2)
        if (projectile.vx > 1) {
            animation.runImageAnimation(
            projectile,
            [img`
                ..............................
                ..............................
                ............................6.
                ........................6666..
                .......................6......
                ......................6.......
                ......................6.......
                ....1fee11111111111116e.....6.
                6666eee666666666666666666666..
                ....1ee111111111111116e.....6.
                ......................6.......
                ......................6.......
                .......................6......
                ........................6666..
                ............................6.
                ..............................
                `,img`
                ..............................
                ..............................
                ............................6.
                ........................6666..
                .......................6......
                ......................6.......
                ......................6.......
                ....1fee11111111111116e.....6.
                6666eee666666666666666666666..
                ....1ee111111111111116e.....6.
                ......................6.......
                ......................6.......
                .......................6......
                ........................6666..
                ............................6.
                ..............................
                `],
            1000,
            true
            )
        } else if (projectile.vx < 1) {
            animation.runImageAnimation(
            projectile,
            [img`
                ..............................
                .6............................
                ..6666........................
                ......6.......................
                .......6......................
                .......6......................
                .6.....e611111111111111ee1....
                ..666666666666666666666eee6666
                .6.....e61111111111111eef1....
                .......6......................
                .......6......................
                ......6.......................
                ..6666........................
                .6............................
                ..............................
                ..............................
                `,img`
                ..............................
                .6............................
                ..6666........................
                ......6.......................
                .......6......................
                .......6......................
                .6.....e611111111111111ee1....
                ..666666666666666666666eee6666
                .6.....e61111111111111eef1....
                .......6......................
                .......6......................
                ......6.......................
                ..6666........................
                .6............................
                ..............................
                ..............................
                `],
            1000,
            true
            )
        } else if (projectile.vy < 1) {
            animation.runImageAnimation(
            projectile,
            [img`
                .......6........
                .......6........
                .......6........
                .......6........
                ......1e1.......
                ......eef.......
                ......eee.......
                ......16e.......
                ......161.......
                ......161.......
                ......161.......
                ......161.......
                ......161.......
                ......161.......
                ......161.......
                ......161.......
                ......161.......
                ......161.......
                ......161.......
                ......161.......
                ......161.......
                ......666.......
                ....66e6e66.....
                ...6...6...6....
                ..6....6....6...
                ..6....6....6...
                ..6....6....6...
                ..6....6....6...
                .6....6.6....6..
                ................
                `,img`
                .......6........
                .......6........
                .......6........
                .......6........
                ......1e1.......
                ......eef.......
                ......eee.......
                ......16e.......
                ......161.......
                ......161.......
                ......161.......
                ......161.......
                ......161.......
                ......161.......
                ......161.......
                ......161.......
                ......161.......
                ......161.......
                ......161.......
                ......161.......
                ......161.......
                ......666.......
                ....66e6e66.....
                ...6...6...6....
                ..6....6....6...
                ..6....6....6...
                ..6....6....6...
                ..6....6....6...
                .6....6.6....6..
                ................
                `],
            1000,
            true
            )
        } else {
            animation.runImageAnimation(
            projectile,
            [img`
                ................
                ..6....6.6....6.
                ...6....6....6..
                ...6....6....6..
                ...6....6....6..
                ...6....6....6..
                ....6...6...6...
                .....66e6e66....
                .......666......
                .......161......
                .......161......
                .......161......
                .......161......
                .......161......
                .......161......
                .......161......
                .......161......
                .......161......
                .......161......
                .......161......
                .......161......
                .......161......
                .......e61......
                .......eee......
                .......fee......
                .......1e1......
                ........6.......
                ........6.......
                ........6.......
                ........6.......
                `,img`
                ................
                ..6....6.6....6.
                ...6....6....6..
                ...6....6....6..
                ...6....6....6..
                ...6....6....6..
                ....6...6...6...
                .....66e6e66....
                .......666......
                .......161......
                .......161......
                .......161......
                .......161......
                .......161......
                .......161......
                .......161......
                .......161......
                .......161......
                .......161......
                .......161......
                .......161......
                .......161......
                .......e61......
                .......eee......
                .......fee......
                .......1e1......
                ........6.......
                ........6.......
                ........6.......
                ........6.......
                `],
            1000,
            true
            )
        }
        Can_attack_2 = false
    }
    pause(1000)
    sprites.destroy(projectile)
})
sprites.onOverlap(SpriteKind.project, SpriteKind.enemy2, function (sprite22, otherSprite22) {
    info.player2.changeScoreBy(1)
    myenemy2.setPosition(170, randint(5, 110))
    sprites.destroy(projectile, effects.fire, 500)
})
info.onScore(51, function () {
    myEnemy.follow(Gladiator, 30)
    myenemy2.follow(Gladiator, 40)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite33, otherSprite33) {
    easy.setPosition(160, 160)
    hard.setPosition(160, 160)
    difficulty1.setPosition(160, 160)
    Settings1.setPosition(160, 160)
    scene.setBackgroundImage(img`
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        deddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddeddddddddddddd
        dddddddddddddddddddddeddddddddddddddddddddeddddddddddedddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddeddddddddddeddddddddedddddddddddddddddddddddddddddddd
        dddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddeddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddedddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddeddddddedddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeddddddddddddddddddddd
        dddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddedddddedddddddddddddedddddddddddddddddddddddddddeeddddddddddedddddddd
        dddedddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddedddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddeddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddd
        ddddddddedddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddeddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddedddddddddedddddeddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddd
        dddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddeddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddedddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddeddddddedddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddeddddddddddddddeddddeddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddeddddddddddddddddddddddddddddddddddddddddddddeddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddeddddddddddddddddedddddddddddddddddddddddddddddd
        ddddedddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddedddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddeddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddd
        dddddddddddddddddedddddddddddddddddddddddddddddddddddeddddddddddddddddddddddedddddddddddeddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddd
        ddddedddddddddddddddddddddddddddedddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddedddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddeddddedddddddddddddddddddddddddddddddddddddddddeddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddeddeddddddddddd
        dddddddddddddddddddddddddddedddddddddeddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddeddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddedddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddeddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddeddddddddddeddddd
        dddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddd
        ddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddd
        dddddddddddddddddddddddeddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddeddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddd
        ddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddedddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddd
        ddddddddddddddddddddddddddddddddddddddddedddddddddddddedddddddddedddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddedddddd
        dddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddedddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddedddddddddddddeddddddddddddddd
        ddddddddddddddddddeddddddddeddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddedddddddddddddddd
        ddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddd
        ddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddeddddddddddddddddddddeddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddeddddddddddddddddddeddddddddddddddddddddddddddddddddddddeddddddedddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddedddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddededddddddddddddddddddddddddddddddddddddddddedddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddd
        ddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddedddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddeddddeddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddeddddddddddddddddddeddddddddddddeddddddddddddddddeddddddddddddddddddddddddddddddedddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        `)
    myEnemy.setPosition(123, 109)
    myEnemy.follow(Gladiator, 20)
    myenemy2.setPosition(129, 19)
    myenemy2.follow(Gladiator, 30)
})
sprites.onOverlap(SpriteKind.player2, SpriteKind.player1addonelife, function (sprite32, otherSprite32) {
    if (info.life() < 5) {
        info.changeLifeBy(1)
        pause(1000)
    }
    if (info.life() == 1) {
        animation.runImageAnimation(
        player1life,
        [img`
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ......222...222.............................................
            .....2bbb2.2bbb2............................................
            ....2bdddb2bddcb2...........................................
            ...2bdddddbddbccb2..........................................
            ...2bdddddddbbccb2..........................................
            ...2bddddddbbcccb2..........................................
            ....2bddddbbcccb2...........................................
            .....2bbdbbcccb2............................................
            ......2bcccccb2.............................................
            .......2bcccb2..............................................
            ........2bcb2...............................................
            .........2b2................................................
            ..........2.................................................
            ............................................................
            ............................................................
            ............................................................
            `],
        500,
        true
        )
    } else if (info.life() == 2) {
        animation.runImageAnimation(
        player1life,
        [img`
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ......222...222........222...222............................
            .....2bbb2.2bbb2......2bbb2.2bbb2...........................
            ....2bdddb2bddcb2....2bdddb2bddcb2..........................
            ...2bdddddbddbccb2..2bdddddbddbccb2.........................
            ...2bdddddddbbccb2..2bdddddddbbccb2.........................
            ...2bddddddbbcccb2..2bddddddbbcccb2.........................
            ....2bddddbbcccb2....2bddddbbcccb2..........................
            .....2bbdbbcccb2......2bbdbbcccb2...........................
            ......2bcccccb2........2bcccccb2............................
            .......2bcccb2..........2bcccb2.............................
            ........2bcb2............2bcb2..............................
            .........2b2..............2b2...............................
            ..........2................2................................
            ............................................................
            ............................................................
            ............................................................
            `],
        500,
        true
        )
    } else if (info.life() == 3) {
        animation.runImageAnimation(
        player1life,
        [img`
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ......222...222........222...222........222...222...........
            .....2bbb2.2bbb2......2bbb2.2bbb2......2bbb2.2bbb2..........
            ....2bdddb2bddcb2....2bdddb2bddcb2....2bdddb2bddcb2.........
            ...2bdddddbddbccb2..2bdddddbddbccb2..2bdddddbddbccb2........
            ...2bdddddddbbccb2..2bdddddddbbccb2..2bdddddddbbccb2........
            ...2bddddddbbcccb2..2bddddddbbcccb2..2bddddddbbcccb2........
            ....2bddddbbcccb2....2bddddbbcccb2....2bddddbbcccb2.........
            .....2bbdbbcccb2......2bbdbbcccb2......2bbdbbcccb2..........
            ......2bcccccb2........2bcccccb2........2bcccccb2...........
            .......2bcccb2..........2bcccb2..........2bcccb2............
            ........2bcb2............2bcb2............2bcb2.............
            .........2b2..............2b2..............2b2..............
            ..........2................2................2...............
            ............................................................
            ............................................................
            ............................................................
            `],
        500,
        true
        )
    } else if (info.life() == 4) {
        animation.runImageAnimation(
        player1life,
        [img`
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ...222...222......222...222......222...222......222...222...
            ..2bbb2.2bbb2....2bbb2.2bbb2....2bbb2.2bbb2....2bbb2.2bbb2..
            .2bdddb2bddcb2..2bdddb2bddcb2..2bdddb2bddcb2..2bdddb2bddcb2.
            2bdddddbddbccb22bdddddbddbccb22bdddddbddbccb22bdddddbddbccb2
            2bdddddddbbccb22bdddddddbbccb22bdddddddbbccb22bdddddddbbccb2
            2bddddddbbcccb22bddddddbbcccb22bddddddbbcccb22bddddddbbcccb2
            .2bddddbbcccb2..2bddddbbcccb2..2bddddbbcccb2..2bddddbbcccb2.
            ..2bbdbbcccb2....2bbdbbcccb2....2bbdbbcccb2....2bbdbbcccb2..
            ...2bcccccb2......2bcccccb2......2bcccccb2......2bcccccb2...
            ....2bcccb2........2bcccb2........2bcccb2........2bcccb2....
            .....2bcb2..........2bcb2..........2bcb2..........2bcb2.....
            ......2b2............2b2............2b2............2b2......
            .......2..............2..............2..............2.......
            ............................................................
            ............................................................
            ............................................................
            `],
        500,
        true
        )
    } else if (info.life() == 5) {
        animation.runImageAnimation(
        player1life,
        [img`
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ..222..22.....222.222.....22..222....222..222...222..222....
            .2bbb22bb2...2bbb2bbb2...2bb22bbb2..2bbb22bbb2.2bbb22bbb2...
            2bdddbbddb2.2bdddbddcb2.2bddbbddcb2.2dddbbddcb22dddbbddcb2..
            bddddddbbcb2bdddddbbccb2bdddddbbccb2bdddddbbcc2bdddddbbcc2..
            bdddddbbccb2bdddddbcccb2bddddbbcccb2bddddbbccc2bddddbbccc2..
            2bddddbccb2.2bddddcccb2.2bdddbcccb2.2ddddbcccb22ddddbcccb2..
            .2bbdbccc2...2bbdbccb2...2bbbcccb2..2bbdbcccb2.2bbdbcccb2...
            ..22bccb2.....22bcb2......22ccb2.....22bccb2....22bccb2.....
            ....2bb2........2b2........2bb2........2bb2.......2bb2......
            .....22..........2..........22..........22.........22.......
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            `],
        500,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.killerperson, SpriteKind.player2, function (sprite16, otherSprite16) {
    if (player2online == true) {
        if (canattack4 == true && controller.player2.isPressed(ControllerButton.A)) {
            info.changeCountdownBy(-1)
        } else {
            sprites.destroyAllSpritesOfKind(SpriteKind.killerperson, effects.fire, 2000)
            info.player2.changeLifeBy(-2)
            info.changeCountdownBy(-20)
            pause(1000)
        }
    }
})
sprites.onOverlap(SpriteKind.player2, SpriteKind.musiconone, function (sprite3, otherSprite3) {
    if (musicon123 == false) {
        music.setVolume(128)
        musicon123 = true
        animation.stopAnimation(animation.AnimationTypes.All, musicoff)
        animation.runImageAnimation(
        musicoff,
        [img`
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f 1 1 1 f 1 1 1 1 1 1 f f f 
            f f f 1 f 1 f 1 f f 1 f f f f f 
            f f f 1 f 1 f 1 f f 1 f f f f f 
            f f f 1 f 1 f 1 1 f 1 1 f f f f 
            f f f 1 f 1 f 1 f f 1 f f f f f 
            f f f 1 f 1 f 1 f f 1 f f f f f 
            f f f 1 f 1 f 1 f f 1 f f f f f 
            f f f 1 f 1 f 1 f f 1 f f f f f 
            f f f 1 f 1 f 1 f f 1 f f f f f 
            f f f 1 1 1 f 1 f f 1 f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            `],
        500,
        true
        )
        animation.runImageAnimation(
        musicon,
        [img`
            f f f f f f f f f f f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 f f f f f f f f f f f f 5 f 
            f 5 f 5 5 5 5 f 5 5 5 5 5 f 5 f 
            f 5 f 5 f f 5 f 5 f f f 5 f 5 f 
            f 5 f 5 f f 5 f 5 f f f 5 f 5 f 
            f 5 f 5 f f 5 f 5 f f f 5 f 5 f 
            f 5 f 5 f f 5 f 5 f f f 5 f 5 f 
            f 5 f 5 f f 5 f 5 f f f 5 f 5 f 
            f 5 f 5 f f 5 f 5 f f f 5 f 5 f 
            f 5 f 5 f f 5 f 5 f f f 5 f 5 f 
            f 5 f 5 f f 5 f 5 f f f 5 f 5 f 
            f 5 f 5 5 5 5 f 5 f f f 5 f 5 f 
            f 5 f f f f f f f f f f f f 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f f f f f f f f f f f f f f f f 
            `],
        500,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.player2, SpriteKind.button2, function (sprite24, otherSprite24) {
    if (player2online == true) {
        controller.player2.moveSprite(gladiator_2, 40, 40)
        gladiator_2.setPosition(80, 100)
        Gladiator.setPosition(50, 100)
        game.splash("Medium")
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (canAttack == true) {
        animation.runImageAnimation(
        Gladiator,
        [img`
            ........................
            .....ffff...............
            ...fffbbfff.............
            ..fffbbbbfff............
            .fffdddbbdfff...........
            .ffdbbbbbbddf...........
            .fdbffffffbdf...........
            .ffffddddffdf...........
            ffdfbf44fbfdff..........
            fdd41fddf14ddf..........
            fffffdddddddf...........
            fddddf444ddfff..........
            fbbbbfbbbbf4df..........
            fbbbbfbbbbfd4f..........
            .fccfbb5b4f44f..........
            ..ffffffffffff..........
            ....ff..ff..............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ......ffff..............
            ....fffbbfff............
            ...fffbbbbfff...........
            ..fff1111b1fff..........
            ..ff1bbbbbb11f..........
            ..f1bffffffb1f..........
            ..ffff1111ffff..........
            .ff1f1f44f1f1ff.........
            .f1141fddf1411f.........
            fdf11ddddd41fff.........
            fbff114441dd41f.........
            fbf4fbbbb1dd1f..........
            fcfffbbccc11f...........
            .ff.f4bcdc41f...........
            ....ffcddcff............
            .....cddcff.............
            ....cddc................
            ....cdc.................
            ....cc..................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            .......ff...............
            .....ffbbff.............
            ...fffbbbbfff...........
            ..fffbbbbbbfff..........
            ..fffbbbbbbfff..........
            ..fdddddddbddff.........
            .ffddbbbbbbbdff.........
            .ffffbbdddfffff.........
            fdfdfdf44fbfdff.........
            fbfd41fddf14df..........
            fbffd4dddd4dfdf.........
            fcfdfbbbbbf4df..........
            .ffdf4b55bf4df..........
            ...fffffffdddf..........
            .....ffffddddf..........
            .........fddf...........
            ........fcccf...........
            ........cc1cc...........
            .........c1c............
            .........c1c............
            .........c1c............
            .........c1c............
            `,img`
            ......ffff..............
            ....fffbbfff............
            ...fffbbbbfff...........
            ..fffddddddfff..........
            ..ffdbbbbbbddf..........
            ..fdbfffbbbbdf..........
            ..ffffddddffff......ccc.
            .ffdfbf44fbfdff....cddc.
            .ffddbf44fbfdff...cddc..
            .fdd4dddddd4ddffccddc...
            fdfddddddd4ddffdcddc....
            fbffdd4444dd4fddccc.....
            fbf4fbbbbbbf1ddddf......
            fcf.fbbbbbbf44ddf.......
            .ff.f4b55b4fffff........
            ....ffffffff............
            .....ff..ff.............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        100,
        false
        )
        pause(3000)
    }
    canAttack = false
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.player2, function (sprite11, otherSprite11) {
    if (player2online == true) {
        if (canAttack == true && controller.A.isPressed()) {
            info.player2.changeLifeBy(-1)
            pause(1000)
        }
        if (canattack4 == true && controller.player2.isPressed(ControllerButton.A)) {
            info.changeLifeBy(-1)
            pause(1000)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.settings, function (sprite17, otherSprite17) {
    info.setLife(3)
    if (player2online == true) {
        info.player2.setLife(3)
        gladiator_2.setPosition(73, 75)
    }
    scene.setBackgroundImage(assets.image`settings1`)
    Gladiator.setPosition(73, 74)
    musicon = sprites.create(assets.image`on1`, SpriteKind.musiconone)
    musicoff = sprites.create(assets.image`off1`, SpriteKind.musicofftwo)
    settingsbackbutton = sprites.create(img`
        ...................
        ...................
        ...................
        fffffffffffffffffff
        fffffffffffffffffff
        ff11ff111f111f1f1ff
        ff1f1f1f1f1fff1f1ff
        ff11ff111f1fff111ff
        ff1f1f1f1f1fff11fff
        ff1f1f1f1f1fff111ff
        ff1f1f1f1f1fff1f1ff
        ff11ff1f1f111f1f1ff
        fffffffffffffffffff
        fffffffffffffffffff
        ...................
        ...................
        `, SpriteKind.settingsbackbutton1)
    player1life = sprites.create(img`
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ......222...222........222...222........222...222...........
        .....2bbb2.2bbb2......2bbb2.2bbb2......2bbb2.2bbb2..........
        ....2bdddb2bddcb2....2bdddb2bddcb2....2bdddb2bddcb2.........
        ...2bdddddbddbccb2..2bdddddbddbccb2..2bdddddbddbccb2........
        ...2bdddddddbbccb2..2bdddddddbbccb2..2bdddddddbbccb2........
        ...2bddddddbbcccb2..2bddddddbbcccb2..2bddddddbbcccb2........
        ....2bddddbbcccb2....2bddddbbcccb2....2bddddbbcccb2.........
        .....2bbdbbcccb2......2bbdbbcccb2......2bbdbbcccb2..........
        ......2bcccccb2........2bcccccb2........2bcccccb2...........
        .......2bcccb2..........2bcccb2..........2bcccb2............
        ........2bcb2............2bcb2............2bcb2.............
        .........2b2..............2b2..............2b2..............
        ..........2................2................2...............
        ............................................................
        ............................................................
        ............................................................
        `, SpriteKind.life1)
    player1life.setPosition(128, 38)
    player2life = sprites.create(img`
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ......222...222........222...222........222...222...........
        .....2bbb2.2bbb2......2bbb2.2bbb2......2bbb2.2bbb2..........
        ....2bdddb2bddcb2....2bdddb2bddcb2....2bdddb2bddcb2.........
        ...2bdddddbddbccb2..2bdddddbddbccb2..2bdddddbddbccb2........
        ...2bdddddddbbccb2..2bdddddddbbccb2..2bdddddddbbccb2........
        ...2bddddddbbcccb2..2bddddddbbcccb2..2bddddddbbcccb2........
        ....2bddddbbcccb2....2bddddbbcccb2....2bddddbbcccb2.........
        .....2bbdbbcccb2......2bbdbbcccb2......2bbdbbcccb2..........
        ......2bcccccb2........2bcccccb2........2bcccccb2...........
        .......2bcccb2..........2bcccb2..........2bcccb2............
        ........2bcb2............2bcb2............2bcb2.............
        .........2b2..............2b2..............2b2..............
        ..........2................2................2...............
        ............................................................
        ............................................................
        ............................................................
        `, SpriteKind.life2)
    player2_life12 = sprites.create(assets.image`p2-1`, SpriteKind.player2addonelife)
    player2_life1 = sprites.create(assets.image`p2--1`, SpriteKind.player2subbtractonelife)
    player1_life1 = sprites.create(assets.image`p1--2`, SpriteKind.player1subbtractonelife)
    player1_life12 = sprites.create(assets.image`p1--0`, SpriteKind.player1addonelife)
    player1_life1.setPosition(155, 64)
    player1_life12.setPosition(155, 81)
    player2_life1.setPosition(155, 98)
    player2_life12.setPosition(155, 115)
    player2life.setPosition(128, 55)
    settingsbackbutton.setPosition(80, 100)
    musicon.setPosition(25, 55)
    musicoff.setPosition(25, 75)
    hard.setPosition(160, 160)
    easy.setPosition(160, 160)
    difficulty1.setPosition(160, 160)
    Settings1.setPosition(160, 160)
    if (musicon123 == true) {
        animation.runImageAnimation(
        musicon,
        [img`
            f f f f f f f f f f f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 f f f f f f f f f f f f 5 f 
            f 5 f 5 5 5 5 f 5 5 5 5 5 f 5 f 
            f 5 f 5 f f 5 f 5 f f f 5 f 5 f 
            f 5 f 5 f f 5 f 5 f f f 5 f 5 f 
            f 5 f 5 f f 5 f 5 f f f 5 f 5 f 
            f 5 f 5 f f 5 f 5 f f f 5 f 5 f 
            f 5 f 5 f f 5 f 5 f f f 5 f 5 f 
            f 5 f 5 f f 5 f 5 f f f 5 f 5 f 
            f 5 f 5 f f 5 f 5 f f f 5 f 5 f 
            f 5 f 5 f f 5 f 5 f f f 5 f 5 f 
            f 5 f 5 5 5 5 f 5 f f f 5 f 5 f 
            f 5 f f f f f f f f f f f f 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f f f f f f f f f f f f f f f f 
            `],
        500,
        true
        )
    } else if (musicon123 == false) {
        animation.runImageAnimation(
        musicoff,
        [img`
            f f f f f f f f f f f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 f f f f f f f f f f f f 5 f 
            f 5 f 5 5 5 f 5 5 5 5 5 5 f 5 f 
            f 5 f 5 f 5 f 5 f f 5 f f f 5 f 
            f 5 f 5 f 5 f 5 f f 5 f f f 5 f 
            f 5 f 5 f 5 f 5 5 f 5 5 f f 5 f 
            f 5 f 5 f 5 f 5 f f 5 f f f 5 f 
            f 5 f 5 f 5 f 5 f f 5 f f f 5 f 
            f 5 f 5 f 5 f 5 f f 5 f f f 5 f 
            f 5 f 5 f 5 f 5 f f 5 f f f 5 f 
            f 5 f 5 f 5 f 5 f f 5 f f f 5 f 
            f 5 f 5 5 5 f 5 f f 5 f f f 5 f 
            f 5 f f f f f f f f f f f f 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f f f f f f f f f f f f f f f f 
            `],
        500,
        true
        )
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (canattack4 == true) {
        animation.runImageAnimation(
        gladiator_2,
        [img`
            ........................
            .....ffff...............
            ...fff88fff.............
            ..fff8888fff............
            .fffdddd8dfff...........
            .ff66666dd66f...........
            .f68ffffff86f...........
            .ffff6666ff6f...........
            ff6f8f44fbf6ff..........
            f6641f66f1466f..........
            fffff6d66666f...........
            f6666fdd466fff..........
            f6888f6666f46f..........
            f8666f6666f64f..........
            .fccf66564f44f..........
            ..ffffffffffff..........
            ....ff..ff..............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ......ffff..............
            ....fff8dfff............
            ...fff8888fff...........
            ..fff6666d6fff..........
            ..ff6dddddd66f..........
            ..f6dffffff66f..........
            ..ffff1111ffff..........
            .ff6f1f44f1f6ff.........
            .f6641fddf1466f.........
            fdf66ddddd466ff.........
            fbff664446dd46f.........
            fbf4f888d6dd6f..........
            fcfff88ccc66f...........
            .ff.f48cdc46f...........
            ....ffcddcff............
            .....cddcff.............
            ....cddc................
            ....cdc.................
            ....cc..................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            .......ff...............
            .....ff88ff.............
            ...fff6886fff...........
            ..fff111111fff..........
            ..fff686666fff..........
            ..fddddddd6ddff.........
            .ffdd6666666dff.........
            .ffff61dddfffff.........
            fdfdfdf44f6fdff.........
            fbfd41fddf14df..........
            fbffd4dddd4dfdf.........
            fcfdf66666f4df..........
            .ffdf46556f4df..........
            ...fffffffdddf..........
            .....ffffddddf..........
            .........fddf...........
            ........fcccf...........
            ........cc1cc...........
            .........c1c............
            .........c1c............
            .........c1c............
            .........c1c............
            `,img`
            ......ffff..............
            ....fff88fff............
            ...fff6686fff...........
            ..fffddddddfff..........
            ..ffd666666ddf..........
            ..fd6fff6666df..........
            ..ffffddddffff......ccc.
            .ffdfbf44fbfdff....cddc.
            .ffddbf44fbfdff...cddc..
            .fdd4dddddd4ddffccddc...
            fdfddddddd4ddffdcddc....
            fbffdd4444dd4fddccc.....
            fbf4f668866f1ddddf......
            fcf.f666666f44ddf.......
            .ff.f465588fffff........
            ....ffffffff............
            .....ff..ff.............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        100,
        false
        )
        pause(3000)
    }
    canattack4 = false
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    gladiator_2,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 6 6 f f f . . . . 
        . . . f f f 6 6 6 6 f f f . . . 
        . . f f f d d 6 6 d d f f f . . 
        . . f f d 6 6 6 6 6 6 d d f . . 
        . . f d 6 f f f f f f 6 d f . . 
        . . f f f f d d d d f f f f . . 
        . f f d f b f 4 4 f b f d f f . 
        . f d d 8 1 f d d f 1 8 d d f . 
        . . f d d d d d d d d d d f . . 
        . . . f d d 8 8 8 8 d d f . . . 
        . . d 4 f 6 6 6 6 6 6 f 4 d . . 
        . . 4 d f 6 6 6 6 6 6 f d 4 . . 
        . . 4 4 f 8 6 6 5 6 8 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 8 8 f f f . . . . 
        . . . f f f 6 6 6 6 f f f . . . 
        . . f f f d d d d d d f f f . . 
        . . f f d 6 6 6 6 6 6 d d f . . 
        . f f d 6 f f f f f 6 6 d f f . 
        . f f f f f d d d d f f f f f . 
        . . f d f b f 4 4 f b f d f . . 
        . . f d 8 1 f d d f 1 8 d f . . 
        . . . f d 4 d d d d 4 d f d f . 
        . . f d f 6 6 6 6 d d d 4 d f . 
        . f d 4 f 6 6 6 6 d d d d f . . 
        . . f f f 6 8 5 5 f d d f . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 8 8 f f f . . . . 
        . . . f f f 6 6 6 6 f f f . . . 
        . . f f f d d d d d d f f f . . 
        . . f f d 6 6 6 6 6 6 d d f . . 
        . . f d 6 f f f f f f 6 d f . . 
        . . f f f f d d d d f f f f . . 
        . f f d f b f 4 4 f b f d f f . 
        . f d d 8 1 f d d f 1 8 d d f . 
        . . f d d d d d d d d d d f . . 
        . . . f d d 4 4 4 4 d d f . . . 
        . . d 4 f 6 6 6 6 6 6 f 4 d . . 
        . . 4 d f 6 6 6 6 6 6 f d 4 . . 
        . . 4 4 f 8 8 5 5 8 8 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 8 8 f f f . . . . 
        . . . f f f 6 6 6 6 f f f . . . 
        . . f f f d d 6 6 d d f f f . . 
        . . f d d 6 6 6 6 6 6 d f f . . 
        . f f d 6 f f f f f f 6 d f f . 
        . f f f f f d d d d f f f f f . 
        . . f d f 8 f 4 4 f 8 f d f . . 
        . . f d 4 1 f d d f 1 4 d f . . 
        . f d f d 4 d d d d 4 d f . . . 
        . f d 4 d d 6 6 6 6 6 f d f . . 
        . f f d d d d 6 6 6 6 f 4 d f . 
        . . . f d d f 5 5 8 8 f f f . . 
        . . . f f f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    true
    )
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
    canattack4 = true
})
sprites.onOverlap(SpriteKind.player2, SpriteKind.difficulty, function (sprite19, otherSprite19) {
    scene.setBackgroundImage(img`
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffeeeeeeeee
        eeeeeeeeef7777777777777777777777777777777777feeeeeeeeeeeeeeeeeeef55555555555555555555555555555555555feeeeeeeeeeeeeeeef22222222222222222222222222222222feeeeeeeee
        eeeeeeeeef7777777777777777777777777777777777feeeeeeeeeeeeeeeeeeef55555555555555555555555555555555555feeeeeeeeeeeeeeeef22222222222222222222222222222222feeeeeeeee
        eeeeeeeeef7777777777777777777777777777777777feeeeeeeeeeeeeeeeeeef55555555555555555555555555555555555feeeeeeeeeeeeeeeef22222222222222222222222222222222feeeeeeeee
        eeeeeeeeef7777777777777777777777777777777777feeeeeeeeeeeeeeeeeeef55555555555555555555555555555555555feeeeeeeeeeeeeeeef22222222222222222222222222222222feeeeeeeee
        eeeeeeeeef7777ffff77fffff77ffff77f777f777777feeeeeeeeeeeeeeeeeeef555f555f5ff5fff55f5f5f5ff5ff5555555feeeeeeeeeeeeeeeef222f222f22fffff22fff22ffff222222feeeeeeeee
        eeeeeeeeef7777f77777f777f77f77777f777f777777feeeeeeeeeeeeeeeeeeef555ff55f5f55f55f5f5f5f5ff5ff5555555feeeeeeeeeeeeeeeef222f222f22f222f22f22f2f222f22222feeeeeeeee
        eeeeeeeeef7777f77777f777f77f77777f777f777777feeeeeeeeeeeeeeeeeeef555ff5ff5f55f55f5f5f5f5ff5ff5555555feeeeeeeeeeeeeeeef222f222f22f222f22f2f22f222f22222feeeeeeeee
        eeeeeeeeef7777fff777fffff777fff77fffff777777feeeeeeeeeeeeeeeeeeef555ff5ff5f55f55f5f5f5f5ff5ff5555555feeeeeeeeeeeeeeeef222f222f22f222f22ff222f222f22222feeeeeeeee
        eeeeeeeeef7777f77777f777f77777f777777f777777feeeeeeeeeeeeeeeeeeef555ff5ff5ff5f55f5f5f5f5ff5ff5555555feeeeeeeeeeeeeeeef222f222f22f222f22ff222f222f22222feeeeeeeee
        eeeeeeeeef7777f77777f777f77777f777777f777777feeeeeeeeeeeeeeeeeeef555ff5ff5f55f55f5f5f5f5ff5ff5555555feeeeeeeeeeeeeeeef222fffff22fffff22ff222f222f22222feeeeeeeee
        eeeeeeeeef7777f77777f777f77777f777777f777777feeeeeeeeeeeeeeeeeeef555f5fff5f55f55f5f5f5f5f5f5f5555555feeeeeeeeeeeeeeeef222f222f22f222f22f2f22f222f22222feeeeeeeee
        eeeeeeeeef7777ffff77f777f77ffff77fffff777777feeeeeeeeeeeeeeeeeeef555f555f5f55f55f5f5f5f5f5f5f5555555feeeeeeeeeeeeeeeef222f222f22f222f22f2f22f222f22222feeeeeeeee
        eeeeeeeeef7777777777777777777777777777777777feeeeeeeeeeeeeeeeeeef555f555f5ff5fff55f5fff5f555f5555555feeeeeeeeeeeeeeeef222f222f22f222f22f22f2f222f22222feeeeeeeee
        eeeeeeeeef7777777777777777777777777777777777feeeeeeeeeeeeeeeeeeef55555555555555555555555555555555555feeeeeeeeeeeeeeeef222f222f22f222f22f22f2f222f22222feeeeeeeee
        eeeeeeeeef7777777777777777777777777777777777feeeeeeeeeeeeeeeeeeef55555555555555555555555555555555555feeeeeeeeeeeeeeeef222f222f22f222f22f22f2ffff222222feeeeeeeee
        eeeeeeeeef7777777777777777777777777777777777feeeeeeeeeeeeeeeeeeef55555555555555555555555555555555555feeeeeeeeeeeeeeeef22222222222222222222222222222222feeeeeeeee
        eeeeeeeeeffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeef55555555555555555555555555555555555feeeeeeeeeeeeeeeef22222222222222222222222222222222feeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        `)
    easy1 = sprites.create(img`
        . . . . 6 6 6 6 6 6 6 . . . . 
        . . 6 6 7 7 7 7 7 7 7 6 6 . . 
        . 6 6 7 7 8 8 8 7 7 7 7 6 6 . 
        . 6 7 7 7 8 7 7 7 7 7 7 7 6 . 
        . c 7 7 7 8 8 8 8 7 7 7 7 c . 
        . c 9 7 7 8 7 7 7 7 7 7 9 c . 
        . c 9 9 7 8 8 8 8 8 7 9 9 c . 
        . c 6 6 9 9 9 9 9 9 9 6 6 c . 
        c c 6 6 6 6 6 6 6 6 6 6 6 c c 
        c d c c 6 6 6 6 6 6 6 c c d c 
        c d d d c c c c c c c d d d c 
        c c b d d d d d d d d d b c c 
        c c c c c b b b b b c c c c c 
        c c b b b b b b b b b b b c c 
        . c c b b b b b b b b b c c . 
        . . . c c c c c c c c c . . . 
        `, SpriteKind.button1)
    easy1.setPosition(35, 62)
    medium2 = sprites.create(img`
        . . . . 4 4 4 4 4 4 4 . . . . 
        . . 4 4 5 5 5 5 5 5 5 4 4 . . 
        . 4 4 5 5 5 4 5 4 5 5 5 4 4 . 
        . 4 5 5 5 5 4 5 4 5 5 5 5 4 . 
        . c 5 5 5 4 5 4 5 4 5 5 5 c . 
        . c e 5 5 4 5 4 5 4 5 5 e c . 
        . c e e 5 4 5 5 5 4 5 e e c . 
        . c 4 4 e e e e e e e 4 4 c . 
        c c 4 4 4 4 4 4 4 4 4 4 4 c c 
        c d c c 4 4 4 4 4 4 4 c c d c 
        c d d d c c c c c c c d d d c 
        c c b d d d d d d d d d b c c 
        c c c c c b b b b b c c c c c 
        c c b b b b b b b b b b b c c 
        . c c b b b b b b b b b c c . 
        . . . c c c c c c c c c . . . 
        `, SpriteKind.button2)
    medium2.setPosition(80, 62)
    hard3 = sprites.create(img`
        . . . . e e e e e e e . . . . 
        . . e e 2 2 2 2 2 2 2 e e . . 
        . e e 2 2 2 f 2 f 2 2 2 e e . 
        . e 2 2 2 f 2 2 2 f 2 2 2 e . 
        . c 2 2 f f f f f f f 2 2 c . 
        . c 4 f 2 2 2 2 2 2 2 f 4 c . 
        . c 4 4 2 2 2 2 2 2 2 4 4 c . 
        . c e e 4 4 4 4 4 4 4 e e c . 
        c c e e e e e e e e e e e c c 
        c d c c e e e e e e e c c d c 
        c d d d c c c c c c c d d d c 
        c c b d d d d d d d d d b c c 
        c c c c c b b b b b c c c c c 
        c c b b b b b b b b b b b c c 
        . c c b b b b b b b b b c c . 
        . . . c c c c c c c c c . . . 
        `, SpriteKind.button3)
    hard3.setPosition(125, 62)
    backbutton = sprites.create(img`
        ...................
        ...................
        ...................
        fffffffffffffffffff
        fffffffffffffffffff
        ff11ff111f111f1f1ff
        ff1f1f1f1f1fff1f1ff
        ff11ff111f1fff111ff
        ff1f1f1f1f1fff11fff
        ff1f1f1f1f1fff111ff
        ff1f1f1f1f1fff1f1ff
        ff11ff1f1f111f1f1ff
        fffffffffffffffffff
        fffffffffffffffffff
        ...................
        ...................
        `, SpriteKind.button4back)
    backbutton.setPosition(125, 100)
    difficulty1.setPosition(160, 160)
    hard.setPosition(160, 160)
    easy.setPosition(160, 160)
    Settings1.setPosition(160, 160)
    Gladiator.setPosition(23, 97)
})
sprites.onOverlap(SpriteKind.project, SpriteKind.Player, function (sprite35, otherSprite35) {
    if (info.player1.hasLife() && info.player2.hasLife()) {
        if (projectile2.overlapsWith(Gladiator)) {
            info.changeLifeBy(-1)
            sprites.destroy(projectile2)
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Gladiator,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f b f d d d d f f . . . . 
        . . f b b b f d d d d f f . . . 
        . . f d d d d f f d d d f . . . 
        . f d b b b b d d f f f f . . . 
        . f b d f f f f b b b d f . . . 
        . f f f d d d f f f f f f f . . 
        . f d d 4 4 f b d 4 4 d f f . . 
        . . f d d d f 1 4 d 4 d d f . . 
        . . . f d d d d 4 d d d f . . . 
        . . . f d 4 4 4 d d f f . . . . 
        . . . f b b b d b b d . . . . . 
        . . . f b b b d b b d . . . . . 
        . . . f 5 5 b f d d f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f b f d d d d f f . . . . 
        . . f b b b f d d d d f f . . . 
        . . f d d d d f f d d d f . . . 
        . f d b b b b d d f f f f . . . 
        . f b d f f f f b b b d f . . . 
        . f f f d d d f f f f f f f . . 
        . f d d 4 4 f b d 4 4 d f f . . 
        . . f d d d f 1 4 d 4 d d f . . 
        . . . f d d d d d d d d f . . . 
        . . . f d 4 d d d 4 f . . . . . 
        . . . f b b d d d d f . . . . . 
        . . f f 5 5 f d d f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f b f d d d d f f . . . . 
        . . f b b b f d d d d f f . . . 
        . . f d d d d f f d d d f . . . 
        . f d b b b b d d f f f f . . . 
        . f b d f f f f b b b d f . . . 
        . f f f d d d f f f f f f f . . 
        . f d d 4 4 f b d 4 4 d f f . . 
        . . f d d d f 1 4 d 4 d d f . . 
        . . . f d d d d 4 d d d f . . . 
        . . . f d 4 4 4 d d f f . . . . 
        . . . f b b b d d d d . . . . . 
        . . . f b b b d d d d . . . . . 
        . . . f 5 5 d f d d f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f b f d d d d f f . . . . 
        . . f b b b f d d d d f f . . . 
        . . f d d d d f f d d d f . . . 
        . f d b b b b d d f f f f . . . 
        . f b d f f f f b b b d f . . . 
        . f f f d d d f f f f f f f . . 
        . f d d 4 4 f b d 4 4 d f f . . 
        . . f d d d f 1 4 d 4 d d f . . 
        . . . f d d d d 4 d d d f . . . 
        . . . f d 4 4 4 d d d d . . . . 
        . . . f b b b b d d d d . . . . 
        . . f f 5 5 4 4 f d d f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.settingsbackbutton1, function (sprite2, otherSprite2) {
    scene.setBackgroundImage(img`
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffffffffff6666666666666
        66666666666666666ffffffffffffff66666fffff66666ffffffffffffffff66666ffffffffffffff66666fffffffff66666fffffffffffffffff666666666666666f2222222222222f6666666666666
        66666666666666666f222222222222f66666f222f66666f22222222222222f66666f222222222222f66666f2222222f66666f222222222222222f66666666666666f22222222222222f6666666666666
        66666666666666666f222222222222f66666f222f66666f22222222222222f66666f222222222222f66666f2222222f66666f222222222222222f66666666666666f22222222222222f6666666666666
        66666666666666666f222222222222f66666f222f66666f22222222222222f66666f222222222222f66666f2222222f66666f222222222222222f66666666666fff222222222222222f6666666666666
        66666666666666666f222ffffffffff66666f222f66666f222ffffffff222f66666f222222222222fff666fff222fff66666f222222222222222f6666666666f222222222222222222f6666666666666
        66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222fffffff222f66666f222f6666666f222222222222222f6666666666f222222222222222222f6666666666666
        66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222fffffff2222f66666666ff2222222222222222222f6666666666666
        66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f222222222222222222222f6666666666666
        66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f222222222222222222222f6666666666666
        66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f222222222222222222222f6666666666666
        66666666666666666f222f6666fffff66666f222f66666f222ffffffff222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f22222222fff2222222222f6666666666666
        66666666666666666f222f6666f222f66666f222f66666f22222222222222f66666f2222f66666f222f66666f222f6666666f2222fffffff2222f6666666f2222222f66f2222222222f6666666666666
        66666666666666666f222f6666f222f66666f222f66666f22222222222222f66666f2222f66666f222f66666f222f6666666f222222222222222f6666666f2222222f66f2222222222f6666666666666
        66666666666666666f222f6666f222f66666f222f66666f22222222222222f66666f2222f66666f222f66666f222f6666666f222222222222222f6666666f222222f666f2222222222f6666666666666
        66666666666666666f222ffffff222f66666f222f66666f222ffffffff222f66666f2222f66666f222f66666f222f6666666f222222222222222f6666666f22222ff666f2222222222f6666666666666
        66666666666666666f222222222222f66666f222fff666f222f666666f222f66666f2222fffffff2fff666fff222fff66666f222fffffffff222f6666666f2222f66666f2222222222f6666666666666
        66666666666666666f222222222222f66666f22222f666f222f666666f222f66666f222222222222f66666f2222222f66666f222f6666666f222f6666666f2222f66666f2222222222f6666666666666
        66666666666666666f222222222222f66666f22222f666f222f666666f222f66666f222222222222f66666f2222222f66666f222f6666666f222f6666666fffff666666f2222222222f6666666666666
        66666666666666666f222222222222f66666f22222f666f222f666666f222f66666f222222222222f66666f2222222f66666f222f6666666f222f666666666666666666f2222222222f6666666666666
        66666666666666666ffffffffffffff66666fffffff666fffff666666fffff66666ffffffffffffff66666fffffffff66666fffff6666666fffff666666666666666666f2222222222f6666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
        6666666666666666666666666666666666666666666666666666666666ffffffffffffffffff66666ffffffffffffffff6666ffffffffffffffff666666666666666666f2222222222f6666666666666
        6666666666666666666666666666666666666666666666666666666666f2222222222222222f66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        6666666666666666666666666666666666666666666666666666666666f2222222222222222f66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        6666666666666666666666666666666666666666666666666666666666f2222222222222222f66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        6666666666666666666666666666666666666666666666666666666666ffffffff222fffffff66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222ffffff2222f6666f2222ffffff2222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f6666f2222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f6666f2222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222ffffff2222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222fffff22222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f666f2222f6666666666666666666f2222222222f6666666666666
        666666666f666f666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f666f2222f6666666666666666666f2222222222ffffffffffff66
        66666666f66666f66666666666666666666666666666666666666666666666666f222f66666666666f2222ffffff2222f6666f2222f666fff22fff666666ffffffffffff22222222222222222222ff66
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f22222222222222f6666f2222f66666f2222f666666f2222222222222222222222222222222f666
        6666666666fff6666666ff6fff6fff666ff6f666f6fff6fff6ff6666666666666f222f66666666666f22222222222222f6666f2222f666666f222f666666f2222222222222222222222222222222f666
        6666666666f6f6666666f66f6f6f6f666f66f666f6f6f6f6f6f6f666666666666f222f66666666666f22222222222222f6666f2222f666666f222f666666f2222222222222222222222222222222f666
        6666666666fff6666666ff6f6f6ff66666f6f6f6f6f6f6ff66f6f666666666666fffff66666666666ffffffffffffffff6666ffffff666666fffff666666fff222222222222222222222222222fff666
        6666666666f6f6666666f66fff6f6f666ff6fffff6fff6f6f6ff6666666666666666666666666666666666666666666666666666666666666666666666666ff22222222222222222222fffffffff6666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222222222222222222f666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222222222222222222f666666666666
        66666666666666666666fff6fff6fff6ff6f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f22222222222fff2222222f666666666666
        66666666666666666666f6f66f666f66f66ff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffff2222222ff6ff222222f666666666666
        66666666666666666666fff66f666f66f66f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222ff666ffff2fff666666666666
        6666666666f66f666666f6f66f666f66ff6f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222ff666ffffff66666666666666
        666666666f6666f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2f222ff666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffff6666666666666666666666666
        66666666666f6f666666ff6fff6fff666f666fff6f666f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666f6666666f66f6f6f6f666ff66f6f6f666f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666f6666666ff6f6f6ff6666f6f6f6f6f6f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666666666f6f666666f66fff6f6f666ff66fff6fffff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666666666666666666fff6fff6fff6ff6f6f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666666666666666666f6f66f666f66f66ff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666666666666666666fff66f666f66f66f6f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666666666666666666f6f66f666f66ff6f6f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        `)
    easy.setPosition(85, 90)
    hard.setPosition(130, 90)
    Settings1.setPosition(35, 38)
    difficulty1.setPosition(35, 90)
    Gladiator.setPosition(119, 29)
    sprites.destroy(musicon)
    sprites.destroy(musicoff)
    sprites.destroy(player1_life1)
    sprites.destroy(player1_life12)
    sprites.destroy(player2_life1)
    sprites.destroy(player2_life12)
    sprites.destroy(player1life)
    sprites.destroy(player2life)
    sprites.destroy(settingsbackbutton)
    if (player2online == true) {
        gladiator_2.setPosition(120, 20)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite43, otherSprite43) {
    info.changeScoreBy(1)
    myEnemy.setPosition(170, randint(5, 110))
    sprites.destroy(projectile, effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.button4back, function (sprite6, otherSprite6) {
    scene.setBackgroundImage(img`
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffffffffff6666666666666
        66666666666666666ffffffffffffff66666fffff66666ffffffffffffffff66666ffffffffffffff66666fffffffff66666fffffffffffffffff666666666666666f2222222222222f6666666666666
        66666666666666666f222222222222f66666f222f66666f22222222222222f66666f222222222222f66666f2222222f66666f222222222222222f66666666666666f22222222222222f6666666666666
        66666666666666666f222222222222f66666f222f66666f22222222222222f66666f222222222222f66666f2222222f66666f222222222222222f66666666666666f22222222222222f6666666666666
        66666666666666666f222222222222f66666f222f66666f22222222222222f66666f222222222222f66666f2222222f66666f222222222222222f66666666666fff222222222222222f6666666666666
        66666666666666666f222ffffffffff66666f222f66666f222ffffffff222f66666f222222222222fff666fff222fff66666f222222222222222f6666666666f222222222222222222f6666666666666
        66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222fffffff222f66666f222f6666666f222222222222222f6666666666f222222222222222222f6666666666666
        66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222fffffff2222f66666666ff2222222222222222222f6666666666666
        66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f222222222222222222222f6666666666666
        66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f222222222222222222222f6666666666666
        66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f222222222222222222222f6666666666666
        66666666666666666f222f6666fffff66666f222f66666f222ffffffff222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f22222222fff2222222222f6666666666666
        66666666666666666f222f6666f222f66666f222f66666f22222222222222f66666f2222f66666f222f66666f222f6666666f2222fffffff2222f6666666f2222222f66f2222222222f6666666666666
        66666666666666666f222f6666f222f66666f222f66666f22222222222222f66666f2222f66666f222f66666f222f6666666f222222222222222f6666666f2222222f66f2222222222f6666666666666
        66666666666666666f222f6666f222f66666f222f66666f22222222222222f66666f2222f66666f222f66666f222f6666666f222222222222222f6666666f222222f666f2222222222f6666666666666
        66666666666666666f222ffffff222f66666f222f66666f222ffffffff222f66666f2222f66666f222f66666f222f6666666f222222222222222f6666666f22222ff666f2222222222f6666666666666
        66666666666666666f222222222222f66666f222fff666f222f666666f222f66666f2222fffffff2fff666fff222fff66666f222fffffffff222f6666666f2222f66666f2222222222f6666666666666
        66666666666666666f222222222222f66666f22222f666f222f666666f222f66666f222222222222f66666f2222222f66666f222f6666666f222f6666666f2222f66666f2222222222f6666666666666
        66666666666666666f222222222222f66666f22222f666f222f666666f222f66666f222222222222f66666f2222222f66666f222f6666666f222f6666666fffff666666f2222222222f6666666666666
        66666666666666666f222222222222f66666f22222f666f222f666666f222f66666f222222222222f66666f2222222f66666f222f6666666f222f666666666666666666f2222222222f6666666666666
        66666666666666666ffffffffffffff66666fffffff666fffff666666fffff66666ffffffffffffff66666fffffffff66666fffff6666666fffff666666666666666666f2222222222f6666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
        6666666666666666666666666666666666666666666666666666666666ffffffffffffffffff66666ffffffffffffffff6666ffffffffffffffff666666666666666666f2222222222f6666666666666
        6666666666666666666666666666666666666666666666666666666666f2222222222222222f66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        6666666666666666666666666666666666666666666666666666666666f2222222222222222f66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        6666666666666666666666666666666666666666666666666666666666f2222222222222222f66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        6666666666666666666666666666666666666666666666666666666666ffffffff222fffffff66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222ffffff2222f6666f2222ffffff2222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f6666f2222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f6666f2222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222ffffff2222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222fffff22222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f666f2222f6666666666666666666f2222222222f6666666666666
        666666666f666f666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f666f2222f6666666666666666666f2222222222ffffffffffff66
        66666666f66666f66666666666666666666666666666666666666666666666666f222f66666666666f2222ffffff2222f6666f2222f666fff22fff666666ffffffffffff22222222222222222222ff66
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f22222222222222f6666f2222f66666f2222f666666f2222222222222222222222222222222f666
        6666666666fff6666666ff6fff6fff666ff6f666f6fff6fff6ff6666666666666f222f66666666666f22222222222222f6666f2222f666666f222f666666f2222222222222222222222222222222f666
        6666666666f6f6666666f66f6f6f6f666f66f666f6f6f6f6f6f6f666666666666f222f66666666666f22222222222222f6666f2222f666666f222f666666f2222222222222222222222222222222f666
        6666666666fff6666666ff6f6f6ff66666f6f6f6f6f6f6ff66f6f666666666666fffff66666666666ffffffffffffffff6666ffffff666666fffff666666fff222222222222222222222222222fff666
        6666666666f6f6666666f66fff6f6f666ff6fffff6fff6f6f6ff6666666666666666666666666666666666666666666666666666666666666666666666666ff22222222222222222222fffffffff6666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222222222222222222f666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222222222222222222f666666666666
        66666666666666666666fff6fff6fff6ff6f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f22222222222fff2222222f666666666666
        66666666666666666666f6f66f666f66f66ff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffff2222222ff6ff222222f666666666666
        66666666666666666666fff66f666f66f66f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222ff666ffff2fff666666666666
        6666666666f66f666666f6f66f666f66ff6f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222ff666ffffff66666666666666
        666666666f6666f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2f222ff666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffff6666666666666666666666666
        66666666666f6f666666ff6fff6fff666f666fff6f666f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666f6666666f66f6f6f6f666ff66f6f6f666f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666f6666666ff6f6f6ff6666f6f6f6f6f6f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666666666f6f666666f66fff6f6f666ff66fff6fffff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666666666666666666fff6fff6fff6ff6f6f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666666666666666666f6f66f666f66f66ff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666666666666666666fff66f666f66f66f6f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666666666666666666f6f66f666f66ff6f6f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        `)
    easy.setPosition(85, 90)
    hard.setPosition(130, 90)
    difficulty1.setPosition(35, 90)
    Settings1.setPosition(35, 38)
    Gladiator.setPosition(119, 29)
    sprites.destroy(hard3)
    sprites.destroy(easy1)
    sprites.destroy(medium2)
    sprites.destroy(backbutton)
    if (player2online == true) {
        gladiator_2.setPosition(120, 20)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.player1addonelife, function (sprite36, otherSprite36) {
    if (info.life() < 5) {
        info.changeLifeBy(1)
        pause(1000)
    }
    if (info.life() == 1) {
        animation.runImageAnimation(
        player1life,
        [img`
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ......222...222.............................................
            .....2bbb2.2bbb2............................................
            ....2bdddb2bddcb2...........................................
            ...2bdddddbddbccb2..........................................
            ...2bdddddddbbccb2..........................................
            ...2bddddddbbcccb2..........................................
            ....2bddddbbcccb2...........................................
            .....2bbdbbcccb2............................................
            ......2bcccccb2.............................................
            .......2bcccb2..............................................
            ........2bcb2...............................................
            .........2b2................................................
            ..........2.................................................
            ............................................................
            ............................................................
            ............................................................
            `],
        500,
        true
        )
    } else if (info.life() == 2) {
        animation.runImageAnimation(
        player1life,
        [img`
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ......222...222........222...222............................
            .....2bbb2.2bbb2......2bbb2.2bbb2...........................
            ....2bdddb2bddcb2....2bdddb2bddcb2..........................
            ...2bdddddbddbccb2..2bdddddbddbccb2.........................
            ...2bdddddddbbccb2..2bdddddddbbccb2.........................
            ...2bddddddbbcccb2..2bddddddbbcccb2.........................
            ....2bddddbbcccb2....2bddddbbcccb2..........................
            .....2bbdbbcccb2......2bbdbbcccb2...........................
            ......2bcccccb2........2bcccccb2............................
            .......2bcccb2..........2bcccb2.............................
            ........2bcb2............2bcb2..............................
            .........2b2..............2b2...............................
            ..........2................2................................
            ............................................................
            ............................................................
            ............................................................
            `],
        500,
        true
        )
    } else if (info.life() == 3) {
        animation.runImageAnimation(
        player1life,
        [img`
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ......222...222........222...222........222...222...........
            .....2bbb2.2bbb2......2bbb2.2bbb2......2bbb2.2bbb2..........
            ....2bdddb2bddcb2....2bdddb2bddcb2....2bdddb2bddcb2.........
            ...2bdddddbddbccb2..2bdddddbddbccb2..2bdddddbddbccb2........
            ...2bdddddddbbccb2..2bdddddddbbccb2..2bdddddddbbccb2........
            ...2bddddddbbcccb2..2bddddddbbcccb2..2bddddddbbcccb2........
            ....2bddddbbcccb2....2bddddbbcccb2....2bddddbbcccb2.........
            .....2bbdbbcccb2......2bbdbbcccb2......2bbdbbcccb2..........
            ......2bcccccb2........2bcccccb2........2bcccccb2...........
            .......2bcccb2..........2bcccb2..........2bcccb2............
            ........2bcb2............2bcb2............2bcb2.............
            .........2b2..............2b2..............2b2..............
            ..........2................2................2...............
            ............................................................
            ............................................................
            ............................................................
            `],
        500,
        true
        )
    } else if (info.life() == 4) {
        animation.runImageAnimation(
        player1life,
        [img`
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ...222...222......222...222......222...222......222...222...
            ..2bbb2.2bbb2....2bbb2.2bbb2....2bbb2.2bbb2....2bbb2.2bbb2..
            .2bdddb2bddcb2..2bdddb2bddcb2..2bdddb2bddcb2..2bdddb2bddcb2.
            2bdddddbddbccb22bdddddbddbccb22bdddddbddbccb22bdddddbddbccb2
            2bdddddddbbccb22bdddddddbbccb22bdddddddbbccb22bdddddddbbccb2
            2bddddddbbcccb22bddddddbbcccb22bddddddbbcccb22bddddddbbcccb2
            .2bddddbbcccb2..2bddddbbcccb2..2bddddbbcccb2..2bddddbbcccb2.
            ..2bbdbbcccb2....2bbdbbcccb2....2bbdbbcccb2....2bbdbbcccb2..
            ...2bcccccb2......2bcccccb2......2bcccccb2......2bcccccb2...
            ....2bcccb2........2bcccb2........2bcccb2........2bcccb2....
            .....2bcb2..........2bcb2..........2bcb2..........2bcb2.....
            ......2b2............2b2............2b2............2b2......
            .......2..............2..............2..............2.......
            ............................................................
            ............................................................
            ............................................................
            `],
        500,
        true
        )
    } else if (info.life() == 5) {
        animation.runImageAnimation(
        player1life,
        [img`
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ..222..22.....222.222.....22..222....222..222...222..222....
            .2bbb22bb2...2bbb2bbb2...2bb22bbb2..2bbb22bbb2.2bbb22bbb2...
            2bdddbbddb2.2bdddbddcb2.2bddbbddcb2.2dddbbddcb22dddbbddcb2..
            bddddddbbcb2bdddddbbccb2bdddddbbccb2bdddddbbcc2bdddddbbcc2..
            bdddddbbccb2bdddddbcccb2bddddbbcccb2bddddbbccc2bddddbbccc2..
            2bddddbccb2.2bddddcccb2.2bdddbcccb2.2ddddbcccb22ddddbcccb2..
            .2bbdbccc2...2bbdbccb2...2bbbcccb2..2bbdbcccb2.2bbdbcccb2...
            ..22bccb2.....22bcb2......22ccb2.....22bccb2....22bccb2.....
            ....2bb2........2b2........2bb2........2bb2.......2bb2......
            .....22..........2..........22..........22.........22.......
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            `],
        500,
        true
        )
    }
})
info.onCountdownEnd(function () {
    sprites.destroy(bigboy, effects.fire, 2000)
    myEnemy.setPosition(123, 109)
    myEnemy.follow(Gladiator, 25)
    myenemy2.setPosition(123, 109)
    myenemy2.follow(Gladiator, 35)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.player1subbtractonelife, function (sprite8, otherSprite8) {
    if (info.life() > 1) {
        info.changeLifeBy(-1)
        pause(1000)
    }
    if (info.life() == 1) {
        animation.runImageAnimation(
        player1life,
        [img`
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ......222...222.............................................
            .....2bbb2.2bbb2............................................
            ....2bdddb2bddcb2...........................................
            ...2bdddddbddbccb2..........................................
            ...2bdddddddbbccb2..........................................
            ...2bddddddbbcccb2..........................................
            ....2bddddbbcccb2...........................................
            .....2bbdbbcccb2............................................
            ......2bcccccb2.............................................
            .......2bcccb2..............................................
            ........2bcb2...............................................
            .........2b2................................................
            ..........2.................................................
            ............................................................
            ............................................................
            ............................................................
            `],
        500,
        true
        )
    } else if (info.life() == 2) {
        animation.runImageAnimation(
        player1life,
        [img`
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ......222...222........222...222............................
            .....2bbb2.2bbb2......2bbb2.2bbb2...........................
            ....2bdddb2bddcb2....2bdddb2bddcb2..........................
            ...2bdddddbddbccb2..2bdddddbddbccb2.........................
            ...2bdddddddbbccb2..2bdddddddbbccb2.........................
            ...2bddddddbbcccb2..2bddddddbbcccb2.........................
            ....2bddddbbcccb2....2bddddbbcccb2..........................
            .....2bbdbbcccb2......2bbdbbcccb2...........................
            ......2bcccccb2........2bcccccb2............................
            .......2bcccb2..........2bcccb2.............................
            ........2bcb2............2bcb2..............................
            .........2b2..............2b2...............................
            ..........2................2................................
            ............................................................
            ............................................................
            ............................................................
            `],
        500,
        true
        )
    } else if (info.life() == 3) {
        animation.runImageAnimation(
        player1life,
        [img`
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ......222...222........222...222........222...222...........
            .....2bbb2.2bbb2......2bbb2.2bbb2......2bbb2.2bbb2..........
            ....2bdddb2bddcb2....2bdddb2bddcb2....2bdddb2bddcb2.........
            ...2bdddddbddbccb2..2bdddddbddbccb2..2bdddddbddbccb2........
            ...2bdddddddbbccb2..2bdddddddbbccb2..2bdddddddbbccb2........
            ...2bddddddbbcccb2..2bddddddbbcccb2..2bddddddbbcccb2........
            ....2bddddbbcccb2....2bddddbbcccb2....2bddddbbcccb2.........
            .....2bbdbbcccb2......2bbdbbcccb2......2bbdbbcccb2..........
            ......2bcccccb2........2bcccccb2........2bcccccb2...........
            .......2bcccb2..........2bcccb2..........2bcccb2............
            ........2bcb2............2bcb2............2bcb2.............
            .........2b2..............2b2..............2b2..............
            ..........2................2................2...............
            ............................................................
            ............................................................
            ............................................................
            `],
        500,
        true
        )
    } else if (info.life() == 4) {
        animation.runImageAnimation(
        player1life,
        [img`
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ...222...222......222...222......222...222......222...222...
            ..2bbb2.2bbb2....2bbb2.2bbb2....2bbb2.2bbb2....2bbb2.2bbb2..
            .2bdddb2bddcb2..2bdddb2bddcb2..2bdddb2bddcb2..2bdddb2bddcb2.
            2bdddddbddbccb22bdddddbddbccb22bdddddbddbccb22bdddddbddbccb2
            2bdddddddbbccb22bdddddddbbccb22bdddddddbbccb22bdddddddbbccb2
            2bddddddbbcccb22bddddddbbcccb22bddddddbbcccb22bddddddbbcccb2
            .2bddddbbcccb2..2bddddbbcccb2..2bddddbbcccb2..2bddddbbcccb2.
            ..2bbdbbcccb2....2bbdbbcccb2....2bbdbbcccb2....2bbdbbcccb2..
            ...2bcccccb2......2bcccccb2......2bcccccb2......2bcccccb2...
            ....2bcccb2........2bcccb2........2bcccb2........2bcccb2....
            .....2bcb2..........2bcb2..........2bcb2..........2bcb2.....
            ......2b2............2b2............2b2............2b2......
            .......2..............2..............2..............2.......
            ............................................................
            ............................................................
            ............................................................
            `],
        500,
        true
        )
    } else if (info.life() == 5) {
        animation.runImageAnimation(
        player1life,
        [img`
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ..222..22.....222.222.....22..222....222..222...222..222....
            .2bbb22bb2...2bbb2bbb2...2bb22bbb2..2bbb22bbb2.2bbb22bbb2...
            2bdddbbddb2.2bdddbddcb2.2bddbbddcb2.2dddbbddcb22dddbbddcb2..
            bddddddbbcb2bdddddbbccb2bdddddbbccb2bdddddbbcc2bdddddbbcc2..
            bdddddbbccb2bdddddbcccb2bddddbbcccb2bddddbbccc2bddddbbccc2..
            2bddddbccb2.2bddddcccb2.2bdddbcccb2.2ddddbcccb22ddddbcccb2..
            .2bbdbccc2...2bbdbccb2...2bbbcccb2..2bbdbcccb2.2bbdbcccb2...
            ..22bccb2.....22bcb2......22ccb2.....22bccb2....22bccb2.....
            ....2bb2........2b2........2bb2........2bb2.......2bb2......
            .....22..........2..........22..........22.........22.......
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            `],
        500,
        true
        )
    }
})
info.onScore(25, function () {
    info.startCountdown(30)
    bigboy = sprites.create(img`
        . . . . f f f f f f f f f . . . 
        . . . f 5 d 5 d 5 d 5 f 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 f . . 
        . . f b d d b d d d d d b f . . 
        . . f d d d b d b b d d d f . . 
        . f d d d b d d d d d d d d f . 
        . f d d d d b b b b d d d d f . 
        . f b b d b 2 e e 2 b d b b f . 
        . f b b e 1 2 4 4 2 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f d d d d f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e d d d d d d d d d d e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . f f f f b b f f f f . . . 
        `, SpriteKind.killerperson)
    bigboy.follow(Gladiator, 30)
    myEnemy.setPosition(160, 160)
    myEnemy.unfollow()
    myenemy2.setPosition(160, 160)
    myenemy2.unfollow()
})
info.onScore(100, function () {
    info.startCountdown(30)
    bigboy = sprites.create(img`
        . . . . f f f f f f f f . . . . 
        . . . f f 5 5 2 2 5 5 f f . . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f b d d b d d d d d b f . . 
        . f f d d d b d b b d d d f f . 
        . f d d d b d d d d d d d d f . 
        . f d d f f f f f f f f d d f . 
        . f b b f 2 2 f f 2 2 f b b f . 
        . f b b f 2 2 f f 2 2 f b b f . 
        . f b b f f f f f f f f b b f . 
        . f b d f f d f f d f f d b f . 
        . f f f f b d d d d b f f f f . 
        . . f d d f f f f f f d d f . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . . f d 1 5 5 d 1 5 d f . . . 
        . . . f f f f f f f f f f . . . 
        `, SpriteKind.killerperson)
    bigboy.follow(Gladiator, 45)
    myEnemy.setPosition(160, 160)
    myEnemy.unfollow()
    myenemy2.setPosition(160, 160)
    myenemy2.unfollow()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.player2, function (sprite25, otherSprite25) {
    if (canattack4 == true && controller.player2.isPressed(ControllerButton.A)) {
        info.player2.changeScoreBy(1)
        myEnemy.setPosition(randint(5, 160), randint(5, 110))
    } else {
        info.player2.changeLifeBy(-1)
        myEnemy.setPosition(randint(5, 160), randint(5, 110))
    }
})
info.onScore(151, function () {
    myEnemy.follow(Gladiator, 40)
    myenemy2.follow(Gladiator, 50)
})
sprites.onOverlap(SpriteKind.player2, SpriteKind.player2addonelife, function (sprite14, otherSprite14) {
    if (player2online == true) {
        if (info.player2.life() < 5) {
            info.player2.changeLifeBy(1)
            pause(1000)
        }
        if (info.player2.life() == 1) {
            animation.runImageAnimation(
            player2life,
            [img`
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                ......222...222.............................................
                .....2bbb2.2bbb2............................................
                ....2bdddb2bddcb2...........................................
                ...2bdddddbddbccb2..........................................
                ...2bdddddddbbccb2..........................................
                ...2bddddddbbcccb2..........................................
                ....2bddddbbcccb2...........................................
                .....2bbdbbcccb2............................................
                ......2bcccccb2.............................................
                .......2bcccb2..............................................
                ........2bcb2...............................................
                .........2b2................................................
                ..........2.................................................
                ............................................................
                ............................................................
                ............................................................
                `],
            500,
            true
            )
        } else if (info.player2.life() == 2) {
            animation.runImageAnimation(
            player2life,
            [img`
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                ......222...222........222...222............................
                .....2bbb2.2bbb2......2bbb2.2bbb2...........................
                ....2bdddb2bddcb2....2bdddb2bddcb2..........................
                ...2bdddddbddbccb2..2bdddddbddbccb2.........................
                ...2bdddddddbbccb2..2bdddddddbbccb2.........................
                ...2bddddddbbcccb2..2bddddddbbcccb2.........................
                ....2bddddbbcccb2....2bddddbbcccb2..........................
                .....2bbdbbcccb2......2bbdbbcccb2...........................
                ......2bcccccb2........2bcccccb2............................
                .......2bcccb2..........2bcccb2.............................
                ........2bcb2............2bcb2..............................
                .........2b2..............2b2...............................
                ..........2................2................................
                ............................................................
                ............................................................
                ............................................................
                `],
            500,
            true
            )
        } else if (info.player2.life() == 3) {
            animation.runImageAnimation(
            player2life,
            [img`
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                ......222...222........222...222........222...222...........
                .....2bbb2.2bbb2......2bbb2.2bbb2......2bbb2.2bbb2..........
                ....2bdddb2bddcb2....2bdddb2bddcb2....2bdddb2bddcb2.........
                ...2bdddddbddbccb2..2bdddddbddbccb2..2bdddddbddbccb2........
                ...2bdddddddbbccb2..2bdddddddbbccb2..2bdddddddbbccb2........
                ...2bddddddbbcccb2..2bddddddbbcccb2..2bddddddbbcccb2........
                ....2bddddbbcccb2....2bddddbbcccb2....2bddddbbcccb2.........
                .....2bbdbbcccb2......2bbdbbcccb2......2bbdbbcccb2..........
                ......2bcccccb2........2bcccccb2........2bcccccb2...........
                .......2bcccb2..........2bcccb2..........2bcccb2............
                ........2bcb2............2bcb2............2bcb2.............
                .........2b2..............2b2..............2b2..............
                ..........2................2................2...............
                ............................................................
                ............................................................
                ............................................................
                `],
            500,
            true
            )
        } else if (info.player2.life() == 4) {
            animation.runImageAnimation(
            player2life,
            [img`
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                ...222...222......222...222......222...222......222...222...
                ..2bbb2.2bbb2....2bbb2.2bbb2....2bbb2.2bbb2....2bbb2.2bbb2..
                .2bdddb2bddcb2..2bdddb2bddcb2..2bdddb2bddcb2..2bdddb2bddcb2.
                2bdddddbddbccb22bdddddbddbccb22bdddddbddbccb22bdddddbddbccb2
                2bdddddddbbccb22bdddddddbbccb22bdddddddbbccb22bdddddddbbccb2
                2bddddddbbcccb22bddddddbbcccb22bddddddbbcccb22bddddddbbcccb2
                .2bddddbbcccb2..2bddddbbcccb2..2bddddbbcccb2..2bddddbbcccb2.
                ..2bbdbbcccb2....2bbdbbcccb2....2bbdbbcccb2....2bbdbbcccb2..
                ...2bcccccb2......2bcccccb2......2bcccccb2......2bcccccb2...
                ....2bcccb2........2bcccb2........2bcccb2........2bcccb2....
                .....2bcb2..........2bcb2..........2bcb2..........2bcb2.....
                ......2b2............2b2............2b2............2b2......
                .......2..............2..............2..............2.......
                ............................................................
                ............................................................
                ............................................................
                `],
            500,
            true
            )
        } else if (info.player2.life() == 5) {
            animation.runImageAnimation(
            player2life,
            [img`
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                ..222..22.....222.222.....22..222....222..222...222..222....
                .2bbb22bb2...2bbb2bbb2...2bb22bbb2..2bbb22bbb2.2bbb22bbb2...
                2bdddbbddb2.2bdddbddcb2.2bddbbddcb2.2dddbbddcb22dddbbddcb2..
                bddddddbbcb2bdddddbbccb2bdddddbbccb2bdddddbbcc2bdddddbbcc2..
                bdddddbbccb2bdddddbcccb2bddddbbcccb2bddddbbccc2bddddbbccc2..
                2bddddbccb2.2bddddcccb2.2bdddbcccb2.2ddddbcccb22ddddbcccb2..
                .2bbdbccc2...2bbdbccb2...2bbbcccb2..2bbdbcccb2.2bbdbcccb2...
                ..22bccb2.....22bcb2......22ccb2.....22bccb2....22bccb2.....
                ....2bb2........2b2........2bb2........2bb2.......2bb2......
                .....22..........2..........22..........22.........22.......
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                `],
            500,
            true
            )
        }
    }
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    gladiator_2,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 6 8 8 8 6 f . . . . 
        . . . f 6 6 6 f f 8 6 6 f . . . 
        . . f f f f f b b f f f f f . . 
        . . f f 6 b 6 b b 6 b 6 f f . . 
        . . f 6 6 f b f f b f b 6 f . . 
        . . f f f b b 8 8 b b f f f . . 
        . f f 6 f b f 6 6 f b f 6 f f . 
        . f 6 6 f f 8 8 8 8 f 6 6 6 f . 
        . . f 6 6 6 6 6 6 6 6 6 6 f . . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . 6 4 f f f f f f f f 4 6 . . 
        . . 4 6 f 6 6 6 6 6 6 f 6 6 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f 8 8 8 8 f f . . . . 
        . . . f 6 6 6 f f 6 6 6 f . . . 
        . . . f f f f b b f f f f . . . 
        . . f f 6 b 6 b b 6 b 6 f f . . 
        . . f 6 b f b b f f b f 6 f . . 
        . . f f f b f 8 8 b b f f f . . 
        . . f 6 b f f 6 6 b f 6 6 f . . 
        . f f 6 f f 8 8 8 f 6 6 6 f f . 
        . f f 6 6 6 6 6 6 6 6 6 6 f f . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . . 6 f f f f f f f f 4 6 . . 
        . . . 4 f b b b b b 6 6 6 4 . . 
        . . . d f f f f f f 6 6 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 8 8 8 8 f f . . . . 
        . . . f 6 6 6 f f 6 6 6 f . . . 
        . . f f f f f b b f f f f f . . 
        . . f f 6 b 6 b b 6 b 6 f f . . 
        . . f 6 b f b f f b f b 6 f . . 
        . . f f f b b 8 8 b b f f f . . 
        . f f 6 f b f 6 6 f b f 6 f f . 
        . f 6 6 f f 8 8 8 8 f 6 6 6 f . 
        . . f 6 6 6 6 6 6 6 6 6 6 f . . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . 6 4 f f f f f f f f 4 6 . . 
        . . 4 6 f b b b b b b f 6 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f 8 8 8 8 f f . . . . 
        . . . f 6 6 6 f f 6 6 6 f . . . 
        . . . f f f f b b f f f f . . . 
        . . f f 6 b 6 b b 6 b 6 f f . . 
        . . f 6 f b f f f b f b 6 f . . 
        . . f f f b b 8 8 f b f f f . . 
        . . f 6 6 f b 6 6 f f b 6 f . . 
        . f f 6 6 6 f 8 8 8 f f 6 f f . 
        . f f 6 6 6 6 6 6 6 6 6 6 f f . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . 6 4 f f f f f f f f 6 . . . 
        . . 4 6 6 6 b b b b b f 4 . . . 
        . . . 4 6 6 f f f f f f d . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.player2subbtractonelife, function (sprite26, otherSprite26) {
    if (player2online == true) {
        if (info.player2.life() > 1) {
            info.player2.changeLifeBy(-1)
            pause(1000)
        }
        if (info.player2.life() == 1) {
            animation.runImageAnimation(
            player2life,
            [img`
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                ......222...222.............................................
                .....2bbb2.2bbb2............................................
                ....2bdddb2bddcb2...........................................
                ...2bdddddbddbccb2..........................................
                ...2bdddddddbbccb2..........................................
                ...2bddddddbbcccb2..........................................
                ....2bddddbbcccb2...........................................
                .....2bbdbbcccb2............................................
                ......2bcccccb2.............................................
                .......2bcccb2..............................................
                ........2bcb2...............................................
                .........2b2................................................
                ..........2.................................................
                ............................................................
                ............................................................
                ............................................................
                `],
            500,
            true
            )
        } else if (info.player2.life() == 2) {
            animation.runImageAnimation(
            player2life,
            [img`
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                ......222...222........222...222............................
                .....2bbb2.2bbb2......2bbb2.2bbb2...........................
                ....2bdddb2bddcb2....2bdddb2bddcb2..........................
                ...2bdddddbddbccb2..2bdddddbddbccb2.........................
                ...2bdddddddbbccb2..2bdddddddbbccb2.........................
                ...2bddddddbbcccb2..2bddddddbbcccb2.........................
                ....2bddddbbcccb2....2bddddbbcccb2..........................
                .....2bbdbbcccb2......2bbdbbcccb2...........................
                ......2bcccccb2........2bcccccb2............................
                .......2bcccb2..........2bcccb2.............................
                ........2bcb2............2bcb2..............................
                .........2b2..............2b2...............................
                ..........2................2................................
                ............................................................
                ............................................................
                ............................................................
                `],
            500,
            true
            )
        } else if (info.player2.life() == 3) {
            animation.runImageAnimation(
            player2life,
            [img`
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                ......222...222........222...222........222...222...........
                .....2bbb2.2bbb2......2bbb2.2bbb2......2bbb2.2bbb2..........
                ....2bdddb2bddcb2....2bdddb2bddcb2....2bdddb2bddcb2.........
                ...2bdddddbddbccb2..2bdddddbddbccb2..2bdddddbddbccb2........
                ...2bdddddddbbccb2..2bdddddddbbccb2..2bdddddddbbccb2........
                ...2bddddddbbcccb2..2bddddddbbcccb2..2bddddddbbcccb2........
                ....2bddddbbcccb2....2bddddbbcccb2....2bddddbbcccb2.........
                .....2bbdbbcccb2......2bbdbbcccb2......2bbdbbcccb2..........
                ......2bcccccb2........2bcccccb2........2bcccccb2...........
                .......2bcccb2..........2bcccb2..........2bcccb2............
                ........2bcb2............2bcb2............2bcb2.............
                .........2b2..............2b2..............2b2..............
                ..........2................2................2...............
                ............................................................
                ............................................................
                ............................................................
                `],
            500,
            true
            )
        } else if (info.player2.life() == 4) {
            animation.runImageAnimation(
            player2life,
            [img`
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                ...222...222......222...222......222...222......222...222...
                ..2bbb2.2bbb2....2bbb2.2bbb2....2bbb2.2bbb2....2bbb2.2bbb2..
                .2bdddb2bddcb2..2bdddb2bddcb2..2bdddb2bddcb2..2bdddb2bddcb2.
                2bdddddbddbccb22bdddddbddbccb22bdddddbddbccb22bdddddbddbccb2
                2bdddddddbbccb22bdddddddbbccb22bdddddddbbccb22bdddddddbbccb2
                2bddddddbbcccb22bddddddbbcccb22bddddddbbcccb22bddddddbbcccb2
                .2bddddbbcccb2..2bddddbbcccb2..2bddddbbcccb2..2bddddbbcccb2.
                ..2bbdbbcccb2....2bbdbbcccb2....2bbdbbcccb2....2bbdbbcccb2..
                ...2bcccccb2......2bcccccb2......2bcccccb2......2bcccccb2...
                ....2bcccb2........2bcccb2........2bcccb2........2bcccb2....
                .....2bcb2..........2bcb2..........2bcb2..........2bcb2.....
                ......2b2............2b2............2b2............2b2......
                .......2..............2..............2..............2.......
                ............................................................
                ............................................................
                ............................................................
                `],
            500,
            true
            )
        } else if (info.player2.life() == 5) {
            animation.runImageAnimation(
            player2life,
            [img`
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                ..222..22.....222.222.....22..222....222..222...222..222....
                .2bbb22bb2...2bbb2bbb2...2bb22bbb2..2bbb22bbb2.2bbb22bbb2...
                2bdddbbddb2.2bdddbddcb2.2bddbbddcb2.2dddbbddcb22dddbbddcb2..
                bddddddbbcb2bdddddbbccb2bdddddbbccb2bdddddbbcc2bdddddbbcc2..
                bdddddbbccb2bdddddbcccb2bddddbbcccb2bddddbbccc2bddddbbccc2..
                2bddddbccb2.2bddddcccb2.2bdddbcccb2.2ddddbcccb22ddddbcccb2..
                .2bbdbccc2...2bbdbccb2...2bbbcccb2..2bbdbcccb2.2bbdbcccb2...
                ..22bccb2.....22bcb2......22ccb2.....22bccb2....22bccb2.....
                ....2bb2........2b2........2bb2........2bb2.......2bb2......
                .....22..........2..........22..........22.........22.......
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                `],
            500,
            true
            )
        }
    }
})
sprites.onOverlap(SpriteKind.player2, SpriteKind.button1, function (sprite7, otherSprite7) {
    if (player2online == true) {
        gladiator_2.setPosition(80, 100)
        Gladiator.setPosition(50, 100)
        game.splash("Easy")
        controller.player2.moveSprite(gladiator_2, 50, 50)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Gladiator,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f d d d d f b f . . . 
        . . . f f d d d d f b b b f . . 
        . . . f d d d f f d d d d f . . 
        . . . f f f f d d b b b b d f . 
        . . . f d b b b f f f f d b f . 
        . . f f f f f f f d d d f f f . 
        . . f f d 4 4 d b f 4 4 d d f . 
        . . f d d 4 d 4 1 f d d d f . . 
        . . . f d d d 4 d d d d f . . . 
        . . . . f f d d 4 4 4 d f . . . 
        . . . . . d b b d b b b f . . . 
        . . . . . d b b d b b b f . . . 
        . . . . . f d d f b 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f d d d d f b f . . . 
        . . . f f d d d d f b b b f . . 
        . . . f d d d f f d d d d f . . 
        . . . f f f f d d b b b b d f . 
        . . . f d b b b f f f f d b f . 
        . . f f f f f f f d d d f f f . 
        . . f f d 4 4 d b f 4 4 d d f . 
        . . f d d 4 d 4 1 f d d d f . . 
        . . . f d d d d d d d d f . . . 
        . . . . . f 4 d d d 4 d f . . . 
        . . . . . f d d d d b b f . . . 
        . . . . f f f d d f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f d d d d f b f . . . 
        . . . f f d d d d f b b b f . . 
        . . . f d d d f f d d d d f . . 
        . . . f f f f d d b b b b d f . 
        . . . f d b b b f f f f d b f . 
        . . f f f f f f f d d d f f f . 
        . . f f d 4 4 d b f 4 4 d d f . 
        . . f d d 4 d 4 1 f d d d f . . 
        . . . f d d d 4 d d d d f . . . 
        . . . . f f d d 4 4 4 d f . . . 
        . . . . . d d d d b b b f . . . 
        . . . . . d d d d b b b f . . . 
        . . . . . f d d f d 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f d d d d f b f . . . 
        . . . f f d d d d f b b b f . . 
        . . . f d d d f f d d d d f . . 
        . . . f f f f d d b b b b d f . 
        . . . f d b b b f f f f d b f . 
        . . f f f f f f f d d d f f f . 
        . . f f d 4 4 d b f 4 4 d d f . 
        . . f d d 4 d 4 1 f d d d f . . 
        . . . f d d d 4 d d d d f . . . 
        . . . . d d d d 4 4 4 d f . . . 
        . . . . d d d d b b b b f . . . 
        . . . . f d d f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.player2, SpriteKind.player1subbtractonelife, function (sprite9, otherSprite9) {
    if (info.life() > 1) {
        info.changeLifeBy(-1)
        pause(1000)
    }
    if (info.life() == 1) {
        animation.runImageAnimation(
        player1life,
        [img`
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ......222...222.............................................
            .....2bbb2.2bbb2............................................
            ....2bdddb2bddcb2...........................................
            ...2bdddddbddbccb2..........................................
            ...2bdddddddbbccb2..........................................
            ...2bddddddbbcccb2..........................................
            ....2bddddbbcccb2...........................................
            .....2bbdbbcccb2............................................
            ......2bcccccb2.............................................
            .......2bcccb2..............................................
            ........2bcb2...............................................
            .........2b2................................................
            ..........2.................................................
            ............................................................
            ............................................................
            ............................................................
            `],
        500,
        true
        )
    } else if (info.life() == 2) {
        animation.runImageAnimation(
        player1life,
        [img`
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ......222...222........222...222............................
            .....2bbb2.2bbb2......2bbb2.2bbb2...........................
            ....2bdddb2bddcb2....2bdddb2bddcb2..........................
            ...2bdddddbddbccb2..2bdddddbddbccb2.........................
            ...2bdddddddbbccb2..2bdddddddbbccb2.........................
            ...2bddddddbbcccb2..2bddddddbbcccb2.........................
            ....2bddddbbcccb2....2bddddbbcccb2..........................
            .....2bbdbbcccb2......2bbdbbcccb2...........................
            ......2bcccccb2........2bcccccb2............................
            .......2bcccb2..........2bcccb2.............................
            ........2bcb2............2bcb2..............................
            .........2b2..............2b2...............................
            ..........2................2................................
            ............................................................
            ............................................................
            ............................................................
            `],
        500,
        true
        )
    } else if (info.life() == 3) {
        animation.runImageAnimation(
        player1life,
        [img`
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ......222...222........222...222........222...222...........
            .....2bbb2.2bbb2......2bbb2.2bbb2......2bbb2.2bbb2..........
            ....2bdddb2bddcb2....2bdddb2bddcb2....2bdddb2bddcb2.........
            ...2bdddddbddbccb2..2bdddddbddbccb2..2bdddddbddbccb2........
            ...2bdddddddbbccb2..2bdddddddbbccb2..2bdddddddbbccb2........
            ...2bddddddbbcccb2..2bddddddbbcccb2..2bddddddbbcccb2........
            ....2bddddbbcccb2....2bddddbbcccb2....2bddddbbcccb2.........
            .....2bbdbbcccb2......2bbdbbcccb2......2bbdbbcccb2..........
            ......2bcccccb2........2bcccccb2........2bcccccb2...........
            .......2bcccb2..........2bcccb2..........2bcccb2............
            ........2bcb2............2bcb2............2bcb2.............
            .........2b2..............2b2..............2b2..............
            ..........2................2................2...............
            ............................................................
            ............................................................
            ............................................................
            `],
        500,
        true
        )
    } else if (info.life() == 4) {
        animation.runImageAnimation(
        player1life,
        [img`
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ...222...222......222...222......222...222......222...222...
            ..2bbb2.2bbb2....2bbb2.2bbb2....2bbb2.2bbb2....2bbb2.2bbb2..
            .2bdddb2bddcb2..2bdddb2bddcb2..2bdddb2bddcb2..2bdddb2bddcb2.
            2bdddddbddbccb22bdddddbddbccb22bdddddbddbccb22bdddddbddbccb2
            2bdddddddbbccb22bdddddddbbccb22bdddddddbbccb22bdddddddbbccb2
            2bddddddbbcccb22bddddddbbcccb22bddddddbbcccb22bddddddbbcccb2
            .2bddddbbcccb2..2bddddbbcccb2..2bddddbbcccb2..2bddddbbcccb2.
            ..2bbdbbcccb2....2bbdbbcccb2....2bbdbbcccb2....2bbdbbcccb2..
            ...2bcccccb2......2bcccccb2......2bcccccb2......2bcccccb2...
            ....2bcccb2........2bcccb2........2bcccb2........2bcccb2....
            .....2bcb2..........2bcb2..........2bcb2..........2bcb2.....
            ......2b2............2b2............2b2............2b2......
            .......2..............2..............2..............2.......
            ............................................................
            ............................................................
            ............................................................
            `],
        500,
        true
        )
    } else if (info.life() == 5) {
        animation.runImageAnimation(
        player1life,
        [img`
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ..222..22.....222.222.....22..222....222..222...222..222....
            .2bbb22bb2...2bbb2bbb2...2bb22bbb2..2bbb22bbb2.2bbb22bbb2...
            2bdddbbddb2.2bdddbddcb2.2bddbbddcb2.2dddbbddcb22dddbbddcb2..
            bddddddbbcb2bdddddbbccb2bdddddbbccb2bdddddbbcc2bdddddbbcc2..
            bdddddbbccb2bdddddbcccb2bddddbbcccb2bddddbbccc2bddddbbccc2..
            2bddddbccb2.2bddddcccb2.2bdddbcccb2.2ddddbcccb22ddddbcccb2..
            .2bbdbccc2...2bbdbccb2...2bbbcccb2..2bbdbcccb2.2bbdbcccb2...
            ..22bccb2.....22bcb2......22ccb2.....22bccb2....22bccb2.....
            ....2bb2........2b2........2bb2........2bb2.......2bb2......
            .....22..........2..........22..........22.........22.......
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            `],
        500,
        true
        )
    }
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    gladiator_2,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f 6 6 6 6 f 8 f . . . 
        . . . f f 6 6 6 6 f 8 8 8 f . . 
        . . . f 6 6 6 f f d d d d f . . 
        . . . f f f f 6 6 8 8 8 8 6 f . 
        . . . f 6 8 8 8 f f f f 6 8 f . 
        . . f f f f f f f 6 6 6 f f f . 
        . . f f 6 4 4 6 8 f 4 4 6 6 f . 
        . . f 6 6 4 6 4 6 f 6 6 6 f . . 
        . . . f 6 6 6 4 6 6 6 6 f . . . 
        . . . . f f 6 6 4 4 4 d f . . . 
        . . . . . 6 8 8 d 8 8 8 f . . . 
        . . . . . 6 8 8 d 8 8 8 f . . . 
        . . . . . f 6 6 f 8 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f 6 6 6 6 f 8 f . . . 
        . . . f f 6 6 6 6 f 8 8 8 f . . 
        . . . f 6 6 6 f f d d d d f . . 
        . . . f f f 6 6 6 8 8 8 8 6 f . 
        . . . f 6 8 8 8 f f f f 6 8 f . 
        . . f f f f f f f 6 6 6 f f f . 
        . . f f 6 4 4 d 8 f 4 4 6 6 f . 
        . . f 6 6 4 6 4 1 f 6 6 6 f . . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . . . . f 4 6 6 d d d f . . . 
        . . . . . f 6 6 6 d 8 8 f . . . 
        . . . . f f f 6 6 f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f 6 6 6 6 f 8 f . . . 
        . . . f f 6 6 6 6 f 8 8 8 f . . 
        . . . f 6 6 6 f f 8 6 6 6 f . . 
        . . . f 6 f f 6 6 1 1 1 1 1 f . 
        . . . f 6 8 8 8 f f f f 6 6 f . 
        . . f f f f f f 6 6 6 6 f f f . 
        . . f f 6 4 4 6 8 f 4 4 6 6 f . 
        . . f 6 6 4 6 4 1 f 6 6 6 f . . 
        . . . f 6 6 6 4 6 6 6 6 f . . . 
        . . . . f f 6 6 4 4 4 6 f . . . 
        . . . . . 6 6 6 6 1 1 8 f . . . 
        . . . . . 6 6 6 6 1 1 1 f . . . 
        . . . . . f 6 6 f 1 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f 6 6 6 6 f 8 f . . . 
        . . . f f 6 6 6 6 f 8 8 8 f . . 
        . . . f 6 6 6 f f 6 6 6 6 f . . 
        . . . f f f f 6 6 d d d d 6 f . 
        . . . f 6 8 8 8 f f f f 6 8 f . 
        . . f f f f f f f 6 6 6 f f f . 
        . . f f 6 4 4 6 b f 4 4 6 6 f . 
        . . f 6 6 4 6 4 1 f 6 6 6 f . . 
        . . . f 6 6 6 4 6 6 6 6 f . . . 
        . . . . 6 6 6 6 4 4 4 6 f . . . 
        . . . . 6 6 6 6 8 d d d f . . . 
        . . . . f 6 6 f 4 d 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.musicofftwo, function (sprite31, otherSprite31) {
    if (musicon123 == true) {
        music.setVolume(0)
        musicon123 = false
        animation.runImageAnimation(
        musicon,
        [img`
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f 1 1 1 1 f 1 1 1 1 1 f f f 
            f f f 1 f f 1 f 1 f f f 1 f f f 
            f f f 1 f f 1 f 1 f f f 1 f f f 
            f f f 1 f f 1 f 1 f f f 1 f f f 
            f f f 1 f f 1 f 1 f f f 1 f f f 
            f f f 1 f f 1 f 1 f f f 1 f f f 
            f f f 1 f f 1 f 1 f f f 1 f f f 
            f f f 1 f f 1 f 1 f f f 1 f f f 
            f f f 1 f f 1 f 1 f f f 1 f f f 
            f f f 1 1 1 1 f 1 f f f 1 f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            `],
        500,
        true
        )
        animation.runImageAnimation(
        musicoff,
        [img`
            f f f f f f f f f f f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 f f f f f f f f f f f f 5 f 
            f 5 f 5 5 5 f 5 5 5 5 5 5 f 5 f 
            f 5 f 5 f 5 f 5 f f 5 f f f 5 f 
            f 5 f 5 f 5 f 5 f f 5 f f f 5 f 
            f 5 f 5 f 5 f 5 5 f 5 5 f f 5 f 
            f 5 f 5 f 5 f 5 f f 5 f f f 5 f 
            f 5 f 5 f 5 f 5 f f 5 f f f 5 f 
            f 5 f 5 f 5 f 5 f f 5 f f f 5 f 
            f 5 f 5 f 5 f 5 f f 5 f f f 5 f 
            f 5 f 5 f 5 f 5 f f 5 f f f 5 f 
            f 5 f 5 5 5 f 5 f f 5 f f f 5 f 
            f 5 f f f f f f f f f f f f 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f f f f f f f f f f f f f f f f 
            `],
        500,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.player2, SpriteKind.button3, function (sprite18, otherSprite18) {
    if (player2online == true) {
        controller.player2.moveSprite(gladiator_2, 35, 35)
        gladiator_2.setPosition(80, 100)
        Gladiator.setPosition(50, 100)
        game.splash("Hard")
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite28, otherSprite28) {
    if (canAttack == true && controller.A.isPressed()) {
        info.changeScoreBy(1)
        myEnemy.setPosition(randint(5, 160), randint(5, 110))
    } else {
        info.changeLifeBy(-1)
        myEnemy.setPosition(randint(5, 160), randint(5, 110))
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    canAttack = true
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.player2addonelife, function (sprite21, otherSprite21) {
    if (player2online == true) {
        if (info.player2.life() < 5) {
            info.player2.changeLifeBy(1)
            pause(1000)
        }
        if (info.player2.life() == 1) {
            animation.runImageAnimation(
            player2life,
            [img`
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                ......222...222.............................................
                .....2bbb2.2bbb2............................................
                ....2bdddb2bddcb2...........................................
                ...2bdddddbddbccb2..........................................
                ...2bdddddddbbccb2..........................................
                ...2bddddddbbcccb2..........................................
                ....2bddddbbcccb2...........................................
                .....2bbdbbcccb2............................................
                ......2bcccccb2.............................................
                .......2bcccb2..............................................
                ........2bcb2...............................................
                .........2b2................................................
                ..........2.................................................
                ............................................................
                ............................................................
                ............................................................
                `],
            500,
            true
            )
        } else if (info.player2.life() == 2) {
            animation.runImageAnimation(
            player2life,
            [img`
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                ......222...222........222...222............................
                .....2bbb2.2bbb2......2bbb2.2bbb2...........................
                ....2bdddb2bddcb2....2bdddb2bddcb2..........................
                ...2bdddddbddbccb2..2bdddddbddbccb2.........................
                ...2bdddddddbbccb2..2bdddddddbbccb2.........................
                ...2bddddddbbcccb2..2bddddddbbcccb2.........................
                ....2bddddbbcccb2....2bddddbbcccb2..........................
                .....2bbdbbcccb2......2bbdbbcccb2...........................
                ......2bcccccb2........2bcccccb2............................
                .......2bcccb2..........2bcccb2.............................
                ........2bcb2............2bcb2..............................
                .........2b2..............2b2...............................
                ..........2................2................................
                ............................................................
                ............................................................
                ............................................................
                `],
            500,
            true
            )
        } else if (info.player2.life() == 3) {
            animation.runImageAnimation(
            player2life,
            [img`
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                ......222...222........222...222........222...222...........
                .....2bbb2.2bbb2......2bbb2.2bbb2......2bbb2.2bbb2..........
                ....2bdddb2bddcb2....2bdddb2bddcb2....2bdddb2bddcb2.........
                ...2bdddddbddbccb2..2bdddddbddbccb2..2bdddddbddbccb2........
                ...2bdddddddbbccb2..2bdddddddbbccb2..2bdddddddbbccb2........
                ...2bddddddbbcccb2..2bddddddbbcccb2..2bddddddbbcccb2........
                ....2bddddbbcccb2....2bddddbbcccb2....2bddddbbcccb2.........
                .....2bbdbbcccb2......2bbdbbcccb2......2bbdbbcccb2..........
                ......2bcccccb2........2bcccccb2........2bcccccb2...........
                .......2bcccb2..........2bcccb2..........2bcccb2............
                ........2bcb2............2bcb2............2bcb2.............
                .........2b2..............2b2..............2b2..............
                ..........2................2................2...............
                ............................................................
                ............................................................
                ............................................................
                `],
            500,
            true
            )
        } else if (info.player2.life() == 4) {
            animation.runImageAnimation(
            player2life,
            [img`
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                ...222...222......222...222......222...222......222...222...
                ..2bbb2.2bbb2....2bbb2.2bbb2....2bbb2.2bbb2....2bbb2.2bbb2..
                .2bdddb2bddcb2..2bdddb2bddcb2..2bdddb2bddcb2..2bdddb2bddcb2.
                2bdddddbddbccb22bdddddbddbccb22bdddddbddbccb22bdddddbddbccb2
                2bdddddddbbccb22bdddddddbbccb22bdddddddbbccb22bdddddddbbccb2
                2bddddddbbcccb22bddddddbbcccb22bddddddbbcccb22bddddddbbcccb2
                .2bddddbbcccb2..2bddddbbcccb2..2bddddbbcccb2..2bddddbbcccb2.
                ..2bbdbbcccb2....2bbdbbcccb2....2bbdbbcccb2....2bbdbbcccb2..
                ...2bcccccb2......2bcccccb2......2bcccccb2......2bcccccb2...
                ....2bcccb2........2bcccb2........2bcccb2........2bcccb2....
                .....2bcb2..........2bcb2..........2bcb2..........2bcb2.....
                ......2b2............2b2............2b2............2b2......
                .......2..............2..............2..............2.......
                ............................................................
                ............................................................
                ............................................................
                `],
            500,
            true
            )
        } else if (info.player2.life() == 5) {
            animation.runImageAnimation(
            player2life,
            [img`
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                ..222..22.....222.222.....22..222....222..222...222..222....
                .2bbb22bb2...2bbb2bbb2...2bb22bbb2..2bbb22bbb2.2bbb22bbb2...
                2bdddbbddb2.2bdddbddcb2.2bddbbddcb2.2dddbbddcb22dddbbddcb2..
                bddddddbbcb2bdddddbbccb2bdddddbbccb2bdddddbbcc2bdddddbbcc2..
                bdddddbbccb2bdddddbcccb2bddddbbcccb2bddddbbccc2bddddbbccc2..
                2bddddbccb2.2bddddcccb2.2bdddbcccb2.2ddddbcccb22ddddbcccb2..
                .2bbdbccc2...2bbdbccb2...2bbbcccb2..2bbdbcccb2.2bbdbcccb2...
                ..22bccb2.....22bcb2......22ccb2.....22bccb2....22bccb2.....
                ....2bb2........2b2........2bb2........2bb2.......2bb2......
                .....22..........2..........22..........22.........22.......
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                `],
            500,
            true
            )
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.button1, function (sprite41, otherSprite41) {
    controller.moveSprite(Gladiator, 50, 50)
    Gladiator.setPosition(50, 100)
    if (player2online == true) {
        gladiator_2.setPosition(80, 100)
    }
    game.splash("Easy")
})
sprites.onOverlap(SpriteKind.player2, SpriteKind.button4back, function (sprite40, otherSprite40) {
    scene.setBackgroundImage(img`
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffffffffff6666666666666
        66666666666666666ffffffffffffff66666fffff66666ffffffffffffffff66666ffffffffffffff66666fffffffff66666fffffffffffffffff666666666666666f2222222222222f6666666666666
        66666666666666666f222222222222f66666f222f66666f22222222222222f66666f222222222222f66666f2222222f66666f222222222222222f66666666666666f22222222222222f6666666666666
        66666666666666666f222222222222f66666f222f66666f22222222222222f66666f222222222222f66666f2222222f66666f222222222222222f66666666666666f22222222222222f6666666666666
        66666666666666666f222222222222f66666f222f66666f22222222222222f66666f222222222222f66666f2222222f66666f222222222222222f66666666666fff222222222222222f6666666666666
        66666666666666666f222ffffffffff66666f222f66666f222ffffffff222f66666f222222222222fff666fff222fff66666f222222222222222f6666666666f222222222222222222f6666666666666
        66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222fffffff222f66666f222f6666666f222222222222222f6666666666f222222222222222222f6666666666666
        66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222fffffff2222f66666666ff2222222222222222222f6666666666666
        66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f222222222222222222222f6666666666666
        66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f222222222222222222222f6666666666666
        66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f222222222222222222222f6666666666666
        66666666666666666f222f6666fffff66666f222f66666f222ffffffff222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f22222222fff2222222222f6666666666666
        66666666666666666f222f6666f222f66666f222f66666f22222222222222f66666f2222f66666f222f66666f222f6666666f2222fffffff2222f6666666f2222222f66f2222222222f6666666666666
        66666666666666666f222f6666f222f66666f222f66666f22222222222222f66666f2222f66666f222f66666f222f6666666f222222222222222f6666666f2222222f66f2222222222f6666666666666
        66666666666666666f222f6666f222f66666f222f66666f22222222222222f66666f2222f66666f222f66666f222f6666666f222222222222222f6666666f222222f666f2222222222f6666666666666
        66666666666666666f222ffffff222f66666f222f66666f222ffffffff222f66666f2222f66666f222f66666f222f6666666f222222222222222f6666666f22222ff666f2222222222f6666666666666
        66666666666666666f222222222222f66666f222fff666f222f666666f222f66666f2222fffffff2fff666fff222fff66666f222fffffffff222f6666666f2222f66666f2222222222f6666666666666
        66666666666666666f222222222222f66666f22222f666f222f666666f222f66666f222222222222f66666f2222222f66666f222f6666666f222f6666666f2222f66666f2222222222f6666666666666
        66666666666666666f222222222222f66666f22222f666f222f666666f222f66666f222222222222f66666f2222222f66666f222f6666666f222f6666666fffff666666f2222222222f6666666666666
        66666666666666666f222222222222f66666f22222f666f222f666666f222f66666f222222222222f66666f2222222f66666f222f6666666f222f666666666666666666f2222222222f6666666666666
        66666666666666666ffffffffffffff66666fffffff666fffff666666fffff66666ffffffffffffff66666fffffffff66666fffff6666666fffff666666666666666666f2222222222f6666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
        6666666666666666666666666666666666666666666666666666666666ffffffffffffffffff66666ffffffffffffffff6666ffffffffffffffff666666666666666666f2222222222f6666666666666
        6666666666666666666666666666666666666666666666666666666666f2222222222222222f66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        6666666666666666666666666666666666666666666666666666666666f2222222222222222f66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        6666666666666666666666666666666666666666666666666666666666f2222222222222222f66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        6666666666666666666666666666666666666666666666666666666666ffffffff222fffffff66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222ffffff2222f6666f2222ffffff2222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f6666f2222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f6666f2222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222ffffff2222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222fffff22222f666666666666666666f2222222222f6666666666666
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f666f2222f6666666666666666666f2222222222f6666666666666
        666666666f666f666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f666f2222f6666666666666666666f2222222222ffffffffffff66
        66666666f66666f66666666666666666666666666666666666666666666666666f222f66666666666f2222ffffff2222f6666f2222f666fff22fff666666ffffffffffff22222222222222222222ff66
        66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f22222222222222f6666f2222f66666f2222f666666f2222222222222222222222222222222f666
        6666666666fff6666666ff6fff6fff666ff6f666f6fff6fff6ff6666666666666f222f66666666666f22222222222222f6666f2222f666666f222f666666f2222222222222222222222222222222f666
        6666666666f6f6666666f66f6f6f6f666f66f666f6f6f6f6f6f6f666666666666f222f66666666666f22222222222222f6666f2222f666666f222f666666f2222222222222222222222222222222f666
        6666666666fff6666666ff6f6f6ff66666f6f6f6f6f6f6ff66f6f666666666666fffff66666666666ffffffffffffffff6666ffffff666666fffff666666fff222222222222222222222222222fff666
        6666666666f6f6666666f66fff6f6f666ff6fffff6fff6f6f6ff6666666666666666666666666666666666666666666666666666666666666666666666666ff22222222222222222222fffffffff6666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222222222222222222f666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222222222222222222f666666666666
        66666666666666666666fff6fff6fff6ff6f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f22222222222fff2222222f666666666666
        66666666666666666666f6f66f666f66f66ff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffff2222222ff6ff222222f666666666666
        66666666666666666666fff66f666f66f66f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222ff666ffff2fff666666666666
        6666666666f66f666666f6f66f666f66ff6f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222ff666ffffff66666666666666
        666666666f6666f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2f222ff666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffff6666666666666666666666666
        66666666666f6f666666ff6fff6fff666f666fff6f666f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666f6666666f66f6f6f6f666ff66f6f6f666f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666f6666666ff6f6f6ff6666f6f6f6f6f6f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666666666f6f666666f66fff6f6f666ff66fff6fffff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666666666666666666fff6fff6fff6ff6f6f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666666666666666666f6f66f666f66f66ff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666666666666666666fff66f666f66f66f6f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666666666666666666f6f66f666f66ff6f6f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        `)
    easy.setPosition(85, 90)
    hard.setPosition(130, 90)
    difficulty1.setPosition(35, 90)
    Settings1.setPosition(35, 38)
    Gladiator.setPosition(119, 29)
    sprites.destroy(hard3)
    sprites.destroy(easy1)
    sprites.destroy(medium2)
    sprites.destroy(backbutton)
    if (player2online == true) {
        gladiator_2.setPosition(120, 20)
    }
})
controller.player2.onEvent(ControllerEvent.Disconnected, function () {
    player2online = false
})
sprites.onOverlap(SpriteKind.player2, SpriteKind.musicofftwo, function (sprite42, otherSprite42) {
    if (musicon123 == true) {
        music.setVolume(0)
        musicon123 = false
        animation.runImageAnimation(
        musicon,
        [img`
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f 1 1 1 1 f 1 1 1 1 1 f f f 
            f f f 1 f f 1 f 1 f f f 1 f f f 
            f f f 1 f f 1 f 1 f f f 1 f f f 
            f f f 1 f f 1 f 1 f f f 1 f f f 
            f f f 1 f f 1 f 1 f f f 1 f f f 
            f f f 1 f f 1 f 1 f f f 1 f f f 
            f f f 1 f f 1 f 1 f f f 1 f f f 
            f f f 1 f f 1 f 1 f f f 1 f f f 
            f f f 1 f f 1 f 1 f f f 1 f f f 
            f f f 1 1 1 1 f 1 f f f 1 f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            `],
        500,
        true
        )
        animation.runImageAnimation(
        musicoff,
        [img`
            f f f f f f f f f f f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 f f f f f f f f f f f f 5 f 
            f 5 f 5 5 5 f 5 5 5 5 5 5 f 5 f 
            f 5 f 5 f 5 f 5 f f 5 f f f 5 f 
            f 5 f 5 f 5 f 5 f f 5 f f f 5 f 
            f 5 f 5 f 5 f 5 5 f 5 5 f f 5 f 
            f 5 f 5 f 5 f 5 f f 5 f f f 5 f 
            f 5 f 5 f 5 f 5 f f 5 f f f 5 f 
            f 5 f 5 f 5 f 5 f f 5 f f f 5 f 
            f 5 f 5 f 5 f 5 f f 5 f f f 5 f 
            f 5 f 5 f 5 f 5 f f 5 f f f 5 f 
            f 5 f 5 5 5 f 5 f f 5 f f f 5 f 
            f 5 f f f f f f f f f f f f 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f f f f f f f f f f f f f f f f 
            `],
        500,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.play, function (sprite15, otherSprite15) {
    if (player2online == true) {
        easy.setPosition(160, 160)
        hard.setPosition(160, 160)
        difficulty1.setPosition(160, 160)
        Settings1.setPosition(160, 160)
        scene.setBackgroundImage(img`
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            deddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddeddddddddddddd
            dddddddddddddddddddddeddddddddddddddddddddeddddddddddedddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddeddddddddddeddddddddedddddddddddddddddddddddddddddddd
            dddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddeddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddedddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddeddddddedddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeddddddddddddddddddddd
            dddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddedddddedddddddddddddedddddddddddddddddddddddddddeeddddddddddedddddddd
            dddedddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddedddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddeddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddd
            ddddddddedddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddeddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddedddddddddedddddeddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddd
            dddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddeddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddedddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddeddddddedddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddeddddddddddddddeddddeddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddeddddddddddddddddddddddddddddddddddddddddddddeddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddeddddddddddddddddedddddddddddddddddddddddddddddd
            ddddedddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddedddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddeddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddd
            dddddddddddddddddedddddddddddddddddddddddddddddddddddeddddddddddddddddddddddedddddddddddeddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddd
            ddddedddddddddddddddddddddddddddedddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddedddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddeddddedddddddddddddddddddddddddddddddddddddddddeddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddeddeddddddddddd
            dddddddddddddddddddddddddddedddddddddeddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddeddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddedddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddeddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddeddddddddddeddddd
            dddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddd
            ddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddd
            dddddddddddddddddddddddeddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddeddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddd
            ddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddedddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddd
            ddddddddddddddddddddddddddddddddddddddddedddddddddddddedddddddddedddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddedddddd
            dddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddedddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddedddddddddddddeddddddddddddddd
            ddddddddddddddddddeddddddddeddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddedddddddddddddddd
            ddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddd
            ddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddeddddddddddddddddddddeddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddeddddddddddddddddddeddddddddddddddddddddddddddddddddddddeddddddedddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddedddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddededddddddddddddddddddddddddddddddddddddddddedddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddd
            ddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddedddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddeddddeddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddeddddddddddddddddddeddddddddddddeddddddddddddddddeddddddddddddddddddddddddddddddedddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            `)
    } else {
        Gladiator.setPosition(119, 29)
        game.splash("Need two players for multiplayer.")
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Gladiator,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f b b f f f . . . . 
        . . . f f f b b b b f f f . . . 
        . . f f f d d b b d d f f f . . 
        . . f f d b b b b b b d d f . . 
        . . f d b f f f f f f b d f . . 
        . . f f f f d d d d f f f f . . 
        . f f d f b f 4 4 f b f d f f . 
        . f d d 4 1 f d d f 1 4 d d f . 
        . . f d d d d d d d d d d f . . 
        . . . f d d 4 4 4 4 d d f . . . 
        . . d 4 f b b b b b b f 4 d . . 
        . . 4 d f b b b b b b f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f b b f f f . . . . 
        . . . f f f b b b b f f f . . . 
        . . f f f d d d d d d f f f . . 
        . . f f d b b b b b b d d f . . 
        . f f d b f f f f f b b d f f . 
        . f f f f f d d d d f f f f f . 
        . . f d f b f 4 4 f b f d f . . 
        . . f d 4 1 f d d f 1 4 d f . . 
        . . . f d 4 d d d d 4 d f d . . 
        . . f d f b b b b d d d 4 d . . 
        . . d 4 f b b b b d d d d . . . 
        . . . . f 4 4 5 5 f d d . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f b b f f f . . . . 
        . . . f f f b b b b f f f . . . 
        . . f f f d d d d d d f f f . . 
        . . f f d b b b b b b d d f . . 
        . . f d b f f f f f f b d f . . 
        . . f f f f d d d d f f f f . . 
        . f f d f b f 4 4 f b f d f f . 
        . f d d 4 1 f d d f 1 4 d d f . 
        . . f d d d d d d d d d d f . . 
        . . . f d d 4 4 4 4 d d f . . . 
        . . d 4 f b b b b b b f 4 d . . 
        . . 4 d f b b b b b b f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f b b f f f . . . . 
        . . . f f f b b b b f f f . . . 
        . . f f f d d d d d d f f f . . 
        . . f d d b b b b b b d f f . . 
        . f f d b f f f f f f b d f f . 
        . f f f f f d d d d f f f f f . 
        . . f d f b f 4 4 f b f d f . . 
        . . f d 4 1 f d d f 1 4 d f . . 
        . . d f d 4 d d d d 4 d f . . . 
        . . d 4 d d b b b b b f d f . . 
        . . . d d d d b b b b f 4 d . . 
        . . . . d d f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.player2, SpriteKind.player2subbtractonelife, function (sprite39, otherSprite39) {
    if (player2online == true) {
        if (info.player2.life() > 1) {
            info.player2.changeLifeBy(-1)
            pause(1000)
        }
        if (info.player2.life() == 1) {
            animation.runImageAnimation(
            player2life,
            [img`
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                ......222...222.............................................
                .....2bbb2.2bbb2............................................
                ....2bdddb2bddcb2...........................................
                ...2bdddddbddbccb2..........................................
                ...2bdddddddbbccb2..........................................
                ...2bddddddbbcccb2..........................................
                ....2bddddbbcccb2...........................................
                .....2bbdbbcccb2............................................
                ......2bcccccb2.............................................
                .......2bcccb2..............................................
                ........2bcb2...............................................
                .........2b2................................................
                ..........2.................................................
                ............................................................
                ............................................................
                ............................................................
                `],
            500,
            true
            )
        } else if (info.player2.life() == 2) {
            animation.runImageAnimation(
            player2life,
            [img`
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                ......222...222........222...222............................
                .....2bbb2.2bbb2......2bbb2.2bbb2...........................
                ....2bdddb2bddcb2....2bdddb2bddcb2..........................
                ...2bdddddbddbccb2..2bdddddbddbccb2.........................
                ...2bdddddddbbccb2..2bdddddddbbccb2.........................
                ...2bddddddbbcccb2..2bddddddbbcccb2.........................
                ....2bddddbbcccb2....2bddddbbcccb2..........................
                .....2bbdbbcccb2......2bbdbbcccb2...........................
                ......2bcccccb2........2bcccccb2............................
                .......2bcccb2..........2bcccb2.............................
                ........2bcb2............2bcb2..............................
                .........2b2..............2b2...............................
                ..........2................2................................
                ............................................................
                ............................................................
                ............................................................
                `],
            500,
            true
            )
        } else if (info.player2.life() == 3) {
            animation.runImageAnimation(
            player2life,
            [img`
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                ......222...222........222...222........222...222...........
                .....2bbb2.2bbb2......2bbb2.2bbb2......2bbb2.2bbb2..........
                ....2bdddb2bddcb2....2bdddb2bddcb2....2bdddb2bddcb2.........
                ...2bdddddbddbccb2..2bdddddbddbccb2..2bdddddbddbccb2........
                ...2bdddddddbbccb2..2bdddddddbbccb2..2bdddddddbbccb2........
                ...2bddddddbbcccb2..2bddddddbbcccb2..2bddddddbbcccb2........
                ....2bddddbbcccb2....2bddddbbcccb2....2bddddbbcccb2.........
                .....2bbdbbcccb2......2bbdbbcccb2......2bbdbbcccb2..........
                ......2bcccccb2........2bcccccb2........2bcccccb2...........
                .......2bcccb2..........2bcccb2..........2bcccb2............
                ........2bcb2............2bcb2............2bcb2.............
                .........2b2..............2b2..............2b2..............
                ..........2................2................2...............
                ............................................................
                ............................................................
                ............................................................
                `],
            500,
            true
            )
        } else if (info.player2.life() == 4) {
            animation.runImageAnimation(
            player2life,
            [img`
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                ...222...222......222...222......222...222......222...222...
                ..2bbb2.2bbb2....2bbb2.2bbb2....2bbb2.2bbb2....2bbb2.2bbb2..
                .2bdddb2bddcb2..2bdddb2bddcb2..2bdddb2bddcb2..2bdddb2bddcb2.
                2bdddddbddbccb22bdddddbddbccb22bdddddbddbccb22bdddddbddbccb2
                2bdddddddbbccb22bdddddddbbccb22bdddddddbbccb22bdddddddbbccb2
                2bddddddbbcccb22bddddddbbcccb22bddddddbbcccb22bddddddbbcccb2
                .2bddddbbcccb2..2bddddbbcccb2..2bddddbbcccb2..2bddddbbcccb2.
                ..2bbdbbcccb2....2bbdbbcccb2....2bbdbbcccb2....2bbdbbcccb2..
                ...2bcccccb2......2bcccccb2......2bcccccb2......2bcccccb2...
                ....2bcccb2........2bcccb2........2bcccb2........2bcccb2....
                .....2bcb2..........2bcb2..........2bcb2..........2bcb2.....
                ......2b2............2b2............2b2............2b2......
                .......2..............2..............2..............2.......
                ............................................................
                ............................................................
                ............................................................
                `],
            500,
            true
            )
        } else if (info.player2.life() == 5) {
            animation.runImageAnimation(
            player2life,
            [img`
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                ..222..22.....222.222.....22..222....222..222...222..222....
                .2bbb22bb2...2bbb2bbb2...2bb22bbb2..2bbb22bbb2.2bbb22bbb2...
                2bdddbbddb2.2bdddbddcb2.2bddbbddcb2.2dddbbddcb22dddbbddcb2..
                bddddddbbcb2bdddddbbccb2bdddddbbccb2bdddddbbcc2bdddddbbcc2..
                bdddddbbccb2bdddddbcccb2bddddbbcccb2bddddbbccc2bddddbbccc2..
                2bddddbccb2.2bddddcccb2.2bdddbcccb2.2ddddbcccb22ddddbcccb2..
                .2bbdbccc2...2bbdbccb2...2bbbcccb2..2bbdbcccb2.2bbdbcccb2...
                ..22bccb2.....22bcb2......22ccb2.....22bccb2....22bccb2.....
                ....2bb2........2b2........2bb2........2bb2.......2bb2......
                .....22..........2..........22..........22.........22.......
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                `],
            500,
            true
            )
        }
    }
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Released, function () {
    can_attack_3 = true
})
info.onLifeZero(function () {
    if (myenemy2.x < 150 || myEnemy.x < 150) {
        if (player2online == false) {
            scene.setBackgroundImage(img`
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffffffffff6666666666666
                66666666666666666ffffffffffffff66666fffff66666ffffffffffffffff66666ffffffffffffff66666fffffffff66666fffffffffffffffff666666666666666f2222222222222f6666666666666
                66666666666666666f222222222222f66666f222f66666f22222222222222f66666f222222222222f66666f2222222f66666f222222222222222f66666666666666f22222222222222f6666666666666
                66666666666666666f222222222222f66666f222f66666f22222222222222f66666f222222222222f66666f2222222f66666f222222222222222f66666666666666f22222222222222f6666666666666
                66666666666666666f222222222222f66666f222f66666f22222222222222f66666f222222222222f66666f2222222f66666f222222222222222f66666666666fff222222222222222f6666666666666
                66666666666666666f222ffffffffff66666f222f66666f222ffffffff222f66666f222222222222fff666fff222fff66666f222222222222222f6666666666f222222222222222222f6666666666666
                66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222fffffff222f66666f222f6666666f222222222222222f6666666666f222222222222222222f6666666666666
                66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222fffffff2222f66666666ff2222222222222222222f6666666666666
                66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f222222222222222222222f6666666666666
                66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f222222222222222222222f6666666666666
                66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f222222222222222222222f6666666666666
                66666666666666666f222f6666fffff66666f222f66666f222ffffffff222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f22222222fff2222222222f6666666666666
                66666666666666666f222f6666f222f66666f222f66666f22222222222222f66666f2222f66666f222f66666f222f6666666f2222fffffff2222f6666666f2222222f66f2222222222f6666666666666
                66666666666666666f222f6666f222f66666f222f66666f22222222222222f66666f2222f66666f222f66666f222f6666666f222222222222222f6666666f2222222f66f2222222222f6666666666666
                66666666666666666f222f6666f222f66666f222f66666f22222222222222f66666f2222f66666f222f66666f222f6666666f222222222222222f6666666f222222f666f2222222222f6666666666666
                66666666666666666f222ffffff222f66666f222f66666f222ffffffff222f66666f2222f66666f222f66666f222f6666666f222222222222222f6666666f22222ff666f2222222222f6666666666666
                66666666666666666f222222222222f66666f222fff666f222f666666f222f66666f2222fffffff2fff666fff222fff66666f222fffffffff222f6666666f2222f66666f2222222222f6666666666666
                66666666666666666f222222222222f66666f22222f666f222f666666f222f66666f222222222222f66666f2222222f66666f222f6666666f222f6666666f2222f66666f2222222222f6666666666666
                66666666666666666f222222222222f66666f22222f666f222f666666f222f66666f222222222222f66666f2222222f66666f222f6666666f222f6666666fffff666666f2222222222f6666666666666
                66666666666666666f222222222222f66666f22222f666f222f666666f222f66666f222222222222f66666f2222222f66666f222f6666666f222f666666666666666666f2222222222f6666666666666
                66666666666666666ffffffffffffff66666fffffff666fffff666666fffff66666ffffffffffffff66666fffffffff66666fffff6666666fffff666666666666666666f2222222222f6666666666666
                666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
                666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
                666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
                666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
                6666666666666666666666666666666666666666666666666666666666ffffffffffffffffff66666ffffffffffffffff6666ffffffffffffffff666666666666666666f2222222222f6666666666666
                6666666666666666666666666666666666666666666666666666666666f2222222222222222f66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
                6666666666666666666666666666666666666666666666666666666666f2222222222222222f66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
                6666666666666666666666666666666666666666666666666666666666f2222222222222222f66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
                6666666666666666666666666666666666666666666666666666666666ffffffff222fffffff66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222ffffff2222f6666f2222ffffff2222f666666666666666666f2222222222f6666666666666
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f6666f2222f666666666666666666f2222222222f6666666666666
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f6666f2222f666666666666666666f2222222222f6666666666666
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222ffffff2222f666666666666666666f2222222222f6666666666666
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222fffff22222f666666666666666666f2222222222f6666666666666
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f666f2222f6666666666666666666f2222222222f6666666666666
                666666666f666f666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f666f2222f6666666666666666666f2222222222ffffffffffff66
                66666666f66666f66666666666666666666666666666666666666666666666666f222f66666666666f2222ffffff2222f6666f2222f666fff22fff666666ffffffffffff22222222222222222222ff66
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f22222222222222f6666f2222f66666f2222f666666f2222222222222222222222222222222f666
                6666666666fff6666666ff6fff6fff666ff6f666f6fff6fff6ff6666666666666f222f66666666666f22222222222222f6666f2222f666666f222f666666f2222222222222222222222222222222f666
                6666666666f6f6666666f66f6f6f6f666f66f666f6f6f6f6f6f6f666666666666f222f66666666666f22222222222222f6666f2222f666666f222f666666f2222222222222222222222222222222f666
                6666666666fff6666666ff6f6f6ff66666f6f6f6f6f6f6ff66f6f666666666666fffff66666666666ffffffffffffffff6666ffffff666666fffff666666fff222222222222222222222222222fff666
                6666666666f6f6666666f66fff6f6f666ff6fffff6fff6f6f6ff6666666666666666666666666666666666666666666666666666666666666666666666666ff22222222222222222222fffffffff6666
                66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222222222222222222f666666666666
                66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222222222222222222f666666666666
                66666666666666666666fff6fff6fff6ff6f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f22222222222fff2222222f666666666666
                66666666666666666666f6f66f666f66f66ff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffff2222222ff6ff222222f666666666666
                66666666666666666666fff66f666f66f66f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222ff666ffff2fff666666666666
                6666666666f66f666666f6f66f666f66ff6f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222ff666ffffff66666666666666
                666666666f6666f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2f222ff666666666666666666666666
                66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffff6666666666666666666666666
                66666666666f6f666666ff6fff6fff666f666fff6f666f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                666666666666f6666666f66f6f6f6f666ff66f6f6f666f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                666666666666f6666666ff6f6f6ff6666f6f6f6f6f6f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                66666666666f6f666666f66fff6f6f666ff66fff6fffff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                66666666666666666666fff6fff6fff6ff6f6f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                66666666666666666666f6f66f666f66f66ff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                66666666666666666666fff66f666f66f66f6f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                66666666666666666666f6f66f666f66ff6f6f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                `)
            easy.setPosition(80, 90)
            hard.setPosition(125, 90)
            difficulty1.setPosition(35, 90)
            Settings1.setPosition(35, 38)
            Gladiator.setPosition(80, 20)
            myenemy2.unfollow()
            myEnemy.unfollow()
            myenemy2.setPosition(160, 160)
            myEnemy.setPosition(160, 160)
            sprites.destroyAllSpritesOfKind(SpriteKind.killerperson)
            info.setLife(3)
            game.splash(info.score())
            info.setScore(0)
        } else if (info.player2.life() == 0) {
            scene.setBackgroundImage(img`
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffffffffff6666666666666
                66666666666666666ffffffffffffff66666fffff66666ffffffffffffffff66666ffffffffffffff66666fffffffff66666fffffffffffffffff666666666666666f2222222222222f6666666666666
                66666666666666666f222222222222f66666f222f66666f22222222222222f66666f222222222222f66666f2222222f66666f222222222222222f66666666666666f22222222222222f6666666666666
                66666666666666666f222222222222f66666f222f66666f22222222222222f66666f222222222222f66666f2222222f66666f222222222222222f66666666666666f22222222222222f6666666666666
                66666666666666666f222222222222f66666f222f66666f22222222222222f66666f222222222222f66666f2222222f66666f222222222222222f66666666666fff222222222222222f6666666666666
                66666666666666666f222ffffffffff66666f222f66666f222ffffffff222f66666f222222222222fff666fff222fff66666f222222222222222f6666666666f222222222222222222f6666666666666
                66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222fffffff222f66666f222f6666666f222222222222222f6666666666f222222222222222222f6666666666666
                66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222fffffff2222f66666666ff2222222222222222222f6666666666666
                66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f222222222222222222222f6666666666666
                66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f222222222222222222222f6666666666666
                66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f222222222222222222222f6666666666666
                66666666666666666f222f6666fffff66666f222f66666f222ffffffff222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f22222222fff2222222222f6666666666666
                66666666666666666f222f6666f222f66666f222f66666f22222222222222f66666f2222f66666f222f66666f222f6666666f2222fffffff2222f6666666f2222222f66f2222222222f6666666666666
                66666666666666666f222f6666f222f66666f222f66666f22222222222222f66666f2222f66666f222f66666f222f6666666f222222222222222f6666666f2222222f66f2222222222f6666666666666
                66666666666666666f222f6666f222f66666f222f66666f22222222222222f66666f2222f66666f222f66666f222f6666666f222222222222222f6666666f222222f666f2222222222f6666666666666
                66666666666666666f222ffffff222f66666f222f66666f222ffffffff222f66666f2222f66666f222f66666f222f6666666f222222222222222f6666666f22222ff666f2222222222f6666666666666
                66666666666666666f222222222222f66666f222fff666f222f666666f222f66666f2222fffffff2fff666fff222fff66666f222fffffffff222f6666666f2222f66666f2222222222f6666666666666
                66666666666666666f222222222222f66666f22222f666f222f666666f222f66666f222222222222f66666f2222222f66666f222f6666666f222f6666666f2222f66666f2222222222f6666666666666
                66666666666666666f222222222222f66666f22222f666f222f666666f222f66666f222222222222f66666f2222222f66666f222f6666666f222f6666666fffff666666f2222222222f6666666666666
                66666666666666666f222222222222f66666f22222f666f222f666666f222f66666f222222222222f66666f2222222f66666f222f6666666f222f666666666666666666f2222222222f6666666666666
                66666666666666666ffffffffffffff66666fffffff666fffff666666fffff66666ffffffffffffff66666fffffffff66666fffff6666666fffff666666666666666666f2222222222f6666666666666
                666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
                666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
                666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
                666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
                6666666666666666666666666666666666666666666666666666666666ffffffffffffffffff66666ffffffffffffffff6666ffffffffffffffff666666666666666666f2222222222f6666666666666
                6666666666666666666666666666666666666666666666666666666666f2222222222222222f66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
                6666666666666666666666666666666666666666666666666666666666f2222222222222222f66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
                6666666666666666666666666666666666666666666666666666666666f2222222222222222f66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
                6666666666666666666666666666666666666666666666666666666666ffffffff222fffffff66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222ffffff2222f6666f2222ffffff2222f666666666666666666f2222222222f6666666666666
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f6666f2222f666666666666666666f2222222222f6666666666666
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f6666f2222f666666666666666666f2222222222f6666666666666
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222ffffff2222f666666666666666666f2222222222f6666666666666
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222fffff22222f666666666666666666f2222222222f6666666666666
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f666f2222f6666666666666666666f2222222222f6666666666666
                666666666f666f666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f666f2222f6666666666666666666f2222222222ffffffffffff66
                66666666f66666f66666666666666666666666666666666666666666666666666f222f66666666666f2222ffffff2222f6666f2222f666fff22fff666666ffffffffffff22222222222222222222ff66
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f22222222222222f6666f2222f66666f2222f666666f2222222222222222222222222222222f666
                6666666666fff6666666ff6fff6fff666ff6f666f6fff6fff6ff6666666666666f222f66666666666f22222222222222f6666f2222f666666f222f666666f2222222222222222222222222222222f666
                6666666666f6f6666666f66f6f6f6f666f66f666f6f6f6f6f6f6f666666666666f222f66666666666f22222222222222f6666f2222f666666f222f666666f2222222222222222222222222222222f666
                6666666666fff6666666ff6f6f6ff66666f6f6f6f6f6f6ff66f6f666666666666fffff66666666666ffffffffffffffff6666ffffff666666fffff666666fff222222222222222222222222222fff666
                6666666666f6f6666666f66fff6f6f666ff6fffff6fff6f6f6ff6666666666666666666666666666666666666666666666666666666666666666666666666ff22222222222222222222fffffffff6666
                66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222222222222222222f666666666666
                66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222222222222222222f666666666666
                66666666666666666666fff6fff6fff6ff6f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f22222222222fff2222222f666666666666
                66666666666666666666f6f66f666f66f66ff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffff2222222ff6ff222222f666666666666
                66666666666666666666fff66f666f66f66f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222ff666ffff2fff666666666666
                6666666666f66f666666f6f66f666f66ff6f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222ff666ffffff66666666666666
                666666666f6666f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2f222ff666666666666666666666666
                66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffff6666666666666666666666666
                66666666666f6f666666ff6fff6fff666f666fff6f666f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                666666666666f6666666f66f6f6f6f666ff66f6f6f666f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                666666666666f6666666ff6f6f6ff6666f6f6f6f6f6f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                66666666666f6f666666f66fff6f6f666ff66fff6fffff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                66666666666666666666fff6fff6fff6ff6f6f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                66666666666666666666f6f66f666f66f66ff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                66666666666666666666fff66f666f66f66f6f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                66666666666666666666f6f66f666f66ff6f6f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                `)
            Gladiator.setVelocity(1, 0)
            Gladiator.setVelocity(0, 0)
            gladiator_2.setVelocity(0, 0)
            gladiator_2.setFlag(SpriteFlag.Invisible, false)
            Gladiator.setFlag(SpriteFlag.Invisible, false)
            Gladiator.setPosition(80, 20)
            gladiator_2.setPosition(120, 20)
            myenemy2.unfollow()
            myEnemy.unfollow()
            myenemy2.setPosition(160, 160)
            myEnemy.setPosition(160, 160)
            sprites.destroyAllSpritesOfKind(SpriteKind.killerperson)
            easy.setPosition(80, 90)
            hard.setPosition(125, 90)
            difficulty1.setPosition(35, 90)
            Settings1.setPosition(35, 38)
            game.splash(info.score(), info.player2.score())
            info.setScore(0)
            info.player2.setScore(0)
            info.setLife(3)
            info.player2.setLife(3)
        } else {
            Gladiator.setFlag(SpriteFlag.Invisible, true)
            Gladiator.setPosition(160, 160)
            myenemy2.unfollow()
            myEnemy.unfollow()
            myenemy2.follow(gladiator_2, 35)
            myEnemy.follow(gladiator_2, 25)
        }
    } else if (info.player1.life() == 0) {
        scene.setBackgroundImage(img`
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffffffffff6666666666666
            66666666666666666ffffffffffffff66666fffff66666ffffffffffffffff66666ffffffffffffff66666fffffffff66666fffffffffffffffff666666666666666f2222222222222f6666666666666
            66666666666666666f222222222222f66666f222f66666f22222222222222f66666f222222222222f66666f2222222f66666f222222222222222f66666666666666f22222222222222f6666666666666
            66666666666666666f222222222222f66666f222f66666f22222222222222f66666f222222222222f66666f2222222f66666f222222222222222f66666666666666f22222222222222f6666666666666
            66666666666666666f222222222222f66666f222f66666f22222222222222f66666f222222222222f66666f2222222f66666f222222222222222f66666666666fff222222222222222f6666666666666
            66666666666666666f222ffffffffff66666f222f66666f222ffffffff222f66666f222222222222fff666fff222fff66666f222222222222222f6666666666f222222222222222222f6666666666666
            66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222fffffff222f66666f222f6666666f222222222222222f6666666666f222222222222222222f6666666666666
            66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222fffffff2222f66666666ff2222222222222222222f6666666666666
            66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f222222222222222222222f6666666666666
            66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f222222222222222222222f6666666666666
            66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f222222222222222222222f6666666666666
            66666666666666666f222f6666fffff66666f222f66666f222ffffffff222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f22222222fff2222222222f6666666666666
            66666666666666666f222f6666f222f66666f222f66666f22222222222222f66666f2222f66666f222f66666f222f6666666f2222fffffff2222f6666666f2222222f66f2222222222f6666666666666
            66666666666666666f222f6666f222f66666f222f66666f22222222222222f66666f2222f66666f222f66666f222f6666666f222222222222222f6666666f2222222f66f2222222222f6666666666666
            66666666666666666f222f6666f222f66666f222f66666f22222222222222f66666f2222f66666f222f66666f222f6666666f222222222222222f6666666f222222f666f2222222222f6666666666666
            66666666666666666f222ffffff222f66666f222f66666f222ffffffff222f66666f2222f66666f222f66666f222f6666666f222222222222222f6666666f22222ff666f2222222222f6666666666666
            66666666666666666f222222222222f66666f222fff666f222f666666f222f66666f2222fffffff2fff666fff222fff66666f222fffffffff222f6666666f2222f66666f2222222222f6666666666666
            66666666666666666f222222222222f66666f22222f666f222f666666f222f66666f222222222222f66666f2222222f66666f222f6666666f222f6666666f2222f66666f2222222222f6666666666666
            66666666666666666f222222222222f66666f22222f666f222f666666f222f66666f222222222222f66666f2222222f66666f222f6666666f222f6666666fffff666666f2222222222f6666666666666
            66666666666666666f222222222222f66666f22222f666f222f666666f222f66666f222222222222f66666f2222222f66666f222f6666666f222f666666666666666666f2222222222f6666666666666
            66666666666666666ffffffffffffff66666fffffff666fffff666666fffff66666ffffffffffffff66666fffffffff66666fffff6666666fffff666666666666666666f2222222222f6666666666666
            666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
            666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
            666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
            666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
            6666666666666666666666666666666666666666666666666666666666ffffffffffffffffff66666ffffffffffffffff6666ffffffffffffffff666666666666666666f2222222222f6666666666666
            6666666666666666666666666666666666666666666666666666666666f2222222222222222f66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
            6666666666666666666666666666666666666666666666666666666666f2222222222222222f66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
            6666666666666666666666666666666666666666666666666666666666f2222222222222222f66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
            6666666666666666666666666666666666666666666666666666666666ffffffff222fffffff66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
            66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222ffffff2222f6666f2222ffffff2222f666666666666666666f2222222222f6666666666666
            66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f6666f2222f666666666666666666f2222222222f6666666666666
            66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f6666f2222f666666666666666666f2222222222f6666666666666
            66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222ffffff2222f666666666666666666f2222222222f6666666666666
            66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
            66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
            66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
            66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
            66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
            66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222fffff22222f666666666666666666f2222222222f6666666666666
            66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f666f2222f6666666666666666666f2222222222f6666666666666
            666666666f666f666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f666f2222f6666666666666666666f2222222222ffffffffffff66
            66666666f66666f66666666666666666666666666666666666666666666666666f222f66666666666f2222ffffff2222f6666f2222f666fff22fff666666ffffffffffff22222222222222222222ff66
            66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f22222222222222f6666f2222f66666f2222f666666f2222222222222222222222222222222f666
            6666666666fff6666666ff6fff6fff666ff6f666f6fff6fff6ff6666666666666f222f66666666666f22222222222222f6666f2222f666666f222f666666f2222222222222222222222222222222f666
            6666666666f6f6666666f66f6f6f6f666f66f666f6f6f6f6f6f6f666666666666f222f66666666666f22222222222222f6666f2222f666666f222f666666f2222222222222222222222222222222f666
            6666666666fff6666666ff6f6f6ff66666f6f6f6f6f6f6ff66f6f666666666666fffff66666666666ffffffffffffffff6666ffffff666666fffff666666fff222222222222222222222222222fff666
            6666666666f6f6666666f66fff6f6f666ff6fffff6fff6f6f6ff6666666666666666666666666666666666666666666666666666666666666666666666666ff22222222222222222222fffffffff6666
            66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222222222222222222f666666666666
            66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222222222222222222f666666666666
            66666666666666666666fff6fff6fff6ff6f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f22222222222fff2222222f666666666666
            66666666666666666666f6f66f666f66f66ff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffff2222222ff6ff222222f666666666666
            66666666666666666666fff66f666f66f66f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222ff666ffff2fff666666666666
            6666666666f66f666666f6f66f666f66ff6f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222ff666ffffff66666666666666
            666666666f6666f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2f222ff666666666666666666666666
            66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffff6666666666666666666666666
            66666666666f6f666666ff6fff6fff666f666fff6f666f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            666666666666f6666666f66f6f6f6f666ff66f6f6f666f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            666666666666f6666666ff6f6f6ff6666f6f6f6f6f6f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            66666666666f6f666666f66fff6f6f666ff66fff6fffff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            66666666666666666666fff6fff6fff6ff6f6f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            66666666666666666666f6f66f666f66f66ff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            66666666666666666666fff66f666f66f66f6f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            66666666666666666666f6f66f666f66ff6f6f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            `)
        Gladiator.setPosition(80, 20)
        gladiator_2.setPosition(120, 20)
        easy.setPosition(80, 90)
        hard.setPosition(125, 90)
        difficulty1.setPosition(35, 90)
        Settings1.setPosition(35, 38)
        info.setLife(3)
        info.player2.setLife(3)
        game.splash("Player Two Wins!")
    }
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    gladiator_2,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 8 f 6 6 6 6 f f . . . . 
        . . f 8 8 8 f 6 6 6 6 f f . . . 
        . . f d d d d f f 6 6 6 f . . . 
        . f 6 8 8 8 8 6 6 f f f f . . . 
        . f 8 6 f f f f 8 8 8 6 f . . . 
        . f f f 6 6 6 f f f f f f f . . 
        . f 6 6 4 4 f 8 6 4 4 6 f f . . 
        . . f 6 6 6 f 6 4 6 4 6 6 f . . 
        . . . f 6 6 6 6 4 6 6 6 f . . . 
        . . . f d 4 4 4 6 6 f f . . . . 
        . . . f 8 8 8 d 8 8 6 . . . . . 
        . . . f 8 8 8 d 8 8 6 . . . . . 
        . . . f 5 5 8 f 6 6 f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 8 f 6 6 6 6 f f . . . . 
        . . f 8 8 8 f 6 6 6 6 f f . . . 
        . . f d d d d f f 6 6 6 f . . . 
        . f 6 8 8 8 8 6 6 6 f f f . . . 
        . f 8 6 f f f f 8 8 8 6 f . . . 
        . f f f 6 6 6 f f f f f f f . . 
        . f 6 6 4 4 f 8 d 4 4 6 f f . . 
        . . f 6 6 6 f 1 4 6 4 6 6 f . . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . . f d d d 6 6 4 f . . . . . 
        . . . f 8 8 d 6 6 6 f . . . . . 
        . . f f 5 5 f 6 6 f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 8 f 6 6 6 6 f f . . . . 
        . . f 8 8 8 f 6 6 6 6 f f . . . 
        . . f 6 6 6 8 f f 6 6 6 f . . . 
        . f 1 1 1 1 1 6 6 f f 6 f . . . 
        . f 6 6 f f f f 8 8 8 6 f . . . 
        . f f f 6 6 6 6 f f f f f f . . 
        . f 6 6 4 4 f 8 6 4 4 6 f f . . 
        . . f 6 6 6 f 1 4 6 4 6 6 f . . 
        . . . f 6 6 6 6 4 6 6 6 f . . . 
        . . . f 6 4 4 4 6 6 f f . . . . 
        . . . f 8 1 1 6 6 6 6 . . . . . 
        . . . f 1 1 1 6 6 6 6 . . . . . 
        . . . f 5 5 1 f 6 6 f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 8 f 6 6 6 6 f f . . . . 
        . . f 8 8 8 f 6 6 6 6 f f . . . 
        . . f 6 6 6 6 f f 6 6 6 f . . . 
        . f 6 d d d d 6 6 f f f f . . . 
        . f 8 6 f f f f 8 8 8 6 f . . . 
        . f f f 6 6 6 f f f f f f f . . 
        . f 6 6 4 4 f b 6 4 4 6 f f . . 
        . . f 6 6 6 f 1 4 6 4 6 6 f . . 
        . . . f 6 6 6 6 4 6 6 6 f . . . 
        . . . f 6 4 4 4 6 6 6 6 . . . . 
        . . . f d d d 8 6 6 6 6 . . . . 
        . . f f 5 5 d 4 f 6 6 f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    200,
    true
    )
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    Can_attack_2 = true
})
sprites.onOverlap(SpriteKind.player2, SpriteKind.play, function (sprite20, otherSprite20) {
    if (player2online == true) {
        easy.setPosition(160, 160)
        hard.setPosition(160, 160)
        difficulty1.setPosition(160, 160)
        Settings1.setPosition(160, 160)
        scene.setBackgroundImage(img`
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            deddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddeddddddddddddd
            dddddddddddddddddddddeddddddddddddddddddddeddddddddddedddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddeddddddddddeddddddddedddddddddddddddddddddddddddddddd
            dddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddeddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddedddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddeddddddedddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeddddddddddddddddddddd
            dddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddedddddedddddddddddddedddddddddddddddddddddddddddeeddddddddddedddddddd
            dddedddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddedddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddeddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddd
            ddddddddedddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddeddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddedddddddddedddddeddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddd
            dddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddeddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddedddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddeddddddedddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddeddddddddddddddeddddeddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddeddddddddddddddddddddddddddddddddddddddddddddeddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddeddddddddddddddddedddddddddddddddddddddddddddddd
            ddddedddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddedddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddeddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddd
            dddddddddddddddddedddddddddddddddddddddddddddddddddddeddddddddddddddddddddddedddddddddddeddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddd
            ddddedddddddddddddddddddddddddddedddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddedddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddeddddedddddddddddddddddddddddddddddddddddddddddeddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddeddeddddddddddd
            dddddddddddddddddddddddddddedddddddddeddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddeddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddedddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddeddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddeddddddddddeddddd
            dddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddd
            ddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddd
            dddddddddddddddddddddddeddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddeddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddd
            ddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddedddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddd
            ddddddddddddddddddddddddddddddddddddddddedddddddddddddedddddddddedddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddedddddd
            dddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddedddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddedddddddddddddeddddddddddddddd
            ddddddddddddddddddeddddddddeddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddedddddddddddddddd
            ddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddd
            ddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddeddddddddddddddddddddeddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddeddddddddddddddddddeddddddddddddddddddddddddddddddddddddeddddddedddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddedddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddededddddddddddddddddddddddddddddddddddddddddedddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddd
            ddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddedddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddeddddeddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddeddddddddddddddddddeddddddddddddeddddddddddddddddeddddddddddddddddddddddddddddddedddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            `)
    }
})
info.onScore(50, function () {
    info.startCountdown(30)
    bigboy = sprites.create(img`
        . . . . f f f f f f f f . . . . 
        . . . f f 5 5 2 2 5 5 f f . . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f b d d b d d d d d b f . . 
        . f f d d d b d b b d d d f f . 
        . f d d d b d d d d d d d d f . 
        . f d d f f f f f f f f d d f . 
        . f b b f 2 2 f f 2 2 f b b f . 
        . f b b f 2 2 f f 2 2 f b b f . 
        . f b b f f f f f f f f b b f . 
        . f b d f f d f f d f f d b f . 
        . f f f f b d d d d b f f f f . 
        . . f d d f f f f f f d d f . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . . f d 1 5 5 d 1 5 d f . . . 
        . . . f f f f f f f f f f . . . 
        `, SpriteKind.killerperson)
    bigboy.follow(Gladiator, 40)
    myEnemy.setPosition(160, 160)
    myEnemy.unfollow()
    myenemy2.setPosition(160, 160)
    myenemy2.unfollow()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemy2, function (sprite30, otherSprite30) {
    info.changeScoreBy(1)
    myenemy2.setPosition(170, randint(5, 110))
    sprites.destroy(projectile, effects.fire, 500)
})
info.player2.onLifeZero(function () {
    if (myenemy2.x < 150 || myEnemy.x < 150) {
        if (info.life() == 0) {
            scene.setBackgroundImage(img`
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffffffffff6666666666666
                66666666666666666ffffffffffffff66666fffff66666ffffffffffffffff66666ffffffffffffff66666fffffffff66666fffffffffffffffff666666666666666f2222222222222f6666666666666
                66666666666666666f222222222222f66666f222f66666f22222222222222f66666f222222222222f66666f2222222f66666f222222222222222f66666666666666f22222222222222f6666666666666
                66666666666666666f222222222222f66666f222f66666f22222222222222f66666f222222222222f66666f2222222f66666f222222222222222f66666666666666f22222222222222f6666666666666
                66666666666666666f222222222222f66666f222f66666f22222222222222f66666f222222222222f66666f2222222f66666f222222222222222f66666666666fff222222222222222f6666666666666
                66666666666666666f222ffffffffff66666f222f66666f222ffffffff222f66666f222222222222fff666fff222fff66666f222222222222222f6666666666f222222222222222222f6666666666666
                66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222fffffff222f66666f222f6666666f222222222222222f6666666666f222222222222222222f6666666666666
                66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222fffffff2222f66666666ff2222222222222222222f6666666666666
                66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f222222222222222222222f6666666666666
                66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f222222222222222222222f6666666666666
                66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f222222222222222222222f6666666666666
                66666666666666666f222f6666fffff66666f222f66666f222ffffffff222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f22222222fff2222222222f6666666666666
                66666666666666666f222f6666f222f66666f222f66666f22222222222222f66666f2222f66666f222f66666f222f6666666f2222fffffff2222f6666666f2222222f66f2222222222f6666666666666
                66666666666666666f222f6666f222f66666f222f66666f22222222222222f66666f2222f66666f222f66666f222f6666666f222222222222222f6666666f2222222f66f2222222222f6666666666666
                66666666666666666f222f6666f222f66666f222f66666f22222222222222f66666f2222f66666f222f66666f222f6666666f222222222222222f6666666f222222f666f2222222222f6666666666666
                66666666666666666f222ffffff222f66666f222f66666f222ffffffff222f66666f2222f66666f222f66666f222f6666666f222222222222222f6666666f22222ff666f2222222222f6666666666666
                66666666666666666f222222222222f66666f222fff666f222f666666f222f66666f2222fffffff2fff666fff222fff66666f222fffffffff222f6666666f2222f66666f2222222222f6666666666666
                66666666666666666f222222222222f66666f22222f666f222f666666f222f66666f222222222222f66666f2222222f66666f222f6666666f222f6666666f2222f66666f2222222222f6666666666666
                66666666666666666f222222222222f66666f22222f666f222f666666f222f66666f222222222222f66666f2222222f66666f222f6666666f222f6666666fffff666666f2222222222f6666666666666
                66666666666666666f222222222222f66666f22222f666f222f666666f222f66666f222222222222f66666f2222222f66666f222f6666666f222f666666666666666666f2222222222f6666666666666
                66666666666666666ffffffffffffff66666fffffff666fffff666666fffff66666ffffffffffffff66666fffffffff66666fffff6666666fffff666666666666666666f2222222222f6666666666666
                666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
                666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
                666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
                666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
                6666666666666666666666666666666666666666666666666666666666ffffffffffffffffff66666ffffffffffffffff6666ffffffffffffffff666666666666666666f2222222222f6666666666666
                6666666666666666666666666666666666666666666666666666666666f2222222222222222f66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
                6666666666666666666666666666666666666666666666666666666666f2222222222222222f66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
                6666666666666666666666666666666666666666666666666666666666f2222222222222222f66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
                6666666666666666666666666666666666666666666666666666666666ffffffff222fffffff66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222ffffff2222f6666f2222ffffff2222f666666666666666666f2222222222f6666666666666
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f6666f2222f666666666666666666f2222222222f6666666666666
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f6666f2222f666666666666666666f2222222222f6666666666666
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222ffffff2222f666666666666666666f2222222222f6666666666666
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222fffff22222f666666666666666666f2222222222f6666666666666
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f666f2222f6666666666666666666f2222222222f6666666666666
                666666666f666f666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f666f2222f6666666666666666666f2222222222ffffffffffff66
                66666666f66666f66666666666666666666666666666666666666666666666666f222f66666666666f2222ffffff2222f6666f2222f666fff22fff666666ffffffffffff22222222222222222222ff66
                66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f22222222222222f6666f2222f66666f2222f666666f2222222222222222222222222222222f666
                6666666666fff6666666ff6fff6fff666ff6f666f6fff6fff6ff6666666666666f222f66666666666f22222222222222f6666f2222f666666f222f666666f2222222222222222222222222222222f666
                6666666666f6f6666666f66f6f6f6f666f66f666f6f6f6f6f6f6f666666666666f222f66666666666f22222222222222f6666f2222f666666f222f666666f2222222222222222222222222222222f666
                6666666666fff6666666ff6f6f6ff66666f6f6f6f6f6f6ff66f6f666666666666fffff66666666666ffffffffffffffff6666ffffff666666fffff666666fff222222222222222222222222222fff666
                6666666666f6f6666666f66fff6f6f666ff6fffff6fff6f6f6ff6666666666666666666666666666666666666666666666666666666666666666666666666ff22222222222222222222fffffffff6666
                66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222222222222222222f666666666666
                66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222222222222222222f666666666666
                66666666666666666666fff6fff6fff6ff6f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f22222222222fff2222222f666666666666
                66666666666666666666f6f66f666f66f66ff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffff2222222ff6ff222222f666666666666
                66666666666666666666fff66f666f66f66f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222ff666ffff2fff666666666666
                6666666666f66f666666f6f66f666f66ff6f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222ff666ffffff66666666666666
                666666666f6666f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2f222ff666666666666666666666666
                66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffff6666666666666666666666666
                66666666666f6f666666ff6fff6fff666f666fff6f666f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                666666666666f6666666f66f6f6f6f666ff66f6f6f666f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                666666666666f6666666ff6f6f6ff6666f6f6f6f6f6f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                66666666666f6f666666f66fff6f6f666ff66fff6fffff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                66666666666666666666fff6fff6fff6ff6f6f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                66666666666666666666f6f66f666f66f66ff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                66666666666666666666fff66f666f66f66f6f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                66666666666666666666f6f66f666f66ff6f6f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                `)
            Gladiator.setVelocity(1, 0)
            Gladiator.setVelocity(0, 0)
            gladiator_2.setVelocity(0, 0)
            gladiator_2.setFlag(SpriteFlag.Invisible, false)
            Gladiator.setFlag(SpriteFlag.Invisible, false)
            Gladiator.setPosition(80, 20)
            gladiator_2.setPosition(120, 20)
            myenemy2.unfollow()
            myEnemy.unfollow()
            myenemy2.setPosition(160, 160)
            myEnemy.setPosition(160, 160)
            sprites.destroyAllSpritesOfKind(SpriteKind.killerperson)
            easy.setPosition(80, 90)
            hard.setPosition(125, 90)
            difficulty1.setPosition(35, 90)
            Settings1.setPosition(35, 38)
            game.splash(info.score(), info.player2.score())
            info.setLife(3)
            info.player2.setLife(3)
            info.setScore(0)
            info.player2.setScore(0)
        } else {
            gladiator_2.setFlag(SpriteFlag.Invisible, true)
            gladiator_2.setPosition(160, 160)
        }
    } else if (info.player2.life() == 0) {
        scene.setBackgroundImage(img`
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffffffffff6666666666666
            66666666666666666ffffffffffffff66666fffff66666ffffffffffffffff66666ffffffffffffff66666fffffffff66666fffffffffffffffff666666666666666f2222222222222f6666666666666
            66666666666666666f222222222222f66666f222f66666f22222222222222f66666f222222222222f66666f2222222f66666f222222222222222f66666666666666f22222222222222f6666666666666
            66666666666666666f222222222222f66666f222f66666f22222222222222f66666f222222222222f66666f2222222f66666f222222222222222f66666666666666f22222222222222f6666666666666
            66666666666666666f222222222222f66666f222f66666f22222222222222f66666f222222222222f66666f2222222f66666f222222222222222f66666666666fff222222222222222f6666666666666
            66666666666666666f222ffffffffff66666f222f66666f222ffffffff222f66666f222222222222fff666fff222fff66666f222222222222222f6666666666f222222222222222222f6666666666666
            66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222fffffff222f66666f222f6666666f222222222222222f6666666666f222222222222222222f6666666666666
            66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222fffffff2222f66666666ff2222222222222222222f6666666666666
            66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f222222222222222222222f6666666666666
            66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f222222222222222222222f6666666666666
            66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f222222222222222222222f6666666666666
            66666666666666666f222f6666fffff66666f222f66666f222ffffffff222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f22222222fff2222222222f6666666666666
            66666666666666666f222f6666f222f66666f222f66666f22222222222222f66666f2222f66666f222f66666f222f6666666f2222fffffff2222f6666666f2222222f66f2222222222f6666666666666
            66666666666666666f222f6666f222f66666f222f66666f22222222222222f66666f2222f66666f222f66666f222f6666666f222222222222222f6666666f2222222f66f2222222222f6666666666666
            66666666666666666f222f6666f222f66666f222f66666f22222222222222f66666f2222f66666f222f66666f222f6666666f222222222222222f6666666f222222f666f2222222222f6666666666666
            66666666666666666f222ffffff222f66666f222f66666f222ffffffff222f66666f2222f66666f222f66666f222f6666666f222222222222222f6666666f22222ff666f2222222222f6666666666666
            66666666666666666f222222222222f66666f222fff666f222f666666f222f66666f2222fffffff2fff666fff222fff66666f222fffffffff222f6666666f2222f66666f2222222222f6666666666666
            66666666666666666f222222222222f66666f22222f666f222f666666f222f66666f222222222222f66666f2222222f66666f222f6666666f222f6666666f2222f66666f2222222222f6666666666666
            66666666666666666f222222222222f66666f22222f666f222f666666f222f66666f222222222222f66666f2222222f66666f222f6666666f222f6666666fffff666666f2222222222f6666666666666
            66666666666666666f222222222222f66666f22222f666f222f666666f222f66666f222222222222f66666f2222222f66666f222f6666666f222f666666666666666666f2222222222f6666666666666
            66666666666666666ffffffffffffff66666fffffff666fffff666666fffff66666ffffffffffffff66666fffffffff66666fffff6666666fffff666666666666666666f2222222222f6666666666666
            666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
            666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
            666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
            666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
            6666666666666666666666666666666666666666666666666666666666ffffffffffffffffff66666ffffffffffffffff6666ffffffffffffffff666666666666666666f2222222222f6666666666666
            6666666666666666666666666666666666666666666666666666666666f2222222222222222f66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
            6666666666666666666666666666666666666666666666666666666666f2222222222222222f66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
            6666666666666666666666666666666666666666666666666666666666f2222222222222222f66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
            6666666666666666666666666666666666666666666666666666666666ffffffff222fffffff66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
            66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222ffffff2222f6666f2222ffffff2222f666666666666666666f2222222222f6666666666666
            66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f6666f2222f666666666666666666f2222222222f6666666666666
            66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f6666f2222f666666666666666666f2222222222f6666666666666
            66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222ffffff2222f666666666666666666f2222222222f6666666666666
            66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
            66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
            66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
            66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
            66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
            66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222fffff22222f666666666666666666f2222222222f6666666666666
            66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f666f2222f6666666666666666666f2222222222f6666666666666
            666666666f666f666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f666f2222f6666666666666666666f2222222222ffffffffffff66
            66666666f66666f66666666666666666666666666666666666666666666666666f222f66666666666f2222ffffff2222f6666f2222f666fff22fff666666ffffffffffff22222222222222222222ff66
            66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f22222222222222f6666f2222f66666f2222f666666f2222222222222222222222222222222f666
            6666666666fff6666666ff6fff6fff666ff6f666f6fff6fff6ff6666666666666f222f66666666666f22222222222222f6666f2222f666666f222f666666f2222222222222222222222222222222f666
            6666666666f6f6666666f66f6f6f6f666f66f666f6f6f6f6f6f6f666666666666f222f66666666666f22222222222222f6666f2222f666666f222f666666f2222222222222222222222222222222f666
            6666666666fff6666666ff6f6f6ff66666f6f6f6f6f6f6ff66f6f666666666666fffff66666666666ffffffffffffffff6666ffffff666666fffff666666fff222222222222222222222222222fff666
            6666666666f6f6666666f66fff6f6f666ff6fffff6fff6f6f6ff6666666666666666666666666666666666666666666666666666666666666666666666666ff22222222222222222222fffffffff6666
            66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222222222222222222f666666666666
            66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222222222222222222f666666666666
            66666666666666666666fff6fff6fff6ff6f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f22222222222fff2222222f666666666666
            66666666666666666666f6f66f666f66f66ff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffff2222222ff6ff222222f666666666666
            66666666666666666666fff66f666f66f66f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222ff666ffff2fff666666666666
            6666666666f66f666666f6f66f666f66ff6f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222ff666ffffff66666666666666
            666666666f6666f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2f222ff666666666666666666666666
            66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffff6666666666666666666666666
            66666666666f6f666666ff6fff6fff666f666fff6f666f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            666666666666f6666666f66f6f6f6f666ff66f6f6f666f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            666666666666f6666666ff6f6f6ff6666f6f6f6f6f6f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            66666666666f6f666666f66fff6f6f666ff66fff6fffff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            66666666666666666666fff6fff6fff6ff6f6f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            66666666666666666666f6f66f666f66f66ff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            66666666666666666666fff66f666f66f66f6f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            66666666666666666666f6f66f666f66ff6f6f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            `)
        Gladiator.setPosition(80, 20)
        gladiator_2.setPosition(120, 20)
        easy.setPosition(75, 90)
        hard.setPosition(120, 90)
        difficulty1.setPosition(35, 90)
        Settings1.setPosition(35, 38)
        info.setLife(3)
        info.player2.setLife(3)
        game.splash("Player One Wins!")
    }
})
sprites.onOverlap(SpriteKind.enemy2, SpriteKind.Player, function (sprite29, otherSprite29) {
    if (canAttack == true && controller.A.isPressed()) {
        info.changeScoreBy(1)
        myenemy2.setPosition(randint(5, 160), randint(5, 110))
    } else {
        info.changeLifeBy(randint(0, -1))
        myenemy2.setPosition(randint(5, 160), randint(5, 110))
    }
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    info.player2.setLife(3)
    info.player2.setScore(0)
    gladiator_2 = sprites.create(assets.image`Gladiator2`, SpriteKind.player2)
    gladiator_2.setPosition(120, 20)
    controller.player2.moveSprite(gladiator_2, 50, 50)
    gladiator_2.setStayInScreen(true)
    player2online = true
})
sprites.onOverlap(SpriteKind.player2, SpriteKind.Food, function (sprite12, otherSprite12) {
    easy.setPosition(160, 160)
    hard.setPosition(160, 160)
    difficulty1.setPosition(160, 160)
    Settings1.setPosition(160, 160)
    scene.setBackgroundImage(img`
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        deddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddeddddddddddddd
        dddddddddddddddddddddeddddddddddddddddddddeddddddddddedddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddeddddddddddeddddddddedddddddddddddddddddddddddddddddd
        dddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddeddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddedddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddeddddddedddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeddddddddddddddddddddd
        dddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddedddddedddddddddddddedddddddddddddddddddddddddddeeddddddddddedddddddd
        dddedddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddedddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddeddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddd
        ddddddddedddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddeddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddedddddddddedddddeddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddd
        dddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddeddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddedddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddeddddddedddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddeddddddddddddddeddddeddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddeddddddddddddddddddddddddddddddddddddddddddddeddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddeddddddddddddddddedddddddddddddddddddddddddddddd
        ddddedddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddedddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddeddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddd
        dddddddddddddddddedddddddddddddddddddddddddddddddddddeddddddddddddddddddddddedddddddddddeddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddd
        ddddedddddddddddddddddddddddddddedddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddedddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddeddddedddddddddddddddddddddddddddddddddddddddddeddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddeddeddddddddddd
        dddddddddddddddddddddddddddedddddddddeddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddeddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddedddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddeddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddeddddddddddeddddd
        dddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddd
        ddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddd
        dddddddddddddddddddddddeddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddeddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddd
        ddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddedddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddd
        ddddddddddddddddddddddddddddddddddddddddedddddddddddddedddddddddedddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddedddddd
        dddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddedddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddedddddddddddddeddddddddddddddd
        ddddddddddddddddddeddddddddeddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddedddddddddddddddd
        ddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddd
        ddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddeddddddddddddddddddddeddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddeddddddddddddddddddeddddddddddddddddddddddddddddddddddddeddddddedddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddedddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddededddddddddddddddddddddddddddddddddddddddddedddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddd
        ddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddedddddddddddddddeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddeddddeddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddeddddddddddddddddddeddddddddddddeddddddddddddddddeddddddddddddddddddddddddddddddedddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddedddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        `)
    myEnemy.setPosition(123, 109)
    myEnemy.follow(Gladiator, 20)
    myenemy2.setPosition(129, 19)
    myenemy2.follow(Gladiator, 30)
})
sprites.onOverlap(SpriteKind.project, SpriteKind.Enemy, function (sprite27, otherSprite27) {
    info.player2.changeScoreBy(1)
    myEnemy.setPosition(170, randint(5, 110))
    sprites.destroy(projectile2, effects.fire, 500)
})
info.onScore(75, function () {
    info.startCountdown(30)
    bigboy = sprites.create(img`
        . . . . f f f f f f f f f . . . 
        . . . f 5 d 5 d 5 d 5 f 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 f . . 
        . . f b d d b d d d d d b f . . 
        . . f d d d b d b b d d d f . . 
        . f d d d b d d d d d d d d f . 
        . f d d d d b b b b d d d d f . 
        . f b b d b 2 e e 2 b d b b f . 
        . f b b e 1 2 4 4 2 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f d d d d f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e d d d d d d d d d d e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . f f f f b b f f f f . . . 
        `, SpriteKind.killerperson)
    bigboy.follow(Gladiator, 30)
    myEnemy.setPosition(160, 160)
    myEnemy.unfollow()
    myenemy2.setPosition(160, 160)
    myenemy2.unfollow()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.button3, function (sprite37, otherSprite37) {
    controller.moveSprite(Gladiator, 35, 35)
    if (player2online == true) {
        gladiator_2.setPosition(80, 100)
    }
    Gladiator.setPosition(50, 100)
    game.splash("Hard")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.button2, function (sprite34, otherSprite34) {
    controller.moveSprite(Gladiator, 40, 40)
    if (player2online == true) {
        gladiator_2.setPosition(80, 100)
    }
    Gladiator.setPosition(50, 100)
    game.splash("Medium")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.musiconone, function (sprite23, otherSprite23) {
    if (musicon123 == false) {
        music.setVolume(128)
        musicon123 = true
        animation.stopAnimation(animation.AnimationTypes.All, musicoff)
        animation.runImageAnimation(
        musicoff,
        [img`
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f 1 1 1 f 1 1 1 1 1 1 f f f 
            f f f 1 f 1 f 1 f f 1 f f f f f 
            f f f 1 f 1 f 1 f f 1 f f f f f 
            f f f 1 f 1 f 1 1 f 1 1 f f f f 
            f f f 1 f 1 f 1 f f 1 f f f f f 
            f f f 1 f 1 f 1 f f 1 f f f f f 
            f f f 1 f 1 f 1 f f 1 f f f f f 
            f f f 1 f 1 f 1 f f 1 f f f f f 
            f f f 1 f 1 f 1 f f 1 f f f f f 
            f f f 1 1 1 f 1 f f 1 f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            `],
        500,
        true
        )
        animation.runImageAnimation(
        musicon,
        [img`
            f f f f f f f f f f f f f f f f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 f f f f f f f f f f f f 5 f 
            f 5 f 5 5 5 5 f 5 5 5 5 5 f 5 f 
            f 5 f 5 f f 5 f 5 f f f 5 f 5 f 
            f 5 f 5 f f 5 f 5 f f f 5 f 5 f 
            f 5 f 5 f f 5 f 5 f f f 5 f 5 f 
            f 5 f 5 f f 5 f 5 f f f 5 f 5 f 
            f 5 f 5 f f 5 f 5 f f f 5 f 5 f 
            f 5 f 5 f f 5 f 5 f f f 5 f 5 f 
            f 5 f 5 f f 5 f 5 f f f 5 f 5 f 
            f 5 f 5 f f 5 f 5 f f f 5 f 5 f 
            f 5 f 5 5 5 5 f 5 f f f 5 f 5 f 
            f 5 f f f f f f f f f f f f 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f f f f f f f f f f f f f f f f 
            `],
        500,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.player2, function (sprite38, otherSprite38) {
    if (info.player1.hasLife() && info.player2.hasLife()) {
        if (projectile.overlapsWith(gladiator_2)) {
            info.player2.changeLifeBy(-1)
            sprites.destroy(projectile)
        }
    }
})
let projectile: Sprite = null
let projectile2: Sprite = null
let settingsbackbutton: Sprite = null
let player2life: Sprite = null
let player1life: Sprite = null
let player2_life12: Sprite = null
let player2_life1: Sprite = null
let player1_life12: Sprite = null
let player1_life1: Sprite = null
let musicoff: Sprite = null
let musicon: Sprite = null
let bigboy: Sprite = null
let gladiator_2: Sprite = null
let backbutton: Sprite = null
let hard3: Sprite = null
let medium2: Sprite = null
let easy1: Sprite = null
let musicon123 = false
let player2online = false
let canattack4 = false
let can_attack_3 = false
let Can_attack_2 = false
let canAttack = false
let myenemy2: Sprite = null
let myEnemy: Sprite = null
let Settings1: Sprite = null
let difficulty1: Sprite = null
let hard: Sprite = null
let easy: Sprite = null
let Gladiator: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222fffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222ffffffffffffffffffffff
    ffffffffffffffffff222222222222fffffffffffffffffffffffffffffffffffffffff22ffffffffffffff2222222ffffffffffffffffff22222222222222222222222222ffffffffffffffffffffff
    fffffffffffffff222222222222222222fffffffffffffff2fffffffffffffffffff222222222222222222222222222222fffffffffff22222222222222222222222222222ffffffffffffffffffffff
    fffffffffffffff2222222222222222222222fffffff222222ffffffffffffffff222222222222222222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffff
    fffffffffffffff222222222222222222222222222222222222222ffffffff22222222222222222222222222222222222222222222222222222222222222222222222222222ffffffffffffff2ffffff
    fffffffffff2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222ffffffff22222ffffff
    ffffffffff222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222ffffff
    ffffffffff222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222ffffff
    fffffff222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222ffffff
    ffffff2222222ffffffffffffffffffffffffffffffffffffffffff222222222222222ffffffffff22222222222222222222222222fffffffffffffffffffffffffffffffffffff22222222222ffffff
    ffffff2222222ffffffffffffffffffffffffffffffffffffffffff222222222222222ffffffffff22222222222222222222222222fffffffffffffffffffffffffffffffffffff22222222222ffffff
    ffffff2222222ffffffffffffffffffffffffffffffffffffffffff222222222222222ffffffffff22222222222222222222222222fffffffffffffffffffffffffffffffffffff22222222222ffffff
    ffffff2222222ffffffffffffffffffffffffffffffffffffffffff222222222222222ffffffffff22222222222222222222222222fffffffffffffffffffffffffffffffffffff2222222222fffffff
    ffffff2222222ffffffffffffffffffffffffffffffffffffffffff222222222222222ffffffffff22222222222222222222222222fffffffffffffffffffffffffffffffffffff2222222222fffffff
    fffff22222222ffffffffffffff2222222222222222222222222222222222222222222ffffffffff22222222222222222222222222fffffffffffffff2222222fffffffffffffff2222222222fffffff
    fffff22222222ffffffffffffff2222222222222222222222222222222222222222222ffffffffff22222222222222222222222222fffffffffffffff2222222fffffffffffffff2222222222fffffff
    ffff222222222ffffffffffffff2222222222222222222222222222222222222222222ffffffffff22222222222222222222222222fffffffffffffff2222222fffffffffffffff222222222ffffffff
    ffff222222222ffffffffffffff2222222222222222222222222222222222222222222ffffffffff22222222222222222222222222fffffffffffffff2222222fffffffffffffff22222222fffffffff
    ffff222222222ffffffffffffff2222222222222222222222222222222222222222222ffffffffff22222222222222222222222222fffffffffffffff2222222fffffffffffffff22222222fffffffff
    fffff22222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222fffffffffffffff222222222222ffffffffff2222222ffffffffff
    fffff22222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff2222222ffffffffff
    fffff22222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff2222222ffffffffff
    fffff22222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff2222222ffffffffff
    fffff22222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff2222222ffffffffff
    ffffff2222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff2222222ffffffffff
    ffffff2222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff2222222ffffffffff
    ffffff2222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff2222222ffffffffff
    fffffff222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff2222222ffffffffff
    fffffff222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff2222222ffffffffff
    fffffff222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff2222222ffffffffff
    ffffffff22222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff22222222fffffffff
    ffffffff22222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff22222222fffffffff
    ffffffff22222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff22222222fffffffff
    ffffffff22222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff22222222fffffffff
    ffffffff22222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff22222222fffffffff
    ffffffff22222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff22222222fffffffff
    fffffff222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff22222222fffffffff
    fffffff222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff22222222fffffffff
    ffffff2222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff22222222fffffffff
    fffff22222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff22222222fffffffff
    fffff22222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff222222222ffffffff
    fffff22222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff222222222ffffffff
    ffff222222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff222222222ffffffff
    ffff222222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff222222222ffffffff
    fff2222222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff2222222222fffffff
    fff2222222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff222222222ffffffff
    fff2222222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff222222222ffffffff
    fff2222222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222fffffffffffffff2222222fffffffffffffff222222222ffffffff
    fff2222222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222fffffffffffffff2222222fffffffffffffff222222222ffffffff
    fff2222222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222fffffffffffffff2222222fffffffffffffff222222222ffffffff
    fff2222222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222fffffffffffffff2222222fffffffffffffff222222222ffffffff
    ffff222222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222fffffffffffffffffffffffffffffffffffff222222222ffffffff
    ffff222222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222fffffffffffffffffffffffffffffffffffff22222222fffffffff
    ffff222222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222fffffffffffffffffffffffffffffffffffff22222222fffffffff
    ffff222222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222fffffffffffffffffffffffffffffffffffff22222222fffffffff
    fffff22222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222fffffffffffffffffffffffffffffffffffff22222222fffffffff
    fffff22222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222fffffffffffffff22222222ffffffffffffff22222222fffffffff
    fffff22222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222fffffffffffffff22222222ffffffffffffff22222222fffffffff
    fffffff222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222fffffffffffffff22222222ffffffffffffff2222222ffffffffff
    fffffff222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222fffffffffffffff22222222ffffffffffffff2222222ffffffffff
    ffffffff22222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222fffffffffffffff22222222ffffffffffffff2222222ffffffffff
    fffffffff2222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff2222222ffffffffff
    fffffffff2222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff2222222ffffffffff
    fffffffff2222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff2222222ffffffffff
    fffffffff2222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff2222222ffffffffff
    fffffffff2222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff2222222ffffffffff
    ffffffff22222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff22222222fffffffff
    fffffff222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff22222222fffffffff
    fffffff222222fffffffff222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff22222222fffffffff
    ffffff2222222fffffffff222222222222ffffffffffffffffffffffffffffff222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff22222222fffffffff
    ffffff2222222fffffffff222222222222ffffffffffffffffffffffffffffff222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff22222222fffffffff
    ffffff2222222fffffffff222222222222ffffffffffffffffffffffffffffff222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff22222222fffffffff
    ffffff2222222fffffffff222222222222ffffffffffffffffffffffffffffff222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff2222222ffffffffff
    ffffff2222222fffffffff222222222222ffffffffffffffffffffffffffffff222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff2222222ffffffffff
    fffffff222222fffffffff222222222222ffffffffffffffffffffffffffffff222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff2222222ffffffffff
    ffffffff22222fffffffff222222222222ffffffffffffffffffffffffffffff222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff2222222ffffffffff
    ffffffffff222fffffffff222222222222ffffffffffffffffffffffffffffff222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff2222222ffffffffff
    ffffffffff222fffffffff222222222222ffffffffffffffffffffffffffffff222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff2222222ffffffffff
    ffffffffff222fffffffff222222222222ffffffffffffffffffffffffffffff222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff2222222ffffffffff
    ffffffffff222fffffffff22222222222222222fffffffffffffff2222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff2222222ffffffffff
    ffffffffff222fffffffff22222222222222222fffffffffffffff2222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff2222222ffffffffff
    ffffffffff222fffffffff22222222222222222fffffffffffffff2222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff2222222ffffffffff
    ffffffff22222fffffffff22222222222222222fffffffffffffff2222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff2222222ffffffffff
    ffffffff22222fffffffff22222222222222222fffffffffffffff2222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff22222222fffffffff
    fffffff222222fffffffff2222222222222222222222ffffffffff2222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff22222222fffffffff
    fffffff222222fffffffff2222222222222222222222ffffffffff2222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff222222222ffffffff
    fffffff222222fffffffff2222222222222222222222ffffffffff2222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff222222222ffffffff
    fffffff222222fffffffff2222222222222222222222ffffffffff2222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff222222222ffffffff
    fffffff222222fffffffff2222222222222222222222ffffffffff2222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff2222222222fffffff
    fffffff222222fffffffff2222222222222222222222ffffffffff2222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff2222222222fffffff
    fffffff222222fffffffff2222222222222222222222ffffffffff2222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff2222222222fffffff
    fffffff222222fffffffff2222222222222222222222ffffffffff2222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff2222222222fffffff
    fffffff222222fffffffff2222222222222222222222ffffffffff2222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff2222222222fffffff
    fffffff222222fffffffff2222222222222222222222ffffffffff2222222222222222ffffffffff22222222222222222222222222ffffffffff22222222222222222ffffffffff2222222222fffffff
    fffffff222222ffffffffffffff22222222222222222ffffffffff2222222222222222fffffffffffffff222222222222222222222ffffffffff22222222222222222ffffffffff2222222222fffffff
    ffffff2222222ffffffffffffff222222222222fffffffffffffff2222222222222222fffffffffffffff222222222222222222222ffffffffff22222222222222222ffffffffff2222222222fffffff
    fffff22222222ffffffffffffff222222222222fffffffffffffff2222222222222222fffffffffffffff222222222222222222222ffffffffff22222222222222222ffffffffff2222222222fffffff
    fffff22222222ffffffffffffff222222222222fffffffffffffff2222222222222222fffffffffffffff222222222222222222222ffffffffff22222222222222222ffffffffff2222222222fffffff
    fffff22222222ffffffffffffff222222222222fffffffffffffff2222222222222222fffffffffffffff222222222222222222222ffffffffff22222222222222222ffffffffff2222222222fffffff
    fffff22222222fffffffffffffffffffffffffffffffffffffffff2222222222222222ffffffffffffffffffffffffffff22222222ffffffffff22222222222222222fffffffffff222222222fffffff
    fffff22222222fffffffffffffffffffffffffffffffffffffffff2222222222222222ffffffffffffffffffffffffffff22222222ffffffffff22222222222222222fffffffffff222222222fffffff
    ffff222222222fffffffffffffffffffffffffffffffffffffffff2222222222222222ffffffffffffffffffffffffffff22222222ffffffffff22222222222222222fffffffffff222222222fffffff
    ffff222222222fffffffffffffffffffffffffffffffffffffffff2222222222222222ffffffffffffffffffffffffffff22222222ffffffffff22222222222222222fffffffffff222222222fffffff
    fffff22222222fffffffffffffffffffffffffffffffffffffffff2222222222222222ffffffffffffffffffffffffffff22222222ffffffffff22222222222222222fffffffffff222222222fffffff
    fffff222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222ffffffff
    fffff2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222fffffffffffff
    fffff2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222fffffffffffff
    fffff2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222fffffffffffff
    fffff22222222222222222222222222222222222222222222222222222222222fffffffffffffff2222222222222222222ffffffffff222222222222222222222222222222222222222fffffffffffff
    fffff22222222222222222222222222fffffffffffff222222222222222222ffffffffffffffffff22222222222ffffffffffffffffff222ffffffff2222222222fffffffffffffff22fffffffffffff
    fffffffffffffffffff22222222ffffffffffffffffffff22222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff2222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
music.play(music.tonePlayable(175, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
pause(500)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff2222222222ffffffffffffffffffffffffffff222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff22222222222222ffffffffffffffffffffffff2222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffff22222222222222ffffffffffffffffff22222222222222222222ffffffffffffffffffff222222222222222222222222222222fffffffffffffffffff22ffffffffffffffffffffffff
    fffffffffffff2222222222222222222222222222222222222222222222222222222fffffffffffffff22222222222222222222222222222222ffffffffffffffffff22222222222ffffffffffffffff
    fffffffffffff2222222222222222222222222222222222222222222222222222222222ffffffffff222222222222222222222222222222222222fffffffffffffff2222222222222222ffffffffffff
    fffffffffffff222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222ffffffffffff22222222222222222222ffffffffff
    fffffffffffff22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222fffffffff2222222222222222222222fffffffff
    fffffffffffff222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222fffffffff
    fffffffffffff22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222ffffffffff
    fffffffffffff22ffffffffffffffffffffffffffffffffffffffff2222222222fffffffffffffffffffffffffffff22222222fffffffffffffffffffffffffffffffffffffffff2222222ffffffffff
    ffffffffffff222ffffffffffffffffffffffffffffffffffffffff2222222222fffffffffffffffffffffffffffff22222222fffffffffffffffffffffffffffffffffffffffff222222fffffffffff
    fffffffffff2222ffffffffffffffffffffffffffffffffffffffff2222222222fffffffffffffffffffffffffffff22222222fffffffffffffffffffffffffffffffffffffffff222222fffffffffff
    ffffffffff22222ffffffffffffffffffffffffffffffffffffffff2222222222fffffffffffffffffffffffffffff22222222fffffffffffffffffffffffffffffffffffffffff22222ffffffffffff
    ffffffff2222222ffffffffffffffffffffffffffffffffffffffff2222222222fffffffffffffffffffffffffffff22222222fffffffffffffffffffffffffffffffffffffffff22222ffffffffffff
    ffffff222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff2222fffffffffffff
    ffffff222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff2222fffffffffffff
    ffffff222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff2222fffffffffffff
    ffffff222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff2222fffffffffffff
    ffffff222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff2222fffffffffffff
    ffffff222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff2222fffffffffffff
    ffffff222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff2222fffffffffffff
    fffffff22222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff2222fffffffffffff
    ffffffff2222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff2222fffffffffffff
    ffffffff2222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff22222ffffffffffff
    ffffffff2222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff22222ffffffffffff
    ffffffff2222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff22222ffffffffffff
    ffffffff2222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff22222ffffffffffff
    ffffffff2222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff22222ffffffffffff
    fffffff22222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff22222ffffffffffff
    fffffff22222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff222222fffffffffff
    fffffff22222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff222222fffffffffff
    fffffff22222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff2222222ffffffffff
    fffffff22222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff2222222ffffffffff
    fffffff22222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff22222222fffffffff
    ffffff222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff22222222fffffffff
    ffffff222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff22222222fffffffff
    fffff2222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff222222222222fffff
    ffff22222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff222222222222fffff
    ffff22222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff2222222222222ffff
    ffff22222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff2222222222222ffff
    ffff22222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff2222222222222ffff
    ffff22222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff2222222222222ffff
    ffff22222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff2222222222222ffff
    ffff22222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff2222222222222ffff
    ffff22222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff2222222222222ffff
    ffffff222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff222222222222fffff
    ffffff222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff222222222222fffff
    fffffff22222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff222222222222fffff
    fffffff22222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff2222222222fffffffffffffffffffffff2222222222fffffff
    fffffff22222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222fffffffffffffffffffffffffffffffffffffffff222222222ffffffff
    fffffff22222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222fffffffffffffffffffffffffffffffffffffffff22222222fffffffff
    fffffff22222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222fffffffffffffffffffffffffffffffffffffffff22222ffffffffffff
    fffffff22222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222fffffffffffffffffffffffffffffffffffffffff2222fffffffffffff
    fffffff22222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffffffffffffffffff222222222ffffffffff222ffffffffffffff
    ffffffff2222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff222ffffffffffffff
    ffffffff2222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff222ffffffffffffff
    ffffffff2222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff222ffffffffffffff
    ffffffff2222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff222ffffffffffffff
    ffffffff2222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff222ffffffffffffff
    ffffffff2222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff222ffffffffffffff
    ffffffff2222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff222ffffffffffffff
    ffffffff2222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff222ffffffffffffff
    ffffffff2222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff222ffffffffffffff
    ffffffff2222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff2222fffffffffffff
    ffffffff2222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff2222fffffffffffff
    ffffffff2222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff2222fffffffffffff
    ffffffff2222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff2222fffffffffffff
    ffffffff2222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff2222fffffffffffff
    fffffff22222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff2222fffffffffffff
    ffffff222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff2222fffffffffffff
    ffffff222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff22222ffffffffffff
    fffff2222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff222222fffffffffff
    fffff2222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff222222fffffffffff
    fffff2222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff2222222ffffffffff
    fffff2222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff2222222ffffffffff
    fffff2222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff2222222ffffffffff
    fffff2222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff22222222fffffffff
    fffff2222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff22222222fffffffff
    fffff2222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff22222222fffffffff
    fffff2222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff22222222fffffffff
    fffff2222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff222222222ffffffff
    ffffff222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff222222222ffffffff
    ffffff222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff222222222ffffffff
    ffffff222222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff222222222ffffffff
    fffffff22222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff222222222ffffffff
    ffffffff2222222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff222222222ffffffff
    ffffffffff22222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff222222222ffffffff
    fffffffffff2222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff222222222ffffffff
    ffffffffffff222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff222222222ffffffff
    ffffffffffff222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff222222222ffffffff
    ffffffffffff222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff222222222ffffffff
    ffffffffffff222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff222222222ffffffff
    ffffffffffff222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff222222222ffffffff
    ffffffffffff222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff222222222ffffffff
    ffffffffffff222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff222222222ffffffff
    ffffffffffff222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff2222222222fffffff
    ffffffffffff222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff2222222222fffffff
    fffffffffff2222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff222222222ffffffff
    fffffffffff2222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff22222222fffffffff
    ffffffffff22222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff22222222fffffffff
    ffffffffff22222ffffffff2222222222222222222222222ffffffffff222222222222222fffffffff22222222222222222222ffffffff22222222222222222222222ffffffffff2222222ffffffffff
    fffffffff222222fffffffffffffffffffffffffffffffffffffff2222222222fffffffffffffffffffffffffffff222222222ffffffff22222222222222222222222ffffffffff2222222ffffffffff
    ffffffff2222222fffffffffffffffffffffffffffffffffffffff2222222222fffffffffffffffffffffffffffff222222222ffffffff22222222222222222222222ffffffffff2222222ffffffffff
    fffffff22222222fffffffffffffffffffffffffffffffffffffff2222222222fffffffffffffffffffffffffffff222222222ffffffff22222222222222222222222ffffffffff222222fffffffffff
    fffffff22222222fffffffffffffffffffffffffffffffffffffff2222222222fffffffffffffffffffffffffffff222222222fffffff2222222ffffffff222222222ffffffffff22222ffffffffffff
    fffffff22222222fffffffffffffffffffffffffffffffffffffff2222222222fffffffffffffffffffffffffffff222222222fffff2222222fffffffffff2222222222222fffff2222fffffffffffff
    fffffff2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222ffffffffffffff22222222222fffff222ffffffffffffff
    fffffff222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222ffffffffffffffff22222222222222222fffffffffffffff
    fffffff22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffff22222222222ffffffffffffffff
    fffffff2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffff222222fffffffffffffffffffff
    fffffff22222222222222222222222222222222222222222222222222222222ffffff222222222222222222222222fffffffffffffff22fffffffffffffffffffffff2ffffffffffffffffffffffffff
    fffffffff22222222ffffffffffffff222222222222222222222222222ffffffffffffffffffff2222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
music.play(music.tonePlayable(175, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
pause(500)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff22222222fffffffffffffffffffffffffffffffffffffffffffffffffff22222222222fffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222fffffffffffffffffffffffffffffff22222222222222222222fffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222fffffffffffffffffffffffff22222222222222222222222fffffffffffffffffffffffffffffffffffffff
    ffffffffffff2222222ffffffffffffffffffffffffff2222222222222222222222222222222fffffffffffffff2222222222222222222222222222222ffffffffffffffffffffffffffffffffffffff
    fffffffffff22222222222222ffffffffffffffff22222222222222222222222222222222222222222222222222222222222222222222222222222222222ffffffffffffff2222ffffffffffffffffff
    fffffffff2222222222222222fffff2222fffffff2222222222222222222222222222222222222222222222222222222222222222222222222222222222222ffff2222222222222222ffffffffffffff
    ffffffff222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222fffffffffff
    ffffffff222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222ffffffff
    ffffffff2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222ffff
    ffffffff222222fffffffffffffffffffffffffffffffffffffffff222222222fffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222222222fff
    fffffff2222222fffffffffffffffffffffffffffffffffffffffff2222222fffffffffffffffffffffffffffffffffffffffff2222222fffff222222222222222222222222222222222222222222fff
    fffffff222222ffffffffffffffffffffffffffffffffffffffffff2222222fffffffffffffffffffffffffffffffffffffffff2222222ffffffffffffffffffffffffffffffffffffffff2222222fff
    fffffff222222ffffffffffffffffffffffffffffffffffffffffff2222222fffffffffffffffffffffffffffffffffffffffff2222222ffffffffffffffffffffffffffffffffffffffff2222222fff
    fffffff222222ffffffffffffffffffffffffffffffffffffffffff2222222fffffffffffffffffffffffffffffffffffffffff2222222ffffffffffffffffffffffffffffffffffffffff2222222fff
    ffffffffff2222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffffffffffffffffffffffffffffffffffff2222222fff
    ffffffffff2222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffffffffffffffffffffffffffffffffffff2222222fff
    ffffffffff2222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222222222222222222222fffffffffff2222222fff
    fffffffffff222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222222222222222222222fffffffffff222222ffff
    fffffffffff222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222222222222222222222fffffffffff222222ffff
    ffffffffff2222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222222222222222222222fffffffffff222222ffff
    ffffffffff2222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222222222222222222222fffffffffff222222ffff
    fffffffff22222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222222222222222222222fffffffffff222222ffff
    ffffffff222222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222222222222222222222fffffffffff2222222fff
    ffffffff222222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222222222222222222222fffffffffff2222222fff
    fffffff2222222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222222222222222222222fffffffffff2222222fff
    ffffff22222222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222222222222222222222fffffffffff2222222fff
    ffffff22222222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222222222222222222222fffffffffff2222222fff
    fffff222222222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222222222222222222222fffffffffff2222222fff
    fffff222222222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222222222222222222222fffffffffff2222222fff
    ffffff22222222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222222222222222222222fffffffffff2222222fff
    ffffff22222222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222222222222222222222fffffffffff2222222fff
    ffffff22222222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222222222222222222222fffffffffff2222222fff
    ffffff22222222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222222222222222222222fffffffffff2222222fff
    ffffff22222222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222222222222222222222fffffffffff2222222fff
    ffffff22222222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222222222222222222222fffffffffff2222222fff
    ffffff22222222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222222222222222222222fffffffffff2222222fff
    fffffff2222222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222222222222222222222fffffffffff222222ffff
    fffffff2222222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222222222222222222222fffffffffff222222ffff
    fffffff2222222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff22222222222222222222ffffffffffff222222ffff
    ffffffff222222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff22222222222222222222ffffffffffff222222ffff
    fffffffff22222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffffffffffffffffffffffffffffffffffff222222ffff
    ffffffffff2222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222fffffffffffffffffffffffffffffffffffffff2222222ffff
    fffffffffff222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222fffffffffffffffffffffffffffffffffffffff2222222ffff
    fffffffffff222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222fffffffffffffffffffffffffffffffffffffff2222222ffff
    fffffffffff222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222fffffffffffffffffffffffffffffffffffffff2222222ffff
    ffffffffffff22222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffffff222222222222222222222222222222222222ffff
    fffffffffffff2222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222fffffffffff22222222222222222222222222222222222ffff
    fffffffffffff2222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222fffffffffff22222222222222222222222222222222222ffff
    ffffffffffffff222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffffffff2222222222222222222222222222222222ffff
    ffffffffffffff222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffffffff2222222222222222222222222222222222ffff
    ffffffffffffff222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222fffffffffffff222222222222222222222222222222222ffff
    ffffffffffffff222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222fffffffffffff222222222222222222222222222222222ffff
    ffffffffffffff222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffffffffff22222222222222222222222222222222ffff
    ffffffffffffff222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffffffffff22222222222222222222222222222222ffff
    ffffffffffffff222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222fffffffffffffff2222222222222222222222222222222ffff
    ffffffffffffff222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222fffffffffffffff2222222222222222222222222222222ffff
    ffffffffffffff222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff2fffffff222222222222222222222222222222ffff
    fffffffffffff2222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff2fffffff222222222222222222222222222222ffff
    ffffffffffff22222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff22fffffff2222222222222222222222222222fffff
    ffffffffffff22222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff22fffffff2222222222222222222222222222fffff
    fffffffffff222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222fffffff222222222222222222222222222fffff
    fffffffffff222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222fffffff222222222222222222222222222fffff
    ffffffffff2222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff2222fffffff22222222222222222222222222fffff
    fffffffff22222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff2222fffffff22222222222222222222222222fffff
    ffffffff222222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff22222fffffff2222222222222222222222222fffff
    fffffffff22222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff22222fffffff222222222222222222222222ffffff
    ffffffffff2222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222222fffffff22222222222222222222222ffffff
    ffffffffff2222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222222fffffff22222222222222222222222ffffff
    ffffffffff2222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff2222222fffffff222222222222222222222fffffff
    ffffffffff2222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff2222222fffffff222222222222222222222fffffff
    ffffffffff2222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff22222222fffffff22222222222222222222fffffff
    fffffffffff222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff22222222fffffff22222222222222222222fffffff
    ffffffffffff22222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222222222fffffff2222222222222222222fffffff
    ffffffffffff22222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222222222ffffffff222222222222222222fffffff
    ffffffffffff22222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff2222222222fffffff222222222222222222fffffff
    ffffffffffff22222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff2222222222ffffffff22222222222222222fffffff
    fffffffffff222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff22222222222fffffff22222222222222222fffffff
    fffffffffff222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222222222222fffffff22222222222222222ffffff
    ffffffffff2222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222222222222fffffff22222222222222222ffffff
    fffffffffff222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff2222222222222fffffff2222222222222222ffffff
    fffffffffff222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff2222222222222fffffff2222222222222222ffffff
    fffffffffff222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff22222222222222fffffff222222222222222ffffff
    ffffffffffff22222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff22222222222222fffffff222222222222222ffffff
    ffffffffffff22222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222222222222222fffffff22222222222222ffffff
    ffffffffffff22222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222222222222222fffffff22222222222222ffffff
    ffffffffffff22222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff2222222222222222fffffff2222222222222ffffff
    ffffffffffff22222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff2222222222222222fffffff2222222222222ffffff
    ffffffffffff22222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff22222222222222222fffffff222222222222ffffff
    ffffffffffff22222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff22222222222222222fffffff222222222222ffffff
    ffffffffffff22222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222222222222222222fffffff22222222222ffffff
    ffffffffffff22222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222222222222222222fffffff222222222222fffff
    ffffffffffff22222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff2222222222222222222fffffff22222222222fffff
    ffffffffffff22222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff2222222222222222222fffffff22222222222fffff
    ffffffffffff22222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff22222222222222222222fffffff2222222222fffff
    fffffffffff222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff22222222222222222222fffffff2222222222fffff
    fffffffffff222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222222222222222222222fffffff222222222fffff
    fffffffffff222222222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff222222222222222222222fffffff222222222fffff
    ffffffffffffffff2222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff2222222222222222222222fffffff22222222fffff
    ffffffffffffffff2222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222ffffffff2222222222222222222222fffffff22222222fffff
    fffffffffffffffff222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222fffffffff2222222222222222222222fffffff2222222fffff
    fffffffffffffffff222222222222222ffffffff2222222222222222222222fffffffff222222222222222222222fffffffffff2222222fffffffff2222222222222222222222fffffff2222222fffff
    ffffffffffffffffff22222222222222ffffffff2222222222222222222222fffffffffffffffffffffffffffffffffffffffff2222222fffffffff22222222222222222222222fffffff222222fffff
    ffffffffffffffffff22222222222222ffffffff2222222222222222222222fffffffffffffffffffffffffffffffffffffffff2222222fffffffff22222222222222222222222fffffff222222fffff
    ffffffffffffffffff22222222222222fffff2222222222222222222222222fffffffffffffffffffffffffffffffffffffffff2222222fffffffff222222222222222222222222ffffff222222fffff
    fffffffffffffffffff2222222222222fffff2222222222222222222222222fffffffffffffffffffffffffffffffffffffffff2222222ffffffff2222222222222222222222222ffffff22222ffffff
    fffffffffffffffffff222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffff22222222222ffffffff22222222222222222222222222fffff22222ffffff
    fffffffffffffffffff2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222fffff222222222222222222222222222222222222ffffff
    fffffffffffffffffff222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222ffffff
    fffffffffffffffffff222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222ffffff
    ffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222ffffff
    fffffffffffffffffffffffffffffff22222222222222222222222222222fffffffffffffffff2222222222222222222222222222fffffffffffffffffffffffffffffffffff22222222222222ffffff
    fffffffffffffffffffffffffffffffff2222222222222222222222222ffffffffffffffffffffffff2222222222222222fffffffffffffffffffffffffffffffffffffffffffffffff2222222ffffff
    ffffffffffffffffffffffffffffffffffff2222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
music.play(music.tonePlayable(175, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
pause(500)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff2222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff2222222222ffffffffffffffffffffffff22222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff2222222222222ffffffffffffffffffff2222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff222222222222222fffffffffffffff22222222222222222222ffffffffffffffffffffffffffffffffffffffffff2222fffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff2222222222222222fffffffffffff22222222222222222222222222fffffffffffffffffffffffffffffffffff22222222fffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff222222222222222222ffffffffff222222222222222222222222222222222ffffffffffffffffffffffff22222222222222ffffffffffffffff2222fffffffffffff
    ffffffffffffffffffffffffff222222222222222222222fffff2222222222222222222222222222222222222222fffffffffffffffffff22222222222222222ffffffffffffff2222222222ffffffff
    fffffffffffffffffffffff22222222222222222222222222222222222222222222222222222222222222222222222ffffffffffffffff2222222222222222222fffffffffffff22222222222fffffff
    ffffffffffffffffffff22222222222222222222222222222222222222222222222222222222222222222222222222222fffffffffff2222222222222222222222ffffffffff2222222222222fffffff
    ffffffffffffffffff22222222222222222222222222222222222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222fffffffff22222222222222ffffff
    ffffffffffffffff2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222ffffffff222222222222222ffffff
    ffffffffffffff2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222fffffff
    ffffffffff22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222fffffff
    ffffff22222222222222222222222222222222222222222222222222222222222222222222222222222222fffff22222222222222222222222222222222222222222222222222222222222222fffffff
    ffffff222222222222222222222222222222222222222222222222222222222222222222222222222222fffffff22222222222222222222222222222222222222222222222222222222222222fffffff
    ffffff22222222222222222222222222222222222222222222222222222222222222222222222222222ffffffff22222222222222222222222222222222222222222222222222222222222222fffffff
    fffffff22222222222222222222222222222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222222222222222222222222222222222222222fffffff
    fffffff2222222222222222222222222222222222222222222222222222222222222222222222222fffffffffff2222222222222222222222222222222222222222222222222222222222222ffffffff
    fffffff22222222222222222222222222222222222222222222222222222222222222222222222fffffffffffff2222222222222222222222222222222222222222222222222222222222222ffffffff
    fffffff2222222222222222222222222222222222222222222222222222222222222222222222ffffffffffffff2222222222222222222222222222222222222222222222222222222222222ffffffff
    fffffff22222222222222222222222222222222222222222222222222222222222222222222ffffffffffffffff2222222222222222222222222222222222222222222222222222222222222ffffffff
    fffffff2222222222222222222222222222222222222222222222222222222222222222222fffffffffffffffff2222222222222222222222222222222222222222222222222222222222222ffffffff
    ffffffff2222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffff2222222222222222222222222222222222222222222222222222222222222ffffffff
    ffffffff222222222222222222222222222222222222222222222222222222222222222ffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222222ffffffff
    fffffffff222222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222222ffffffff
    fffffffff22222222222222222222222222222222222222222222222222222222222fffffffffff2fffffffffff222222222222222222222222222222222222222222222222222222222222fffffffff
    ffffffffff22222222222222222222222222222222222222222222222222222222ffffffffffff22fffffffffff222222222222222222222222222222222222222222222222222222222222fffffffff
    fffffffffff222222222222222222222222222222222222222222222222222222fffffffffff2222fffffffffff222222222222222222222222222222222222222222222222222222222222fffffffff
    fffffffffff2222222222222222222222222222222222222222222222222222ffffffffffff22222fffffffffff222222222222222222222222222222222222222222222222222222222222fffffffff
    fffffffffff222222222222222222222222222222222222222222222222222fffffffffff2222222fffffffffff222222222222222222222222222222222222222222222222222222222222fffffffff
    fffffffffff2222222222222222222222222222222222222222222222222ffffffffffff22222222fffffffffff222222222222222222222222222222222222222222222222222222222222fffffffff
    fffffffffff222222222222222222222222222222222222222222222222fffffffffff2222222222fffffffffff2222222222222222222222222222222222222222222222222222222222222ffffffff
    fffffffffff2222222222222222222222222222222222222222222222ffffffffffff22222222222fffffffffff2222222222222222222222222222222222222222222222222222222222222ffffffff
    fffffffffff222222222222222222222222222222222222222222222fffffffffff2222222222222fffffffffff2222222222222222222222222222222222222222222222222222222222222ffffffff
    fffffffffff2222222222222222222222222222222222222222222ffffffffffff22222222222222fffffffffff2222222222222222222222222222222222222222222222222222222222222ffffffff
    fffffffffff222222222222222222222222222222222222222222fffffffffff2222222222222222fffffffffff2222222222222222222222222222222222222222222222222222222222222ffffffff
    fffffffffff2222222222222222222222222222222222222222ffffffffffff22222222222222222fffffffffff2222222222222222222222222222222222222222222222222222222222222ffffffff
    fffffffffff222222222222222222222222222222222222222fffffffffff2222222222222222222ffffffffff22222222222222222222222222222222222222222222222222222222222222ffffffff
    fffffffffff2222222222222222222222222222222222222ffffffffffff22222222222222222222ffffffffff222222222222222222222222222222222222222222222222222222222222222fffffff
    fffffffffff222222222222222222222222222222222222fffffffffff2222222222222222222222ffffffffff222222222222222222222222222222222222222222222222222222222222222fffffff
    fffffffffff2222222222222222222222222222222222ffffffffffff22222222222222222222222ffffffffff2222222222222222222222222222222222222222222222222222222222222222ffffff
    fffffffffff222222222222222222222222222222222fffffffffff2222222222222222222222222ffffffffff2222222222222222222222222222222222222222222222222222222222222222ffffff
    fffffffffff2222222222222222222222222222222ffffffffffff22222222222222222222222222ffffffffff2222222222222222222222222222222222222222222222222222222222222222ffffff
    fffffffffff222222222222222222222222222222fffffffffff2222222222222222222222222222ffffffffff22222222222222222222222222222222222222222222222222222222222222222fffff
    ffffffffff2222222222222222222222222222222ffffffffff22222222222222222222222222222ffffffffff22222222222222222222222222222222222222222222222222222222222222222fffff
    ffffffffff2222222222222222222222222222222ffffffff2222222222222222222222222222222ffffffffff22222222222222222222222222222222222222222222222222222222222222222fffff
    ffffffffff2222222222222222222222222222222fffffff22222222222222222222222222222222ffffffffff22222222222222222222222222222222222222222222222222222222222222222fffff
    fffffffff22222222222222222222222222222222fffff2222222222222222222222222222222222ffffffffff22222222222222222222222222222222222222222222222222222222222222222fffff
    ffffffff222222222222222222222222222222222222222222222222222222222222222222222222ffffffffff2222222222222222222222222222222222222222222222222222222222222222ffffff
    ffffffff222222222222222222222222222222222222222222222222222222222222222222222222ffffffffff222222222222222222222222222222222222222222222222222222222222222fffffff
    fffffff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffffff222222222222222222222222222222222222222222222222222222222222222fffffff
    fffffff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222222222222222222222222222222222222222ffffffff
    fffffff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffffff22222222222222222222222222222222222222222222222222222222222222ffffffff
    fffffff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffffff22222ffffff22222222222222222222222222222222222222222222222222fffffffff
    fffffff2222222222222222222222222222222222222222222222222222222222222222222222222ffffffffff22fffffffff22222222222222222222222222222222222222222222222222fffffffff
    fffffff2222222222222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffff22222222222222222222222222222222222222222222222222fffffffff
    fffffff2222222222222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffff22222222222222222222222222222222222222222222222222fffffffff
    fffffff2222222222222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffff2222222222222222222222222222222222222222222222222ffffffffff
    fffffff2222222222222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffff222222222222222222222222222222222222222222222222222ffffffffff
    fffffff222222222222222222222222222222222222222222222222222222222222222222222222fffffffffffffffff222222222222222222222222222222222222222222222222222222ffffffffff
    fffffff222222222222222222222222222222222222222222222222222222222222222222222ffffffffffffffffff22222222222222222222222222222222222222222222222222222222ffffffffff
    fffffff2222222222222222222222222222222222222222222222222222222222222222222fffffffffffffffff2222222222222222222222222222222222222222222222222222222222fffffffffff
    ffffffff222222222222222222222222222222222222222222222222222222222222222222fffffffffffffff222222222222222222222222222222222222222222222222222222222222fffffffffff
    ffffffff222222222222222222222222222222222222222222222222222222222222222222fffffffffffffff222222222222222222222222222222222222222222222222222222222222fffffffffff
    ffffffff222222222222222222222222222222222222222222222222222222222222222222fffffffffffffff222222222222222222222222222222222222222222222222222222222222fffffffffff
    ffffffff222222222222222222222222222222222222222222222222222222222222222222fffffffffffffff22222222222222222222222222222222222222222222222222222222222ffffffffffff
    ffffffff222222222222222222222222222222222222222222222222222222222222222222222222fffffffff22222222222222222222222222222222222222222222222222222222222ffffffffffff
    ffffffff222222222222222222222222222222222222222222222222222222222222222222222222fffffffff2222222222222222222222222222222222222222222222222222222222fffffffffffff
    ffffffff222222222222222222222222222222222222222222222222222222222222222222222222fffffffff2222222222222222222222222222222222222222222222222222222222fffffffffffff
    ffffffff222222222222222222222222222222222222222222222222222222222222222222222222fffffffff2222222222222222222222222222222222222222222222222222222222fffffffffffff
    ffffffff222222222222222222222222222222222222222222222222222222222222222222222222fffffffff2222222222222222222222222222222222222222222222222222222222fffffffffffff
    ffffffff222222222222222222222222222222222222222222222222222222222222222222222222fffffffff2222222222222222222222222222222222222222222222222222222222fffffffffffff
    ffffffff222222222222222222222222222222222222222222222222222222222222222222222222fffffffff2222222222222222222222222222222222222222222222222222222222fffffffffffff
    ffffffff222222222222222222222222222222222222222222222222222222222222222222222222fffffffff2222222222222222222222222222222222222222222222222222222222fffffffffffff
    ffffffff222222222222222222222222222222222222222222222222222222222222222222222222fffffffff2222222222222222222222222222222222222222222222222222222222fffffffffffff
    ffffffff222222222222222222222222222222222222222222222222222222222222222222222222fffffffff2222222222222222222222222222222222222222222222222222222222fffffffffffff
    ffffffff222222222222222222222222222222222222222222222222222222222222222222222222fffffffff222222222222222222222222222222222222222222222222222222222ffffffffffffff
    fffffffff22222222222222222222222222222222222222222222222222222222222222222222222ffffffff2222222222222222222222222222222222222222222222222222222222ffffffffffffff
    fffffffff22222222222222222222222222222222222222222222222222222222222222222222222ffffffff2222222222222222222222222222222222222222222222222222222222ffffffffffffff
    fffffffff22222222222222222222222222222222222222222222222222222222222222222222222ffffffff2222222222222222222222222222222222222222222222222222222222ffffffffffffff
    ffffffffffff22222222222222222222222222222222222222222222222222222222222222222222ffffffff2222222222222222222222222222222222222222222222222222222222ffffffffffffff
    ffffffffffff22222222222222222222222222222222222222222222222222222222222222222222ffffffff2222222222222222222222222222222222222222222222222222222222ffffffffffffff
    ffffffffffff22222222222222222222222222222222222222222222222222222222222222222222ffffffff2222222222222222222222222222222222222222222222222222ffffffffffffffffffff
    fffffffffffff2222222222222222222222222222222222222222222222222222222222222222222ffffffff2222222222222222222222222222222222222222222222222222ffffffffffffffffffff
    fffffffffffff2222222222222222222222222222222222222222222222222222222222222222222ffffffff2222222222222222222222222222222222222222222222222222ffffffffffffffffffff
    fffffffffffff2222222222222222222222222222222222222222222222222222222222222222222ffffffff2222222222222222222222222222222222222222222222222222ffffffffffffffffffff
    ffffffffffffff222222222222222222222222222222222222222222222222222222222222222222ffffffff2222222222222222222222222222222222222222222222222222ffffffffffffffffffff
    ffffffffffffff222222222222222222222222222222222222222222222222222222222222222222ffffffff2222222222222222222222222222222222222222222222222222ffffffffffffffffffff
    ffffffffffffff222222222222222222222222222222222222222222222222222222222222222222ffffffff2222222222222222222222222222222222222222222222222222ffffffffffffffffffff
    ffffffffffffffffff22222222222222222222222222222222222222222222222222222222222222ffffffff2222222222222222222222222222222222222222222222222222ffffffffffffffffffff
    ffffffffffffffffff22222222222222222222222222222222222222222222222222222222222222ffffffff2222222222222222222222222222222222222222222222222222ffffffffffffffffffff
    ffffffffffffffffff22222222222222222222222222222222222222222222222222222222222222ffffffff2222222222222222222222222222222222222222222222222222ffffffffffffffffffff
    ffffffffffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffff2222222222222222222222222222222222222222222222222222ffffffffffffffffffff
    ffffffffffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffff22222222222222222222222222222222222222222222222222222fffffffffffffffffff
    ffffffffffffffffff2222222222222222222222222222222222222222222222222222222222222fffffffff222222222ffffffffffffffffffffff2222222222222222222222fffffffffffffffffff
    ffffffffffffffffff22222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222fffffffffffffffffff
    ffffffffffffffffff2222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222ffffffffffffffffffff
    ffffffffffffffffff22222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222ffffffffffffffffffff
    fffffffffffffffffff2222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222fffffffffffffffffffff
    fffffffffffffffffffff22222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222fffffffffffffffffffff
    ffffffffffffffffffffff2222222222222222222222222ffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222fffffff22222222222fffffffffffffffffffff
    ffffffffffffffffffffff2222222222222222222222222ffffffffffffffff222222222222222222222222222222222222222222222222222222222fffffffffff2222222ffffffffffffffffffffff
    fffffffffffffffffffffff222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222fffffffffffff222222ffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222222222222222222222222222222fffffffffffffffff22fffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222ffffffffffff2222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222ffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
music.play(music.tonePlayable(175, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
pause(1000)
scene.setBackgroundImage(img`
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffffffffff6666666666666
    66666666666666666ffffffffffffff66666fffff66666ffffffffffffffff66666ffffffffffffff66666fffffffff66666fffffffffffffffff666666666666666f2222222222222f6666666666666
    66666666666666666f222222222222f66666f222f66666f22222222222222f66666f222222222222f66666f2222222f66666f222222222222222f66666666666666f22222222222222f6666666666666
    66666666666666666f222222222222f66666f222f66666f22222222222222f66666f222222222222f66666f2222222f66666f222222222222222f66666666666666f22222222222222f6666666666666
    66666666666666666f222222222222f66666f222f66666f22222222222222f66666f222222222222f66666f2222222f66666f222222222222222f66666666666fff222222222222222f6666666666666
    66666666666666666f222ffffffffff66666f222f66666f222ffffffff222f66666f222222222222fff666fff222fff66666f222222222222222f6666666666f222222222222222222f6666666666666
    66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222fffffff222f66666f222f6666666f222222222222222f6666666666f222222222222222222f6666666666666
    66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222fffffff2222f66666666ff2222222222222222222f6666666666666
    66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f222222222222222222222f6666666666666
    66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f222222222222222222222f6666666666666
    66666666666666666f222f66666666666666f222f66666f222f666666f222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f222222222222222222222f6666666666666
    66666666666666666f222f6666fffff66666f222f66666f222ffffffff222f66666f2222f66666f222f66666f222f6666666f2222f66666f2222f6666666f22222222fff2222222222f6666666666666
    66666666666666666f222f6666f222f66666f222f66666f22222222222222f66666f2222f66666f222f66666f222f6666666f2222fffffff2222f6666666f2222222f66f2222222222f6666666666666
    66666666666666666f222f6666f222f66666f222f66666f22222222222222f66666f2222f66666f222f66666f222f6666666f222222222222222f6666666f2222222f66f2222222222f6666666666666
    66666666666666666f222f6666f222f66666f222f66666f22222222222222f66666f2222f66666f222f66666f222f6666666f222222222222222f6666666f222222f666f2222222222f6666666666666
    66666666666666666f222ffffff222f66666f222f66666f222ffffffff222f66666f2222f66666f222f66666f222f6666666f222222222222222f6666666f22222ff666f2222222222f6666666666666
    66666666666666666f222222222222f66666f222fff666f222f666666f222f66666f2222fffffff2fff666fff222fff66666f222fffffffff222f6666666f2222f66666f2222222222f6666666666666
    66666666666666666f222222222222f66666f22222f666f222f666666f222f66666f222222222222f66666f2222222f66666f222f6666666f222f6666666f2222f66666f2222222222f6666666666666
    66666666666666666f222222222222f66666f22222f666f222f666666f222f66666f222222222222f66666f2222222f66666f222f6666666f222f6666666fffff666666f2222222222f6666666666666
    66666666666666666f222222222222f66666f22222f666f222f666666f222f66666f222222222222f66666f2222222f66666f222f6666666f222f666666666666666666f2222222222f6666666666666
    66666666666666666ffffffffffffff66666fffffff666fffff666666fffff66666ffffffffffffff66666fffffffff66666fffff6666666fffff666666666666666666f2222222222f6666666666666
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2222222222f6666666666666
    6666666666666666666666666666666666666666666666666666666666ffffffffffffffffff66666ffffffffffffffff6666ffffffffffffffff666666666666666666f2222222222f6666666666666
    6666666666666666666666666666666666666666666666666666666666f2222222222222222f66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
    6666666666666666666666666666666666666666666666666666666666f2222222222222222f66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
    6666666666666666666666666666666666666666666666666666666666f2222222222222222f66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
    6666666666666666666666666666666666666666666666666666666666ffffffff222fffffff66666f22222222222222f6666f22222222222222f666666666666666666f2222222222f6666666666666
    66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222ffffff2222f6666f2222ffffff2222f666666666666666666f2222222222f6666666666666
    66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f6666f2222f666666666666666666f2222222222f6666666666666
    66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f6666f2222f666666666666666666f2222222222f6666666666666
    66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222ffffff2222f666666666666666666f2222222222f6666666666666
    66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
    66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
    66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
    66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
    66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f22222222222222f666666666666666666f2222222222f6666666666666
    66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222fffff22222f666666666666666666f2222222222f6666666666666
    66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f666f2222f6666666666666666666f2222222222f6666666666666
    666666666f666f666666666666666666666666666666666666666666666666666f222f66666666666f2222f6666f2222f6666f2222f666f2222f6666666666666666666f2222222222ffffffffffff66
    66666666f66666f66666666666666666666666666666666666666666666666666f222f66666666666f2222ffffff2222f6666f2222f666fff22fff666666ffffffffffff22222222222222222222ff66
    66666666666666666666666666666666666666666666666666666666666666666f222f66666666666f22222222222222f6666f2222f66666f2222f666666f2222222222222222222222222222222f666
    6666666666fff6666666ff6fff6fff666ff6f666f6fff6fff6ff6666666666666f222f66666666666f22222222222222f6666f2222f666666f222f666666f2222222222222222222222222222222f666
    6666666666f6f6666666f66f6f6f6f666f66f666f6f6f6f6f6f6f666666666666f222f66666666666f22222222222222f6666f2222f666666f222f666666f2222222222222222222222222222222f666
    6666666666fff6666666ff6f6f6ff66666f6f6f6f6f6f6ff66f6f666666666666fffff66666666666ffffffffffffffff6666ffffff666666fffff666666fff222222222222222222222222222fff666
    6666666666f6f6666666f66fff6f6f666ff6fffff6fff6f6f6ff6666666666666666666666666666666666666666666666666666666666666666666666666ff22222222222222222222fffffffff6666
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222222222222222222f666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222222222222222222f666666666666
    66666666666666666666fff6fff6fff6ff6f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f22222222222fff2222222f666666666666
    66666666666666666666f6f66f666f66f66ff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffff2222222ff6ff222222f666666666666
    66666666666666666666fff66f666f66f66f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222ff666ffff2fff666666666666
    6666666666f66f666666f6f66f666f66ff6f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f222222ff666ffffff66666666666666
    666666666f6666f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666f2f222ff666666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffff6666666666666666666666666
    66666666666f6f666666ff6fff6fff666f666fff6f666f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666f6666666f66f6f6f6f666ff66f6f6f666f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666f6666666ff6f6f6ff6666f6f6f6f6f6f6f666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    66666666666f6f666666f66fff6f6f666ff66fff6fffff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666fff6fff6fff6ff6f6f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666f6f66f666f66f66ff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666fff66f666f66f66f6f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666f6f66f666f66ff6f6f66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    `)
music.play(music.tonePlayable(175, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
music.play(music.createSong(hex`0078000408020503001c0001dc00690000045e0100040000000000000000000005640001040003600000000400010604000800010608000c0001060c001000010610001400010614001800010618001c0001061c002000010620002400010624002800010628002c0001062c003000010630003400010634003800010638003c0001063c004000010605001c000f0a006400f4010a0000040000000000000000000000000000000002540000000400011d04000800012008000c0001240c001000012010001400012718001c0001241c002000012a24002800012728002c0001242c003000012030003400011934003800011d38003c0001223c004000011906001c00010a006400f401640000040000000000000000000000000000000002600000000400010804000800010808000c0001080c001000010810001400010814001800010818001c0001081c002000010820002400010824002800010828002c0001082c003000010830003400010834003800010838003c0001083c004000010807001c00020a006400f401640000040000000000000000000000000000000003540000000400012004000800012408000c0001270c001000012410001400012a18001c0001271c002000012c24002800012a28002c0001272c003000012430003400011d34003800012038003c0001253c004000011d09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80054000000010001000400050001020800090001040c000d0001021000110001061800190001041c001d0001082400250001062800290001042c002d0001023000310001003400350001003800390001043c003d000100`), music.PlaybackMode.UntilDone)
pause(500)
music.play(music.stringPlayable("C5 G B A F A C5 B ", 120), music.PlaybackMode.LoopingInBackground)
info.setLife(3)
info.setScore(0)
Gladiator = sprites.create(assets.image`Gladiator2`, SpriteKind.Player)
controller.moveSprite(Gladiator, 50, 50)
Gladiator.setPosition(119, 29)
Gladiator.setStayInScreen(true)
easy = sprites.create(assets.image`start`, SpriteKind.Food)
easy.setPosition(85, 90)
hard = sprites.create(assets.image`pvp`, SpriteKind.play)
hard.setPosition(130, 90)
difficulty1 = sprites.create(img`
    ..................................
    ..................................
    ..................................
    ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff
    ff11ff1f11f11f1f11f1f1f1f111f1f1ff
    ff1f1f1f1ff1ff1f1ff1f1f1ff1ff1f1ff
    ff1f1f1f11f11f1f1ff1f1f1ff1ff111ff
    ff1f1f1f1ff1ff1f1ff1f1f1ff1ffff1ff
    ff1f1f1f1ff1ff1f1ff1f1f1ff1ffff1ff
    ff1f1f1f1ff1ff1f1ff1f1f1ff1ffff1ff
    ff11ff1f1ff1ff1f11f111f11f1ff111ff
    ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff
    ..................................
    ..................................
    `, SpriteKind.difficulty)
difficulty1.setPosition(35, 90)
Settings1 = sprites.create(assets.image`settings`, SpriteKind.settings)
Settings1.setPosition(35, 38)
myEnemy = sprites.create(assets.image`enemy`, SpriteKind.Enemy)
myEnemy.setPosition(160, 160)
myenemy2 = sprites.create(assets.image`enemy2`, SpriteKind.enemy2)
myenemy2.setPosition(160, 160)
canAttack = true
Can_attack_2 = true
can_attack_3 = true
canattack4 = true
player2online = false
musicon123 = true
