//Zero Sum Index

function zeroSumIndex(arr){
    if(arr.length == 0){
        return [-1,-1];
    }
    let l = 0;
    let r = arr.length -1;
    while (l < r){
        let sum = arr[l] + arr[r]
        if(sum == 0){
            return [l,r];
        }else if(sum < 0){
            l++;
        }else{
            r--;
        }
    }
    return [-1,-1];
}

console.log(zeroSumIndex([-3,-2,1,0,2,3]));