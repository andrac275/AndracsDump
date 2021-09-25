//Exercici amb Funcions imperatives
function sumScan(a){
    let b=[]
    let acumulador = 0
    for(i=0; i<a.length; i++){ //cada elem de a
        acumulador=a[i]+acumulador
        b.push(acumulador)
    }
    return b
}

function prdScan(a){
    let b=[]
    let acumulador = a[0]
    b[0]= a[0]
    for(i=1; i<a.length; i++){ //cada elem de a
        acumulador=a[i]*acumulador
        b.push(acumulador)
    }
    return b
}

function maxScan(a){
    let b=[]
    let max = a[0]
    b[0]= a[0]
    for(i=1; i<a.length; i++){ //cada elem de a
        if(a[i] > max)
            max = a[i]

        b.push(max)
    }
    return b
}

function minScan(a){
    let b=[]
    let min = a[0]
    b[0]= a[0]
    for(i=1; i<a.length; i++){ //cada elem de a
        if(a[i] < min)
            min = a[i]
            
        b.push(min)
    }
    return b
}

let v=[2,3,4,1]
console.log("Exemples imperatius:")
console.log("SumScan: "+ sumScan(v))
console.log("PrdScan: "+ prdScan(v))
console.log("MaxScan: "+ maxScan(v))
console.log("MinScan: "+ minScan(v))

console.log()

//Exercici anterior amb funcions d'alt ordre
function sumScan2(a){
    let b=[]
    let acumulador = 0
    a.map((x)=>{
        acumulador += x
        b.push(acumulador)
    })
    return b
}

function prdScan2(a){
    let b=[]
    let acumulador = 1
    a.map((x)=>{
        acumulador *= x
        b.push(acumulador)
    })
    return b
}

function maxScan2(a){
    let b=[]
    let max = a[0]
    a.map((x)=>{
        if (x > max){max = x}
        b.push(max)
    })
    return b
}

function minScan2(a){
    let b=[]
    let min = a[0]
    a.map((x)=>{
        if(x < min){min = x}
        b.push(min)
    })
    return b
}


console.log("Exemples funcionals:")
console.log("SumScan2: "+ sumScan2(v))
console.log("PrdScan2: "+ prdScan2(v))
console.log("MaxScan2: "+ maxScan2(v))
console.log("MinScan2: "+ minScan2(v))