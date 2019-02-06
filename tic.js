var player = 1;
function Colour(cell)
{
    if(player==1)
        {
            document.getElementById(cell).className = "brown";
            player +=1;
        }
      else{
          document.getElementById(cell).className = "yellow";
          player -=1;
      }
}