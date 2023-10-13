let player1=prompt("Enter a value1")
let player2=prompt("Enter a value2")

if(player1=="stone" && player2=="paper")
{
    console.log("player2 is winner")
}
else if(player1=="stone" && player2=="scissor")
{
    console.log("player1 is winner")
}
else if(player1=="stone" && player2=="stone")
{
    console.log("tie")
}
else if(player1=="paper" && player2=="stone")
{
    console.log("player1 is winner")
}
else if(player1=="paper" && player2=="scissor")
{
    console.log("player2 is winner")
}
else if(player1=="paper" && player2=="paper")
{
    console.log("tie")
}
else if(player1=="scissor" && player2=="stone")
{
    console.log("player2 is winner")
}
else if(player1=="scissor" && player2=="paper")
{
    console.log("player1 is winner")
}
else if(player1=="scissor" && player2=="scissor")
{
    console.log("tie")
}