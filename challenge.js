function camelcase(s) {
  // Write your code here
  let count = 1;
  if(s===''){
      return 0;
  }else{
      
      for(let i = 0; i < s.length; i++){
          if(s[i]===s[i].toUpperCase()){
              count++;
          }
      }
      return count;
  }  
}
