namespace SpriteKind {
    export const npc = SpriteKind.create()
}
let mySprite = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f c c c c c c c c c c c c c c f 
    f c c c c c c c c c c c c c c f 
    f c c c c c c c c c c c c c c f 
    f c c c c c c c c c c c c c c f 
    f c c c c c c c c c c c c c a f 
    f a a c c c c c c c c c c a a f 
    f a a a a a c c c a a a a a a f 
    f a a a a a a a a a a a a a a f 
    f a a a a a a f f f f a a a a f 
    f a a a a a a a a a a a a a a f 
    f b a a a a a a a a a a a a a f 
    f b a a a a a a a a a a a a a f 
    f b b a a a a a a a a a a a a f 
    f b b b a a a a a a a a a a a f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.npc)
animation.runImageAnimation(
mySprite,
[img`
    f f f f f f f f f f f f f f f f 
    f c c c c c c c c c c c c c c f 
    f c c c c c c c c c c c c c c f 
    f c c c c c c c c c c c c c c f 
    f c c c c c c c c c c c c c c f 
    f c c c c c c c c c c c c c c f 
    f a c c c c c c c c c c c c a f 
    f a a a a a c c c c c a a a a f 
    f a a a a a a a a a a a a a a f 
    f a a a a a a f f f f a a a a f 
    f a a a a a a a a a a a a a a f 
    f b a a a a a a a a a a a a a f 
    f b a a a a a a a a a a a a a f 
    f b b a a a a a a a a a a a a f 
    f b b b a a a a a a a a a a a f 
    f f f f f f f f f f f f f f f f 
    `,img`
    f f f f f f f f f f f f f f f f 
    f c c c c c c c c c c c c c c f 
    f c c c c c c c c c c c c c c f 
    f c c c c c c c c c c c c c c f 
    f c c c c c c c c c c c c c a f 
    f c c c c c c c c c c c c a a f 
    f c c c c c c c c c c a a a a f 
    f a a a a c c c c a a a a a a f 
    f a a a a a a a a a a a a a a f 
    f a a a a a a f f f f a a a a f 
    f a a a a a a a a a a a a a a f 
    f b a a a a a a a a a a a a a f 
    f b a a a a a a a a a a a a a f 
    f b b a a a a a a a a a a a a f 
    f b b b a a a a a a a a c c c f 
    f f f f f f f f f f f f f f f f 
    `],
1000,
true
)
