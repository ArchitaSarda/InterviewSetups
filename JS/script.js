// const obj = {
//   firstname: "archita",
//   getName: function() {
//     console.log(this.firstname);
//   },
//   getNameArrow: () => {
//     console.log(this.firstname);
//   }
// }

// obj.getName();
// obj.getNameArrow();/




const obj = {
  firstname: "archita",
  getName: function() {
    let context = this;
    // const arro = () => {
    //   console.log(this.firstname)
    // };
    // arro();
    function abc() {
      console.log(context);
    	console.log(context.firstname)
    }
    abc();
  },
  getNameArrow: () => {
    console.log(this.firstname);
  }
}

obj.getName();
obj.getNameArrow();



const arr1 = [1, [2], [3, [[4]]],[5,6]];

const output = [];

function flattenarr(val) {
	//base case - encounter a number, push to output
	//recursive case - call with child array
  
  for(let i=0; i<val.length; i++) {
  	if(typeof(val[i]) == "object") {
    	flattenarr(val[i])
    } else {
    	output.push(val[i])
    }
  }
}

flattenarr(arr1);
console.log(output)



