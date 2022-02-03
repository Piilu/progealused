//0-20 liiga külm   -1
//21-40 paras        0
//41-60 liiga kuum   1
function checkTemp(temp){
   if(temp <=20){
       console.log("liiga külm");
       return -1;
   }
   else if (temp>=41) {
       console.log("liiga kuum");
       return 1;
   }
   else{
       console.log("paras");
       return 0;
   }

}

}

