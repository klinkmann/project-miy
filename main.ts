let money = 0
let clickpower = 1
let upgradeprice = 100
let bosshp = 300
let boss = 0

input.onButtonPressed(Button.A, function(){
    money = money + clickpower
    boss = boss - clickpower
})
input.onButtonPressed(Button.B, function(){
    if(money >= upgradeprice){
        money = money - upgradeprice
        clickpower = clickpower * 2
        upgradeprice = upgradeprice * 2.5
        basic.showString("CLick power =")
        basic.showNumber(clickpower)
    }
    else{
        basic.showString("Not enough money")
    }
})
input.onPinPressed(TouchPin.P0, function(){
    basic.showString("Money =")
    basic.showNumber(money)
})
if(boss = 0){
    basic.showIcon(IconNames.Heart)
}
if (boss = 1) {
    basic.showIcon(IconNames.SmallHeart)
}
if (boss = 2) {
    basic.showIcon(IconNames.Yes)
}
if (boss = 3) {
    basic.showIcon(IconNames.No)
}
if (boss = 4) {
    basic.showIcon(IconNames.Happy)
}
if (boss = 5) {
    basic.showIcon(IconNames.Sad)
}
if (boss = 6) {
    basic.showIcon(IconNames.Confused)
}
if (boss = 7) {
    basic.showIcon(IconNames.Angry)
}
if (boss = 8) {
    basic.showIcon(IconNames.Asleep)
}
if (boss = 9) {
    basic.showIcon(IconNames.Surprised)
}
if (boss = 10) {
    basic.showIcon(IconNames.Silly)
}
if (boss = 11) {
    basic.showIcon(IconNames.Fabulous)
}
if (boss = 12) {
    basic.showIcon(IconNames.Meh)
}
if (boss = 13) {
    basic.showIcon(IconNames.TShirt)
}
if (boss = 14) {
    basic.showIcon(IconNames.Rollerskate)
}
if (boss = 15) {
    basic.showIcon(IconNames.Duck)
}
if (boss = 16) {
    basic.showIcon(IconNames.House)
}
if (boss = 17) {
    basic.showIcon(IconNames.Tortoise)
}