var marks = [[68,72],[85,76,82],[83,94,65,84]]

let s1_t=0;
let s2_t=0;
let s3_t=0;

let sl=marks.length;
let ml1=marks[0].length;
let ml2=marks[1].length;
let ml3=marks[2].length;

for(var i = 0; i< sl;i++){
   

        if(i==0){
            for(var j = 0; j< ml1;j++){
                s1_t+=marks[i][j]
            }
            avg1=s1_t/ml1
          
            
        }if (i==1) {
            for(var j = 0; j< ml2;j++){
                s2_t+=marks[i][j]
            }
            avg2=s2_t/ml2
            
           
        } else {
            
        }if (i==2) {
            for(var j = 0; j< ml3;j++){
                s3_t+=marks[i][j]
            }
            avg3=s3_t/ml3
              
            
        } 
    
}
let avg=(avg1+avg2+avg3)/3;

// let avg = avg1/sl
console.log("student1=",s1_t)
console.log("student1=",s2_t)
console.log("student1=",s3_t)

console.log("avg =",avg.toFixed(2));