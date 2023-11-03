var marks = [[52,32,54,87],[65,54,87,95],[33,54,87,96]]

let s1_t=0;
let s2_t=0;
let s3_t=0;

let sl=marks.length;
let ml=marks[0].length;

for(var i = 0; i< sl;i++){
    for(var j = 0; j< ml;j++){
        // console.log(marks[i])
        if(i==0){
            s1_t+=marks[i][j]
            
        }if (i==1) {
            s2_t+=marks[i][j]
           
        } else {
            
        }if (i==2) {
            s3_t+=marks[i][j]
           
            
        } 
    }
}
let avg1=s1_t+s2_t+s3_t;

let avg = avg1/ml
console.log("student1=",s1_t,"avg=",avg)
console.log("student1=",s2_t)
console.log("student1=",s3_t)