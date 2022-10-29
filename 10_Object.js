var billGates = {shirt:true, shirtColor:"offWhite", smile:true, sweaterColor:'greyColor' , glass: true}; 

console.log(billGates['shirtColor']);
console.log(billGates['smile']);


var billGatesProperty = {
    shirt:{
        color:'offWhite',
        quality:'Good',
        price:'USD 200'
    },

    sweater:{
        color:'Grey',
        quality:'Better',
        price:'USD 210',
        comfort:'best'
    },

    face:{
        smiling:'Yes',
        glassWear:'Yes',
        teeth: 'good'
    }
};

console.log(billGatesProperty['sweater']['price']);


console.log(Object.keys(billGatesProperty), Object.values(billGatesProperty));
console.log(Object.keys(billGates), Object.values(billGates));